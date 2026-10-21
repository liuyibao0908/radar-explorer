"""Article 39 EN \u2014 The duplexer door: transmit, switch, listen, deaf zone.

Doors are drawn as gates that retract downward (scaling about the BOTTOM
edge), not about their centre, so the open/closed state reads correctly.
"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc,
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


def gate(height=1.0, width=0.14, color=RED):
    """A gate anchored at its bottom edge so it retracts downward."""
    body = Rectangle(width=width, height=height,
                     fill_color=color, fill_opacity=1,
                     stroke_color=color, stroke_width=1)
    body.align_to(DOWN, DOWN)
    return body


class RadarArticle39(Scene):
    def construct(self):
        np.random.seed(39)
        self.camera.background_color = "#061a30"

        title = Text("The Duplexer Door", color=TEAL,
                     font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        cx = 0.0
        y_dup = 1.5
        y_arm = 0.45
        x_arm = 2.5

        ant = Arc(radius=0.42, start_angle=np.deg2rad(112),
                  angle=np.deg2rad(136), stroke_color=GREY, stroke_width=4)
        ant.move_to(np.array([cx, 2.75, 0]))
        ant_dot = Dot([cx, 2.75, 0], radius=0.08, color=WHITE)
        ant_lbl = Text("ANT", color=GREY, font_size=12)
        ant_lbl.next_to(ant, UP, buff=0.14)
        feed = Line([cx, 2.75, 0], [cx, 1.95, 0],
                    stroke_color=GREY, stroke_width=3)
        self.play(FadeIn(ant), FadeIn(ant_dot), FadeIn(ant_lbl),
                  FadeIn(feed), run_time=0.4)

        dup = Rectangle(width=1.9, height=0.75, stroke_color=TEAL,
                        stroke_width=2, fill_color="#0d2038",
                        fill_opacity=1)
        dup.move_to(np.array([cx, y_dup, 0]))
        dup_lbl = Text("DUPLEXER", color=TEAL, font_size=13, weight="BOLD")
        dup_lbl.move_to(dup)
        self.play(FadeIn(dup), FadeIn(dup_lbl), run_time=0.3)

        def arm(name, colour, x):
            box = Rectangle(width=1.8, height=0.95, stroke_color=colour,
                            stroke_width=2, fill_color="#0d2038",
                            fill_opacity=1)
            box.move_to(np.array([x, y_arm, 0]))
            t = Text(name, color=colour, font_size=15, weight="BOLD")
            t.move_to(box)
            return box, t

        tx_box, tx_lbl = arm("TX", RED, cx - x_arm)
        rx_box, rx_lbl = arm("RX", GREEN, cx + x_arm)

        arm_tx = Line([cx - 0.35, y_dup - 0.37, 0],
                      [cx - x_arm, y_arm + 0.47, 0],
                      stroke_color=GREY, stroke_width=3)
        arm_rx = Line([cx + 0.35, y_dup - 0.37, 0],
                      [cx + x_arm, y_arm + 0.47, 0],
                      stroke_color=GREY, stroke_width=3)

        self.play(FadeIn(tx_box), FadeIn(tx_lbl), run_time=0.3)
        self.play(FadeIn(rx_box), FadeIn(rx_lbl), run_time=0.3)
        self.play(FadeIn(arm_tx), FadeIn(arm_rx), run_time=0.2)

        door_tx = gate(height=0.9, color=RED)
        door_tx.move_to([cx - 1.55, y_arm + 0.47, 0])
        door_rx = gate(height=0.9, color=GREEN)
        door_rx.move_to([cx + 1.55, y_arm + 0.47, 0])
        self.play(FadeIn(door_tx), FadeIn(door_rx), run_time=0.2)

        packet = Dot([cx - x_arm, y_arm, 0], radius=0.12, color=YELLOW)
        echo = Dot([cx - x_arm, y_arm, 0], radius=0.12, color=ORANGE)

        step = None

        s1 = Text("1. TRANSMIT  \u2014  RX gate shut, TX gate open",
                  color=YELLOW, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s1)
        step = s1

        self.play(door_tx.animate.stretch_to_fit_height(0.06), run_time=0.3)
        self.play(door_rx.animate.stretch_to_fit_height(1.4), run_time=0.3)

        self.play(FadeIn(packet), run_time=0.2)
        self.play(packet.animate.move_to([cx, y_dup, 0]), run_time=0.4)
        self.play(packet.animate.move_to([cx, 2.9, 0]), run_time=0.45)
        self.play(packet.animate.set_opacity(0.0), run_time=0.2)

        s2 = Text("2. SWITCH  \u2014  state changes in microseconds",
                  color=ORANGE, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s2)
        step = s2

        self.play(door_tx.animate.stretch_to_fit_height(1.4), run_time=0.12)
        self.play(door_rx.animate.stretch_to_fit_height(0.06), run_time=0.12)
        self.wait(0.35)

        s3 = Text("3. LISTEN  \u2014  RX gate open",
                  color=GREEN, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s3)
        step = s3

        self.play(FadeIn(echo), run_time=0.2)
        self.play(echo.animate.move_to([cx, 2.75, 0]), run_time=0.5)
        self.play(echo.animate.move_to([cx, y_dup, 0]), run_time=0.4)
        self.play(echo.animate.move_to([cx + x_arm, y_arm, 0]), run_time=0.4)
        self.play(echo.animate.set_opacity(0.0), run_time=0.2)

        s4 = Text("4. DEAF ZONE  \u2014  close echoes are lost",
                  color=RED, font_size=18, weight="BOLD").to_edge(DOWN)
        swap_label(self, step, s4)
        step = s4

        blind = Rectangle(width=6.4, height=0.95, stroke_color=RED,
                          stroke_width=2, fill_color=RED, fill_opacity=0.14)
        blind.move_to(np.array([cx, -1.15, 0]))
        blind_lbl = Text("BLIND", color=RED, font_size=15, weight="BOLD")
        blind_lbl.move_to(blind)
        dist = Text("first 150 m \u2014 echoes return while the gate is still moving",
                    color=RED, font_size=12)
        dist.next_to(blind, DOWN, buff=0.16)

        self.play(FadeIn(blind), run_time=0.35)
        self.play(FadeIn(blind_lbl), FadeIn(dist), run_time=0.4)
        self.wait(2.0)