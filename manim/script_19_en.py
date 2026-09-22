"""Article 19 \u2014 Speed Radar (EN). Animation:

1. Show radar gun + moving car
2. Gun emits continuous microwave
3. Echo comes back at higher frequency
4. Show formula and computed speed
"""
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

        title = Text("Speed Radar",
                     color=TEAL, font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # Radar gun on left
        gun = Rectangle(width=0.4, height=0.6, color=TEAL,
                        stroke_width=2, fill_color="#0F1A1F",
                        fill_opacity=1).move_to(LEFT * 6 + DOWN * 0.5)
        gun_label = Text("SPEED GUN", color=TEAL, font_size=11, weight="BOLD")\
            .next_to(gun, UP, buff=0.1)
        self.play(FadeIn(gun), Write(gun_label), run_time=0.4)

        # Car on right
        car = Rectangle(width=1.2, height=0.5, color=YELLOW,
                        fill_color=YELLOW, fill_opacity=0.6, stroke_width=2)\
            .move_to(RIGHT * 4 + DOWN * 0.5)
        car_wheels = VGroup(
            Dot(point=car.get_center() + LEFT * 0.4 + DOWN * 0.3, radius=0.08, color="#222222"),
            Dot(point=car.get_center() + RIGHT * 0.4 + DOWN * 0.3, radius=0.08, color="#222222"),
        )
        car_label = Text("car", color=YELLOW, font_size=11)\
            .next_to(car, DOWN, buff=0.1)
        motion_arrow = Arrow(car.get_right(), car.get_right() + RIGHT * 1.0,
                              color=GREEN, stroke_width=3, buff=0.1)
        motion_label = Text("v", color=GREEN, font_size=14, weight="BOLD")\
            .next_to(motion_arrow, UP, buff=0.1)
        self.play(FadeIn(car), FadeIn(car_wheels), Write(car_label),
                  Create(motion_arrow), Write(motion_label), run_time=0.6)

        # 1. SEND
        step = Text("1. SEND  --  continuous microwave at 10 GHz",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        # Beam (outgoing wave packet)
        beam = Dot(point=gun.get_right(), radius=0.12, color=TEAL)
        self.play(FadeIn(beam), run_time=0.2)
        self.play(beam.animate.move_to(car.get_left()),
                  run_time=1.0, rate_func=lambda t: t)

        # 2. BOUNCE
        step2 = Text("2. BOUNCE  --  moving car reflects",
                     color=YELLOW, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step2),
                  Flash(car.get_center(), color=YELLOW,
                        flash_radius=0.4, run_time=0.4),
                  run_time=0.5)

        # 3. SHIFT - echo comes back at different freq
        step3 = Text("3. SHIFT  --  echo is slightly higher frequency",
                     color=ORANGE, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        # Echo (green dot)
        echo = Dot(point=car.get_left(), radius=0.12, color=GREEN)
        self.play(FadeIn(echo), run_time=0.2)
        self.play(echo.animate.move_to(gun.get_right()),
                  FadeOut(beam),
                  run_time=1.0, rate_func=lambda t: t)
        self.play(FadeOut(echo), run_time=0.3)

        # 4. SOLVE - formula
        step4 = Text("4. SOLVE  --  v = c \u00d7 \u0394f / (2 \u00d7 f)",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.4)

        # Show result
        result = Text("v = 100 km/h",
                     color=GREEN, font_size=22, weight="BOLD")\
            .move_to(DOWN * 1.2)
        result_box = Rectangle(width=3.6, height=1.0,
                                fill_color="#0F1A1F", fill_opacity=0.85,
                                stroke_color=GREEN, stroke_width=1.5)\
            .move_to(DOWN * 1.2)
        self.play(FadeIn(result_box), Write(result), run_time=0.8)

        self.wait(0.6)