"""Article 14 — \u5408\u6210\u5b54\u5f84\u96f7\u8fbe (ZH)."""

from manim import (
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Text, Sector, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    np
)


class RadarArticle14(Scene):
    def construct(self):
        np.random.seed(14)
        self.camera.background_color = "#0F1A1F"

        title = Text("\u5408\u6210\u5b54\u5f84\u96f7\u8fbe",
                     color=TEAL, font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.8)

        ground = Line(LEFT * 6 + DOWN * 1.8, RIGHT * 6 + DOWN * 1.8,
                      color=GREY, stroke_width=2)
        ground_text = Text("\u5730\u9762", color=GREY, font_size=12)\
            .next_to(ground, RIGHT, buff=0.2)
        self.play(Create(ground), Write(ground_text), run_time=0.6)

        target_pos = np.array([2.5, -1.8, 0])
        target = Dot(point=target_pos, radius=0.12, color=YELLOW)
        target_label = Text("\u76ee\u6807", color=YELLOW, font_size=12, weight="BOLD")\
            .next_to(target, UP, buff=0.15)
        self.play(FadeIn(target), Write(target_label), run_time=0.5)

        ant_pos = LEFT * 4 + UP * 0.5
        ant = Rectangle(width=0.25, height=1.0, color=TEAL,
                        fill_color="#0F1A1F", fill_opacity=1,
                        stroke_width=2).move_to(ant_pos)
        ant_label = Text("SAR", color=TEAL, font_size=12, weight="BOLD")\
            .next_to(ant, UP, buff=0.1)

        step = Text("1. \u53d1\u5c04 \u2014 \u5411\u76ee\u6807\u53d1 chirp",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(FadeIn(ant), Write(ant_label), Write(step), run_time=0.7)

        pulse = Line(ant_pos, target_pos, color=TEAL,
                     stroke_width=2, stroke_opacity=0.8)
        echo = Arrow(start=target_pos, end=ant_pos, color=ORANGE,
                     stroke_width=3, buff=0.1)
        self.play(Create(pulse), run_time=0.5)
        self.play(Flash(target.get_center(), color=YELLOW,
                        flash_radius=0.4, run_time=0.4))
        self.play(Create(echo), run_time=0.5)

        step2 = Text("2. \u79fb\u52a8 \u2014 \u6328 2 \u7c73\uff0c\u518d\u53d1\u4e00\u6b21",
                     color=YELLOW, font_size=15).to_edge(DOWN)
        ant2_pos = ant_pos + RIGHT * 1.5
        ant2 = ant.copy().move_to(ant2_pos)
        self.play(Transform(step, step2),
                  Transform(ant, ant2),
                  run_time=0.7)
        pulse2 = Line(ant2_pos, target_pos, color=TEAL,
                      stroke_width=2, stroke_opacity=0.8)
        echo2 = Arrow(start=target_pos, end=ant2_pos, color=ORANGE,
                      stroke_width=3, buff=0.1)
        self.play(Create(pulse2), run_time=0.4)
        self.play(Flash(target.get_center(), color=YELLOW,
                        flash_radius=0.4, run_time=0.3))
        self.play(Create(echo2), run_time=0.4)

        step3 = Text("3. \u518d\u79fb\u52a8 \u2014 \u7b2c\u4e09\u4f4d\u7f6e\u518d\u53d1",
                     color=YELLOW, font_size=15).to_edge(DOWN)
        ant3_pos = ant_pos + RIGHT * 3.0
        ant3 = ant.copy().move_to(ant3_pos)
        self.play(Transform(step, step3),
                  Transform(ant, ant3),
                  run_time=0.7)
        pulse3 = Line(ant3_pos, target_pos, color=TEAL,
                      stroke_width=2, stroke_opacity=0.8)
        echo3 = Arrow(start=target_pos, end=ant3_pos, color=ORANGE,
                      stroke_width=3, buff=0.1)
        self.play(Create(pulse3), run_time=0.4)
        self.play(Flash(target.get_center(), color=YELLOW,
                        flash_radius=0.4, run_time=0.3))
        self.play(Create(echo3), run_time=0.4)

        step4 = Text("4. \u5408\u6210 \u2014 \u6240\u6709\u56de\u6ce2 = \u5408\u6210\u5b54\u5f84",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.5)

        synth_bar = Line(ant_pos + UP * 1.5,
                         ant3_pos + UP * 1.5,
                         color=GREEN, stroke_width=8)
        synth_label = Text("\u5408\u6210\u5b54\u5f84 ~ 3 \u7c73",
                           color=GREEN, font_size=14, weight="BOLD")\
            .next_to(synth_bar, UP, buff=0.1)
        self.play(Create(synth_bar), Write(synth_label), run_time=0.7)

        all_pulses = VGroup(pulse, pulse2, pulse3, echo, echo2, echo3)
        self.play(FadeOut(all_pulses), run_time=0.6)

        final = Text("\u5c0f\u5929\u7ebf + \u79fb\u52a8 = \u5de8\u5927\u5408\u6210\u5b54\u5f84",
                     color=TEAL, font_size=15, weight="BOLD")\
            .to_edge(UP).shift(DOWN * 0.8)
        self.play(Write(final), run_time=0.8)

        self.wait(0.8)