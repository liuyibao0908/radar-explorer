"""Article 35 \u4e2d\u6587 \u2014 \u96f7\u8fbe\u5faa\u73af\uff1a\u53d1\u5c04\u3001\u53cd\u5c04\u3001\u5904\u7406\u3001\u663e\u793a\u3002"""
from manim import (
    Scene, VGroup, Rectangle, Circle, Text, Line, Arrow, Polygon, Dot,
    UP, DOWN, LEFT, RIGHT, UR, FadeIn, FadeOut, Write, Transform, MoveAlongPath,
    YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, PURPLE, PINK, np,
)

CJK = "Microsoft YaHei"


class RadarArticle35(Scene):
    def construct(self):
        np.random.seed(35)
        self.camera.background_color = "#061a30"

        title = Text("\u4e00\u4e2a\u5b8c\u6574\u7684\u96f7\u8fbe\u5faa\u73af", color=TEAL,
                     font=CJK, font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.6)

        boxes = VGroup()
        specs = [
            ("\u53d1\u5c04", GREEN), ("\u5929\u7ebf", GREEN), ("\u63a5\u6536", GREEN),
            ("\u5904\u7406", BLUE), ("\u663e\u793a", GREEN),
        ]
        for label, col in specs:
            b = Rectangle(width=1.35, height=0.85,
                          stroke_color=col, stroke_width=2,
                          fill_color=col, fill_opacity=0.16)
            t = Text(label, color=col, font=CJK, font_size=17, weight="BOLD")
            t.move_to(b.get_center())
            boxes.add(VGroup(b, t))
        boxes.arrange(RIGHT, buff=0.55).next_to(title, DOWN, buff=0.55)
        self.play(FadeIn(boxes, lag_ratio=0.08), run_time=0.6)

        radar_pos = boxes[0].get_center() + UP * 0.95
        target_pos = boxes[4].get_center() + RIGHT * 1.1 + UP * 1.55

        step = Text("1. \u53d1\u5c04", color=GREEN, font=CJK,
                    font_size=19, weight="BOLD").to_edge(DOWN)
        self.play(Write(step), run_time=0.25)

        pulse = Dot(radar_pos, radius=0.11, color=YELLOW)
        self.play(FadeIn(pulse), run_time=0.2)
        self.play(pulse.animate.move_to(boxes[1].get_center()), run_time=0.3)
        self.play(pulse.animate.move_to(target_pos), run_time=0.7)
        tgt = Circle(radius=0.24, stroke_color=RED, stroke_width=2.5,
                     fill_color=RED, fill_opacity=0.2).move_to(target_pos)
        self.play(FadeIn(tgt), run_time=0.25)

        step2 = Text("2. \u53cd\u5c04", color=RED, font=CJK,
                     font_size=19, weight="BOLD").to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.25)

        echo = Dot(target_pos, radius=0.11, color=ORANGE)
        self.play(FadeIn(echo), run_time=0.2)
        self.play(echo.animate.move_to(boxes[1].get_center()), run_time=0.7)
        self.play(echo.animate.move_to(boxes[2].get_center()), run_time=0.3)

        step3 = Text("3. \u5904\u7406 \u2014 \u4ece\u566a\u58f0\u91cc\u627e\u76ee\u6807",
                     color=BLUE, font=CJK, font_size=19, weight="BOLD").to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        noise = VGroup()
        for _ in range(22):
            x = boxes[3].get_center()[0] + np.random.uniform(-0.6, 0.6)
            y = boxes[3].get_center()[1] + np.random.uniform(-0.55, 0.55)
            noise.add(Dot([x, y, 0], radius=0.035, color=GREY))
        self.play(FadeIn(noise, lag_ratio=0.02), run_time=0.4)
        self.play(FadeOut(noise, lag_ratio=0.02), run_time=0.45)
        self.play(FadeIn(echo), run_time=0.2)

        step4 = Text("4. \u663e\u793a \u2014 \u7ed9\u4eba\u770b",
                     color=GREEN, font=CJK, font_size=19, weight="BOLD").to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        screen = Rectangle(width=1.2, height=0.72,
                           stroke_color=TEAL, stroke_width=2,
                           fill_color="#0F1A1F", fill_opacity=1)
        screen.move_to(boxes[4].get_center())
        blip = Circle(radius=0.13, stroke_color=YELLOW, stroke_width=2,
                      fill_color=YELLOW, fill_opacity=0.75)
        blip.move_to(screen.get_center() + LEFT * 0.22)
        self.play(FadeIn(screen), FadeIn(blip), run_time=0.5)

        self.play(step.animate.set_opacity(0.0), run_time=0.1)
        summary = Text("\u53d1\u51fa \u2192 \u63a5\u6536 \u2192 \u8ba1\u7b97 \u2192 \u663e\u793a",
                       color=YELLOW, font=CJK, font_size=20).to_edge(DOWN)
        self.play(Write(summary), run_time=0.5)
        self.wait(1.0)