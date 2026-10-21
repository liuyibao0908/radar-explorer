"""Article 41 EN \u2014 Doppler separation: range is the same, speed is not.

Four beats:
  1. both objects sit at the same range cell
  2. across pulses the moving target's phase shifts
  3. the FFT turns that shift into a peak
  4. clutter at zero speed, aircraft at its own
"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, DashedLine, Axes,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create, LaggedStart,
    UP, DOWN, LEFT, RIGHT, ORIGIN,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)

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

        title = Text("Doppler Separation", color=TEAL,
                     font_size=28, weight="BOLD").to_edge(UP)
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

        # ---------- 1. RANGE: both at the same distance ----------
        s1 = Text("1. RANGE  \u2014  both objects sit at the same distance",
                  color=GREY, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s1)
        step = s1

        clutter_dot = Dot(ax.c2p(4, -1.15), radius=0.1, color=ORANGE)
        target_dot = Dot(ax.c2p(4, 1.15), radius=0.1, color=GREEN)
        c_lbl = Text("still", color=ORANGE, font_size=12)
        t_lbl = Text("moving", color=GREEN, font_size=12)
        c_lbl.next_to(clutter_dot, DOWN, buff=0.15)
        t_lbl.next_to(target_dot, UP, buff=0.15)

        rng = DashedLine(ax.c2p(4, -1.6), ax.c2p(4, 1.6),
                         dash_length=0.08, stroke_color=WHITE,
                         stroke_width=1.2, stroke_opacity=0.5)
        rng_lbl = Text("same range bin", color=WHITE, font_size=11)
        rng_lbl.next_to(rng, UP, buff=0.12).shift(LEFT * 1.5)

        self.play(FadeIn(rng), FadeIn(rng_lbl), run_time=0.3)
        self.play(FadeIn(clutter_dot), FadeIn(target_dot), run_time=0.3)
        self.play(FadeIn(c_lbl), FadeIn(t_lbl), run_time=0.3)
        self.wait(0.5)

        # ---------- 2. ACROSS PULSES ----------
        s2 = Text("2. ACROSS PULSES  \u2014  the moving target shifts phase",
                  color=YELLOW, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s2)
        step = s2

        # still target: flat line of dots
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

        # ---------- 3. FFT ----------
        s3 = Text("3. FFT  \u2014  the phase shift becomes a peak",
                  color=BLUE, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s3)
        step = s3

        self.play(FadeOut(still_pts), FadeOut(moving_pts),
                  FadeOut(rng), FadeOut(rng_lbl),
                  FadeOut(clutter_dot), FadeOut(target_dot),
                  FadeOut(c_lbl), FadeOut(t_lbl), run_time=0.5)

        # Doppler spectrum: clutter at zero, aircraft offset
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
        zero_lbl = Text("clutter", color=ORANGE, font_size=11)
        zero_lbl.next_to(spec.c2p(0, 2.55), LEFT, buff=0.12)
        ac_lbl = Text("aircraft", color=YELLOW, font_size=11)
        ac_lbl.next_to(spec.c2p(0.45, 1.85), UP, buff=0.14)

        self.play(FadeIn(zero_line), FadeIn(zero_lbl), FadeIn(ac_lbl),
                  run_time=0.5)
        self.wait(1.2)