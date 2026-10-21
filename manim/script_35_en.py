"""Article 35 EN \u2014 Radar cycle: transmit, reflect, process, display."""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, Polygon, Dot,
    UP, DOWN, LEFT, RIGHT, UR, FadeIn, FadeOut, Write, Transform, MoveAlongPath,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, PINK, np,
)


class RadarArticle35(Scene):
    def construct(self):
        np.random.seed(35)
        self.camera.background_color = "#061a30"

        title = Text("One Full Radar Cycle", color=TEAL,
                     font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        # --- the five blocks, laid out left to right ---
        boxes = VGroup()
        specs = [
            ("TX", GREEN), ("ANT", GREEN), ("RX", GREEN),
            ("PROC", BLUE), ("DISP", GREEN),
        ]
        for label, col in specs:
            b = Rectangle(width=1.35, height=0.85,
                          stroke_color=col, stroke_width=2,
                          fill_color=col, fill_opacity=0.16)
            t = Text(label, color=col, font_size=17, weight="BOLD")
            t.move_to(b.get_center())
            g = VGroup(b, t)
            boxes.add(g)
        boxes.arrange(RIGHT, buff=0.55).next_to(title, DOWN, buff=0.55)
        self.play(FadeIn(boxes, lag_ratio=0.08), run_time=0.6)

        radar_pos = boxes[0].get_center() + UP * 0.95
        target_pos = boxes[4].get_center() + RIGHT * 1.1 + UP * 1.55

        # --- step 1: TRANSMIT ---
        step = Text("1. TRANSMIT", color=GREEN, font_size=19,
                    weight="BOLD").to_edge(DOWN)
        self.play(Write(step), run_time=0.25)

        pulse = Dot(radar_pos, radius=0.11, color=YELLOW)
        self.play(FadeIn(pulse), run_time=0.2)
        self.play(pulse.animate.move_to(boxes[1].get_center()), run_time=0.3)
        self.play(pulse.animate.move_to(target_pos), run_time=0.7)
        tgt = Circle(radius=0.24, stroke_color=RED, stroke_width=2.5,
                     fill_color=RED, fill_opacity=0.2).move_to(target_pos)
        self.play(FadeIn(tgt), run_time=0.25)

        # --- step 2: REFLECT ---
        step2 = Text("2. REFLECT", color=RED, font_size=19,
                     weight="BOLD").to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.25)

        echo = Dot(target_pos, radius=0.11, color=ORANGE)
        self.play(FadeIn(echo), run_time=0.2)
        self.play(echo.animate.move_to(boxes[1].get_center()), run_time=0.7)
        self.play(echo.animate.move_to(boxes[2].get_center()), run_time=0.3)

        # --- step 3: PROCESS (noise -> clean) ---
        step3 = Text("3. PROCESS \u2014 find the target in the noise",
                     color=BLUE, font_size=19, weight="BOLD").to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        noise = VGroup()
        for _ in range(22):
            x = boxes[3].get_center()[0] + np.random.uniform(-0.6, 0.6)
            y = boxes[3].get_center()[1] + np.random.uniform(-0.55, 0.55)
            d = Dot([x, y, 0], radius=0.035, color=GREY)
            noise.add(d)
        self.play(FadeIn(noise, lag_ratio=0.02), run_time=0.4)
        self.play(FadeOut(noise, lag_ratio=0.02), run_time=0.45)
        self.play(FadeIn(echo), run_time=0.2)

        # --- step 4: DISPLAY ---
        step4 = Text("4. DISPLAY \u2014 show it to a human",
                     color=GREEN, font_size=19, weight="BOLD").to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        screen = Rectangle(width=1.2, height=0.72,
                           stroke_color=TEAL, stroke_width=2,
                           fill_color="#0F1A1F", fill_opacity=1)
        screen.move_to(boxes[4].get_center())
        blip = Circle(radius=0.13, stroke_color=YELLOW, stroke_width=2,
                      fill_color=YELLOW, fill_opacity=0.75)
        blip.move_to(screen.get_center() + LEFT * 0.22)
        self.play(FadeIn(screen), FadeIn(blip), run_time=0.5)

        # --- summary line ---
        self.play(
            FadeOut(noise, run_time=0.01),
            step.animate.set_opacity(0.0),
            run_time=0.01,
        )
        summary = Text("send \u2192 receive \u2192 calculate \u2192 show",
                       color=YELLOW, font_size=20).to_edge(DOWN)
        self.play(Write(summary), run_time=0.5)
        self.wait(1.0)