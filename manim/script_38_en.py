"""Article 38 EN \u2014 Amplify then filter: one weak echo buried in noise."""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, Axes, NumberLine,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create,
    UP, DOWN, LEFT, RIGHT, ORIGIN,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)


def swap_label(scene, old, new, run_time=0.3):
    """Fade out then in. Transform() on same-position Text ghosts glyphs."""
    if old is None:
        scene.play(Write(new), run_time=run_time)
    else:
        scene.play(FadeOut(old), run_time=run_time * 0.4)
        scene.play(FadeIn(new), run_time=run_time * 0.6)


class RadarArticle38(Scene):
    def construct(self):
        np.random.seed(38)
        self.camera.background_color = "#061a30"

        title = Text("Signal and Noise", color=TEAL,
                     font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        ax = Axes(
            x_range=[-6, 6, 6],
            y_range=[-2.2, 2.2, 2.2],
            x_length=10.5,
            y_length=3.4,
            axis_config={
                "stroke_color": "#2A3B4C",
                "stroke_width": 1.5,
                "include_ticks": False,
            },
            tips=False,
        ).shift(UP * 0.35)

        self.play(Create(ax), run_time=0.5)

        rng = np.random.default_rng(38)
        xs = np.linspace(-6, 6, 260)
        noise = rng.normal(0, 0.42, xs.shape) + np.sin(xs * 1.2) * 0.2

        def build(echo_h, noise_scale, noise_bias=0.0):
            ys = noise * noise_scale + noise_bias
            ys += echo_h * np.exp(-((xs - 1.6) ** 2) / 0.18)
            return VGroup(*[
                Line(ax.c2p(xs[i], ys[i]), ax.c2p(xs[i + 1], ys[i + 1]),
                     stroke_color=col, stroke_width=1.6)
                for i in range(len(xs) - 1)
                for col in [GREY]
            ])

        # ---------- 1. INCOMING ----------
        s1 = Text("1. INCOMING  \u2014  one weak echo buried in noise",
                  color=GREY, font_size=18, weight="BOLD").to_edge(DOWN)
        step = None
        swap_label(self, step, s1)
        step = s1

        base_y = -0.05
        trace = build(echo_h=0.5, noise_scale=1.0).move_to(
            np.array([0, base_y, 0]))
        self.play(FadeIn(trace), run_time=0.7)

        echo_mark = Text("echo", color=YELLOW, font_size=15)
        echo_mark.move_to(ax.c2p(1.6, 1.05) + np.array([0, base_y, 0]))
        self.play(FadeIn(echo_mark), run_time=0.4)

        # ---------- 2. AMPLIFY ----------
        s2 = Text("2. AMPLIFY  \u2014  everything grows together",
                  color=ORANGE, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s2)
        step = s2

        loud = build(echo_h=0.5, noise_scale=2.3).move_to(
            np.array([0, base_y, 0]))
        self.play(Transform(trace, loud), run_time=0.7)
        self.play(echo_mark.animate.set_color(ORANGE), run_time=0.2)

        # ---------- 3. FILTER ----------
        s3 = Text("3. FILTER  \u2014  the noise floor drops away",
                  color=BLUE, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s3)
        step = s3

        floor_line = Line(ax.c2p(-6, 0), ax.c2p(6, 0),
                          stroke_color=BLUE, stroke_width=2,
                          stroke_opacity=0.7).shift(np.array([0, base_y, 0]))
        floor_label = Text("noise floor", color=BLUE, font_size=14)
        floor_label.next_to(floor_line, UP, buff=0.12).shift(
            np.array([0, base_y, 0]) + LEFT * 3.6)
        self.play(FadeIn(floor_line), FadeIn(floor_label), run_time=0.4)

        clean = build(echo_h=0.62, noise_scale=0.22).move_to(
            np.array([0, base_y, 0]))
        self.play(Transform(trace, clean), run_time=0.8)

        # ---------- 4. CLEAN ----------
        s4 = Text("4. CLEAN  \u2014  a pulse you can actually use",
                  color=GREEN, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s4)
        step = s4

        trace.set_stroke(GREEN)
        echo_mark.set_color(YELLOW)
        self.play(FadeOut(floor_label), run_time=0.3)
        self.play(FadeOut(floor_line), run_time=0.3)

        peak = Text("SNR", color=GREEN, font_size=22, weight="BOLD")
        peak.move_to(ax.c2p(1.6, 1.72) + np.array([0, base_y, 0]))
        self.play(Write(peak), run_time=0.5)
        self.wait(1.5)