"""Article 18 \u2014 Through-Wall Radar (EN). Animation:

1. Show rescuer, concrete wall, survivor behind
2. Through-wall radar fires UWB pulses
3. Pulses penetrate wall, hit survivor's chest
4. Echo shows breathing pattern
"""
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

        title = Text("Through-Wall Radar",
                     color=TEAL, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # ---- Wall ----
        wall = Rectangle(width=1.2, height=4, color="#5a3a20",
                        fill_color="#5a3a20", fill_opacity=1,
                        stroke_width=2).move_to(ORIGIN)
        wall_label = Text("CONCRETE", color=YELLOW, font_size=12, weight="BOLD")\
            .next_to(wall, UP, buff=0.1)
        self.play(FadeIn(wall), Write(wall_label), run_time=0.5)

        # ---- Rescuer + radar on left ----
        rescuer = Dot(point=LEFT * 5 + DOWN * 0.3, radius=0.18, color=GREEN)
        radar = Rectangle(width=0.5, height=0.35, color=TEAL,
                          stroke_width=2, fill_color="#0F1A1F",
                          fill_opacity=1).next_to(rescuer, RIGHT, buff=0.2)
        radar_label = Text("TW-RADAR", color=TEAL, font_size=10, weight="BOLD")\
            .next_to(radar, DOWN, buff=0.1)
        rescuer_label = Text("rescuer", color=GREEN, font_size=10)\
            .next_to(rescuer, UP, buff=0.1)
        self.play(FadeIn(rescuer), Write(rescuer_label),
                  FadeIn(radar), Write(radar_label), run_time=0.5)

        # ---- Survivor behind wall ----
        survivor = Dot(point=RIGHT * 4 + DOWN * 0.3, radius=0.2, color=YELLOW)
        survivor_label = Text("survivor", color=YELLOW, font_size=10)\
            .next_to(survivor, UP, buff=0.1)
        self.play(FadeIn(survivor), Write(survivor_label), run_time=0.4)

        # ---- 1. SEND ----
        step = Text("1. SCAN  --  radar fires UWB pulses at the wall",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        pulse = Dot(point=radar.get_right(), radius=0.1, color=TEAL)
        self.play(FadeIn(pulse), run_time=0.15)
        self.play(pulse.animate.move_to(wall.get_left()),
                  run_time=0.5, rate_func=lambda t: t)

        # ---- 2. PASS through wall ----
        step2 = Text("2. PASS  --  some microwaves slip through",
                     color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2),
                  pulse.animate.move_to(survivor.get_left()),
                  run_time=0.5, rate_func=lambda t: t)

        # ---- 3. ECHO ----
        step3 = Text("3. ECHO  --  chest motion modulates echo",
                     color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3),
                  Flash(survivor.get_center(), color=YELLOW,
                        flash_radius=0.4, line_length=0.2,
                        num_lines=10, run_time=0.4),
                  run_time=0.5)

        # Echo returns
        echo = Dot(point=survivor.get_left(), radius=0.1, color=GREEN)
        self.play(FadeIn(echo), run_time=0.15)
        self.play(echo.animate.move_to(radar.get_right()),
                  FadeOut(pulse),
                  run_time=0.7, rate_func=lambda t: t)
        self.play(FadeOut(echo), run_time=0.3)

        # ---- 4. LOCATE - show breathing signal ----
        step4 = Text("4. LOCATE  --  signal = breathing rhythm",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        # Move radar out of the way
        self.play(FadeOut(pulse), FadeOut(echo), run_time=0.2)

        # Build breathing waveform
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
        graph_label = Text("breathing", color=GREEN, font_size=11, weight="BOLD")\
            .next_to(axes, DOWN, buff=0.3).shift(LEFT * 2.5)
        self.play(Create(axes), Create(axes_v), run_time=0.4)
        self.play(Create(graph), Write(graph_label), run_time=1.5)

        # ---- 5. SAVE ----
        step5 = Text("5. ALERT  --  rescuer knows: 1 survivor behind the wall",
                     color=TEAL, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step5), run_time=0.4)

        self.wait(0.6)