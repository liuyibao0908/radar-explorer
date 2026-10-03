"""Article 34 \u2014 \u600e\u4e48\u770b\u51fa\u66e8\u96e8\u3001\u51b0\u96f9\u3001\u9f99\u5377\uff08\u4e2d\u6587\uff09.

\u52a8\u753b\u56db\u6b65\uff1a
1. \u96e8 \u2014 \u5927\u9762\u79ef\u9ec4\u7ea2\u5355\u4f53\uff0c\u65e0\u65cb\u8f6c
2. \u94a9 \u2014 \u5357\u4fa7\u51fa\u73b0\u4e00\u6839\u7ea2\u8272\u7684\u94a9\u5b50
3. \u5bf9 \u2014 \u94a9\u5b50\u4e24\u4fa7\u98ce\u5411\u76f8\u53cd
4. \u9884\u8b66 \u2014 \u96f7\u8fbe\u70b9\u4eae\u9f99\u5377\u9884\u8b66
"""
from manim import (
    Scene, VGroup, Dot, Circle, Rectangle, Text, Line, Arrow, Polygon,
    Ellipse,
    UP, DOWN, LEFT, RIGHT, UR, FadeIn, FadeOut, Write, Create,
    Transform, YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, np
)

CJK = "Microsoft YaHei"


class RadarArticle34(Scene):
    def construct(self):
        np.random.seed(34)
        self.camera.background_color = "#061a30"

        title = Text("\u4e25\u91cd\u98ce\u66b4\u7279\u5f81", color=TEAL, font=CJK,
                     font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

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

        step = Text("1. \u96e8 \u2014 \u5927\u9762\u79ef\u9ec4\u7ea2\u5355\u4f53\uff0c\u65e0\u65cb\u8f6c",
                    color=GREY, font=CJK, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)

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

        step2 = Text("2. \u94a9 \u2014 \u5357\u4fa7\u51fa\u73b0\u4e00\u6839\u7ea2\u8272\u7684\u94a9\u5b50",
                     color=RED, font=CJK, font_size=14).to_edge(DOWN)
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

        step3 = Text("3. \u5bf9 \u2014 \u94a9\u5b50\u4e24\u4fa7\u98ce\u5411\u76f8\u53cd",
                     color=YELLOW, font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)
        a_in = Arrow(np.array([-2.4, 1.4, 0]), np.array([-1.9, 1.4, 0]),
                    color=GREEN, stroke_width=4, buff=0.05)
        a_out = Arrow(np.array([-1.9, 1.0, 0]), np.array([-2.4, 1.0, 0]),
                     color=RED, stroke_width=4, buff=0.05)
        self.play(FadeIn(a_in), FadeIn(a_out), run_time=0.5)

        step4 = Text("4. \u9884\u8b66 \u2014 \u96f7\u8fbe\u70b9\u4eae\u9f99\u5377\u9884\u8b66",
                     color=GREEN, font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)
        warn = Text("\u9f99\u5377\u9884\u8b66",
                    color=GREEN, font=CJK, font_size=30, weight="BOLD")
        warn.move_to(DOWN * 0.5)
        self.play(FadeIn(warn), run_time=0.6)

        self.wait(0.8)