"""Article 20 \u2014 Marine Radar (EN). Animation:

1. Show ship on water
2. Antenna rotates; beam sweeps circle
3. Targets appear as bright dots at right range/bearing
4. Show how time-of-echo gives range, angle gives bearing
"""
from manim import (
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Circle, Text, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle20(Scene):
    def construct(self):
        np.random.seed(20)
        self.camera.background_color = "#021108"

        title = Text("Marine Radar",
                     color=TEAL, font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # PPI scope (the iconic round green radar)
        scope = Circle(radius=2.8, color=GREEN,
                       fill_color="#0a3520", fill_opacity=1,
                       stroke_width=3).move_to(DOWN * 0.5)
        # Range rings
        ring1 = Circle(radius=0.9, color=GREEN, stroke_width=1, stroke_opacity=0.4).move_to(DOWN * 0.5)
        ring2 = Circle(radius=1.8, color=GREEN, stroke_width=1, stroke_opacity=0.4).move_to(DOWN * 0.5)
        # Cross-hairs
        ch_v = Line(DOWN * 0.5 + UP * 2.8, DOWN * 0.5 + DOWN * 2.8, color=GREEN, stroke_width=1, stroke_opacity=0.3)
        ch_h = Line(DOWN * 0.5 + LEFT * 2.8, DOWN * 0.5 + RIGHT * 2.8, color=GREEN, stroke_width=1, stroke_opacity=0.3)

        # North label
        north = Text("N", color=GREEN, font_size=14, weight="BOLD")\
            .next_to(scope, UP, buff=0.05)
        # Our ship at center
        ship_dot = Dot(point=DOWN * 0.5, radius=0.1, color=GREEN)
        ship_arrow = Line(DOWN * 0.5, DOWN * 0.5 + UP * 0.3, color=GREEN, stroke_width=2)

        self.play(FadeIn(scope), Create(ring1), Create(ring2),
                  Create(ch_v), Create(ch_h),
                  Write(north),
                  FadeIn(ship_dot), Create(ship_arrow), run_time=0.8)

        # 1. ANTENNA SPINS
        step = Text("1. ANTENNA SPINS  --  a beam rotates 360\u00b0",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.3)

        # Sweep line starts pointing north
        sweep = Line(DOWN * 0.5, DOWN * 0.5 + UP * 2.5, color=GREEN, stroke_width=2.5)

        # Pre-defined targets on the scope (3 visible)
        target_positions = [
            DOWN * 0.5 + RIGHT * 1.5 + UP * 1.0,    # NE
            DOWN * 0.5 + LEFT * 1.8 + DOWN * 1.2,  # SW
            DOWN * 0.5 + RIGHT * 2.0 + DOWN * 0.5,  # SE
        ]

        def make_sweep(angle):
            return Line(
                DOWN * 0.5,
                DOWN * 0.5 + np.array([
                    np.sin(angle) * 2.5,
                    np.cos(angle) * 2.5,
                    0,
                ]),
                color=GREEN, stroke_width=2.5,
            )

        self.play(Create(sweep), run_time=0.4)

        # Rotate sweep and reveal targets as it passes them
        target_dots = [Dot(point=p, radius=0.08, color=YELLOW) for p in target_positions]

        for i, target_dot in enumerate(target_dots):
            # Rotate sweep to point at target
            target_angle = np.arctan2(
                target_positions[i][0] - (DOWN * 0.5)[0],
                target_positions[i][1] - (DOWN * 0.5)[1],
            )
            current_angle = i * (2 * PI / 3)
            # Step rotation to target
            new_sweep = make_sweep(target_angle)
            self.play(Transform(sweep, new_sweep), run_time=0.7, rate_func=lambda t: t)
            # Reveal target
            self.play(FadeIn(target_dot), run_time=0.2)

        # 2. READ
        step2 = Text("2. READ  --  range from echo time, bearing from angle",
                     color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)

        # Show measurement
        # Connect from center to one target with range line + label
        measure_target = target_positions[0]
        measure_line = Line(DOWN * 0.5, measure_target, color=YELLOW, stroke_width=1, )
        measure_label = Text("R = 1.8 nm, B = 045\u00b0",
                              color=YELLOW, font_size=12, weight="BOLD")\
            .next_to(measure_target, RIGHT, buff=0.15)
        self.play(Create(measure_line), Write(measure_label), run_time=0.7)

        # 3. RESULT
        step3 = Text("3. RESULT  --  ship detected: where & which direction",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        self.wait(0.6)