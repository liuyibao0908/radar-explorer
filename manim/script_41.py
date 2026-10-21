"""Article 41 \u4e2d\u6587 \u2014 \u591a\u666e\u52d2\u5206\u79bb\uff1a\u8ddd\u79bb\u76f8\u540c\uff0c\u901f\u5ea6\u4e0d\u540c\u3002"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, DashedLine, Axes,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create, LaggedStart,
    UP, DOWN, LEFT, RIGHT, ORIGIN,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)

CJK = "Microsoft YaHei"
N_PULSE = 12


def swap_label(scene, old, new, run_time=0.3):
    """Fade out then in. Transform() on same-position Text ghosts glyphs."""
    if old is None:
        scene.play(Write(new), run_time=run_time)
    else:
        scene.play(FadeOut(old), run_time=run_time * 0.4)
        scene.play(FadeIn(new), run_time=run_time * 0.6)


class RadarArticle41(Scene):
    def construct(self):
        np.random.seed(41)
        self.camera.background_color = "#061a30"

        title = Text("\u591a\u666e\u52d2\u5206\u79bb", color=TEAL,
                     font=CJK, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        ax = Axes(
            x_range=[0, N_PULSE + 1, 2],
            y_range=[-1.6, 1.6, 3.2],
            x_length=9.5,
            y_length=2.5,
            axis_config={"stroke_color": "#2A3B4C", "stroke_width": 1.4,},
        ).shift(UP * 0.55)
        self.play(Create(ax), run_time=0.4)

        mid = np.array([0, ax.get_center()[1], 0])
        pulse_x = [ax.c2p(i + 1, 0)[0] for i in range(N_PULSE)]

        step = None

        s1 = Text("1. \u8ddd\u79bb\u2014\u2014\u4e24\u4e2a\u76ee\u6807\u5728\u540c\u4e00\u4e2a\u8ddd\u79bb\u5355\u5143",
                  color=GREY, font=CJK, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s1)
        step = s1

        clutter_dot = Dot(ax.c2p(4, -1.15), radius=0.1, color=ORANGE)
        target_dot = Dot(ax.c2p(4, 1.15), radius=0.1, color=GREEN)
        c_lbl = Text("\u9759\u6b62", color=ORANGE, font=CJK, font_size=12)
        t_lbl = Text("\u8fd0\u52a8", color=GREEN, font=CJK, font_size=12)
        c_lbl.next_to(clutter_dot, DOWN, buff=0.15)
        t_lbl.next_to(target_dot, UP, buff=0.15)

        rng = DashedLine(ax.c2p(4, -1.6), ax.c2p(4, 1.6),
                         dash_length=0.08, stroke_color=WHITE,
                         stroke_width=1.2, stroke_opacity=0.5)
        rng_lbl = Text("\u540c\u4e00\u4e2a\u8ddd\u79bb\u5355\u5143", color=WHITE,
                       font=CJK, font_size=11)
        rng_lbl.next_to(rng, UP, buff=0.12).shift(LEFT * 1.9)

        self.play(FadeIn(rng), FadeIn(rng_lbl), run_time=0.3)
        self.play(FadeIn(clutter_dot), FadeIn(target_dot), run_time=0.3)
        self.play(FadeIn(c_lbl), FadeIn(t_lbl), run_time=0.3)
        self.wait(0.5)

        s2 = Text("2. \u8de8\u8109\u51b2\u2014\u2014\u8fd0\u52a8\u76ee\u6807\u6bcf\u4e2a\u8109\u51b2\u90fd\u5728\u53d8\u76f8\u4f4d",
                  color=YELLOW, font=CJK, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s2)
        step = s2

        still_pts = VGroup()
        moving_pts = VGroup()
        phase = 0.0
        for i in range(N_PULSE):
            y_still = -1.15
            y_move = 1.15 * np.cos(phase)
            still_pts.add(Dot([pulse_x[i], mid[1] + y_still, 0],
                              radius=0.05, color=ORANGE))
            moving_pts.add(Dot([pulse_x[i], mid[1] + y_move, 0],
                               radius=0.05, color=GREEN))
            phase += np.deg2rad(34)

        self.play(LaggedStart(*[FadeIn(p) for p in still_pts], lag_ratio=0.04), run_time=0.6)
        self.play(LaggedStart(*[FadeIn(p) for p in moving_pts], lag_ratio=0.04), run_time=0.6)
        self.wait(0.6)

        s3 = Text("3. FFT\u2014\u2014\u76f8\u4f4d\u79fb\u53d8\u6210\u4e00\u4e2a\u5cf0",
                  color=BLUE, font=CJK, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s3)
        step = s3

        self.play(FadeOut(still_pts), FadeOut(moving_pts),
                  FadeOut(rng), FadeOut(rng_lbl),
                  FadeOut(clutter_dot), FadeOut(target_dot),
                  FadeOut(c_lbl), FadeOut(t_lbl), run_time=0.5)

        spec = Axes(
            x_range=[-1, 1, 0.25],
            y_range=[0, 3.2, 0.8],
            x_length=7.2,
            y_length=2.0,
            axis_config={"stroke_color": "#2A3B4C", "stroke_width": 1.4,},
        ).shift(UP * 0.15)
        self.play(Create(spec), run_time=0.5)

        xs = np.linspace(-1, 1, 220)
        ys = (2.55 * np.exp(-((xs) ** 2) / 0.006)
              + 1.85 * np.exp(-((xs - 0.45) ** 2) / 0.004))
        trace = VGroup(*[
            Line(spec.c2p(xs[i], ys[i]), spec.c2p(xs[i + 1], ys[i + 1]),
                 stroke_color=YELLOW, stroke_width=1.6)
            for i in range(len(xs) - 1)
        ])
        self.play(LaggedStart(*[Create(l) for l in trace], lag_ratio=0.004),
                  run_time=1.0)

        zero_line = DashedLine(spec.c2p(0, 0), spec.c2p(0, 3.0),
                               dash_length=0.07, stroke_color=ORANGE,
                               stroke_width=1.4)
        zero_lbl = Text("\u6742\u6ce2", color=ORANGE, font=CJK, font_size=11)
        zero_lbl.next_to(spec.c2p(0, 2.55), LEFT, buff=0.12)
        ac_lbl = Text("\u98de\u673a", color=YELLOW, font=CJK, font_size=11)
        ac_lbl.next_to(spec.c2p(0.45, 1.85), UP, buff=0.14)

        self.play(FadeIn(zero_line), FadeIn(zero_lbl), FadeIn(ac_lbl),
                  run_time=0.5)
        self.wait(1.2)