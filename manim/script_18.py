"""Article 18 \u2014 \u7a7f\u5899\u96f7\u8fbe (ZH)."""

from manim import (
    VMobject,
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Circle, Sector, Text, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle18(Scene):
    def construct(self):
        np.random.seed(18)
        self.camera.background_color = "#0F1A1F"

        title = Text("\u7a7f\u5899\u96f7\u8fbe",
                     color=TEAL, font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        wall = Rectangle(width=1.2, height=4, color="#5a3a20",
                        fill_color="#5a3a20", fill_opacity=1,
                        stroke_width=2).move_to(ORIGIN)
        wall_label = Text("\u6df7\u51dd\u571f\u5899", color=YELLOW, font_size=12, weight="BOLD")\
            .next_to(wall, UP, buff=0.1)
        self.play(FadeIn(wall), Write(wall_label), run_time=0.5)

        rescuer = Dot(point=LEFT * 5 + DOWN * 0.3, radius=0.18, color=GREEN)
        radar = Rectangle(width=0.5, height=0.35, color=TEAL,
                          stroke_width=2, fill_color="#0F1A1F",
                          fill_opacity=1).next_to(rescuer, RIGHT, buff=0.2)
        radar_label = Text("\u7a7f\u5899\u96f7\u8fbe", color=TEAL, font_size=10, weight="BOLD")\
            .next_to(radar, DOWN, buff=0.1)
        rescuer_label = Text("\u6551\u63f4\u8005", color=GREEN, font_size=10)\
            .next_to(rescuer, UP, buff=0.1)
        self.play(FadeIn(rescuer), Write(rescuer_label),
                  FadeIn(radar), Write(radar_label), run_time=0.5)

        survivor = Dot(point=RIGHT * 4 + DOWN * 0.3, radius=0.2, color=YELLOW)
        survivor_label = Text("\u88ab\u57cb\u8005", color=YELLOW, font_size=10)\
            .next_to(survivor, UP, buff=0.1)
        self.play(FadeIn(survivor), Write(survivor_label), run_time=0.4)

        step = Text("1. \u626b\u63cf \u2014 \u96f7\u8fbe\u5411\u5899\u53d1 UWB \u8109\u51b2",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        pulse = Dot(point=radar.get_right(), radius=0.1, color=TEAL)
        self.play(FadeIn(pulse), run_time=0.15)
        self.play(pulse.animate.move_to(wall.get_left()),
                  run_time=0.5, rate_func=lambda t: t)

        step2 = Text("2. \u7a7f\u900f \u2014 \u90e8\u5206\u5fae\u6ce2\u7a7f\u8fc7\u4e86",
                     color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2),
                  pulse.animate.move_to(survivor.get_left()),
                  run_time=0.5, rate_func=lambda t: t)

        step3 = Text("3. \u56de\u6ce2 \u2014 \u80f8\u58c1\u8fd0\u52a8\u8c03\u5236\u56de\u6ce2",
                     color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3),
                  Flash(survivor.get_center(), color=YELLOW,
                        flash_radius=0.4, line_length=0.2,
                        num_lines=10, run_time=0.4),
                  run_time=0.5)

        echo = Dot(point=survivor.get_left(), radius=0.1, color=GREEN)
        self.play(FadeIn(echo), run_time=0.15)
        self.play(echo.animate.move_to(radar.get_right()),
                  FadeOut(pulse),
                  run_time=0.7, rate_func=lambda t: t)
        self.play(FadeOut(echo), run_time=0.3)

        step4 = Text("4. \u5b9a\u4f4d \u2014 \u4fe1\u53f7 = \u547c\u5438\u8282\u5f8b",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        self.play(FadeOut(pulse), FadeOut(echo), run_time=0.2)

        axes = Line(LEFT * 6 + DOWN * 2.4, RIGHT * 6 + DOWN * 2.4,
                    color=GREY, stroke_width=1)
        axes_v = Line(LEFT * 6 + DOWN * 2.4,
                       LEFT * 6 + UP * 0.5,
                       color=GREY, stroke_width=1)
        xs = np.linspace(-6, 6, 200)
        breathing = 0.7 * np.sin(2 * np.pi * 0.3 * xs)
        graph = VMobject(stroke_color=GREEN, stroke_width=2)
        points = [np.array([x + 0.3, breathing[i] - 0.95, 0]) for i, x in enumerate(xs)]
        graph.set_points_as_corners(points)
        graph_label = Text("\u547c\u5438", color=GREEN, font_size=11, weight="BOLD")\
            .next_to(axes, DOWN, buff=0.3).shift(LEFT * 2.5)
        self.play(Create(axes), Create(axes_v), run_time=0.4)
        self.play(Create(graph), Write(graph_label), run_time=1.5)

        step5 = Text("5. \u544a\u8b66 \u2014 \u6551\u63f4\u8005\u77e5\u9053\uff1a\u5899\u540e 1 \u4eba",
                     color=TEAL, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step5), run_time=0.4)

        self.wait(0.6)