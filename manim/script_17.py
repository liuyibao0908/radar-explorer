"""Article 17 \u2014 \u5730\u8d28\u96f7\u8fbe (ZH)."""

from manim import (
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Circle, Text, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle17(Scene):
    def construct(self):
        np.random.seed(17)
        self.camera.background_color = "#0F1A1F"

        title = Text("\u5730\u8d28\u96f7\u8fbe",
                     color=TEAL, font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        sky = Rectangle(width=14, height=1.4, fill_color="#0F1A1F",
                        fill_opacity=1, stroke_width=0)
        sky.to_edge(UP, buff=0.9)

        ground_top = Line(LEFT * 7 + UP * 0.4, RIGHT * 7 + UP * 0.4,
                          color=YELLOW, stroke_width=2.5)
        soil = Rectangle(width=14, height=4.2, fill_color="#3a2c1a",
                          fill_opacity=1, stroke_width=0)
        soil.shift(DOWN * 2.5)

        layer1 = Line(LEFT * 7 + UP * 0.0, RIGHT * 7 + UP * 0.0,
                      color=GREY, stroke_width=1, stroke_opacity=0.5)
        layer2 = Line(LEFT * 7 + DOWN * 1.5, RIGHT * 7 + DOWN * 1.5,
                      color=GREY, stroke_width=1, stroke_opacity=0.5)

        pipe = Circle(radius=0.3, color="#58C4DD",
                      stroke_width=2, fill_color="#0a2a4a",
                      fill_opacity=1).move_to(DOWN * 0.7)
        pipe_label = Text("\u7ba1\u7ebf", color="#58C4DD", font_size=10, weight="BOLD")\
            .next_to(pipe, RIGHT, buff=0.15)

        void = Circle(radius=0.35, color=RED,
                     stroke_width=2, 
                     fill_color="#000000", fill_opacity=1).move_to(DOWN * 2.0)
        void_label = Text("\u7a7a\u6d1e", color=RED, font_size=10, weight="BOLD")\
            .next_to(void, RIGHT, buff=0.15)

        gpr = Rectangle(width=0.9, height=0.5, color=TEAL,
                        stroke_width=2, fill_color="#0F1A1F",
                        fill_opacity=1).move_to(UP * 0.65 + LEFT * 5)
        gpr_label = Text("GPR", color=TEAL, font_size=10, weight="BOLD")\
            .next_to(gpr, UP, buff=0.08)

        self.play(FadeIn(soil), Create(ground_top),
                  Create(layer1), Create(layer2),
                  FadeIn(pipe), Write(pipe_label),
                  FadeIn(void), Write(void_label),
                  FadeIn(gpr), Write(gpr_label),
                  run_time=0.9)

        step = Text("1. \u8109\u51b2 \u2014 \u5730\u8d28\u96f7\u8fbe\u5411\u4e0b\u53d1\u77ed\u8109\u51b2",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        pulse = Dot(point=gpr.get_bottom(), radius=0.08, color=YELLOW)
        self.play(FadeIn(pulse), run_time=0.15)
        self.play(pulse.animate.move_to(pipe.get_top()),
                  run_time=0.6, rate_func=lambda t: t)

        step2 = Text("2. \u56de\u6ce2 \u2014 \u5730\u5c42\u548c\u7ba1\u7ebf\u53cd\u5c04\u56de\u6765",
                     color=YELLOW, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2),
                  Flash(pipe.get_center(), color=YELLOW,
                        flash_radius=0.4, line_length=0.2,
                        num_lines=8, run_time=0.4),
                  run_time=0.6)

        echo = Dot(point=pipe.get_top(), radius=0.08, color=GREEN)
        self.play(FadeIn(echo), run_time=0.15)
        self.play(echo.animate.move_to(gpr.get_bottom()),
                  FadeOut(pulse),
                  run_time=0.7, rate_func=lambda t: t)
        self.play(FadeOut(echo), run_time=0.3)

        step3 = Text("3. \u8ddf\u8e2a \u2014 \u96f7\u8fbe\u56fe\u4e0a\u4e00\u6761\u5782\u76f4\u626b\u63cf\u7ebf",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        radargram_axes = Line(LEFT * 4 + DOWN * 0.4, RIGHT * 4 + DOWN * 0.4,
                              color=GREY, stroke_width=1)
        radargram_v = Line(RIGHT * 4 + DOWN * 0.4,
                           RIGHT * 4 + DOWN * 3.2,
                           color=GREY, stroke_width=1)
        trace = Line(RIGHT * 4 + DOWN * 0.4,
                     RIGHT * 4 + DOWN * 1.4,
                     color=YELLOW, stroke_width=2)
        trace2 = Line(RIGHT * 4 + DOWN * 1.4,
                      RIGHT * 4 + DOWN * 2.6,
                      color=RED, stroke_width=2)
        radargram_label = Text("\u96f7\u8fbe\u56fe", color=TEAL, font_size=11, weight="BOLD")\
            .next_to(radargram_axes, LEFT, buff=0.4)
        depth_label = Text("\u6df1\u5ea6", color=GREY, font_size=10)\
            .next_to(radargram_v, RIGHT, buff=0.1)
        self.play(Create(radargram_axes), Create(radargram_v),
                  Write(radargram_label), Write(depth_label),
                  run_time=0.5)
        self.play(Create(trace),
                  Flash(trace.get_center(), color=YELLOW,
                        flash_radius=0.2, run_time=0.3),
                  run_time=0.4)
        self.play(Create(trace2),
                  Flash(trace2.get_center(), color=RED,
                        flash_radius=0.2, run_time=0.3),
                  run_time=0.4)

        step4 = Text("4. \u626b\u63cf \u2014 \u79fb\u52a8\u76d2\u5b50\uff0c\u52a0\u4e0a\u4e0b\u4e00\u884c",
                     color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        for i in range(4):
            shift = RIGHT * (i + 1) * 1.5
            new_gpr = gpr.copy().shift(shift)
            new_label = gpr_label.copy().shift(shift)
            self.play(Transform(gpr, new_gpr),
                      Transform(gpr_label, new_label),
                      run_time=0.4)
            new_trace = Line(
                RIGHT * 4 + DOWN * 0.4 - shift * 0.4,
                RIGHT * 4 + DOWN * 1.4 - shift * 0.4,
                color=YELLOW, stroke_width=2,
            )
            new_trace2 = Line(
                RIGHT * 4 + DOWN * 1.4 - shift * 0.4,
                RIGHT * 4 + DOWN * 2.6 - shift * 0.4,
                color=RED, stroke_width=2,
            )
            self.play(Create(new_trace), Create(new_trace2), run_time=0.25)

        step5 = Text("5. \u7ed3\u6784 \u2014 \u7ba1\u7ebf\u548c\u7a7a\u6d1e\u72ec\u81ea\u4eae\u8d77",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step5), run_time=0.4)
        self.wait(0.6)