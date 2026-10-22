"""Article 46 \u4e2d\u6587 \u2014 \u540c\u4e00\u573a\u964d\u96e8\u753b\u56db\u79cd\uff1a\u53cd\u5c04\u7387\u3001\u901f\u5ea6\u3001\u504f\u632f\u3001\u9884\u8b66\u3002"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, LaggedStart,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create,
    UP, DOWN, LEFT, RIGHT, ORIGIN,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, np,
)

CJK = "Microsoft YaHei"


def swap_label(scene, old, new, run_time=0.3):
    """Fade out then in. Transform() on same-position Text ghosts glyphs."""
    if old is None:
        scene.play(Write(new), run_time=run_time)
    else:
        scene.play(FadeOut(old), run_time=run_time * 0.4)
        scene.play(FadeIn(new), run_time=run_time * 0.6)


class RadarArticle46(Scene):
    def construct(self):
        np.random.seed(46)
        self.camera.background_color = "#061a30"

        title = Text("\u540c\u4e00\u573a\u964d\u96e8\uff0c\u56db\u79cd\u753b\u9762", color=TEAL,
                     font=CJK, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        centre = np.array([0.0, 0.55, 0])
        R = 2.5

        scope = Circle(radius=R, stroke_color="#2A3B4C", stroke_width=2,
                       fill_color="#08131F", fill_opacity=1)
        scope.move_to(centre)
        self.play(FadeIn(scope), run_time=0.4)

        rings = VGroup()
        for f in (0.33, 0.66):
            r = Line([centre[0] - R * f, centre[1], 0],
                     [centre[0] + R * f, centre[1], 0],
                     stroke_color="#1E3040", stroke_width=1)
            r.add(Line([centre[0], centre[1] - R * f, 0],
                       [centre[0], centre[1] + R * f, 0],
                       stroke_color="#1E3040", stroke_width=1))
            rings.add(r)
        self.play(FadeIn(rings), run_time=0.3)

        blob = VGroup()
        specs = [
            (0.62, 0.55, 0.30, "#3fc23f"),
            (0.40, 0.30, 0.24, "#FFD93D"),
            (0.30, 0.62, 0.20, "#FF8a3a"),
            (0.74, 0.30, 0.22, "#3fc23f"),
            (0.34, 0.36, 0.16, "#3fc23f"),
            (0.55, 0.20, 0.18, "#FFD93D"),
            (0.22, 0.50, 0.14, "#FFD93D"),
            (0.52, 0.68, 0.14, "#3fc23f"),
        ]
        for fx, fy, rad, col in specs:
            c = Circle(radius=rad, stroke_color=col, stroke_width=1.6,
                       fill_color=col, fill_opacity=0.62)
            c.move_to(centre + np.array([R * fx, R * fy, 0]))
            blob.add(c)
        self.play(LaggedStart(*[FadeIn(c) for c in blob], lag_ratio=0.05),
                  run_time=0.8)

        # A plain anchor point, clear above the scope (which tops out at
        # y = 3.05). Not an empty Text: next_to() on a zero-size mobject
        # returns a meaningless centre.
        LABEL_Y = -2.75
        step = None

        s1 = Text("1. \u53cd\u5c04\u7387 \u2014 \u2014 \u6c34\u5728\u54ea\uff0c\u6709\u591a\u5927",
                  color=GREEN, font=CJK, font_size=17,
                  weight="BOLD").move_to(np.array([0, LABEL_Y, 0]))
        swap_label(self, step, s1)
        step = s1

        refl_tag = Text("dBZ", color=GREEN, font_size=13, weight="BOLD")
        refl_tag.move_to(centre + RIGHT * R * 0.55 + UP * R * 0.45)
        self.play(FadeIn(refl_tag), run_time=0.3)
        self.wait(0.4)

        s3 = Text("3. \u591a\u666e\u52d2 \u2014 \u2014 \u5728\u9760\u8fd1\u8fd8\u662f\u79bb\u8fdc",
                  color=TEAL, font=CJK, font_size=17,
                  weight="BOLD").move_to(np.array([0, LABEL_Y, 0]))
        swap_label(self, step, s3)
        step = s3

        vel = VGroup()
        for fx, fy, rad, col in specs:
            c = Circle(radius=rad,
                       stroke_color=GREEN if fy > 0.30 else RED,
                       stroke_width=1.6,
                       fill_color=GREEN if fy > 0.30 else RED,
                       fill_opacity=0.62)
            c.move_to(centre + np.array([R * fx, R * fy, 0]))
            vel.add(c)
        zero = Line([centre[0] - R, centre[1] + R * 0.30, 0],
                    [centre[0] + R, centre[1] + R * 0.30, 0],
                    stroke_color=WHITE, stroke_width=2)
        self.play(FadeOut(refl_tag), run_time=0.2)
        self.play(Transform(blob, vel), FadeIn(zero), run_time=0.9)
        self.wait(0.4)

        s5 = Text("5. \u53cc\u504f\u632f \u2014 \u2014 \u662f\u96e8\u3001\u96ea\u8fd8\u662f\u51b0\u96f9",
                  color=BLUE, font=CJK, font_size=17,
                  weight="BOLD").move_to(np.array([0, LABEL_Y, 0]))
        swap_label(self, step, s5)
        step = s5

        pol = VGroup()
        pol_cols = ["#3fc23f", "#7aa7d4", "#d83838", "#3fc23f",
                    "#7aa7d4", "#d83838", "#7aa7d4", "#3fc23f"]
        pol_tags = ["R", "S", "H", "R", "S", "H", "S", "R"]
        for (fx, fy, rad, _), col, tag in zip(specs, pol_cols, pol_tags):
            c = Circle(radius=rad, stroke_color=col, stroke_width=1.8,
                       fill_color=col, fill_opacity=0.6)
            c.move_to(centre + np.array([R * fx, R * fy, 0]))
            t = Text(tag, color=WHITE, font_size=11, weight="BOLD")
            t.move_to(c.get_center())
            pol.add(VGroup(c, t))
        legend = VGroup(
            Text("R \u96e8", color="#3fc23f", font=CJK, font_size=12),
            Text("S \u96ea", color="#7aa7d4", font=CJK, font_size=12),
            Text("H \u96f9", color="#d83838", font=CJK, font_size=12),
        ).arrange(RIGHT, buff=0.4).next_to(scope, DOWN, buff=0.3)
        self.play(FadeOut(zero), Transform(blob, pol), FadeIn(legend),
                  run_time=0.9)
        self.wait(0.4)

        s7 = Text("7. \u9884\u8b66 \u2014 \u2014 \u753b\u9762\u53d8\u6210\u4e00\u4e2a\u591a\u8fb9\u5f62",
                  color=PURPLE, font=CJK, font_size=17,
                  weight="BOLD").move_to(np.array([0, LABEL_Y, 0]))
        swap_label(self, step, s7)
        step = s7

        poly = Polygon(
            [centre[0] - R * 0.92, centre[1] - R * 0.30, 0],
            [centre[0] - R * 0.55, centre[1] + R * 0.18, 0],
            [centre[0] - R * 0.10, centre[1] + R * 0.30, 0],
            [centre[0] + R * 0.48, centre[1] + R * 0.42, 0],
            [centre[0] + R * 0.92, centre[1] + R * 0.12, 0],
            [centre[0] + R * 0.86, centre[1] - R * 0.42, 0],
            [centre[0] + R * 0.10, centre[1] - R * 0.66, 0],
            [centre[0] - R * 0.78, centre[1] - R * 0.60, 0],
            stroke_color=PURPLE, stroke_width=3, fill_opacity=0)
        self.play(FadeOut(legend), FadeOut(blob), run_time=0.3)
        self.play(Create(poly), run_time=0.9)

        warn = Text("\u9f99\u5377\u9884\u8b66", color=PURPLE, font=CJK,
                    font_size=16, weight="BOLD")
        warn.next_to(poly, UP, buff=0.22)
        self.play(FadeIn(warn), run_time=0.4)

        self.wait(1.8)