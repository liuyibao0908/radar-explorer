"""Article 37 EN \u2014 Long pulse vs short pulse: two targets merge or separate."""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, FadeIn, FadeOut, Write, Transform, GrowFromCenter,
    UP, DOWN, LEFT, RIGHT,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)


def swap_label(scene, old, new, run_time=0.3):
    """Fade out then fade in.

    Transform() between two same-position Text objects ghosts the glyphs
    on top of each other, which is unreadable.
    """
    if old is None:
        scene.play(Write(new), run_time=run_time)
    else:
        scene.play(FadeOut(old), run_time=run_time * 0.4)
        scene.play(FadeIn(new), run_time=run_time * 0.6)


class RadarArticle37(Scene):
    def construct(self):
        np.random.seed(37)
        self.camera.background_color = "#061a30"

        title = Text("Long Pulse or Short Pulse", color=TEAL,
                     font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        radar_x, t1_x, t2_x = -5.0, 0.2, 2.4

        radar = Dot([radar_x, 0.6, 0], radius=0.1, color=WHITE)
        dish = Arc(radius=0.45, start_angle=np.deg2rad(60),
                   angle=np.deg2rad(60), stroke_color=GREY, stroke_width=4)
        dish.move_to(radar)
        self.play(FadeIn(radar), FadeIn(dish), run_time=0.4)

        tgt1 = Circle(radius=0.26, stroke_color=ORANGE, stroke_width=2.5,
                      fill_color=ORANGE, fill_opacity=0.35)
        tgt1.move_to([t1_x, 0.6, 0])
        tgt2 = Circle(radius=0.26, stroke_color=ORANGE, stroke_width=2.5,
                      fill_color=ORANGE, fill_opacity=0.35)
        tgt2.move_to([t2_x, 0.6, 0])
        lbl1 = Text("A", color=WHITE, font_size=15).move_to(tgt1)
        lbl2 = Text("B", color=WHITE, font_size=15).move_to(tgt2)
        self.play(FadeIn(tgt1), FadeIn(tgt2), FadeIn(lbl1), FadeIn(lbl2),
                  run_time=0.5)

        step = None

        # ---------- 1. LONG PULSE: echoes merge ----------
        s1 = Text("1. LONG PULSE  \u2014  two targets blur into one",
                  color=ORANGE, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s1)
        step = s1

        wide = Rectangle(width=4.6, height=0.5, stroke_color=ORANGE,
                         stroke_width=2, fill_color=ORANGE, fill_opacity=0.32)
        wide.move_to([1.3, 0.6, 0])
        narrow = Rectangle(width=0.7, height=0.5, stroke_color=ORANGE,
                           stroke_width=2, fill_color=ORANGE, fill_opacity=0.9)
        narrow.move_to([1.3, 0.6, 0])
        self.play(GrowFromCenter(wide), run_time=0.5)
        self.play(Transform(wide, narrow), run_time=0.5)
        self.play(wide.animate.set_fill_opacity(0.4), run_time=0.3)
        # `narrow` was only a Transform target; keep the blob as `wide` so
        # the later FadeOut(wide) actually removes the middle blob.
        blob = wide

        # ---------- 2. SHORT PULSE: echoes separate ----------
        s2 = Text("2. SHORT PULSE  \u2014  the two targets separate",
                  color=GREEN, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s2)
        step = s2

        e1 = Rectangle(width=0.3, height=0.5, stroke_color=GREEN,
                       stroke_width=2, fill_color=GREEN, fill_opacity=0.9)
        e1.move_to(tgt1)
        e2 = Rectangle(width=0.3, height=0.5, stroke_color=GREEN,
                       stroke_width=2, fill_color=GREEN, fill_opacity=0.9)
        e2.move_to(tgt2)
        self.play(FadeOut(wide), run_time=0.3)
        self.play(FadeIn(e1), FadeIn(e2), run_time=0.4)

        # ---------- 3. RESOLUTION callout ----------
        s3 = Text("3. RESOLUTION  \u2014  spacing sets the shortest gap",
                  color=BLUE, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s3)
        step = s3

        gap = DoubleArrow(tgt1.get_right(), tgt2.get_left(),
                          buff=0.12, color=BLUE, stroke_width=3,
                          tip_length=0.18)
        gap_text = Text("2.2 km", color=BLUE, font_size=14)
        gap_text.next_to(gap, UP, buff=0.18)
        self.play(GrowFromCenter(gap), FadeIn(gap_text), run_time=0.5)

        # ---------- 4. TRADE-OFF ----------
        s4 = Text("4. TRADE-OFF  \u2014  energy up, clarity down",
                  color=PURPLE, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s4)

        self.wait(1.4)