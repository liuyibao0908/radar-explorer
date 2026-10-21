"""Article 42 EN \u2014 The servo lagging a drifting target, then damping out.

The beam must be part of the dish VGroup: rotating a standalone Line
rotates it about its own midpoint, which flings it away from the antenna.
"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, Axes, DashedLine, LaggedStart,
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


class RadarArticle42(Scene):
    def construct(self):
        np.random.seed(42)
        self.camera.background_color = "#061a30"

        title = Text("The Antenna Follows", color=TEAL,
                     font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        pivot = np.array([0.0, 0.45, 0])   # top of the pedestal

        ped = Rectangle(width=0.9, height=0.5, stroke_color=GREY,
                        stroke_width=2, fill_color="#0d2038",
                        fill_opacity=1)
        ped.move_to(pivot + DOWN * 0.55)
        ped_lbl = Text("SERVO", color=GREY, font_size=11)
        ped_lbl.move_to(ped)

        # dish + feed + beam are ONE group, so .rotate() spins them together
        # about the group centre, which sits on the pivot.
        dish = VGroup(
            Arc(radius=0.5, start_angle=np.deg2rad(112),
                angle=np.deg2rad(136), stroke_color=TEAL, stroke_width=4),
            Line([0, 0, 0], [0, 0.42, 0], stroke_color=TEAL, stroke_width=3),
            Dot([0, 0.42, 0], radius=0.06, color=TEAL),
            Line([0, 0.42, 0], [2.6, 0.42, 0],
                 stroke_color=YELLOW, stroke_width=2.6, stroke_opacity=0.8),
            Arrow([2.6, 0.42, 0], [3.1, 0.42, 0],
                  stroke_color=YELLOW, stroke_width=3, buff=0),
        )
        dish.move_to(pivot)

        self.play(FadeIn(ped), FadeIn(ped_lbl), FadeIn(dish), run_time=0.6)

        # ---- tracking gauge along the bottom ----
        gauge = Axes(
            x_range=[-4.6, 4.6, 1],
            y_range=[-1, 1, 1],
            x_length=9.4,
            y_length=0.7,
            axis_config={"stroke_color": "#1E3040", "stroke_width": 1.2},
            tips=False,
        )
        gauge.move_to(np.array([0, -2.55, 0]))
        self.play(Create(gauge), run_time=0.4)

        gm = gauge.c2p(0, 0)
        tgt_line = DashedLine(gm, gm + RIGHT * 2.3, dash_length=0.07,
                              stroke_color=GREEN, stroke_width=2.4)
        ant_line = DashedLine(gm, gm + RIGHT * 2.0, dash_length=0.05,
                              stroke_color=YELLOW, stroke_width=1.8)
        tgt_lbl = Text("target", color=GREEN, font_size=13)
        tgt_lbl.next_to(tgt_line.get_end(), UP, buff=0.14)
        ant_lbl = Text("antenna", color=YELLOW, font_size=13)
        ant_lbl.next_to(ant_line.get_end(), UP, buff=0.14)

        self.play(FadeIn(tgt_line), FadeIn(ant_line),
                  FadeIn(tgt_lbl), FadeIn(ant_lbl), run_time=0.4)

        step = Text("", font_size=18, weight="BOLD")
        # keep the step label below the gauge so it never crosses the dish
        step.move_to(np.array([0, -3.55, 0]))
        step_box = step

        # ---------- 1. STEADY ----------
        s1 = Text("1. STEADY  \u2014  the servo holds a fixed bearing",
                  color=GREY, font_size=18, weight="BOLD").move_to(step.get_center())
        swap_label(self, step_box, s1)
        step_box = s1
        self.wait(0.5)

        # ---------- 2. MOVE ----------
        s2 = Text("2. MOVE  \u2014  the target drifts, the command follows",
                  color=GREEN, font_size=18, weight="BOLD").move_to(step.get_center())
        swap_label(self, step_box, s2)
        step_box = s2

        self.play(tgt_line.animate.become(
            DashedLine(gm, gm + LEFT * 3.3, dash_length=0.07,
                       stroke_color=GREEN, stroke_width=2.4)), run_time=1.0)
        new_tgt = Text("target", color=GREEN, font_size=13)
        new_tgt.next_to(gm + LEFT * 3.3, UP, buff=0.14)
        self.play(FadeOut(tgt_lbl), FadeIn(new_tgt), run_time=0.25)

        self.play(dish.animate.rotate(0.62 * np.pi), run_time=0.55)

        # ---------- 3. LAG ----------
        s3 = Text("3. LAG  \u2014  the heavy antenna trails behind",
                  color=ORANGE, font_size=18, weight="BOLD").move_to(step.get_center())
        swap_label(self, step_box, s3)
        step_box = s3

        self.play(ant_line.animate.become(
            DashedLine(gm, gm + RIGHT * 1.4, dash_length=0.05,
                       stroke_color=YELLOW, stroke_width=1.8)), run_time=0.5)
        err = DoubleArrow(gm + LEFT * 1.9, gm + RIGHT * 1.4, buff=0.0,
                          color=RED, stroke_width=2.5, tip_length=0.14)
        err_lbl = Text("error", color=RED, font_size=13)
        err_lbl.next_to(err, DOWN, buff=0.16)
        self.play(GrowFromCenter(err), FadeIn(err_lbl), run_time=0.4)

        # ---------- 4. CORRECT ----------
        s4 = Text("4. CORRECT  \u2014  the loop damps the overshoot",
                  color=PURPLE, font_size=18, weight="BOLD").move_to(step.get_center())
        swap_label(self, step_box, s4)

        self.play(ant_line.animate.become(
            DashedLine(gm, gm + LEFT * 4.1, dash_length=0.05,
                       stroke_color=YELLOW, stroke_width=1.8)), run_time=0.35)
        self.play(ant_line.animate.become(
            DashedLine(gm, gm + LEFT * 3.3, dash_length=0.05,
                       stroke_color=YELLOW, stroke_width=1.8)), run_time=0.5)
        self.play(FadeOut(err), FadeOut(err_lbl), run_time=0.4)

        self.wait(1.5)