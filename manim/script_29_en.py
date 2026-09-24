"""Article 29 — How Does the Beam Scan Electronically? (EN). Animation:

1. FLAT  — equal phase, the beam points straight ahead
2. TILT  — a small phase step tilts the wavefront
3. SWEEP — ramping the step sweeps the beam across the sky
4. MULTI — several phase sets make several beams at once
"""
from manim import (
    Scene, VGroup, Dot, Line, Arrow, Text,
    UP, DOWN, LEFT, RIGHT, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, YELLOW, GREEN, GREY, TEAL, RED, np
)


class RadarArticle29(Scene):
    def construct(self):
        np.random.seed(29)
        self.camera.background_color = "#061a30"

        title = Text("Electronic Scanning", color=TEAL,
                     font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # --- the array: a static row of elements ----------------------
        origin = DOWN * 2.2
        N = 8
        elements = VGroup(*[
            Dot(point=origin + RIGHT * (i - (N - 1) / 2) * 1.0,
                radius=0.09, color="#54A0FF")
            for i in range(N)
        ])
        panel = Line(origin + LEFT * 4.0, origin + RIGHT * 4.0,
                     color="#152040", stroke_width=6)
        panel_label = Text("STATIC PANEL  --  never moves",
                           color=GREY, font_size=12)\
            .next_to(panel, DOWN, buff=0.25)
        self.play(Create(panel), FadeIn(elements), Write(panel_label), run_time=0.6)

        # --- beam + wavefront, grouped so they rotate together --------
        def make_beam(angle_deg, colour=YELLOW, width=3, opacity=1.0):
            d = np.array([np.sin(np.radians(angle_deg)),
                          np.cos(np.radians(angle_deg)), 0.0])
            beam = Line(origin, origin + d * 3.2, color=colour,
                        stroke_width=width, stroke_opacity=opacity)
            perp = np.array([-d[1], d[0], 0.0])
            mid = origin + d * 2.6
            wave = Line(mid - perp * 1.2, mid + perp * 1.2,
                        color="#FFD93D", stroke_width=2,
                        stroke_opacity=0.85 * opacity)
            return VGroup(beam, wave)

        group = make_beam(0)

        step = Text("1. FLAT  --  equal phase, beam points straight ahead",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)
        self.play(Create(group[0]), Create(group[1]), run_time=0.6)

        # --- 2. TILT --------------------------------------------------
        step2 = Text("2. TILT  --  a small phase step tilts the wavefront",
                     color=YELLOW, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)
        phi = Text("phase step  =  15 deg", color="#FFD93D", font_size=13)\
            .move_to(LEFT * 4.6 + UP * 2.2)
        self.play(Rotate(group, angle=-12 * DEGREES, about_point=origin),
                  Write(phi), run_time=0.7)

        # --- 3. SWEEP: ramp the phase step ----------------------------
        step3 = Text("3. SWEEP  --  ramping the step sweeps the beam",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        sweep_track = Arrow(origin + LEFT * 1.0, origin + LEFT * 1.0 + UP * 2.2,
                            color=GREEN, stroke_width=2, buff=0.05)
        tip_trace = VGroup()
        for ang in (0, -10, -20, -30, -40):
            tip_trace.add(Dot(point=origin + np.array(
                [np.sin(np.radians(ang)) * 3.2,
                 np.cos(np.radians(ang)) * 3.2, 0.0]),
                radius=0.05, color=GREEN, fill_opacity=0.5))

        phi_big = Text("phase step  =  90 deg", color="#FFD93D", font_size=13)\
            .move_to(LEFT * 4.6 + UP * 2.2)

        self.play(
            Rotate(group, angle=-28 * DEGREES, about_point=origin,
                   rate_func=lambda t: t),
            Transform(phi, phi_big),
            FadeIn(tip_trace),
            run_time=2.2,
        )
        self.play(Create(sweep_track), run_time=0.4)

        # --- 4. MULTI-BEAM --------------------------------------------
        step4 = Text("4. MULTI  --  several phase sets make several beams",
                     color=TEAL, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4),
                  FadeOut(group), FadeOut(tip_trace),
                  FadeOut(phi), FadeOut(sweep_track),
                  run_time=0.6)

        multi = VGroup(
            make_beam(30, TEAL, 2, 0.9),
            make_beam(0, YELLOW, 3, 1.0),
            make_beam(-30, RED, 2, 0.9),
        )
        targets = VGroup(*[
            Dot(point=origin + np.array([np.sin(np.radians(a)) * 3.2,
                                         np.cos(np.radians(a)) * 3.2, 0.0]),
                radius=0.10, color=c)
            for a, c in ((30, TEAL), (0, YELLOW), (-30, RED))
        ])
        self.play(
            FadeIn(multi[0], shift=UP * 0.4),
            FadeIn(multi[1], shift=UP * 0.4),
            FadeIn(multi[2], shift=UP * 0.4),
            FadeIn(targets),
            run_time=0.9,
        )

        # --- closing note --------------------------------------------
        note = Text("no moving parts  --  just timing",
                    color=GREY, font_size=13).move_to(LEFT * 4.4 + UP * 2.3)
        self.play(Write(note), run_time=0.5)

        self.wait(0.8)
