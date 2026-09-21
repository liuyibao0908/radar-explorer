"""Article 15 \u2014 Bio-Radar (EN). Waveform animation:

1. Show radar on left, person on right
2. Continuous wave goes out; echo phase shifts with breathing
3. Big slow waves = breathing, tiny ripples on top = heartbeat
4. Final: signal processing extracts breathing (BPM) and heartbeat (BPM)
"""
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

        title = Text("Bio-Radar: Contactless Vital Signs",
                     color=TEAL, font_size=26, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # ---- Radar on left ----
        radar_pos = LEFT * 5.5 + UP * 1.0
        radar = Rectangle(width=0.5, height=0.7, color=TEAL,
                          stroke_width=2, fill_color="#0F1A1F",
                          fill_opacity=1).move_to(radar_pos)
        radar_label = Text("BIO-RADAR", color=TEAL, font_size=12, weight="BOLD")\
            .next_to(radar, UP, buff=0.1)

        # ---- Person on right ----
        person_pos = RIGHT * 2.5 + UP * 1.0
        head = Dot(point=person_pos + UP * 1.3, radius=0.2, color=YELLOW)
        body = Rectangle(width=0.8, height=1.6, color=YELLOW,
                         fill_opacity=0.4, stroke_width=1)\
            .move_to(person_pos + DOWN * 0.1)
        person = VGroup(head, body)
        person_label = Text("PATIENT", color=YELLOW, font_size=12, weight="BOLD")\
            .next_to(body, DOWN, buff=0.1)

        step = Text("1. SEND  --  continuous microwave toward the body",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(FadeIn(radar), Write(radar_label),
                  FadeIn(person), Write(person_label),
                  Write(step), run_time=0.8)

        # ---- Beam line ----
        beam = Line(radar_pos, person_pos, color=TEAL, stroke_width=1)
        self.play(Create(beam), run_time=0.4)

        # ---- 2. CHEST MOVES  --  show arrows up/down ----
        step2 = Text("2. SHIFT  --  chest moves ~5 mm with each breath",
                     color=YELLOW, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)

        # Animate chest displacement: scale body slightly
        # Use a small up/down translation animation
        self.play(body.animate.shift(UP * 0.05),
                  head.animate.shift(UP * 0.05), run_time=0.5)
        self.play(body.animate.shift(DOWN * 0.05),
                  head.animate.shift(DOWN * 0.05), run_time=0.5)

        # ---- 3. PHASE SHIFT  --  show waveform ----
        # Move radar and person down to make room for the waveform
        self.play(FadeOut(beam),
                  radar.animate.shift(LEFT * 0.3),
                  person.animate.shift(RIGHT * 0.3),
                  step2.animate.shift(UP * 1.2),
                  run_time=0.4)
        new_step = Text("3. PHASE  --  echo phase shifts by tiny amounts",
                        color=ORANGE, font_size=15).to_edge(DOWN)
        self.play(Transform(step, new_step), run_time=0.3)

        # Build waveform axes
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

        # Breathing wave (slow) + heartbeat (fast ripples)
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

        breath_label = Text("breathing", color=TEAL, font_size=12)\
            .next_to(axes, LEFT, buff=0.3).shift(UP * 0.6)
        heart_label = Text("heartbeat", color=ORANGE, font_size=12)\
            .next_to(axes, LEFT, buff=0.3).shift(DOWN * 0.6)
        self.play(Write(breath_label), Write(heart_label), run_time=0.5)

        # ---- 4. EXTRACT ----
        step4 = Text("4. EXTRACT  --  breathing and heartbeat as numbers",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        bpm_box = VGroup()
        breath_bpm = Text("Breathing: 16 /min",
                          color=TEAL, font_size=14, weight="BOLD")
        heart_bpm = Text("Heartbeat: 75 /min",
                         color=ORANGE, font_size=14, weight="BOLD")
        bpm_box.add(breath_bpm, heart_bpm).arrange(DOWN, aligned_edge=LEFT)
        bpm_box.move_to(np.array([4.0, 0.8, 0]))
        bpm_box_bg = Rectangle(width=2.6, height=1.2,
                               fill_color="#0F1A1F", fill_opacity=0.8,
                               stroke_color=TEAL, stroke_width=1)
        bpm_box_bg.move_to(bpm_box)
        self.play(FadeIn(bpm_box_bg), Write(bpm_box), run_time=0.8)

        self.wait(0.6)