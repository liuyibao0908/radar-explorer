"""Article 45 \u4e2d\u6587 \u2014 \u4e3a\u4ec0\u4e48\u52a0\u5927\u529f\u7387\u51e0\u4e4e\u6ca1\u7528\uff1a\u56db\u6b21\u65b9\u6839\u3002"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, Axes, DashedLine, LaggedStart,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create,
    UP, DOWN, LEFT, RIGHT, ORIGIN,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)

CJK = "Microsoft YaHei"


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

        title = Text("\u4e3a\u4ec0\u4e48\u52a0\u529f\u7387\u51e0\u4e4e\u6ca1\u7528", color=TEAL,
                     font=CJK, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

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

        tgt_x = 3.4
        tgt = Circle(radius=0.26, stroke_color=RED, stroke_width=2.5,
                     fill_color=RED, fill_opacity=0.35)
        tgt.move_to([tgt_x, -1.0, 0])
        tgt_lbl = Text("\u76ee\u6807", color=RED, font=CJK, font_size=13)
        tgt_lbl.next_to(tgt, DOWN, buff=0.16)
        self.play(FadeIn(tgt), FadeIn(tgt_lbl), run_time=0.35)

        ring = Circle(radius=1.0, stroke_color=GREEN, stroke_width=2)
        ring.move_to([radar_x, -1.35, 0])
        ring_lbl = Text("", color=GREEN, font_size=15, weight="BOLD")

        PX_PER_KM = 0.022

        CASES = [
            ("1 \u5343\u74e6", 30, GREY, "\u77ed\u7a0b\uff0c\u80fd\u770b\u5230\u9e1f\u6216\u5c0f\u8239"),
            ("10 \u5343\u74e6", 54, ORANGE, "\u529f\u7387\u5341\u500d\uff0c\u8ddd\u79bb\u53ea\u6709 1.8 \u500d"),
            ("100 \u5343\u74e6", 95, YELLOW, "\u8fdc\u7a0b\u96f7\u8fbe"),
            ("1 \u5146\u74e6", 170, GREEN, "\u60f3\u770b\u76f4\u5347\u673a\u5f97\u7528 1000 \u5146\u74e6"),
        ]

        step_pos = np.array([0, -2.55, 0])
        step = None

        for i, (label, km, col, note) in enumerate(CASES):
            n = f"{i+1}. {label}  \u2014  {note}"
            col_step = [GREY, ORANGE, YELLOW, GREEN][i]
            s = Text(n, color=col_step, font=CJK, font_size=17,
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

            new_lbl = Text(f"{km} \u516c\u91cc", color=col, font=CJK,
                           font_size=15, weight="BOLD")
            new_lbl.move_to([radar_x + r * 0.70, -0.15, 0])
            if i == 0:
                self.play(FadeIn(new_lbl), run_time=0.3)
            else:
                # Transform() stacks the old and new text; swap instead.
                self.play(FadeOut(ring_lbl), run_time=0.18)
                self.play(FadeIn(new_lbl), run_time=0.22)

            beam = Arrow([radar_x + 0.2, -0.6, 0],
                         [radar_x + r, -0.6, 0],
                         color=col, stroke_width=3, buff=0,
                         max_tip_length_to_length_ratio=0.06)
            self.play(FadeIn(beam), run_time=0.35)
            self.wait(0.45)
            self.play(FadeOut(beam), run_time=0.25)

            ring = new_ring
            ring_lbl = new_lbl

        self.wait(1.6)