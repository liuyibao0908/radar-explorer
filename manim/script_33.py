"""Article 33 \u2014 \u53cc\u504f\u632f\u662f\u4ec0\u4e48\uff08\u4e2d\u6587\uff09.

\u52a8\u753b\u56db\u6b65\uff1a
1. \u96e8 \u2014 \u5706\u96e8\u6ef4\uff0cZdr \u63a5\u8fd1\u96f6\uff0c\u4e24\u504f\u632f\u56de\u6ce2\u76f8\u540c
2. \u96ea \u2014 \u8584\u7247\u51b0\u6676\uff0cH \u56de\u6ce2\u66f4\u5f3a\uff0cZdr \u4e3a\u6b63
3. \u51b0\u96f9 \u2014 \u4e0d\u505c\u7ffb\u6eda\uff0cCC \u8dcc\u5230 0.95 \u4e0b
4. \u6606\u866b \u2014 \u975e\u964d\u6c34\uff0c\u4e24\u8109\u51b2\u4e0d\u540c\u6b65\uff0c\u88ab\u5224\u4e3a\u6742\u6ce4
"""
from manim import (
    Scene, VGroup, Dot, Circle, Rectangle, Text, Line, Arrow, Polygon,
    Ellipse,
    UP, DOWN, LEFT, RIGHT, UR, FadeIn, FadeOut, Write, Create,
    Transform, YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, np
)

CJK = "Microsoft YaHei"


class RadarArticle33(Scene):
    def construct(self):
        np.random.seed(33)
        self.camera.background_color = "#061a30"

        title = Text("\u53cc\u504f\u632f", color=TEAL, font=CJK,
                     font_size=32, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        box = Rectangle(width=4.4, height=2.6, stroke_color="#54A0FF",
                       stroke_width=2, fill_color="#0F1A1F",
                       fill_opacity=1).move_to(LEFT * 1.5 + UP * 0.2)

        h_ant = Rectangle(width=0.6, height=0.25, color="#FFD93D",
                           stroke_width=1.5,
                           fill_color="#FFD93D",
                           fill_opacity=1).move_to(UR + LEFT * 0.3 + DOWN * 0.8)
        v_ant = Rectangle(width=0.6, height=0.25, color="#FF6B6B",
                           stroke_width=1.5,
                           fill_color="#FF6B6B",
                           fill_opacity=1).move_to(UR + LEFT * 0.3 + DOWN * 1.2)

        h_wave = Arrow(box.get_left() + UP * 0.3,
                       h_ant.get_left(),
                       color="#FFD93D", stroke_width=4, buff=0.1)
        v_wave = Arrow(box.get_left() + DOWN * 0.3,
                       v_ant.get_left(),
                       color="#FF6B6B", stroke_width=4, buff=0.1)

        particles = VGroup()
        rng = np.random.default_rng(33)
        for _ in range(8):
            p = Circle(radius=0.05, color="#54A0FF",
                       fill_opacity=1, stroke_width=0).move_to(
                box.get_center() + np.array([
                    rng.uniform(-1.7, 1.7), rng.uniform(-1.0, 1.0), 0]))
            particles.add(p)

        self.play(Create(box), FadeIn(particles),
                  FadeIn(h_ant), FadeIn(v_ant),
                  Create(h_wave), Create(v_wave), run_time=1.0)

        readout = Text("Zdr: --   CC: --", color=GREY, font=CJK,
                       font_size=22, weight="BOLD").to_corner(UR)

        step = Text("1. \u96e8 \u2014 \u5706\u96e8\u6ef4\uff0cZdr \u63a5\u8fd1\u96f6",
                    color=GREY, font=CJK, font_size=14).to_edge(DOWN)
        self.play(Write(step), Write(readout), run_time=0.4)

        for p in particles:
            self.play(p.animate.set_color("#FFD93D").scale(1.0),
                      run_time=0.05)
        self.play(Transform(readout, Text("Zdr: 0.0   CC: 0.99",
                                          color="#FFD93D", font=CJK,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  run_time=0.4)

        step2 = Text("2. \u96ea \u2014 \u8584\u7247\u51b0\u6676\uff0cZdr \u4e3a\u6b63",
                     color=YELLOW, font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)
        for p in particles:
            self.play(p.animate.scale(0.5).stretch_to_fit_height(0.02)
                      .set_color(WHITE),
                      run_time=0.04)
        self.play(Transform(readout, Text("Zdr: 3.5   CC: 0.97",
                                          color=WHITE, font=CJK,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  run_time=0.4)

        step3 = Text("3. \u51b0\u96f9 \u2014 \u4e0d\u505c\u7ffb\u6eda\uff0cCC \u4e0b\u8dcc",
                     color=RED, font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)
        for p in particles:
            self.play(p.animate.set_color(RED).scale(2.0),
                      run_time=0.05)
        for _ in range(3):
            for p in particles:
                self.play(p.animate.shift(np.array([0.05, 0.05, 0])),
                          run_time=0.02)
            for p in particles:
                self.play(p.animate.shift(np.array([-0.05, -0.05, 0])),
                          run_time=0.02)
        self.play(Transform(readout, Text("Zdr: 0.5   CC: 0.85",
                                          color=RED, font=CJK,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  run_time=0.4)

        step4 = Text("4. \u6606\u866b \u2014 \u4e0d\u540c\u6b65\uff0c\u88ab\u5224\u4e3a\u6742\u6ce4",
                  color=GREEN, font=CJK, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)
        for p in particles:
            self.play(p.animate.set_color(GREEN).scale(0.3),
                      run_time=0.04)
        rejected = Text("\u5224\u4e3a\u6742\u6ce4", color=GREEN, font=CJK,
                       font_size=42, weight="BOLD").move_to(box.get_center())
        self.play(FadeIn(rejected), run_time=0.4)
        self.play(Transform(readout, Text("Zdr: -1.2   CC: 0.50",
                                          color=GREEN, font=CJK,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  run_time=0.3)

        self.wait(0.8)