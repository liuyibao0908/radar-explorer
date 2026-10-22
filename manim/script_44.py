"""Article 44 \u4e2d\u6587 \u2014 \u4e00\u5305\u70ed\u91cf\u79bb\u5f00\u673a\u623f\uff1a\u5438\u6536\u3001\u8f93\u9001\u3001\u6392\u51fa\u3002"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, DoubleArrow,
    Polygon, Dot, Arc, LaggedStart, Rotating,
    FadeIn, FadeOut, Write, Transform, GrowFromCenter, Create,
    UP, DOWN, LEFT, RIGHT, ORIGIN, PI, linear,
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


class RadarArticle44(Scene):
    def construct(self):
        np.random.seed(44)
        self.camera.background_color = "#061a30"

        title = Text("\u70ed\u91cf\u53bb\u4e86\u54ea\u513f", color=TEAL,
                     font=CJK, font_size=28, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        bld = Rectangle(width=3.0, height=3.0, stroke_color="#2A3B4C",
                        stroke_width=2, fill_color="#0a1626", fill_opacity=1)
        bld.move_to(np.array([-2.3, 0.25, 0]))
        bld_lbl = Text("\u96f7\u8fbe\u673a\u623f", color=GREY, font=CJK, font_size=12)
        bld_lbl.next_to(bld, UP, buff=0.18)
        self.play(FadeIn(bld), FadeIn(bld_lbl), run_time=0.4)

        tx = Rectangle(width=1.5, height=0.7, stroke_color=RED, stroke_width=2,
                       fill_color="#1a0f14", fill_opacity=1)
        tx.move_to(bld.get_center() + LEFT * 0.6 + UP * 0.75)
        tx_lbl = Text("\u53d1\u5c04\u673a", color=RED, font=CJK, font_size=13,
                      weight="BOLD")
        tx_lbl.move_to(tx)

        cold = Rectangle(width=1.5, height=0.7, stroke_color=BLUE,
                         stroke_width=2, fill_color="#0a1420", fill_opacity=1)
        cold.move_to(bld.get_center() + LEFT * 0.6 + DOWN * 0.55)
        cold_lbl = Text("\u51b7\u677f", color=BLUE, font=CJK, font_size=11,
                        weight="BOLD")
        cold_lbl.move_to(cold)

        pump = Circle(radius=0.3, stroke_color=GREEN, stroke_width=2,
                      fill_color="#0a2010", fill_opacity=1)
        pump.move_to(bld.get_center() + RIGHT * 0.95 + DOWN * 0.55)
        pump_lbl = Text("\u6c34\u6cf5", color=GREEN, font=CJK, font_size=10,
                        weight="BOLD")
        pump_lbl.move_to(pump)

        self.play(FadeIn(tx), FadeIn(tx_lbl), run_time=0.35)
        self.play(FadeIn(cold), FadeIn(cold_lbl), run_time=0.35)
        self.play(FadeIn(pump), FadeIn(pump_lbl), run_time=0.35)

        n_heat = Dot(tx.get_center(), radius=0.11, color=ORANGE)

        pipe_a = Line(tx.get_bottom(), cold.get_top(),
                      stroke_color=BLUE, stroke_width=3.5)
        pipe_b = Line(cold.get_right(), pump.get_left(),
                      stroke_color=GREEN, stroke_width=3.5)
        self.play(FadeIn(pipe_a), FadeIn(pipe_b), run_time=0.3)

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
        rad_lbl = Text("\u6563\u70ed\u7247", color=ORANGE, font=CJK, font_size=11,
                       weight="BOLD")
        rad_lbl.next_to(rad_frame, UP, buff=0.14)

        pipe_c = Line(pump.get_right(), np.array([1.9, -0.55, 0]),
                      stroke_color=GREEN, stroke_width=3.5)
        pipe_d = Line(np.array([1.9, 0.25, 0]), rad_frame.get_left(),
                      stroke_color=GREEN, stroke_width=3.5)

        step_pos = np.array([0, -2.5, 0])
        step = None

        s1 = Text("1. \u4ea7\u751f\u2014\u2014\u53d1\u5c04\u673a\u4ea7\u751f\u70ed",
                  color=RED, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s1)
        step = s1

        self.play(FadeIn(n_heat), run_time=0.3)
        new_tx = Text("900 \u5343\u74e6", color=ORANGE, font=CJK, font_size=12,
                      weight="BOLD").move_to(tx)
        self.play(FadeOut(tx_lbl), FadeIn(new_tx), run_time=0.4)
        self.wait(0.3)

        s2 = Text("2. \u5438\u6536\u2014\u2014\u51b7\u5374\u6db2\u63a5\u4f4f\u5b83",
                  color=BLUE, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s2)
        step = s2

        self.play(pipe_a.animate.set_color(GREY), run_time=0.2)
        self.play(n_heat.animate.move_to(cold.get_center()), run_time=0.6)
        self.play(n_heat.animate.set_color(GREEN), run_time=0.3)

        s3 = Text("3. \u8f93\u9001\u2014\u2014\u6c34\u6cf5\u63a8\u7740\u5b83\u8d70",
                  color=GREEN, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s3)
        step = s3

        self.play(FadeIn(pipe_b), run_time=0.2)
        self.play(Rotating(pump, angle=PI), run_time=0.7, rate_func=linear)
        self.play(n_heat.animate.move_to(pump.get_center()), run_time=0.5)

        s4 = Text("4. \u6392\u51fa\u2014\u2014\u4ea4\u7ed9\u5916\u9762\u7684\u7a7a\u6c14",
                  color=ORANGE, font=CJK, font_size=18,
                  weight="BOLD").move_to(step_pos)
        swap_label(self, step, s4)

        self.play(FadeIn(pipe_c), FadeIn(pipe_d),
                  FadeIn(rad_frame), FadeIn(rad), FadeIn(rad_lbl), run_time=0.5)
        self.play(n_heat.animate.move_to(np.array([1.9, 0.25, 0])), run_time=0.5)
        self.play(n_heat.animate.move_to(np.array([3.6, 0.25, 0])), run_time=0.7)
        self.play(FadeOut(n_heat), run_time=0.3)

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

        out_lbl = Text("\u6392\u5230\u5927\u6c14\u91cc", color=ORANGE, font=CJK,
                       font_size=13)
        out_lbl.next_to(arrows, UP, buff=0.18)
        self.play(FadeIn(out_lbl), run_time=0.3)

        self.wait(1.6)