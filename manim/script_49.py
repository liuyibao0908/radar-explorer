"""Article 49 \u4e2d\u6587 \u2014 \u626b\u8fc7\u53bb\u7684\u5929\u7ebf\uff0c\u4e0e\u540c\u65f6\u6301\u4f4f\u4e09\u4e2a\u76ee\u6807\u7684\u9635\u9762\u3002"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, LaggedStart, ValueTracker,
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


TARGET_DEG = [34.0, 128.0, 246.0]


class RadarArticle49(Scene):
    def construct(self):
        np.random.seed(49)
        self.camera.background_color = "#061a30"

        title = Text("\u5929\u7ebf\uff0c\u8fd8\u662f\u9635\u9762", color=TEAL,
                     font=CJK, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        step_pos = np.array([0, -3.35, 0])
        step = None

        s1 = Text("1. \u5929\u7ebf \u2014 \u2014 \u4e00\u9053\u6ce2\u675f\uff0c\u626b\u8fc7\u53bb",
                  color=YELLOW, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s1)
        step = s1

        origin = np.array([-3.9, 0.45, 0])
        dish = VGroup(
            Arc(radius=0.34, start_angle=np.deg2rad(112),
                angle=np.deg2rad(136), stroke_color=YELLOW, stroke_width=4),
            Line([0, 0, 0], [0, 0.30, 0], stroke_color=YELLOW, stroke_width=3),
        )
        dish.move_to(origin)
        self.play(FadeIn(dish), run_time=0.4)

        R = 2.35
        tgts = VGroup()
        for d in TARGET_DEG:
            a = np.deg2rad(d)
            tgts.add(Dot(origin + R * np.array([np.cos(a), np.sin(a), 0]),
                         radius=0.13, color=RED))
        self.play(FadeIn(tgts), run_time=0.5)

        def beam_at(deg):
            a = np.deg2rad(deg)
            return Line(origin + UP * 0.30,
                        origin + UP * 0.30
                        + R * np.array([np.cos(a), np.sin(a), 0]),
                        stroke_color=YELLOW, stroke_width=2.6)

        beam = beam_at(0)
        self.play(FadeIn(beam), run_time=0.2)
        self.play(beam.animate.become(beam_at(TARGET_DEG[0])), run_time=0.9)
        self.play(beam.animate.become(beam_at(TARGET_DEG[1])), run_time=1.1)
        self.play(beam.animate.become(beam_at(TARGET_DEG[2])), run_time=1.1)
        self.wait(0.3)

        s2 = Text("2. \u9635\u9762 \u2014 \u2014 \u4e00\u9053\u6ce2\u675f\uff0c\u77ac\u95f4\u8df3\u8fc7\u53bb",
                  color=GREEN, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s2)
        step = s2

        self.play(FadeOut(dish), FadeOut(beam), FadeOut(tgts), run_time=0.5)

        face = Rectangle(width=0.85, height=2.6, stroke_color=GREEN,
                         stroke_width=2, fill_color="#0a2010",
                         fill_opacity=1)
        face.move_to(np.array([-3.9, 0.45, 0]))
        elems = VGroup()
        for r_ in range(6):
            for c_ in range(2):
                e = Rectangle(width=0.16, height=0.16, fill_color=GREEN,
                              fill_opacity=1, stroke_color=None)
                e.move_to(face.get_center()
                          + np.array([-0.18 + c_ * 0.36,
                                      -1.0 + r_ * 0.40, 0]))
                elems.add(e)
        self.play(FadeIn(face), FadeIn(elems), run_time=0.6)

        hub = np.array([-3.48, 0.45, 0])   # beam origin: array face edge
        RR = R * 0.95                        # distance to each target
        tgts2 = VGroup(*[
            Dot(hub + RR * np.array([np.cos(np.deg2rad(d)),
                                     np.sin(np.deg2rad(d)), 0]),
                radius=0.13, color=RED)
            for d in TARGET_DEG
        ])
        self.play(FadeIn(tgts2), run_time=0.5)

        s3 = Text("3. \u9635\u9762 \u2014 \u2014 \u540c\u65f6\u6301\u4f4f\u5168\u90e8\u4e09\u4e2a",
                  color=GREEN, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s3)
        step = s3

        held = VGroup()
        for d in TARGET_DEG:
            a = np.deg2rad(d)
            held.add(Line(
                hub,
                hub + RR * np.array([np.cos(a), np.sin(a), 0]),
                stroke_color=GREEN, stroke_width=2.4))
        self.play(LaggedStart(*[Create(b) for b in held], lag_ratio=0.2),
                  run_time=0.9)
        self.play(tgts2.animate.set_color(WHITE), run_time=0.3)
        self.wait(0.8)

        s4 = Text("4. \u5929\u7ebf \u2014 \u2014 \u53ea\u80fd\u4e00\u4e2a\u4e00\u4e2a\u5730\u5230",
                  color=YELLOW, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s4)

        self.play(held.animate.set_opacity(0.18), run_time=0.4)

        d2 = VGroup(
            Arc(radius=0.34, start_angle=np.deg2rad(112),
                angle=np.deg2rad(136), stroke_color=YELLOW, stroke_width=4),
            Line([0, 0, 0], [0, 0.30, 0], stroke_color=YELLOW, stroke_width=3),
        )
        d2.move_to(origin)
        b2 = beam_at(TARGET_DEG[0])
        self.play(FadeIn(d2), FadeIn(b2), run_time=0.5)
        self.play(b2.animate.become(beam_at(TARGET_DEG[1])), run_time=0.8)
        self.play(b2.animate.become(beam_at(TARGET_DEG[2])), run_time=0.8)

        self.wait(1.5)