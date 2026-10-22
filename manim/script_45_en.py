"""Article 45 EN \u2014 Why more power barely buys range: the fourth root."""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, Axes, DashedLine, LaggedStart,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create,
    UP, DOWN, LEFT, RIGHT, ORIGIN,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)


def swap_label(scene, old, new, run_time=0.3):
    """Fade out then in. Transform() on same-position Text ghosts glyphs."""
    if old is None:
        scene.play(Write(new), run_time=run_time)
    else:
        scene.play(FadeOut(old), run_time=run_time * 0.4)
        scene.play(FadeIn(new), run_time=run_time * 0.6)


class RadarArticle45(Scene):
    def construct(self):
        np.random.seed(45)
        self.camera.background_color = "#061a30"

        title = Text("Why More Power Barely Helps", color=TEAL,
                     font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        # ---- the ground line and the radar ----
        ground = Line(np.array([-6.6, -1.5, 0]), np.array([6.6, -1.5, 0]),
                      stroke_color="#2A3B4C", stroke_width=2)
        self.play(Create(ground), run_time=0.3)

        radar_x = -5.4
        radar = Dot([radar_x, -1.35, 0], radius=0.1, color=WHITE)
        mast = Line([radar_x, -1.45, 0], [radar_x, -0.6, 0],
                    stroke_color=GREY, stroke_width=3)
        dish = Arc(radius=0.24, start_angle=np.deg2rad(115),
                   angle=np.deg2rad(130), stroke_color=GREY, stroke_width=3)
        dish.move_to([radar_x, -0.6, 0])
        self.play(FadeIn(radar), FadeIn(mast), FadeIn(dish), run_time=0.35)

        # target sits at a fixed place on the right
        tgt_x = 3.4
        tgt = Circle(radius=0.26, stroke_color=RED, stroke_width=2.5,
                     fill_color=RED, fill_opacity=0.35)
        tgt.move_to([tgt_x, -1.0, 0])
        tgt_lbl = Text("target", color=RED, font_size=13)
        tgt_lbl.next_to(tgt, DOWN, buff=0.16)
        self.play(FadeIn(tgt), FadeIn(tgt_lbl), run_time=0.35)

        # ---- the range ring grows ----
        ring = Circle(radius=1.0, stroke_color=GREEN, stroke_width=2,
                      fill_opacity=0)
        ring.move_to([radar_x, -1.35, 0])
        ring_lbl = Text("", color=GREEN, font_size=15, weight="BOLD")

        # 10 km per unit-ish: ring radius maps to km by scale
        PX_PER_KM = 0.022

        # (power label, km, colour, note)
        CASES = [
            ("1 kW", 30, GREY, "a bird or a small boat"),
            ("10 kW", 54, ORANGE, "10x the power, only 1.8x the range"),
            ("100 kW", 95, YELLOW, "a long-range radar"),
            ("1 MW", 170, GREEN, "a helicopter would need ~1000 MW"),
        ]

        step_pos = np.array([0, -2.55, 0])
        step = None

        for i, (label, km, col, note) in enumerate(CASES):
            n = f"{i+1}. {label}  —  {note}"
            col_step = [GREY, ORANGE, YELLOW, GREEN][i]
            s = Text(n, color=col_step, font_size=17,
                     weight="BOLD").move_to(step_pos)
            swap_label(self, step, s)
            step = s

            r = km * PX_PER_KM
            new_ring = Circle(radius=r, stroke_color=col, stroke_width=2.5)
            new_ring.move_to([radar_x, -1.35, 0])

            if i == 0:
                self.play(GrowFromCenter(new_ring), run_time=0.6)
            else:
                self.play(Transform(ring, new_ring), run_time=0.6)

            # the range label rides on the ring
            new_lbl = Text(f"{km} km", color=col, font_size=15,
                           weight="BOLD")
            new_lbl.move_to([radar_x + r * 0.70, -0.15, 0])
            if i == 0:
                self.play(FadeIn(new_lbl), run_time=0.3)
            else:
                # Transform() stacks the old and new text; swap instead.
                self.play(FadeOut(ring_lbl), run_time=0.18)
                self.play(FadeIn(new_lbl), run_time=0.22)

            # beam reaches the ring — keep a reference so it can be removed
            beam = Arrow([radar_x + 0.2, -0.6, 0],
                         [radar_x + r, -0.6, 0],
                         color=col, stroke_width=3, buff=0,
                         max_tip_length_to_length_ratio=0.06)
            self.play(FadeIn(beam), run_time=0.35)
            self.wait(0.45)
            # remove the arrow again so it can be redrawn next round
            self.play(FadeOut(beam), run_time=0.25)

            ring = new_ring
            ring_lbl = new_lbl

        self.wait(1.6)