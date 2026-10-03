"""Article 34 \u2014 How to Spot Heavy Rain, Hail, and Tornadoes (EN). Animation:

1. RAIN  -- large yellow / red cell, no rotation
2. HOOK  -- a finger of red juts out of the cell
3. COUPLET  -- opposite winds on either side of the hook
4. WARN  -- the radar lights up a tornado warning
"""
from manim import (
    Scene, VGroup, Dot, Circle, Rectangle, Text, Line, Arrow, Polygon,
    Ellipse,
    UP, DOWN, LEFT, RIGHT, UR, FadeIn, FadeOut, Write, Create,
    Transform, YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, np
)


class RadarArticle34(Scene):
    def construct(self):
        np.random.seed(34)
        self.camera.background_color = "#061a30"

        title = Text("Severe Storm Signatures", color=TEAL,
                     font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # map background: 7x5 grid of square pixels
        grid_w, grid_h = 7, 5
        cell = 0.42
        grid = VGroup()
        for r in range(grid_h):
            for c in range(grid_w):
                x = -2.6 + c * cell
                y = 0.6 - r * cell
                p = Rectangle(width=cell * 0.92, height=cell * 0.92,
                              stroke_color="#22323C", stroke_width=0.5,
                              fill_color="#0F1A1F", fill_opacity=1)
                p.move_to(np.array([x, y, 0.0]))
                grid.add(p)

        self.play(FadeIn(grid), run_time=0.5)

        step = Text("1. RAIN  --  large yellow / red cell, no rotation",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

        # paint a heavy rain cell in the middle
        rain_cells = VGroup()
        rain_centers = [(2, 1, '#3fc23f'), (2, 2, '#FFD93D'),
                        (1, 2, '#FFD93D'), (3, 1, '#FFD93D'),
                        (2, 3, '#FF8a3a'), (1, 1, '#FFD93D'),
                        (3, 2, '#FFD93D'), (2, 0, '#3fc23f')]
        for c, r, col in rain_centers:
            x = -2.6 + c * cell
            y = 0.6 - r * cell
            p = Rectangle(width=cell * 0.92, height=cell * 0.92,
                          stroke_color=col, stroke_width=0.5,
                          fill_color=col, fill_opacity=0.9)
            p.move_to(np.array([x, y, 0.0]))
            rain_cells.add(p)
        self.play(FadeIn(rain_cells, lag_ratio=0.05), run_time=0.5)

        # 2. HOOK: a finger extends to the south-west
        step2 = Text("2. HOOK  --  a finger of red juts out of the cell",
                     color=RED, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)

        hook_cells = VGroup()
        hook_shape = [(1, 0, '#FF8a3a'), (0, 0, '#d83838'), (1, -1, '#d83838')]
        for c, r, col in hook_shape:
            x = -2.6 + c * cell
            y = 0.6 - r * cell
            p = Rectangle(width=cell * 0.92, height=cell * 0.92,
                          stroke_color=col, stroke_width=0.5,
                          fill_color=col, fill_opacity=0.9)
            p.move_to(np.array([x, y, 0.0]))
            hook_cells.add(p)
        self.play(FadeIn(hook_cells, lag_ratio=0.05), run_time=0.4)

        # 3. COUPLET: opposite-coloured arrows next to the hook
        step3 = Text("3. COUPLET  --  opposite winds on either side of the hook",
                     color=YELLOW, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)
        # left of hook: red (outbound)
        a_in = Arrow(np.array([-2.4, 1.4, 0]), np.array([-1.9, 1.4, 0]),
                    color=GREEN, stroke_width=4, buff=0.05)
        a_out = Arrow(np.array([-1.9, 1.0, 0]), np.array([-2.4, 1.0, 0]),
                     color=RED, stroke_width=4, buff=0.05)
        self.play(FadeIn(a_in), FadeIn(a_out), run_time=0.5)

        # 4. WARN: tornado warning text
        step4 = Text("4. WARN  --  the radar lights up a tornado warning",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)
        warn = Text("TORNADO WARNING",
                    color=GREEN, font_size=30, weight="BOLD")
        warn.move_to(DOWN * 0.5)
        self.play(FadeIn(warn), run_time=0.6)

        self.wait(0.8)