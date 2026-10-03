"""Article 32 — Why Does Weather Radar Need a Phased Array? (EN).

Animation:
1. PESA -- dish slowly sweeps, blanks fill in over minutes
2. PAR  -- full sky painted in under a minute
3. STORM -- PAR zooms back to the danger area every 30 s
4. EARLY -- warning issued minutes before the old radar would notice
"""
from manim import (
    Scene, VGroup, Dot, Circle, Rectangle, Text, Line, Arrow,
    Square,
    UP, DOWN, LEFT, RIGHT, UR, FadeIn, FadeOut, Write, Create,
    Transform, YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, np
)


class RadarArticle32(Scene):
    def construct(self):
        np.random.seed(32)
        self.camera.background_color = "#061a30"

        title = Text("Mechanical vs Phased Array", color=TEAL,
                     font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # Sky panel: a 7x5 grid of small squares, each is a "pixel" that
        # the radar scans.
        grid_w, grid_h = 7, 5
        cell = 0.45
        sky = Rectangle(width=grid_w * cell, height=grid_h * cell,
                        stroke_color="#22323C", stroke_width=1)
        sky.move_to(LEFT * 0.5)

        # Pixels: 0 = unscanned (dim), 1 = scanned (lit)
        rng = np.random.default_rng(32)
        pixels = VGroup()
        for r in range(grid_h):
            for c in range(grid_w):
                x = -0.5 + (c - (grid_w - 1) / 2) * cell
                y = 0.0 + (r - (grid_h - 1) / 2) * cell
                p = Square(side_length=cell * 0.9, color="#152040",
                           fill_color="#152040", fill_opacity=1,
                           stroke_width=0.5, stroke_color="#22323C")
                p.move_to(np.array([x, y, 0.0]))
                pixels.add(p)

        # Storm in the corner (so PAR has something to zoom on)
        storm_center = np.array([2.0, 1.0, 0.0])
        storm_dots = VGroup(*[
            Dot(point=storm_center + np.array([
                0.12 * rng.normal(),
                0.12 * rng.normal(),
                0.0,
            ]), radius=0.05, color=RED, fill_opacity=0.4)
            for _ in range(40)
        ])

        self.play(Create(sky), FadeIn(pixels), FadeIn(storm_dots),
                  run_time=0.7)

        # Readouts
        pesa_time = Text("PESA: 5:00", color=GREY, font_size=14).to_corner(UR)
        par_title = Text("PAR: 0:30", color="#54FFB0", font_size=14)
        par_title.move_to(UR + DOWN * 0.4)

        # ---- 1. PESA: dish slowly sweeps one column at a time ----
        step = Text("1. PESA  --  dish slowly sweeps, minutes per pass",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), Write(pesa_time), run_time=0.5)

        for c in range(grid_w):
            # light up column c top-to-bottom
            for r in range(grid_h):
                idx = r * grid_w + c
                self.play(pixels[idx].animate.set_fill(ORANGE).set_opacity(0.6),
                          run_time=0.03)
        self.wait(0.4)

        # ---- 2. PAR: paint whole sky in fast bursts ----
        step2 = Text("2. PAR  --  full sky in under a minute",
                     color="#54FFB0", font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2),
                  Transform(pesa_time, par_title),
                  run_time=0.4)
        for p in pixels:
            self.play(p.animate.set_fill(YELLOW).set_opacity(0.85),
                      run_time=0.005)

        # ---- 3. STORM: PAR zooms back to the storm ----
        step3 = Text("3. STORM  --  PAR zooms back to the storm every 30 s",
                     color=RED, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)
        # pulse the storm area red
        for _ in range(3):
            for d in storm_dots:
                self.play(d.animate.set_fill(WHITE).set_opacity(1),
                          run_time=0.02)
            for d in storm_dots:
                self.play(d.animate.set_fill(RED).set_opacity(0.7),
                          run_time=0.02)

        # ---- 4. EARLY ----
        step4 = Text("4. EARLY  --  warning minutes sooner",
                     color=GREEN, font_size=14).to_edge(DOWN)
        warning = Text("TORNADO WARNING",
                      color=RED, font_size=18, weight="BOLD")
        warning.move_to(LEFT * 4 + UP * 0.4)
        self.play(Transform(step, step4), FadeIn(warning), run_time=0.6)

        self.wait(0.8)