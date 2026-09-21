"""Article 15 \u2014 \u751f\u7269\u96f7\u8fbe (ZH). \u540c\u6837\u52a8\u753b\u8282\u594f\u3002"""

from manim import (
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Text, Axes, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle15(Scene):
    def construct(self):
        np.random.seed(15)
        self.camera.background_color = "#0F1A1F"

        title = Text("\u751f\u7269\u96f7\u8fde\u662f: \u975e\u63a5\u89e6\u751f\u547d\u4f53\u5f81",
                     color=TEAL, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        radar_pos = LEFT * 5.5 + UP * 1.0
        radar = Rectangle(width=0.5, height=0.7, color=TEAL,
                          stroke_width=2, fill_color="#0F1A1F",
                          fill_opacity=1).move_to(radar_pos)
        radar_label = Text("\u751f\u7269\u96f7\u8fbe", color=TEAL, font_size=12, weight="BOLD")\
            .next_to(radar, UP, buff=0.1)

        person_pos = RIGHT * 2.5 + UP * 1.0
        head = Dot(point=person_pos + UP * 1.3, radius=0.2, color=YELLOW)
        body = Rectangle(width=0.8, height=1.6, color=YELLOW,
                         fill_opacity=0.4, stroke_width=1)\
            .move_to(person_pos + DOWN * 0.1)
        person = VGroup(head, body)
        person_label = Text("\u60a3\u8005", color=YELLOW, font_size=12, weight="BOLD")\
            .next_to(body, DOWN, buff=0.1)

        step = Text("1. \u53d1\u9001 \u2014 \u5411\u4eba\u4f53\u6301\u7eed\u53d1\u5c04\u5fae\u6ce2",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(FadeIn(radar), Write(radar_label),
                  FadeIn(person), Write(person_label),
                  Write(step), run_time=0.8)

        beam = Line(radar_pos, person_pos, color=TEAL, stroke_width=1)
        self.play(Create(beam), run_time=0.4)

        step2 = Text("2. \u504f\u79fb \u2014 \u80f8\u90e8\u968f\u547c\u5438\u4e0a\u4e0b\u51e0\u6beb\u7c73",
                     color=YELLOW, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)

        self.play(body.animate.shift(UP * 0.05),
                  head.animate.shift(UP * 0.05), run_time=0.5)
        self.play(body.animate.shift(DOWN * 0.05),
                  head.animate.shift(DOWN * 0.05), run_time=0.5)

        self.play(FadeOut(beam),
                  radar.animate.shift(LEFT * 0.3),
                  person.animate.shift(RIGHT * 0.3),
                  step2.animate.shift(UP * 1.2),
                  run_time=0.4)
        new_step = Text("3. \u76f8\u4f4d \u2014 \u56de\u6ce2\u76f8\u4f4d\u53d1\u751f\u5fae\u5c0f\u53d8\u5316",
                        color=ORANGE, font_size=15).to_edge(DOWN)
        self.play(Transform(step, new_step), run_time=0.3)

        axes = Axes(
            x_range=[0, 8, 1],
            y_range=[-2.0, 2.0, 1],
            x_length=10,
            y_length=2.4,
            tips=False,
            axis_config={
                "stroke_color": GREY,
                "stroke_width": 1,
                "include_numbers": False,
            },
        ).shift(DOWN * 2.0)

        xs = np.linspace(0, 8, 200)
        breathing = 1.4 * np.sin(2 * np.pi * 0.4 * xs)
        heartbeat = 0.3 * np.sin(2 * np.pi * 3 * xs)
        waveform = breathing + heartbeat
        graph = axes.plot_line_graph(
            xs, waveform,
            line_color=YELLOW, stroke_width=2,
            add_vertex_dots=False,
        )
        self.play(Create(axes), run_time=0.4)
        self.play(Create(graph), run_time=1.5)

        breath_label = Text("\u547c\u5438", color=TEAL, font_size=12)\
            .next_to(axes, LEFT, buff=0.3).shift(UP * 0.6)
        heart_label = Text("\u5fc3\u8df3", color=ORANGE, font_size=12)\
            .next_to(axes, LEFT, buff=0.3).shift(DOWN * 0.6)
        self.play(Write(breath_label), Write(heart_label), run_time=0.5)

        step4 = Text("4. \u63d0\u53d6 \u2014 \u547c\u5438\u548c\u5fc3\u8df3\u8f6c\u4e3a\u6570\u5b57",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        bpm_box = VGroup()
        breath_bpm = Text("\u547c\u5438: 16 \u6b21/\u5206",
                          color=TEAL, font_size=14, weight="BOLD")
        heart_bpm = Text("\u5fc3\u8df3: 75 \u6b21/\u5206",
                         color=ORANGE, font_size=14, weight="BOLD")
        bpm_box.add(breath_bpm, heart_bpm).arrange(DOWN, aligned_edge=LEFT)
        bpm_box.move_to(np.array([4.0, 0.8, 0]))
        bpm_box_bg = Rectangle(width=2.6, height=1.2,
                               fill_color="#0F1A1F", fill_opacity=0.8,
                               stroke_color=TEAL, stroke_width=1)
        bpm_box_bg.move_to(bpm_box)
        self.play(FadeIn(bpm_box_bg), Write(bpm_box), run_time=0.8)

        self.wait(0.6)