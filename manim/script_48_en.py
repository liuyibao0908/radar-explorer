"""Article 48 EN \u2014 Walking away from a radar mast as the field falls as 1/R^2."""
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


class RadarArticle48(Scene):
    def construct(self):
        np.random.seed(48)
        self.camera.background_color = "#061a30"

        title = Text("Walking Away From the Mast", color=TEAL,
                     font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        ground = Line([-7.0, -1.6, 0], [7.0, -1.6, 0],
                      stroke_color="#2A3B4C", stroke_width=2)
        self.play(Create(ground), run_time=0.3)

        mast_x = -5.4
        mast = Line([mast_x, -1.55, 0], [mast_x, 1.1, 0],
                    stroke_color=GREY, stroke_width=4)
        dish = Arc(radius=0.42, start_angle=np.deg2rad(112),
                   angle=np.deg2rad(136), stroke_color=TEAL, stroke_width=5)
        dish.move_to([mast_x, 1.1, 0])
        feed = Dot([mast_x, 1.1, 0], radius=0.07, color=TEAL)
        self.play(FadeIn(mast), FadeIn(dish), FadeIn(feed), run_time=0.4)

        # the person starts close to the mast
        person = VGroup(
            Line([0, 0, 0], [0, 0.95, 0], stroke_color=WHITE, stroke_width=5),
            Circle(radius=0.18, stroke_color=WHITE, stroke_width=3.5).move_to([0, 1.18, 0]),
        )
        person.move_to([mast_x + 1.1, -1.55, 0])

        # field strength bar, shown as a vertical meter
        bar_bg = Rectangle(width=0.75, height=2.3, stroke_color="#2A3B4C",
                           stroke_width=1.5, fill_color="#0A1626",
                           fill_opacity=1)
        bar_bg.move_to([5.5, 0.0, 0])
        bar = Rectangle(width=0.6, height=2.2, stroke_color=None,
                        fill_color=RED, fill_opacity=0.9)
        bar.move_to([bar_bg.get_center()[0], bar_bg.get_center()[1], 0])
        bar_lbl = Text("", color=WHITE, font_size=13, weight="BOLD")
        bar_cap = Text("field", color=GREY, font_size=12)
        bar_cap.next_to(bar_bg, UP, buff=0.18)

        self.play(FadeIn(person), FadeIn(bar_bg), FadeIn(bar_cap),
                  run_time=0.4)

        step_pos = np.array([0, -2.45, 0])
        step = None

        # (label, person x, bar height, bar colour, dB shown)
        CASES = [
            ("1. AT THE MAST  \u2014  2 m, restricted area",
             mast_x + 1.1, 2.2, RED, "high"),
            ("2. WALKING OUT  \u2014  falls as 1 / R\u00b2",
             mast_x + 2.6, 1.25, ORANGE, "\u221220 dB"),
            ("3. AT THE FENCE  \u2014  100 m, below the limit",
             mast_x + 4.3, 0.62, YELLOW, "\u221234 dB"),
            ("4. BEYOND  \u2014  still transmitting, still safe",
             mast_x + 5.9, 0.26, GREEN, "\u221274 dB"),
        ]

        for label, px, h, col, shown in CASES:
            s = Text(label, color=col, font_size=17, weight="BOLD").move_to(step_pos)
            swap_label(self, step, s)
            step = s

            # keep the bar inside its frame: same centre as bar_bg, only
            # the height changes, and it grows upward from the frame bottom.
            new_bar = Rectangle(width=0.6, height=h, stroke_color=None,
                                fill_color=col, fill_opacity=0.9)
            new_bar.move_to([bar_bg.get_center()[0],
                             bar_bg.get_center()[1] - 1.15 + h / 2, 0])

            lbl = Text(shown, color=col, font_size=13, weight="BOLD")
            lbl.next_to(bar_bg, RIGHT, buff=0.18)

            self.play(person.animate.move_to([px, -1.55, 0]),
                      Transform(bar, new_bar), run_time=0.6)

            # a dashed link from the person back to the antenna
            if px - mast_x < 2.0:
                if 'link' in locals():
                    self.play(FadeOut(link), run_time=0.2)
                link = DashedLine([mast_x, 1.1, 0], [px, 0.2, 0],
                                  dash_length=0.1, stroke_color=col,
                                  stroke_width=1.4, stroke_opacity=0.7)
                self.play(FadeIn(link), run_time=0.2)
            else:
                if 'link' in locals():
                    self.play(FadeOut(link), run_time=0.3)

            if 'lbl' in locals():
                self.play(FadeOut(lbl), run_time=0.15)
            self.play(FadeIn(lbl), run_time=0.25)
            bar_lbl = lbl
            self.wait(0.4)

        self.wait(1.6)