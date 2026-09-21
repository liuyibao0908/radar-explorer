"""Article 16 \u2014 \u5929\u6587\u96f7\u8fbe (ZH)."""

from manim import (
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Circle, Text, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle16(Scene):
    def construct(self):
        np.random.seed(16)
        self.camera.background_color = "#06111F"

        stars = VGroup()
        for x, y in [(2, 2), (-3, 1.5), (4, -1), (-4, -1), (1.5, -2), (-2, 2.5), (3.5, 1)]:
            stars.add(Dot(point=np.array([x, y, 0]), radius=0.04, color=YELLOW))
        self.add(stars)

        title = Text("\u5929\u6587\u96f7\u8fbe",
                     color=TEAL, font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        earth = Circle(radius=0.5, color="#1f4d8a", fill_opacity=1, stroke_width=2)
        earth.move_to(LEFT * 5 + UP * 0.3)
        earth_label = Text("\u5730\u7403", color="#58C4DD", font_size=11, weight="BOLD")\
            .next_to(earth, DOWN, buff=0.2)
        dish = Line(earth.get_center() + UP * 0.4 + RIGHT * 0.2,
                    earth.get_center() + UP * 0.9 + RIGHT * 0.5,
                    color=YELLOW, stroke_width=2.5)
        self.play(FadeIn(earth), Write(earth_label), Create(dish), run_time=0.8)

        asteroid_pos = RIGHT * 4 + UP * 1.2
        asteroid = Dot(point=asteroid_pos, radius=0.18, color=YELLOW)
        asteroid_label = Text("\u5c0f\u884c\u661f", color=YELLOW, font_size=11, weight="BOLD")\
            .next_to(asteroid, UP, buff=0.2)
        self.play(FadeIn(asteroid), Write(asteroid_label), run_time=0.5)

        step = Text("1. \u53d1\u9001 \u2014 \u5411\u5c0f\u884c\u661f\u53d1\u5f3a\u8109\u51b2",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        pulse = Dot(point=earth.get_center() + RIGHT * 0.6 + UP * 0.5,
                    radius=0.15, color=YELLOW)
        self.play(FadeIn(pulse), run_time=0.2)
        self.play(pulse.animate.move_to(asteroid_pos),
                  run_time=2.0, rate_func=lambda t: t)

        step2 = Text("2. \u4f20\u64ad \u2014 \u51e0\u5206\u949f\u8de8\u8d8a\u6570\u5343\u4e07\u516c\u91cc",
                     color=ORANGE, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)

        step3 = Text("3. \u53cd\u5c04 \u2014 \u5c0f\u884c\u661f\u53cd\u5c04\u4e00\u70b9\u4fe1\u53f7",
                     color=ORANGE, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step3),
                  Flash(asteroid.get_center(), color=YELLOW,
                        flash_radius=0.4, line_length=0.2,
                        num_lines=10, run_time=0.4),
                  run_time=0.6)

        step4 = Text("4. \u8fd4\u56de \u2014 \u56de\u6ce2\u8fd4\u56de\uff0c\u6d4b\u91cf\u8ddd\u79bb",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        echo = Dot(point=asteroid_pos, radius=0.15, color=GREEN)
        self.play(FadeIn(echo), run_time=0.2)
        self.play(echo.animate.move_to(earth.get_center() + RIGHT * 0.6 + UP * 0.5),
                  FadeOut(pulse),
                  run_time=2.0, rate_func=lambda t: t)
        self.play(FadeOut(echo), run_time=0.3)

        result_box = Rectangle(width=4.6, height=1.6,
                               fill_color="#0F1A1F", fill_opacity=0.85,
                               stroke_color=TEAL, stroke_width=1)
        result_box.move_to(DOWN * 1.8)
        range_text = Text("\u8ddd\u79bb = 2200 \u4e07\u516c\u91cc",
                          color=GREEN, font_size=14, weight="BOLD")\
            .move_to(result_box.get_center() + UP * 0.35)
        orbit_text = Text("\u8f68\u9053\u7cbe\u5ea6 \u2248 10 \u7c73",
                          color=YELLOW, font_size=12)\
            .move_to(result_box.get_center() + DOWN * 0.05)
        note = Text("\u53cc\u7a0b\u65f6\u95f4 = 146 \u79d2",
                    color=TEAL, font_size=12)\
            .move_to(result_box.get_center() + DOWN * 0.45)
        self.play(FadeIn(result_box),
                  Write(range_text), Write(orbit_text), Write(note),
                  run_time=1.0)

        step5 = Text("5. \u9884\u62a5 \u2014 \u4e3a\u53ef\u80fd\u649e\u51fb\u63d0\u4f9b\u6570\u5341\u5e74\u9884\u8b66",
                     color=TEAL, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step5), run_time=0.4)

        self.wait(0.6)