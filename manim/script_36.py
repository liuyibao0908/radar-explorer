"""Article 36 \u4e2d\u6587 \u2014 \u53e3\u5f84\u4e0e\u6ce2\u675f\u5bbd\u5ea6\uff1a\u5c0f\u7897\u3001\u4e2d\u7897\u3001\u5927\u7897\u3002"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, Polygon, Dot, Arc,
    UP, DOWN, LEFT, RIGHT, UP, FadeIn, FadeOut, Write, Transform, GrowFromCenter,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)

CJK = "Microsoft YaHei"


def wedge(width_deg, color, length=3.2):
    half = np.deg2rad(width_deg) / 2
    tip = np.array([0.0, 0.0, 0.0])
    pts = [tip]
    steps = 14
    for k in range(steps + 1):
        a = half - (2 * half) * (k / steps)
        pts.append(np.array([length * np.cos(a), length * np.sin(a), 0.0]))
    return Polygon(*pts, stroke_color=color, stroke_width=2,
                   fill_color=color, fill_opacity=0.24)


class RadarArticle36(Scene):
    def construct(self):
        np.random.seed(36)
        self.camera.background_color = "#061a30"

        title = Text("\u53e3\u5f84\u4e0e\u6ce2\u675f\u5bbd\u5ea6", color=TEAL,
                     font=CJK, font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        radar = np.array([-3.6, 0.4, 0.0])

        sizes = [
            ("1. \u5c0f\u7897 \u2014 \u6ce2\u675f\u5bbd\uff0c\u5f31\u800c\u7b49\u4e8c", 0.42, 62, GREY),
            ("2. \u4e2d\u7897 \u2014 \u6ce2\u675f\u6536\u7d27\uff0c\u589e\u76ca\u4e0a\u5347", 0.72, 34, ORANGE),
            ("3. \u5927\u7897 \u2014 \u6ce2\u675f\u7a84\uff0c\u8fb9\u7f18\u5f3a", 1.05, 16, YELLOW),
        ]

        prev_dish = None
        prev_wedge = None
        prev_label = None
        prev_reach = None

        def swap(old, new, run_time=0.3):
            """Cross-fade by removing first — Transform() on same-position
            text produces an ugly ghosted overlap."""
            if old is None:
                self.play(Write(new), run_time=run_time)
            else:
                self.play(FadeOut(old), run_time=run_time * 0.4)
                self.play(FadeIn(new), run_time=run_time * 0.6)

        for label, dish_r, beam_deg, col in sizes:
            t = Text(label, color=col, font=CJK, font_size=19,
                     weight="BOLD").to_edge(DOWN)
            swap(prev_label, t)
            prev_label = t

            dish = Arc(
                radius=dish_r,
                start_angle=np.deg2rad(115),
                angle=np.deg2rad(130),
                stroke_color=col,
                stroke_width=6,
            ).move_to(radar)

            w = wedge(beam_deg, col)
            w.move_to(radar)

            reach = Line(radar, radar + RIGHT * (2.0 + dish_r * 1.6),
                         stroke_color=col, stroke_width=1.6, stroke_opacity=0.5)

            if prev_dish is None:
                self.play(FadeIn(dish), FadeIn(w), FadeIn(reach), run_time=0.6)
            else:
                self.play(
                    Transform(prev_dish, dish),
                    Transform(prev_wedge, w),
                    Transform(prev_reach, reach),
                    run_time=0.7,
                )
            prev_dish, prev_wedge, prev_reach = dish, w, reach

        tradeoff = Text("\u7cbe\u5ea6\u4e0a\u5347 \u2192 \u626b\u63cf\u53d8\u6162",
                        color=PURPLE, font=CJK, font_size=20,
                        weight="BOLD").to_edge(DOWN)
        swap(prev_label, tradeoff, run_time=0.4)
        self.wait(1.2)