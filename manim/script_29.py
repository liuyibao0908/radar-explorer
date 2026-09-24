"""Article 29 — 波束怎么"电子扫描"（中文）. 动画四步：

1. 平直 — 相位相同，波束指向正前方
2. 倾斜 — 小的相位差让波前倾斜
3. 扫描 — 相位差不断增大，波束扫过天空
4. 多波束 — 多组相位可以同时形成多个波束
"""
from manim import (
    Scene, VGroup, Dot, Line, Arrow, Text,
    UP, DOWN, LEFT, RIGHT, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, YELLOW, GREEN, GREY, TEAL, RED, np
)

CJK = "Microsoft YaHei"


class RadarArticle29(Scene):
    def construct(self):
        np.random.seed(29)
        self.camera.background_color = "#061a30"

        title = Text("电子扫描", color=TEAL, font=CJK,
                     font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        origin = DOWN * 2.2
        N = 8
        elements = VGroup(*[
            Dot(point=origin + RIGHT * (i - (N - 1) / 2) * 1.0,
                radius=0.09, color="#54A0FF")
            for i in range(N)
        ])
        panel = Line(origin + LEFT * 4.0, origin + RIGHT * 4.0,
                     color="#152040", stroke_width=6)
        panel_label = Text("天线面板 — 始终不动", color=GREY, font=CJK,
                           font_size=12).next_to(panel, DOWN, buff=0.25)
        self.play(Create(panel), FadeIn(elements), Write(panel_label), run_time=0.6)

        def make_beam(angle_deg, colour=YELLOW, width=3, opacity=1.0):
            d = np.array([np.sin(np.radians(angle_deg)),
                          np.cos(np.radians(angle_deg)), 0.0])
            beam = Line(origin, origin + d * 3.2, color=colour,
                        stroke_width=width, stroke_opacity=opacity)
            perp = np.array([-d[1], d[0], 0.0])
            mid = origin + d * 2.6
            wave = Line(mid - perp * 1.2, mid + perp * 1.2,
                        color="#FFD93D", stroke_width=2,
                        stroke_opacity=0.85 * opacity)
            return VGroup(beam, wave)

        group = make_beam(0)

        step = Text("1. 平直 — 相位相同，波束指向正前方", color=GREY,
                    font=CJK, font_size=14).to_edge(DOWN)
        self.play(Write(step), run_time=0.4)
        self.play(Create(group[0]), Create(group[1]), run_time=0.6)

        step2 = Text("2. 倾斜 — 小的相位差让波前倾斜", color=YELLOW,
                     font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)
        phi = Text("相位差 = 15°", color="#FFD93D", font=CJK, font_size=14)\
            .move_to(LEFT * 4.6 + UP * 2.2)
        self.play(Rotate(group, angle=-12 * DEGREES, about_point=origin),
                  Write(phi), run_time=0.7)

        step3 = Text("3. 扫描 — 相位差不断增大，波束扫过天空", color=GREEN,
                     font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        sweep_track = Arrow(origin + LEFT * 1.0, origin + LEFT * 1.0 + UP * 2.2,
                            color=GREEN, stroke_width=2, buff=0.05)
        tip_trace = VGroup()
        for ang in (0, -10, -20, -30, -40):
            tip_trace.add(Dot(point=origin + np.array(
                [np.sin(np.radians(ang)) * 3.2,
                 np.cos(np.radians(ang)) * 3.2, 0.0]),
                radius=0.05, color=GREEN, fill_opacity=0.5))

        phi_big = Text("相位差 = 90°", color="#FFD93D", font=CJK, font_size=14)\
            .move_to(LEFT * 4.6 + UP * 2.2)

        self.play(
            Rotate(group, angle=-28 * DEGREES, about_point=origin,
                   rate_func=lambda t: t),
            Transform(phi, phi_big),
            FadeIn(tip_trace),
            run_time=2.2,
        )
        self.play(Create(sweep_track), run_time=0.4)

        step4 = Text("4. 多波束 — 多组相位同时形成多个波束", color=TEAL,
                     font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4),
                  FadeOut(group), FadeOut(tip_trace),
                  FadeOut(phi), FadeOut(sweep_track),
                  run_time=0.6)

        multi = VGroup(
            make_beam(30, TEAL, 2, 0.9),
            make_beam(0, YELLOW, 3, 1.0),
            make_beam(-30, RED, 2, 0.9),
        )
        targets = VGroup(*[
            Dot(point=origin + np.array([np.sin(np.radians(a)) * 3.2,
                                         np.cos(np.radians(a)) * 3.2, 0.0]),
                radius=0.10, color=c)
            for a, c in ((30, TEAL), (0, YELLOW), (-30, RED))
        ])
        self.play(
            FadeIn(multi[0], shift=UP * 0.4),
            FadeIn(multi[1], shift=UP * 0.4),
            FadeIn(multi[2], shift=UP * 0.4),
            FadeIn(targets),
            run_time=0.9,
        )

        note = Text("没有机械转动 — 靠的只是时间", color=GREY,
                    font=CJK, font_size=13).move_to(LEFT * 4.4 + UP * 2.3)
        self.play(Write(note), run_time=0.5)

        self.wait(0.8)
