"""Article 31 — 天气雷达在测什么（中文）.

动画四步：
1. 空 — 没有水滴，没有回波，dBZ 低
2. 轻 — 几滴出现，回波变亮
3. 强 — 水滴密集，回波变成红色
4. 暴 — 冰雹，最亮的核
"""
from manim import (
    Scene, VGroup, Dot, Circle, Rectangle, Text, Line, Polygon,
    UP, DOWN, LEFT, RIGHT, UR, Arrow, FadeIn, FadeOut, Write, Create,
    Transform, YELLOW, GREEN, GREY, TEAL, RED, ORANGE, np
)

CJK = "Microsoft YaHei"


class RadarArticle31(Scene):
    def construct(self):
        np.random.seed(31)
        self.camera.background_color = "#061a30"

        title = Text("天气雷达反射率", color=TEAL, font=CJK,
                     font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        box = Rectangle(width=4.2, height=2.8, color="#54A0FF",
                       stroke_width=2, fill_color="#0F1A1F", fill_opacity=1)
        box.move_to(LEFT * 1.8 + UP * 0.2)

        antenna = Dot(point=RIGHT * 4.0 + DOWN * 1.2, radius=0.10,
                      color="#FFD93D")
        beam = Line(antenna.get_center(), antenna.get_center() + LEFT * 5.5,
                    stroke_width=2, color="#FFD93D", stroke_opacity=0.4)

        empty = VGroup()
        light_drops = VGroup()
        heavy_drops = VGroup()
        storm_drops = VGroup()

        rng = np.random.default_rng(31)
        for _ in range(20):
            x = rng.uniform(-1.9, 1.9)
            y = rng.uniform(-1.2, 1.2)
            d = Dot(point=box.get_center() + np.array([x, y, 0]),
                    radius=0.04, color="#54A0FF")
            light_drops.add(d)
        for _ in range(120):
            x = rng.uniform(-1.9, 1.9)
            y = rng.uniform(-1.2, 1.2)
            d = Dot(point=box.get_center() + np.array([x, y, 0]),
                    radius=0.06, color="#FFD93D")
            heavy_drops.add(d)
        for _ in range(60):
            x = rng.uniform(-1.9, 1.9)
            y = rng.uniform(-1.2, 1.2)
            d = Dot(point=box.get_center() + np.array([x, y, 0]),
                    radius=0.10, color="#FF6B6B")
            storm_drops.add(d)

        readout = Text("dBZ: 0", color=GREY, font=CJK,
                      font_size=22, weight="BOLD").to_corner(UR)
        self.play(Write(readout), run_time=0.3)

        step = Text("1. 空 — 没有水滴，dBZ 低", color=GREY, font=CJK,
                    font_size=14).to_edge(DOWN)
        self.play(Write(step), Create(box), FadeIn(antenna), run_time=0.6)

        pulse = Dot(antenna.get_center(), radius=0.08, color="#54A0FF")
        self.play(FadeIn(pulse), run_time=0.3)
        self.play(pulse.animate.move_to(box.get_center()),
                  Create(beam), run_time=0.8)
        self.play(FadeOut(pulse), run_time=0.2)

        step2 = Text("2. 轻 — 几滴出现，dBZ 变亮", color=YELLOW, font=CJK,
                     font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2),
                  FadeIn(light_drops, lag_ratio=0.02, run_time=0.6),
                  Transform(readout, Text("dBZ: 10", color=YELLOW, font=CJK,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  run_time=1.0)
        echo = Arrow(box.get_center(), antenna.get_center() + LEFT * 0.5,
                     color=YELLOW, stroke_width=2, buff=0.1,
                     stroke_opacity=0.8)
        self.play(Create(echo), run_time=0.6)

        step3 = Text("3. 强 — 水滴密集，回波变成红色", color=ORANGE,
                     font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3),
                  FadeIn(heavy_drops, lag_ratio=0.005, run_time=0.6),
                  Transform(readout, Text("dBZ: 35", color=ORANGE, font=CJK,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  Transform(echo, Arrow(box.get_center(),
                                         antenna.get_center() + LEFT * 0.5,
                                         color=ORANGE, stroke_width=4,
                                         buff=0.1, stroke_opacity=0.95)),
                  run_time=1.0)

        step4 = Text("4. 暴 — 冰雹，最亮的核", color=RED, font=CJK,
                     font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4),
                  FadeIn(storm_drops, lag_ratio=0.005, run_time=0.5),
                  Transform(readout, Text("dBZ: 55", color=RED, font=CJK,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  Transform(echo, Arrow(box.get_center(),
                                         antenna.get_center() + LEFT * 0.5,
                                         color=RED, stroke_width=6,
                                         buff=0.1, stroke_opacity=1.0)),
                  run_time=1.0)

        self.wait(0.8)