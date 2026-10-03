"""Article 33 \u2014 What Is Dual Polarization? (EN). Animation:

1. RAIN  -- round drops, Zdr near zero, both pols equal
2. SNOW  -- flat plates, H return stronger, Zdr positive
3. HAIL  -- tumbling chunks, CC drops below 0.95
4. INSECT -- non-weather, returns decorrelated, flag as clutter
"""
from manim import (
    Scene, VGroup, Dot, Circle, Rectangle, Text, Line, Arrow, Polygon,
    Ellipse,
    UP, DOWN, LEFT, RIGHT, UR, FadeIn, FadeOut, Write, Create,
    Transform, YELLOW, GREEN, GREY, TEAL, RED, ORANGE, BLUE, WHITE, np
)


class RadarArticle33(Scene):
    def construct(self):
        np.random.seed(33)
        self.camera.background_color = "#061a30"

        title = Text("Dual Polarization", color=TEAL, font_size=30,
                     weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # Box around the polarimetric volume
        box = Rectangle(width=4.4, height=2.6, stroke_color="#54A0FF",
                       stroke_width=2, fill_color="#0F1A1F",
                       fill_opacity=1).move_to(LEFT * 1.5 + UP * 0.2)

        # Radar with H + V antennas
        h_ant = Rectangle(width=0.6, height=0.25, color="#FFD93D",
                           stroke_width=1.5,
                           fill_color="#FFD93D",
                           fill_opacity=1).move_to(UR + LEFT * 0.3 + DOWN * 0.8)
        v_ant = Rectangle(width=0.6, height=0.25, color="#FF6B6B",
                           stroke_width=1.5,
                           fill_color="#FF6B6B",
                           fill_opacity=1).move_to(UR + LEFT * 0.3 + DOWN * 1.2)

        # H wave (horizontal flat)
        h_wave = Arrow(box.get_left() + UP * 0.3,
                       h_ant.get_left(),
                       color="#FFD93D", stroke_width=4, buff=0.1)
        # V wave (vertical squiggle)
        v_wave = Arrow(box.get_left() + DOWN * 0.3,
                       v_ant.get_left(),
                       color="#FF6B6B", stroke_width=4, buff=0.1)

        # Particle shapes: round / flat / round-but-jittery / dot
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

        readout = Text("Zdr: --   CC: --", color=GREY, font_size=22,
                       weight="BOLD").to_corner(UR)

        step = Text("1. RAIN  --  round drops, Zdr ~ 0",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), Write(readout), run_time=0.4)

        # rain: make every particle a small circle (already is)
        # for each pair, H and V echo arrows return with same length
        echo_h_returns = [{x: 0} for x in range(8)]
        echo_targets = [{x: 0} for x in range(8)]
        for p in particles:
            self.play(p.animate.set_color("#FFD93D").scale(1.0),
                      run_time=0.05)
        self.play(Transform(readout, Text("Zdr: 0.0   CC: 0.99",
                                          color="#FFD93D", font_size=22,
                                          weight="BOLD").to_corner(UR)),
                  run_time=0.4)

        # 2. SNOW: flat plates (vertical squiggle path), Zdr positive
        step2 = Text("2. SNOW  --  flat plates, Zdr positive",
                     color=YELLOW, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)
        # turn particles into horizontal dashes
        for p in particles:
            self.play(p.animate.scale(0.5).stretch_to_fit_height(0.02)
                      .set_color(WHITE),
                      run_time=0.04)
        self.play(Transform(readout, Text("Zdr: 3.5   CC: 0.97",
                                          color=WHITE, font_size=22,
                                          weight="BOLD").to_corner(UR)),
                  run_time=0.4)

        # 3. HAIL: large tumbling chunks, CC drops
        step3 = Text("3. HAIL  --  tumbling chunks, CC < 0.95",
                     color=RED, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)
        for p in particles:
            self.play(p.animate.set_color(RED).scale(2.0),
                      run_time=0.05)
        # randomly jitter
        for _ in range(3):
            for p in particles:
                self.play(p.animate.shift(np.array([0.05, 0.05, 0])),
                          run_time=0.02)
            for p in particles:
                self.play(p.animate.shift(np.array([-0.05, -0.05, 0])),
                          run_time=0.02)
        self.play(Transform(readout, Text("Zdr: 0.5   CC: 0.85",
                                          color=RED, font_size=22,
                                          weight="BOLD").to_corner(UR)),
                  run_time=0.4)

        # 4. INSECT: small specks, CC very low, flagged as clutter
        step4 = Text("4. INSECT  --  decorrelated, flag as clutter",
                     color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)
        for p in particles:
            self.play(p.animate.set_color(GREEN).scale(0.3),
                      run_time=0.04)
        # overlay a big "REJECTED" banner
        rejected = Text("REJECTED", color=GREEN, font_size=42,
                       weight="BOLD").move_to(box.get_center())
        self.play(FadeIn(rejected), run_time=0.4)
        self.play(Transform(readout, Text("Zdr: -1.2   CC: 0.50",
                                          color=GREEN, font_size=22,
                                          weight="BOLD").to_corner(UR)),
                  run_time=0.3)

        self.wait(0.8)