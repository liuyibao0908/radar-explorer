"""Article 43 EN \u2014 The ten-step radar cycle, block by block."""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, LaggedStart,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create,
    UP, DOWN, LEFT, RIGHT, ORIGIN,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)

# (label, is_inbound)
STEPS = [
    ("TX", False), ("DUP", False), ("ANT", False), ("OUT", False),
    ("TGT", False), ("RX", True), ("DUP", True), ("AMP", True),
    ("PROC", True), ("DSP", True),
]


def swap_label(scene, old, new, run_time=0.3):
    """Fade out then in. Transform() on same-position Text ghosts glyphs."""
    if old is None:
        scene.play(Write(new), run_time=run_time)
    else:
        scene.play(FadeOut(old), run_time=run_time * 0.4)
        scene.play(FadeIn(new), run_time=run_time * 0.6)


class RadarArticle43(Scene):
    def construct(self):
        np.random.seed(43)
        self.camera.background_color = "#061a30"

        title = Text("One Complete Radar Cycle", color=TEAL,
                     font_size=27, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        # ---- ten blocks in a row, five outbound (yellow) five inbound (green)
        boxes = VGroup()
        for i, (label, inbound) in enumerate(STEPS):
            col = GREEN if inbound else YELLOW
            b = Rectangle(width=0.58, height=0.72,
                          stroke_color=col, stroke_width=1.8,
                          fill_color="#0d2038", fill_opacity=1)
            b.move_to(np.array([-3.6 + i * 0.8, 1.35, 0]))
            t = Text(label, color=col, font_size=11, weight="BOLD")
            t.move_to(b)
            n = Text(str(i + 1), color=GREY, font_size=9)
            n.next_to(b, DOWN, buff=0.12)
            boxes.add(VGroup(b, t, n))

        self.play(LaggedStart(*[FadeIn(g) for g in boxes], lag_ratio=0.05),
                  run_time=0.9)

        # ---- the wave path below ----
        y_wave = -0.55
        start = np.array([-3.6, y_wave, 0])
        tgt_pos = np.array([0.6, y_wave, 0])
        end = np.array([3.6, y_wave, 0])

        wave = Dot(start, radius=0.1, color=ORANGE)
        echo = Dot(start, radius=0.1, color=ORANGE)

        step = None
        step_pos = np.array([0, -2.35, 0])

        def highlight(idx, colour):
            g = boxes[idx]
            b = g[0]
            return b.animate.set_stroke(colour, width=4).set_fill(colour, opacity=0.28)

        # ---------- 1-3 TRANSMIT ----------
        s1 = Text("1-3. TRANSMIT  \u2014  power, switch, focused beam",
                  color=YELLOW, font_size=18, weight="BOLD").move_to(step_pos)
        swap_label(self, step, s1)
        step = s1
        for i in (0, 1, 2):
            self.play(highlight(i, YELLOW), run_time=0.22)
            self.play(boxes[i][0].animate.set_stroke(YELLOW, width=1.8)
                      .set_fill("#0d2038", opacity=1), run_time=0.16)

        # ---------- 4-5 OUT AND BACK ----------
        s2 = Text("4-5. OUT AND BACK  \u2014  the wave leaves and returns",
                  color=ORANGE, font_size=18, weight="BOLD").move_to(step_pos)
        swap_label(self, step, s2)
        step = s2

        self.play(FadeIn(wave), run_time=0.2)
        self.play(wave.animate.move_to(tgt_pos), run_time=0.8)

        tgt = Circle(radius=0.22, stroke_color=RED, stroke_width=2.5,
                     fill_color=RED, fill_opacity=0.3).move_to(tgt_pos)
        self.play(FadeIn(tgt), run_time=0.25)
        self.play(FadeOut(wave), run_time=0.15)

        self.play(FadeIn(echo), run_time=0.2)
        self.play(echo.animate.move_to(end), run_time=0.8)
        self.play(FadeOut(echo), run_time=0.2)

        # ---------- 6-8 RECEIVE ----------
        s3 = Text("6-8. RECEIVE  \u2014  switch, amplify, listen",
                  color=GREEN, font_size=18, weight="BOLD").move_to(step_pos)
        swap_label(self, step, s3)
        step = s3
        for i in (5, 6, 7):
            self.play(highlight(i, GREEN), run_time=0.22)
            self.play(boxes[i][0].animate.set_stroke(GREEN, width=1.8)
                      .set_fill("#0d2038", opacity=1), run_time=0.16)

        # ---------- 9-10 DECIDE ----------
        s4 = Text("9-10. DECIDE  \u2014  separate the target, draw the pixel",
                  color=BLUE, font_size=18, weight="BOLD").move_to(step_pos)
        swap_label(self, step, s4)
        step = s4

        for i in (8, 9):
            self.play(highlight(i, BLUE), run_time=0.25)
            self.play(boxes[i][0].animate.set_stroke(BLUE, width=1.8)
                      .set_fill("#0d2038", opacity=1), run_time=0.16)

        # the pixel that results
        px = Rectangle(width=0.3, height=0.3,
                       stroke_color=BLUE, stroke_width=2,
                       fill_color=BLUE, fill_opacity=0.8)
        px.move_to(end + UP * 0.75)
        px_lbl = Text("one pixel", color=BLUE, font_size=12)
        px_lbl.next_to(px, RIGHT, buff=0.2)
        self.play(GrowFromCenter(px), FadeIn(px_lbl), run_time=0.5)

        # the loop arrow
        loop = Arrow(
            np.array([-3.6, 0.55, 0]), np.array([3.6, 0.55, 0]),
            color=PURPLE, stroke_width=2, buff=0,
            max_tip_length_to_length_ratio=0.06,
        )
        loop_lbl = Text("and again, from the next bearing", color=PURPLE,
                        font_size=13)
        loop_lbl.next_to(loop, DOWN, buff=0.2)

        self.wait(0.6)
        self.play(FadeOut(loop_lbl), FadeOut(px), FadeOut(px_lbl), run_time=0.2)
        self.play(GrowFromCenter(loop), FadeIn(loop_lbl), run_time=0.5)
        self.wait(1.6)