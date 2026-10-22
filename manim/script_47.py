"""Article 47 \u4e2d\u6587 \u2014 \u566a\u58f0\u5e95\u62ac\u8d77\u6765\uff0c\u541e\u6389\u56fa\u5b9a\u7684\u4fe1\u53f7\uff1b\u6ee4\u6ce2\u540e\u6062\u590d\uff1b\u518d\u5e72\u6270\u3002"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, Axes, LaggedStart, RoundedRectangle,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create,
    UP, DOWN, LEFT, RIGHT, ORIGIN,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)

CJK = "Microsoft YaHei"


def swap_label(scene, old, new, run_time=0.3):
    """Fade out then in. Transform() on same-position Text ghosts glyphs."""
    if old is None:
        scene.play(Write(new), run_time=run_time)
    else:
        scene.play(FadeOut(old), run_time=run_time * 0.4)
        scene.play(FadeIn(new), run_time=run_time * 0.6)


class RadarArticle47(Scene):
    def construct(self):
        np.random.seed(47)
        self.camera.background_color = "#061a30"

        title = Text("\u5f53\u566a\u58f0\u5e95\u62ac\u8d77\u6765", color=TEAL,
                     font=CJK, font_size=27, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        box = Rectangle(width=8.6, height=3.4, stroke_color="#2A3B4C",
                        stroke_width=2, fill_color="#08131F",
                        fill_opacity=1)
        box.move_to(np.array([0, 0.55, 0]))
        self.play(FadeIn(box), run_time=0.3)

        y_top = 2.1
        y_bot = -1.0

        grid = VGroup()
        for k in range(1, 4):
            y = y_bot + (y_top - y_bot) * k / 4
            grid.add(Line([-4.2, y, 0], [4.2, y, 0],
                          stroke_color="#16232F", stroke_width=1))
        self.play(FadeIn(grid), run_time=0.2)

        xs = np.linspace(-4.1, 4.1, 240)
        bump = 1.05 * np.exp(-(xs ** 2) / 0.55)
        sig = VGroup(*[
            Line([xs[i], y_bot + bump[i], 0],
                 [xs[i + 1], y_bot + bump[i + 1], 0],
                 stroke_color=GREEN, stroke_width=2)
            for i in range(len(xs) - 1)
        ])

        rng = np.random.default_rng(47)
        noise = VGroup(*[
            Dot([xs[i], y_bot + rng.uniform(-0.05, 0.22), 0],
                radius=0.026, color=RED)
            for i in range(0, len(xs), 2)
        ])

        floor = Line([-4.2, y_bot, 0], [4.2, y_bot, 0],
                     stroke_color=RED, stroke_width=1.6)
        floor_lbl = Text("\u566a\u58f0\u5e95", color=RED, font=CJK, font_size=13)
        floor_lbl.next_to(floor, RIGHT, buff=0.12).shift(LEFT * 0.75)

        sig_lbl = Text("\u56de\u6ce2", color=GREEN, font=CJK, font_size=13)
        sig_lbl.move_to(np.array([0.0, y_bot + 1.35, 0]))

        step_pos = np.array([0, -2.6, 0])
        step = None

        s1 = Text("1. \u5e72\u51c0\u2014\u2014\u56de\u6ce2\u5728\u566a\u58f0\u5e95\u4e4b\u4e0a",
                  color=GREEN, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s1)
        step = s1

        self.play(FadeIn(noise), FadeIn(floor), FadeIn(floor_lbl), run_time=0.4)
        self.play(LaggedStart(*[Create(l) for l in sig], lag_ratio=0.002),
                  run_time=0.9)
        self.play(FadeIn(sig_lbl), run_time=0.3)
        self.wait(0.5)

        s2 = Text("2. \u88ab\u5e72\u6270\u2014\u2014\u566a\u58f0\u5e95\u62ac\u8d77\u6765\u541e\u6389\u5b83",
                  color=RED, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s2)
        step = s2

        lifted = VGroup(*[
            Dot([p.get_center()[0], p.get_center()[1] + 0.72, 0],
                radius=0.026, color=RED)
            for p in noise
        ])
        self.play(Transform(noise, lifted), run_time=0.9)
        self.play(floor.animate.shift(UP * 0.72), run_time=0.9)
        self.play(sig.animate.set_opacity(0.25), sig_lbl.animate.set_opacity(0.25),
                  run_time=0.5)
        self.wait(0.5)

        s3 = Text("3. \u6ee4\u6ce2\u2014\u2014\u6536\u7a84\u5e26\u5bbd\uff0c\u6062\u590d\u5b83",
                  color=BLUE, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s3)
        step = s3

        narrow_band = RoundedRectangle(
            width=1.9, height=2.5, corner_radius=0.12,
            stroke_color=BLUE, stroke_width=2,
            fill_color=BLUE, fill_opacity=0.10)
        narrow_band.move_to(np.array([0.0, y_bot + 0.5, 0]))
        self.play(FadeIn(narrow_band), run_time=0.4)

        quiet = VGroup(*[
            Dot([p.get_center()[0], y_bot + 0.04, 0],
                radius=0.022, color=RED)
            for p in noise
        ])
        self.play(Transform(noise, quiet), run_time=0.6)
        self.play(floor.animate.shift(DOWN * 0.72), run_time=0.6)
        self.play(sig.animate.set_opacity(1.0), sig_lbl.animate.set_opacity(1.0),
                  run_time=0.5)
        self.wait(0.5)

        s4 = Text("4. \u518d\u5e72\u6270\u2014\u2014\u5e72\u6270\u673a\u6362\u5230\u65b0\u9891\u7387",
                  color=PURPLE, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s4)

        self.play(FadeOut(narrow_band), run_time=0.35)
        self.play(floor.animate.shift(UP * 0.55), run_time=0.6)
        self.play(Transform(noise, lifted), run_time=0.6)
        self.play(sig.animate.set_opacity(0.3), sig_lbl.animate.set_opacity(0.3),
                  run_time=0.4)

        self.wait(1.6)