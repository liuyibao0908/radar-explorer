"""Article 31 — What Does Weather Radar Measure? (EN). Animation:

1. EMPTY  -- no drops, no return, low dBZ
2. LIGHT  -- a few drops appear, echo brightens
3. HEAVY  -- dense drops, the cell glows red
4. STORM  -- hailstones, the brightest core of all
"""
from manim import (
    Scene, VGroup, Dot, Circle, Rectangle, Text, Line, Polygon,
    UP, DOWN, LEFT, RIGHT, UR, Arrow, FadeIn, FadeOut, Write, Create,
    Transform, YELLOW, GREEN, GREY, TEAL, RED, ORANGE, np
)


class RadarArticle31(Scene):
    def construct(self):
        np.random.seed(31)
        self.camera.background_color = "#061a30"

        title = Text("Weather Radar Reflectivity", color=TEAL,
                     font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # Pulse volume box in the sky
        box = Rectangle(width=4.2, height=2.8, color="#54A0FF",
                       stroke_width=2, fill_color="#0F1A1F", fill_opacity=1)
        box.move_to(LEFT * 1.8 + UP * 0.2)

        # The radar antenna on the right
        antenna = Dot(point=RIGHT * 4.0 + DOWN * 1.2, radius=0.10,
                      color="#FFD93D")
        beam = Line(antenna.get_center(), antenna.get_center() + LEFT * 5.5,
                    stroke_width=2, color="#FFD93D", stroke_opacity=0.4)

        # Drop population that we'll grow
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

        # dBZ readout (top right corner)
        readout = Text("dBZ: 0", color=GREY, font_size=22,
                      weight="BOLD").to_corner(UR)
        self.play(Write(readout), run_time=0.3)

        step = Text("1. EMPTY  --  no drops, low dBZ",
                    color=GREY, font_size=14).to_edge(DOWN)
        self.play(Write(step), Create(box), FadeIn(antenna), run_time=0.6)

        # Animate the pulse traveling
        pulse = Dot(antenna.get_center(), radius=0.08, color="#54A0FF")
        pulse2 = pulse.copy()
        self.play(FadeIn(pulse), run_time=0.3)
        self.play(pulse.animate.move_to(box.get_center()),
                  Create(beam), run_time=0.8)
        self.play(FadeOut(pulse), run_time=0.2)

        # 2. LIGHT: a few drops appear, echo brightens
        step2 = Text("2. LIGHT  --  a few drops, dBZ brighter",
                    color=YELLOW, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step2),
                  FadeIn(light_drops, lag_ratio=0.02, run_time=0.6),
                  Transform(readout, Text("dBZ: 10", color=YELLOW,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  run_time=1.0)
        # a faint echo going back
        echo = Arrow(box.get_center(), antenna.get_center() + LEFT * 0.5,
                     color=YELLOW, stroke_width=2, buff=0.1,
                     stroke_opacity=0.8)
        self.play(Create(echo), run_time=0.6)

        # 3. HEAVY: dense drops, cell glows red
        step3 = Text("3. HEAVY  --  dense drops, cell glows red",
                    color=ORANGE, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step3),
                  FadeIn(heavy_drops, lag_ratio=0.005, run_time=0.6),
                  Transform(readout, Text("dBZ: 35", color=ORANGE,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  Transform(echo, Arrow(box.get_center(),
                                         antenna.get_center() + LEFT * 0.5,
                                         color=ORANGE, stroke_width=4,
                                         buff=0.1, stroke_opacity=0.95)),
                  run_time=1.0)

        # 4. STORM: hail stones, brightest core
        step4 = Text("4. STORM  --  hailstones, brightest core",
                    color=RED, font_size=14).to_edge(DOWN)
        self.play(Transform(step, step4),
                  FadeIn(storm_drops, lag_ratio=0.005, run_time=0.5),
                  Transform(readout, Text("dBZ: 55", color=RED,
                                          font_size=22, weight="BOLD").to_corner(UR)),
                  Transform(echo, Arrow(box.get_center(),
                                         antenna.get_center() + LEFT * 0.5,
                                         color=RED, stroke_width=6,
                                         buff=0.1, stroke_opacity=1.0)),
                  run_time=1.0)

        self.wait(0.8)