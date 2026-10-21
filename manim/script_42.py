"""Article 42 \u4e2d\u6587 \u2014 \u5929\u7ebf\u8ddf\u8e2a\u6f02\u79fb\u7684\u76ee\u6807\uff0c\u518d\u628a\u8fc7\u51b2\u538b\u4e0b\u53bb\u3002

\u6ce2\u675f\u5fc5\u987b\u548c\u5929\u7ebf\u5728\u540c\u4e00\u4e2a VGroup \u91cc\uff1a\u5355\u72ec rotate \u4e00\u6761
Line \u4f1a\u7ed5\u5b83\u81ea\u5df1\u7684\u4e2d\u70b9\u65cb\u8f6c\uff0c\u4f1a\u628a\u5b83\u98de\u51fa\u53bb\u3002
"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, Axes, DashedLine, LaggedStart,
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


class RadarArticle42(Scene):
    def construct(self):
        np.random.seed(42)
        self.camera.background_color = "#061a30"

        title = Text("\u5929\u7ebf\u8ddf\u7740\u8d70", color=TEAL,
                     font=CJK, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        pivot = np.array([0.0, 0.45, 0])

        ped = Rectangle(width=0.9, height=0.5, stroke_color=GREY,
                        stroke_width=2, fill_color="#0d2038",
                        fill_opacity=1)
        ped.move_to(pivot + DOWN * 0.55)
        ped_lbl = Text("\u4f3a\u670d", color=GREY, font=CJK, font_size=11)
        ped_lbl.move_to(ped)

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
        tgt_lbl = Text("\u76ee\u6807", color=GREEN, font=CJK, font_size=13)
        tgt_lbl.next_to(tgt_line.get_end(), UP, buff=0.14)
        ant_lbl = Text("\u5929\u7ebf", color=YELLOW, font=CJK, font_size=13)
        ant_lbl.next_to(ant_line.get_end(), UP, buff=0.14)

        self.play(FadeIn(tgt_line), FadeIn(ant_line),
                  FadeIn(tgt_lbl), FadeIn(ant_lbl), run_time=0.4)

        # keep the step label below the gauge so it never crosses the dish
        step_pos = np.array([0, -3.55, 0])
        step_box = None

        s1 = Text("1. \u7a33\u5b9a\u2014\u2014\u4f3a\u670d\u4fdd\u6301\u56fa\u5b9a\u65b9\u4f4d",
                  color=GREY, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step_box, s1)
        step_box = s1
        self.wait(0.5)

        s2 = Text("2. \u79fb\u52a8\u2014\u2014\u76ee\u6807\u6f02\u79fb\uff0c\u6307\u4ee4\u8ddf\u7740\u8d70",
                  color=GREEN, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step_box, s2)
        step_box = s2

        self.play(tgt_line.animate.become(
            DashedLine(gm, gm + LEFT * 3.3, dash_length=0.07,
                       stroke_color=GREEN, stroke_width=2.4)), run_time=1.0)
        new_tgt = Text("\u76ee\u6807", color=GREEN, font=CJK, font_size=13)
        new_tgt.next_to(gm + LEFT * 3.3, UP, buff=0.14)
        self.play(FadeOut(tgt_lbl), FadeIn(new_tgt), run_time=0.25)

        self.play(dish.animate.rotate(0.62 * np.pi), run_time=0.55)

        s3 = Text("3. \u6ede\u540e\u2014\u2014\u6c89\u91cd\u7684\u5929\u7ebf\u8ddf\u4e0d\u4e0a",
                  color=ORANGE, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step_box, s3)
        step_box = s3

        self.play(ant_line.animate.become(
            DashedLine(gm, gm + RIGHT * 1.4, dash_length=0.05,
                       stroke_color=YELLOW, stroke_width=1.8)), run_time=0.5)
        err = DoubleArrow(gm + LEFT * 1.9, gm + RIGHT * 1.4, buff=0.0,
                          color=RED, stroke_width=2.5, tip_length=0.14)
        err_lbl = Text("\u8bef\u5dee", color=RED, font=CJK, font_size=13)
        err_lbl.next_to(err, DOWN, buff=0.16)
        self.play(GrowFromCenter(err), FadeIn(err_lbl), run_time=0.4)

        s4 = Text("4. \u4fee\u6b63\u2014\u2014\u95ed\u73af\u628a\u8fc7\u51b2\u538b\u4e0b\u53bb",
                  color=PURPLE, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step_box, s4)

        self.play(ant_line.animate.become(
            DashedLine(gm, gm + LEFT * 4.1, dash_length=0.05,
                       stroke_color=YELLOW, stroke_width=1.8)), run_time=0.35)
        self.play(ant_line.animate.become(
            DashedLine(gm, gm + LEFT * 3.3, dash_length=0.05,
                       stroke_color=YELLOW, stroke_width=1.8)), run_time=0.5)
        self.play(FadeOut(err), FadeOut(err_lbl), run_time=0.4)

        self.wait(1.5)