"""Article 19 \u2014 \u6d4b\u901f\u96f7\u8fbe (ZH)."""

from manim import (
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Text, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle19(Scene):
    def construct(self):
        np.random.seed(19)
        self.camera.background_color = "#0F1A1F"

        title = Text("\u6d4b\u901f\u96f7\u8fbe",
                     color=TEAL, font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        gun = Rectangle(width=0.4, height=0.6, color=TEAL,
                        stroke_width=2, fill_color="#0F1A1F",
                        fill_opacity=1).move_to(LEFT * 6 + DOWN * 0.5)
        gun_label = Text("\u6d4b\u901f\u67aa", color=TEAL, font_size=11, weight="BOLD")\
            .next_to(gun, UP, buff=0.1)
        self.play(FadeIn(gun), Write(gun_label), run_time=0.4)

        car = Rectangle(width=1.2, height=0.5, color=YELLOW,
                        fill_color=YELLOW, fill_opacity=0.6, stroke_width=2)\
            .move_to(RIGHT * 4 + DOWN * 0.5)
        car_wheels = VGroup(
            Dot(point=car.get_center() + LEFT * 0.4 + DOWN * 0.3, radius=0.08, color="#222222"),
            Dot(point=car.get_center() + RIGHT * 0.4 + DOWN * 0.3, radius=0.08, color="#222222"),
        )
        car_label = Text("\u8f66", color=YELLOW, font_size=11)\
            .next_to(car, DOWN, buff=0.1)
        motion_arrow = Arrow(car.get_right(), car.get_right() + RIGHT * 1.0,
                              color=GREEN, stroke_width=3, buff=0.1)
        motion_label = Text("v", color=GREEN, font_size=14, weight="BOLD")\
            .next_to(motion_arrow, UP, buff=0.1)
        self.play(FadeIn(car), FadeIn(car_wheels), Write(car_label),
                  Create(motion_arrow), Write(motion_label), run_time=0.6)

        step = Text("1. \u53d1\u5c04 \u2014 \u8fde\u7eed\u5fae\u6ce2\uff0c10 GHz",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        beam = Dot(point=gun.get_right(), radius=0.12, color=TEAL)
        self.play(FadeIn(beam), run_time=0.2)
        self.play(beam.animate.move_to(car.get_left()),
                  run_time=1.0, rate_func=lambda t: t)

        step2 = Text("2. \u53cd\u5c04 \u2014 \u8fd0\u52a8\u4e2d\u7684\u8f66\u53cd\u5c04\u56de\u6765",
                     color=YELLOW, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step2),
                  Flash(car.get_center(), color=YELLOW,
                        flash_radius=0.4, run_time=0.4),
                  run_time=0.5)

        step3 = Text("3. \u9891\u79fb \u2014 \u56de\u6ce2\u9891\u7387\u7565\u9ad8",
                     color=ORANGE, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        echo = Dot(point=car.get_left(), radius=0.12, color=GREEN)
        self.play(FadeIn(echo), run_time=0.2)
        self.play(echo.animate.move_to(gun.get_right()),
                  FadeOut(beam),
                  run_time=1.0, rate_func=lambda t: t)
        self.play(FadeOut(echo), run_time=0.3)

        step4 = Text("4. \u6c42\u89e3 \u2014 v = c \u00d7 \u0394f / (2 \u00d7 f)",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.4)

        result = Text("v = 100 km/h",
                     color=GREEN, font_size=22, weight="BOLD")\
            .move_to(DOWN * 1.2)
        result_box = Rectangle(width=3.6, height=1.0,
                                fill_color="#0F1A1F", fill_opacity=0.85,
                                stroke_color=GREEN, stroke_width=1.5)\
            .move_to(DOWN * 1.2)
        self.play(FadeIn(result_box), Write(result), run_time=0.8)

        self.wait(0.6)