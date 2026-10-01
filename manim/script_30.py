"""Article 30 — 无源相控阵 vs 有源相控阵（中文）.

动画四步：
1. PESA — 一台发射机经功分器给所有阵元
2. 局限 — 功分器带来损耗，且是单点故障
3. AESA — 每个阵元自带发射和接收模块
4. 鲁棒 — 一个阵元坏了对波束几乎没影响
"""
from manim import (
    Scene, VGroup, Dot, Line, Rectangle, Text, Arrow,
    UP, DOWN, LEFT, RIGHT, DEGREES, FadeIn, FadeOut,
    Write, Create, Transform, YELLOW, GREEN, GREY, TEAL, RED, BLUE, np
)

CJK = "Microsoft YaHei"


def dashed(start, end, color="#54A0FF", opacity=0.7):
    from manim import DashedLine as _Dashed
    return _Dashed(start, end, dash_length=0.05, color=color,
                   stroke_opacity=opacity)


class RadarArticle30(Scene):
    def construct(self):
        np.random.seed(30)
        self.camera.background_color = "#061a30"

        title = Text("无源 vs 有源", color=TEAL, font=CJK,
                     font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        origin = DOWN * 2.2
        N = 6
        elements = VGroup(*[
            Dot(point=origin + RIGHT * (i - (N - 1) / 2) * 0.9,
                radius=0.08, color="#54A0FF")
            for i in range(N)
        ])

        tx_box = Rectangle(width=1.2, height=0.5, color="#FF6B6B",
                           stroke_width=2, fill_color="#0F1A1F", fill_opacity=1)
        tx_box.move_to(origin + DOWN * 1.6)
        tx_text = Text("1 台 TX", color="#FF6B6B", font=CJK,
                       font_size=11, weight="BOLD").move_to(tx_box.get_center())

        splitter = Dot(point=origin + DOWN * 0.9,
                       radius=0.10, color="#FFD93D")
        feed_lines = VGroup(*[
            Line(splitter.get_center(), e.get_center(),
                 stroke_width=1, color="#FFD93D", stroke_opacity=0.8)
            for e in elements
        ])

        pesa_label = Text("1. PESA — 一台 TX 喂所有阵元", color=GREY,
                         font=CJK, font_size=14).to_edge(DOWN)

        self.play(FadeIn(elements), Write(pesa_label), run_time=0.4)
        self.play(FadeIn(tx_box), Write(tx_text),
                  FadeIn(splitter), Create(feed_lines),
                  run_time=0.9)

        limit_label = Text("2. 局限 — 中央 TX 是单点故障", color=RED,
                           font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(pesa_label, limit_label), run_time=0.3)
        self.play(FadeOut(splitter), FadeOut(feed_lines), run_time=0.5)
        x1 = Text("X", color=RED, font_size=36, weight="BOLD")
        x1.move_to(tx_box.get_center())
        self.play(FadeIn(x1, scale=2.0), run_time=0.5)
        self.play(elements.animate.set_opacity(0.3),
                  FadeOut(tx_box), FadeOut(tx_text),
                  FadeOut(pesa_label), run_time=0.6)

        tr_modules = VGroup()
        for e in elements:
            tr = Rectangle(width=0.5, height=0.18,
                           color="#FFD93D", stroke_width=1.5,
                           fill_color="#152040", fill_opacity=1)
            tr.move_to(e.get_center() + DOWN * 0.55)
            tr_modules.add(tr)

        bus = Rectangle(width=5.6, height=0.18, color="#54A0FF",
                        stroke_width=2, fill_color="#152040", fill_opacity=1)
        bus.move_to(origin + DOWN * 1.4)
        bus_text = Text("数字控制总线", color="#54A0FF", font=CJK,
                        font_size=11, weight="BOLD").move_to(bus.get_center())

        links = VGroup(*[
            dashed(tr_modules[i].get_bottom(), bus.get_top(),
                   color="#54A0FF", opacity=0.7)
            for i in range(N)
        ])

        aesa_label = Text("3. AESA — 每个阵元自带 T/R 模块", color=TEAL,
                          font=CJK, font_size=14).to_edge(DOWN)

        self.play(FadeOut(x1), elements.animate.set_opacity(1.0),
                  run_time=0.5)
        self.play(FadeIn(tr_modules), FadeIn(bus), Write(bus_text),
                  Create(links), run_time=0.9)
        self.play(Write(aesa_label), run_time=0.4)

        robust_label = Text("4. 鲁棒 — 坏了一两个，波束依旧工作", color=GREEN,
                            font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(aesa_label, robust_label), run_time=0.3)

        dead_indices = [1, 4]
        dead_xs = VGroup()
        for idx in dead_indices:
            xm = Text("X", color=RED, font_size=18, weight="BOLD")
            xm.move_to(elements[idx].get_center())
            dead_xs.add(xm)
        self.play(elements[dead_indices[0]].animate.set_opacity(0.3),
                  elements[dead_indices[1]].animate.set_opacity(0.3),
                  FadeIn(dead_xs, scale=1.5), run_time=0.7)

        survivors = VGroup(*[elements[i] for i in range(N)
                             if i not in dead_indices])
        survivor_modules = VGroup(*[tr_modules[i] for i in range(N)
                                    if i not in dead_indices])
        self.play(survivors.animate.set_stroke(GREEN, width=3.0),
                  survivor_modules.animate.set_stroke(GREEN, width=3.0),
                  run_time=0.4)
        self.play(survivors.animate.set_stroke(opacity=1),
                  survivor_modules.animate.set_stroke(opacity=1),
                  run_time=0.4)

        self.wait(0.8)