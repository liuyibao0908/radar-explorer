"""Article 40 EN \u2014 The PPI sweep: one pulse, many pulses, a picture, then decay."""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, Sector, DashedLine,
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


# targets as (angle_deg, radius_frac, strength, colour)
TARGETS = [
    (52, 0.78, 1.00, YELLOW),
    (140, 0.52, 0.55, GREEN),
    (206, 0.66, 0.70, ORANGE),
    (300, 0.40, 0.40, GREEN),
    (18, 0.34, 0.30, GREY),
    (248, 0.86, 0.85, YELLOW),
]
R = 2.35


class RadarArticle40(Scene):
    def construct(self):
        np.random.seed(40)
        self.camera.background_color = "#061a30"

        title = Text("How the Sweep Builds a Picture", color=TEAL,
                     font_size=26, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        centre = np.array([0.0, 0.35, 0])

        scope = Circle(radius=R, stroke_color="#2A3B4C", stroke_width=2,
                       fill_color="#08131F", fill_opacity=1)
        scope.move_to(centre)
        self.play(FadeIn(scope), run_time=0.4)

        rings = VGroup()
        for f in (0.25, 0.5, 0.75):
            # Circle() has no stroke_dasharray in Manim 0.21; use a dashed
            # polyline instead so the rings read as reference circles.
            r = DashedLine(
                start=[centre[0] - R * f, centre[1], 0],
                end=[centre[0] + R * f, centre[1], 0],
                dash_length=0.09, stroke_color="#1E3040", stroke_width=1,
            )
            r.add(DashedLine(
                start=[centre[0], centre[1] - R * f, 0],
                end=[centre[0], centre[1] + R * f, 0],
                dash_length=0.09, stroke_color="#1E3040", stroke_width=1,
            ))
            rings.add(r)
        self.play(FadeIn(rings), run_time=0.3)

        spoke = Line([centre[0], centre[1], 0],
                     [centre[0] + R, centre[1], 0],
                     stroke_color=GREEN, stroke_width=2.5, stroke_opacity=0.9)

        hub = Dot(centre, radius=0.07, color=GREEN)
        self.play(FadeIn(hub), run_time=0.2)

        step = None

        # ---------- 1. ONE PULSE ----------
        s1 = Text("1. ONE PULSE  \u2014  a single line, one direction only",
                  color=GREY, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s1)
        step = s1

        self.play(FadeIn(spoke), run_time=0.4)
        self.wait(0.5)

        # ---------- 2. MANY PULSES: rotate and drop blips ----------
        s2 = Text("2. MANY PULSES  \u2014  blips appear at each target",
                  color=YELLOW, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s2)
        step = s2

        blips = VGroup()
        for ang, rf, strength, col in TARGETS:
            a = np.deg2rad(ang)
            pos = centre + np.array([R * rf * np.cos(a),
                                     R * rf * np.sin(a), 0])
            size = 0.05 + 0.075 * strength
            dot = Dot(pos, radius=size, color=col)
            # drop each blip as the spoke sweeps past it
            self.play(spoke.animate.become(
                Line(centre,
                     [centre[0] + R * np.cos(a), centre[1] + R * np.sin(a), 0],
                     stroke_color=GREEN, stroke_width=2.5, stroke_opacity=0.9)),
                run_time=0.16)
            self.play(FadeIn(dot), run_time=0.10)
            blips.add(dot)

        # one full revolution back to start
        self.play(spoke.animate.become(
            Line([centre[0], centre[1], 0],
                 [centre[0] + R, centre[1], 0],
                 stroke_color=GREEN, stroke_width=2.5, stroke_opacity=0.9)),
            run_time=0.4)

        # ---------- 3. PAINTED ----------
        s3 = Text("3. PAINTED  \u2014  the accumulated picture",
                  color=GREEN, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s3)
        step = s3

        coast = Circle(radius=R * 0.62, stroke_color=BLUE, stroke_width=1.6,
                       stroke_opacity=0.45).move_to(centre + LEFT * 0.35)
        track = Line(centre + np.array([R * 0.78 * np.cos(np.deg2rad(52)),
                                         R * 0.78 * np.sin(np.deg2rad(52)), 0]),
                     centre + np.array([R * 0.30 * np.cos(np.deg2rad(70)),
                                         R * 0.30 * np.sin(np.deg2rad(70)), 0]),
                     stroke_color=PURPLE, stroke_width=2)
        self.play(FadeIn(coast), FadeIn(track), run_time=0.5)

        # ---------- 4. FADING ----------
        s4 = Text("4. FADING  \u2014  old echoes decay",
                  color=ORANGE, font_size=17, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s4)
        step = s4

        self.play(spoke.animate.set_opacity(0.25), run_time=0.3)
        self.play(blips.animate.set_opacity(0.22), run_time=0.7)
        self.play(blips.animate.set_opacity(1.0), run_time=0.5)
        self.wait(1.4)