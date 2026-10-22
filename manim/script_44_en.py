"""Article 44 EN \u2014 A packet of heat leaving the building: absorb, carry, reject."""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, LaggedStart, Rotating,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create,
    UP, DOWN, LEFT, RIGHT, ORIGIN, PI, linear,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)


def swap_label(scene, old, new, run_time=0.3):
    """Fade out then in. Transform() on same-position Text ghosts glyphs."""
    if old is None:
        scene.play(Write(new), run_time=run_time)
    else:
        scene.play(FadeOut(old), run_time=run_time * 0.4)
        scene.play(FadeIn(new), run_time=run_time * 0.6)


class RadarArticle44(Scene):
    def construct(self):
        np.random.seed(44)
        self.camera.background_color = "#061a30"

        title = Text("Where the Heat Goes", color=TEAL,
                     font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        # ---- the radar building (left) ----
        bld = Rectangle(width=3.0, height=3.0, stroke_color="#2A3B4C",
                        stroke_width=2, fill_color="#0a1626", fill_opacity=1)
        bld.move_to(np.array([-2.3, 0.25, 0]))
        bld_lbl = Text("RADAR BUILDING", color=GREY, font_size=12)
        bld_lbl.next_to(bld, UP, buff=0.18)
        self.play(FadeIn(bld), FadeIn(bld_lbl), run_time=0.4)

        # ---- transmitter inside ----
        tx = Rectangle(width=1.5, height=0.7, stroke_color=RED, stroke_width=2,
                       fill_color="#1a0f14", fill_opacity=1)
        tx.move_to(bld.get_center() + LEFT * 0.6 + UP * 0.75)
        tx_lbl = Text("TX", color=RED, font_size=14, weight="BOLD")
        tx_lbl.move_to(tx)

        cold = Rectangle(width=1.5, height=0.7, stroke_color=BLUE,
                         stroke_width=2, fill_color="#0a1420", fill_opacity=1)
        cold.move_to(bld.get_center() + LEFT * 0.6 + DOWN * 0.55)
        cold_lbl = Text("COLD PLATE", color=BLUE, font_size=11, weight="BOLD")
        cold_lbl.move_to(cold)

        pump = Circle(radius=0.3, stroke_color=GREEN, stroke_width=2,
                      fill_color="#0a2010", fill_opacity=1)
        pump.move_to(bld.get_center() + RIGHT * 0.95 + DOWN * 0.55)
        pump_lbl = Text("PUMP", color=GREEN, font_size=10, weight="BOLD")
        pump_lbl.move_to(pump)

        self.play(FadeIn(tx), FadeIn(tx_lbl), run_time=0.35)
        self.play(FadeIn(cold), FadeIn(cold_lbl), run_time=0.35)
        self.play(FadeIn(pump), FadeIn(pump_lbl), run_time=0.35)

        # ---- heat packets ----
        n_heat = Dot(tx.get_center(), radius=0.11, color=ORANGE)

        # ---- the loop pipes ----
        pipe_a = Line(tx.get_bottom(), cold.get_top(),
                      stroke_color=BLUE, stroke_width=3.5)
        pipe_b = Line(cold.get_right(), pump.get_left(),
                      stroke_color=GREEN, stroke_width=3.5)
        self.play(FadeIn(pipe_a), FadeIn(pipe_b), run_time=0.3)

        # ---- radiators outside the building ----
        rad = VGroup()
        for i in range(4):
            r = Rectangle(width=0.14, height=1.5, stroke_color=ORANGE,
                          stroke_width=1.5, fill_color=ORANGE,
                          fill_opacity=0.35)
            r.move_to(np.array([1.9 + i * 0.34, 0.25, 0]))
            rad.add(r)
        rad_frame = Rectangle(width=1.7, height=1.8, stroke_color=ORANGE,
                              stroke_width=2, fill_color="#1a1208",
                              fill_opacity=1)
        rad_frame.move_to(np.array([2.42, 0.25, 0]))
        rad_lbl = Text("RADIATORS", color=ORANGE, font_size=11, weight="BOLD")
        rad_lbl.next_to(rad_frame, UP, buff=0.14)

        pipe_c = Line(pump.get_right(), np.array([1.9, -0.55, 0]),
                      stroke_color=GREEN, stroke_width=3.5)
        pipe_d = Line(np.array([1.9, 0.25, 0]), rad_frame.get_left(),
                      stroke_color=GREEN, stroke_width=3.5)

        step_pos = np.array([0, -2.5, 0])
        step = None

        # ---------- 1. GENERATED ----------
        s1 = Text("1. GENERATED  \u2014  the transmitter makes heat",
                  color=RED, font_size=18, weight="BOLD").move_to(step_pos)
        swap_label(self, step, s1)
        step = s1

        self.play(FadeIn(n_heat), run_time=0.3)
        self.play(FadeOut(tx_lbl), FadeIn(
            Text("900 kW", color=ORANGE, font_size=12, weight="BOLD").move_to(tx)),
            run_time=0.4)
        self.wait(0.3)

        # ---------- 2. ABSORBED ----------
        s2 = Text("2. ABSORBED  \u2014  coolant picks it up",
                  color=BLUE, font_size=18, weight="BOLD").move_to(step_pos)
        swap_label(self, step, s2)
        step = s2

        self.play(pipe_a.animate.set_color(GREY), run_time=0.2)
        self.play(n_heat.animate.move_to(cold.get_center()), run_time=0.6)
        self.play(n_heat.animate.set_color(GREEN), run_time=0.3)

        # ---------- 3. CARRIED ----------
        s3 = Text("3. CARRIED  \u2014  a pump moves it round",
                  color=GREEN, font_size=18, weight="BOLD").move_to(step_pos)
        swap_label(self, step, s3)
        step = s3

        self.play(FadeIn(pipe_b), run_time=0.2)
        # Rotating() takes `angle`, not `radians` (that's Rotate()).
        self.play(Rotating(pump, angle=PI), run_time=0.7, rate_func=linear)
        self.play(n_heat.animate.move_to(pump.get_center()), run_time=0.5)

        # ---------- 4. REJECTED ----------
        s4 = Text("4. REJECTED  \u2014  into the open air",
                  color=ORANGE, font_size=18, weight="BOLD").move_to(step_pos)
        swap_label(self, step, s4)

        self.play(FadeIn(pipe_c), FadeIn(pipe_d),
                  FadeIn(rad_frame), FadeIn(rad), FadeIn(rad_lbl), run_time=0.5)
        self.play(n_heat.animate.move_to(np.array([1.9, 0.25, 0])), run_time=0.5)
        self.play(n_heat.animate.move_to(np.array([3.6, 0.25, 0])), run_time=0.7)
        self.play(FadeOut(n_heat), run_time=0.3)

        # arrows of heat leaving the radiators
        arrows = VGroup()
        for i in range(3):
            a = Arrow(
                np.array([2.0 + i * 0.4, 1.15, 0]),
                np.array([2.0 + i * 0.4, 2.0, 0]),
                color=ORANGE, stroke_width=2, buff=0,
                max_tip_length_to_length_ratio=0.25,
            )
            arrows.add(a)
        self.play(LaggedStart(*[GrowFromCenter(a) for a in arrows],
                              lag_ratio=0.15), run_time=0.6)

        out_lbl = Text("to the atmosphere", color=ORANGE, font_size=13)
        out_lbl.next_to(arrows, UP, buff=0.18)
        self.play(FadeIn(out_lbl), run_time=0.3)

        self.wait(1.6)