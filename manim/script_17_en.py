"""Article 17 \u2014 Ground-Penetrating Radar (EN). Animation:

1. Show GPR box on top of ground, fire a pulse straight down
2. Pulse travels into soil layers
3. Echoes come back from pipe, void, water table
4. Build a simple radargram (vertical traces side by side)
"""
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

        title = Text("Ground-Penetrating Radar",
                     color=TEAL, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # ---- Ground cross-section ----
        # Sky strip
        sky = Rectangle(width=14, height=1.4, fill_color="#0F1A1F",
                        fill_opacity=1, stroke_width=0)
        sky.to_edge(UP, buff=0.9)

        # Ground layers
        ground_top = Line(LEFT * 7 + UP * 0.4, RIGHT * 7 + UP * 0.4,
                          color=YELLOW, stroke_width=2.5)
        soil = Rectangle(width=14, height=4.2, fill_color="#3a2c1a",
                          fill_opacity=1, stroke_width=0)
        soil.shift(DOWN * 2.5)

        # Layer lines
        layer1 = Line(LEFT * 7 + UP * 0.0, RIGHT * 7 + UP * 0.0,
                      color=GREY, stroke_width=1, stroke_opacity=0.5)
        layer2 = Line(LEFT * 7 + DOWN * 1.5, RIGHT * 7 + DOWN * 1.5,
                      color=GREY, stroke_width=1, stroke_opacity=0.5)

        # Pipe in the middle
        pipe = Circle(radius=0.3, color="#58C4DD",
                      stroke_width=2, fill_color="#0a2a4a",
                      fill_opacity=1).move_to(DOWN * 0.7)
        pipe_label = Text("pipe", color="#58C4DD", font_size=10, weight="BOLD")\
            .next_to(pipe, RIGHT, buff=0.15)

        # Void
        void = Circle(radius=0.35, color=RED,
                     stroke_width=2, 
                     fill_color="#000000", fill_opacity=1).move_to(DOWN * 2.0)
        void_label = Text("void", color=RED, font_size=10, weight="BOLD")\
            .next_to(void, RIGHT, buff=0.15)

        # GPR box
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

        # ---- 1. PULSE ----
        step = Text("1. PULSE  --  GPR fires a short radio pulse down",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        pulse = Dot(point=gpr.get_bottom(), radius=0.08, color=YELLOW)
        self.play(FadeIn(pulse), run_time=0.15)
        # Travel down past the pipe
        self.play(pulse.animate.move_to(pipe.get_top()),
                  run_time=0.6, rate_func=lambda t: t)

        # ---- 2. ECHO from pipe ----
        step2 = Text("2. ECHO  --  soil layers and pipe reflect back",
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

        # ---- 3. TRACE ----
        step3 = Text("3. TRACE  --  one vertical scan-line on radargram",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        # Show radargram axes
        radargram_axes = Line(LEFT * 4 + DOWN * 0.4, RIGHT * 4 + DOWN * 0.4,
                              color=GREY, stroke_width=1)
        radargram_v = Line(RIGHT * 4 + DOWN * 0.4,
                           RIGHT * 4 + DOWN * 3.2,
                           color=GREY, stroke_width=1)
        trace = Line(RIGHT * 4 + DOWN * 0.4,
                     RIGHT * 4 + DOWN * 1.4,  # pipe depth
                     color=YELLOW, stroke_width=2)
        trace2 = Line(RIGHT * 4 + DOWN * 1.4,
                      RIGHT * 4 + DOWN * 2.6,  # void depth
                      color=RED, stroke_width=2)
        radargram_label = Text("radargram", color=TEAL, font_size=11, weight="BOLD")\
            .next_to(radargram_axes, LEFT, buff=0.4)
        depth_label = Text("depth", color=GREY, font_size=10)\
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

        # ---- 4. SCAN: move GPR box right ----
        step4 = Text("4. SCAN  --  move the box, add the next line",
                     color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        # Animate GPR moving right
        for i in range(4):
            shift = RIGHT * (i + 1) * 1.5
            new_gpr = gpr.copy().shift(shift)
            new_label = gpr_label.copy().shift(shift)
            self.play(Transform(gpr, new_gpr),
                      Transform(gpr_label, new_label),
                      run_time=0.4)
            # Add another trace slightly offset
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

        # ---- 5. FINAL ----
        step5 = Text("5. STRUCTURE  --  pipe and void stand out",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step5), run_time=0.4)
        self.wait(0.6)