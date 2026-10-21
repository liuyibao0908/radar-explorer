"""Article 36 EN \u2014 Aperture vs beam width: small dish, medium dish, large dish."""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, Polygon, Dot, Arc,
    UP, DOWN, LEFT, RIGHT, FadeIn, FadeOut, Write, Transform,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)


def wedge(width_deg, color, length=3.2):
    """A filled beam wedge centred on +x, opening `width_deg` degrees."""
    half = np.deg2rad(width_deg) / 2
    tip = np.array([0.0, 0.0, 0.0])
    pts = [tip]
    steps = 14
    for k in range(steps + 1):
        a = half - (2 * half) * (k / steps)
        pts.append(np.array([length * np.cos(a), length * np.sin(a), 0.0]))
    return Polygon(*pts, stroke_color=color, stroke_width=2,
                   fill_color=color, fill_opacity=0.24)


class RadarArticle36(Scene):
    def construct(self):
        np.random.seed(36)
        self.camera.background_color = "#061a30"

        title = Text("Aperture vs Beam Width", color=TEAL,
                     font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        # radar sits at origin-ish, dish grows on the left
        radar = np.array([-3.6, 0.4, 0.0])

        sizes = [
            ("1. SMALL DISH  \u2014  wide beam, weak and blunt", 0.42, 62, GREY),
            ("2. MEDIUM DISH  \u2014  beam tightens, gain rises", 0.72, 34, ORANGE),
            ("3. LARGE DISH  \u2014  narrow beam, sharp edges", 1.05, 16, YELLOW),
        ]

        prev_dish = None
        prev_wedge = None
        prev_label = None
        prev_reach = None

        for label, dish_r, beam_deg, col in sizes:
            # Fade out, then in. Transform() between two same-position Text
            # objects ghosts the glyphs on top of each other.
            t = Text(label, color=col, font_size=19, weight="BOLD").to_edge(DOWN)
            if prev_label is None:
                self.play(Write(t), run_time=0.3)
            else:
                self.play(FadeOut(prev_label), run_time=0.12)
                self.play(FadeIn(t), run_time=0.18)
            prev_label = t

            dish = Arc(
                radius=dish_r,
                start_angle=np.deg2rad(115),
                angle=np.deg2rad(130),
                stroke_color=col,
                stroke_width=6,
            ).move_to(radar)

            w = wedge(beam_deg, col)
            w.move_to(radar)

            reach = Line(radar, radar + RIGHT * (2.0 + dish_r * 1.6),
                         stroke_color=col, stroke_width=1.6, stroke_opacity=0.5)

            if prev_dish is None:
                self.play(FadeIn(dish), FadeIn(w), FadeIn(reach), run_time=0.6)
            else:
                self.play(
                    Transform(prev_dish, dish),
                    Transform(prev_wedge, w),
                    Transform(prev_reach, reach),
                    run_time=0.7,
                )
            prev_dish, prev_wedge, prev_reach = dish, w, reach

        tradeoff = Text("precision up  \u2192  scan speed down",
                        color=PURPLE, font_size=20, weight="BOLD").to_edge(DOWN)
        self.play(FadeOut(prev_label), run_time=0.12)
        self.play(FadeIn(tradeoff), run_time=0.2)
        self.wait(1.2)