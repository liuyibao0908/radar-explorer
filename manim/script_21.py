"""Article 21 \u2014 \u6c14\u8c61\u96f7\u8fbe (ZH)."""

from manim import (
    Ellipse,
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Circle, Text, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle21(Scene):
    def construct(self):
        np.random.seed(21)
        self.camera.background_color = "#061a30"

        title = Text("\u6c14\u8c61\u96f7\u8fbe",
                     color=TEAL, font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        dish = Ellipse(width=0.7, height=0.18, color="#58C4DD",
                       stroke_width=2, fill_color="#0F1A1F", fill_opacity=1)\
            .move_to(DOWN * 2.5 + LEFT * 5)
        dish_label = Text("\u96f7\u8fbe", color="#58C4DD", font_size=11, weight="BOLD")\
            .next_to(dish, DOWN, buff=0.1)
        self.play(FadeIn(dish), Write(dish_label), run_time=0.4)

        cloud_band = Rectangle(width=14, height=2.5, color="#3a4555",
                                fill_opacity=0.4, stroke_width=0)\
            .move_to(UP * 0.5)

        rain_cells = [
            (UP * 0.5 + RIGHT * 1, 0.4, "#7CFC00"),
            (UP * 1.5 + RIGHT * 2, 0.55, "#FFD93D"),
            (UP * 0.8 + RIGHT * 3.5, 0.7, "#FF6B6B"),
        ]
        rain_dots = []
        for pos, r, c in rain_cells:
            rain_dots.append(Dot(point=pos, radius=r, color=c))

        step = Text("1. \u626b\u63cf \u2014 \u96f7\u8fbe\u5728\u5927\u6c14\u4e2d\u5012\u7ed5",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(FadeIn(cloud_band), Write(step), run_time=0.5)

        beam = Line(dish.get_center(),
                     dish.get_center() + UP * 3 + RIGHT * 0.5,
                     color=TEAL, stroke_width=2)
        self.play(Create(beam), run_time=0.4)

        step2 = Text("2. \u56de\u6ce2 \u2014 \u96e8\u6ef4\u548c\u96ea\u82b1\u53cd\u5c04\u56de\u6765",
                     color=YELLOW, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)
        for d in rain_dots:
            self.play(FadeIn(d, scale=0.5), run_time=0.15)

        step3 = Text("3. \u586b\u5145 \u2014 \u4eae\u70b9\u586b\u6ee1\u964d\u96e8\u56fe",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        self.play(FadeOut(beam), run_time=0.3)

        step4 = Text("4. \u9884\u62a5 \u2014 \u8ddf\u8e2a\u98ce\u66b4\u8fd0\u52a8\u9884\u62a5\u4e0b\u4e00\u5c0f\u65f6",
                     color=TEAL, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        motion_arrow1 = Arrow(rain_cells[0][0], rain_cells[0][0] + RIGHT * 1.5,
                               color=GREEN, stroke_width=3, buff=0.15)
        motion_arrow2 = Arrow(rain_cells[1][0], rain_cells[1][0] + RIGHT * 1.5 + UP * 0.5,
                               color=YELLOW, stroke_width=3, buff=0.15)
        motion_arrow3 = Arrow(rain_cells[2][0], rain_cells[2][0] + RIGHT * 1.5,
                               color=RED, stroke_width=3, buff=0.15)
        forecast_label = Text("+ 30 \u5206\u949f",
                              color=TEAL, font_size=12, weight="BOLD")\
            .move_to(DOWN * 2.5 + RIGHT * 2)
        self.play(Create(motion_arrow1), Create(motion_arrow2), Create(motion_arrow3),
                  Write(forecast_label), run_time=0.7)

        self.wait(0.6)