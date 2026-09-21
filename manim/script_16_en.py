"""Article 16 \u2014 Astronomical Radar (EN). Animation steps:

1. Show Earth on left with a radar dish, then a pulsing signal goes out
2. Pulse travels across space, hits a small asteroid
4. Echo comes home, distance + orbit are measured
5. Show the radar echo data: range = 22 million km
"""
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

        # Stars in background
        stars = VGroup()
        for x, y in [(2, 2), (-3, 1.5), (4, -1), (-4, -1), (1.5, -2), (-2, 2.5), (3.5, 1)]:
            stars.add(Dot(point=np.array([x, y, 0]), radius=0.04, color=YELLOW))
        self.add(stars)

        title = Text("Astronomical Radar",
                     color=TEAL, font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # ---- Earth on left ----
        earth = Circle(radius=0.5, color="#1f4d8a", fill_opacity=1, stroke_width=2)
        earth.move_to(LEFT * 5 + UP * 0.3)
        earth_label = Text("EARTH", color="#58C4DD", font_size=11, weight="BOLD")\
            .next_to(earth, DOWN, buff=0.2)
        # Radar dish on Earth
        dish = Line(earth.get_center() + UP * 0.4 + RIGHT * 0.2,
                    earth.get_center() + UP * 0.9 + RIGHT * 0.5,
                    color=YELLOW, stroke_width=2.5)
        self.play(FadeIn(earth), Write(earth_label), Create(dish), run_time=0.8)

        # ---- Asteroid on right ----
        asteroid_pos = RIGHT * 4 + UP * 1.2
        asteroid = Dot(point=asteroid_pos, radius=0.18, color=YELLOW)
        asteroid_label = Text("ASTEROID", color=YELLOW, font_size=11, weight="BOLD")\
            .next_to(asteroid, UP, buff=0.2)
        self.play(FadeIn(asteroid), Write(asteroid_label), run_time=0.5)

        # ---- 1. SEND pulse ----
        step = Text("1. SEND  --  powerful pulse toward asteroid",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        # Pulse (yellow circle that moves)
        pulse = Dot(point=earth.get_center() + RIGHT * 0.6 + UP * 0.5,
                    radius=0.15, color=YELLOW)
        self.play(FadeIn(pulse), run_time=0.2)
        self.play(pulse.animate.move_to(asteroid_pos),
                  run_time=2.0, rate_func=lambda t: t)

        # ---- 2. TRAVEL ----
        step2 = Text("2. TRAVEL  --  crosses millions of km in minutes",
                     color=ORANGE, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)

        # ---- 3. BOUNCE ----
        step3 = Text("3. BOUNCE  --  asteroid reflects a tiny fraction",
                     color=ORANGE, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step3),
                  Flash(asteroid.get_center(), color=YELLOW,
                        flash_radius=0.4, line_length=0.2,
                        num_lines=10, run_time=0.4),
                  run_time=0.6)

        # ---- 4. RETURN ----
        step4 = Text("4. RETURN  --  echo comes back, distance measured",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        echo = Dot(point=asteroid_pos, radius=0.15, color=GREEN)
        self.play(FadeIn(echo), run_time=0.2)
        self.play(echo.animate.move_to(earth.get_center() + RIGHT * 0.6 + UP * 0.5),
                  FadeOut(pulse),
                  run_time=2.0, rate_func=lambda t: t)
        self.play(FadeOut(echo), run_time=0.3)

        # ---- Result: distance label ----
        result_box = Rectangle(width=4.6, height=1.6,
                               fill_color="#0F1A1F", fill_opacity=0.85,
                               stroke_color=TEAL, stroke_width=1)
        result_box.move_to(DOWN * 1.8)
        range_text = Text("Range = 22 million km",
                          color=GREEN, font_size=14, weight="BOLD")\
            .move_to(result_box.get_center() + UP * 0.35)
        orbit_text = Text("Orbit refined to ~10 m precision",
                          color=YELLOW, font_size=12)\
            .move_to(result_box.get_center() + DOWN * 0.05)
        note = Text("Round-trip time = 146 s",
                    color=TEAL, font_size=12)\
            .move_to(result_box.get_center() + DOWN * 0.45)
        self.play(FadeIn(result_box),
                  Write(range_text), Write(orbit_text), Write(note),
                  run_time=1.0)

        # Final step text
        step5 = Text("5. PREDICT  --  decade of warning if collision possible",
                     color=TEAL, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step5), run_time=0.4)

        self.wait(0.6)