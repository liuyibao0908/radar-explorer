"""Article 20 \u2014 \u822a\u6d77\u96f7\u8fbe (ZH)."""

from manim import (
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Circle, Text, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle20(Scene):
    def construct(self):
        np.random.seed(20)
        self.camera.background_color = "#021108"

        title = Text("\u822a\u6d77\u96f7\u8fbe",
                     color=TEAL, font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        scope = Circle(radius=2.8, color=GREEN,
                       fill_color="#0a3520", fill_opacity=1,
                       stroke_width=3).move_to(DOWN * 0.5)
        ring1 = Circle(radius=0.9, color=GREEN, stroke_width=1, stroke_opacity=0.4).move_to(DOWN * 0.5)
        ring2 = Circle(radius=1.8, color=GREEN, stroke_width=1, stroke_opacity=0.4).move_to(DOWN * 0.5)
        ch_v = Line(DOWN * 0.5 + UP * 2.8, DOWN * 0.5 + DOWN * 2.8, color=GREEN, stroke_width=1, stroke_opacity=0.3)
        ch_h = Line(DOWN * 0.5 + LEFT * 2.8, DOWN * 0.5 + RIGHT * 2.8, color=GREEN, stroke_width=1, stroke_opacity=0.3)
        north = Text("\u5317", color=GREEN, font_size=14, weight="BOLD")\
            .next_to(scope, UP, buff=0.05)
        ship_dot = Dot(point=DOWN * 0.5, radius=0.1, color=GREEN)
        ship_arrow = Line(DOWN * 0.5, DOWN * 0.5 + UP * 0.3, color=GREEN, stroke_width=2)

        self.play(FadeIn(scope), Create(ring1), Create(ring2),
                  Create(ch_v), Create(ch_h),
                  Write(north),
                  FadeIn(ship_dot), Create(ship_arrow), run_time=0.8)

        step = Text("1. \u5929\u7ebf\u65cb\u8f6c \u2014 \u6ce2\u675f\u7ed5\u8f6c 360\u00b0",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.3)

        sweep = Line(DOWN * 0.5, DOWN * 0.5 + UP * 2.5, color=GREEN, stroke_width=2.5)
        target_positions = [
            DOWN * 0.5 + RIGHT * 1.5 + UP * 1.0,
            DOWN * 0.5 + LEFT * 1.8 + DOWN * 1.2,
            DOWN * 0.5 + RIGHT * 2.0 + DOWN * 0.5,
        ]

        def make_sweep(angle):
            return Line(
                DOWN * 0.5,
                DOWN * 0.5 + np.array([
                    np.sin(angle) * 2.5,
                    np.cos(angle) * 2.5,
                    0,
                ]),
                color=GREEN, stroke_width=2.5,
            )

        self.play(Create(sweep), run_time=0.4)

        target_dots = [Dot(point=p, radius=0.08, color=YELLOW) for p in target_positions]
        for i, target_dot in enumerate(target_dots):
            target_angle = np.arctan2(
                target_positions[i][0] - (DOWN * 0.5)[0],
                target_positions[i][1] - (DOWN * 0.5)[1],
            )
            new_sweep = make_sweep(target_angle)
            self.play(Transform(sweep, new_sweep), run_time=0.7, rate_func=lambda t: t)
            self.play(FadeIn(target_dot), run_time=0.2)

        step2 = Text("2. \u8bfb\u53d6 \u2014 \u8ddd\u79bb\u770b\u56de\u6ce2\u65f6\u95f4\uff0c\u65b9\u4f4d\u770b\u89d2\u5ea6",
                     color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)

        measure_target = target_positions[0]
        measure_line = Line(DOWN * 0.5, measure_target, color=YELLOW, stroke_width=1, )
        measure_label = Text("\u8ddd\u79bb 1.8 \u6d77\u91cc\uff0c\u65b9\u4f4d 045\u00b0",
                              color=YELLOW, font_size=12, weight="BOLD")\
            .next_to(measure_target, RIGHT, buff=0.15)
        self.play(Create(measure_line), Write(measure_label), run_time=0.7)

        step3 = Text("3. \u7ed3\u679c \u2014 \u53d1\u73b0\u8239\uff1a\u4f4d\u7f6e\u4e0e\u65b9\u5411",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        self.wait(0.6)