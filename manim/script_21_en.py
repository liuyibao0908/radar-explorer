"""Article 21 \u2014 Weather Radar (EN). Animation:

1. Show weather radar dish with rain cell above
2. Dish tilts up; beam hits raindrop echoes
3. Rain map paints bright spots
4. Storm motion tracking arrow
"""
from manim import (
    Ellipse,
    Scene, VGroup, Dot, Rectangle, Line, Arrow, Circle, Text, ORIGIN,
    UP, DOWN, LEFT, RIGHT, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Flash, YELLOW, GREEN, GREY, ORANGE, TEAL,
    RED, BLUE, np
)


class RadarArticle21(Scene):
    def construct(self):
        np.random.seed(21)
        self.camera.background_color = "#061a30"

        title = Text("Weather Radar",
                     color=TEAL, font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        # Radar dish on left bottom
        dish = Ellipse(width=0.7, height=0.18, color="#58C4DD",
                       stroke_width=2, fill_color="#0F1A1F", fill_opacity=1)\
            .move_to(DOWN * 2.5 + LEFT * 5)
        dish_label = Text("RADAR", color="#58C4DD", font_size=11, weight="BOLD")\
            .next_to(dish, DOWN, buff=0.1)
        self.play(FadeIn(dish), Write(dish_label), run_time=0.4)

        # Sky / atmosphere
        cloud_band = Rectangle(width=14, height=2.5, color="#3a4555",
                                fill_opacity=0.4, stroke_width=0)\
            .move_to(UP * 0.5)

        # Rain cells (bright blobs at various positions)
        rain_cells = [
            (UP * 0.5 + RIGHT * 1, 0.4, "#7CFC00"),
            (UP * 1.5 + RIGHT * 2, 0.55, "#FFD93D"),
            (UP * 0.8 + RIGHT * 3.5, 0.7, "#FF6B6B"),
        ]
        rain_dots = []
        for pos, r, c in rain_cells:
            rain_dots.append(Dot(point=pos, radius=r, color=c))

        # 1. SCAN - dish tilts
        step = Text("1. SCAN  --  radar tilts through the atmosphere",
                    color=GREY, font_size=15).to_edge(DOWN)
        self.play(FadeIn(cloud_band), Write(step), run_time=0.5)

        # Beam going up
        beam = Line(dish.get_center(),
                     dish.get_center() + UP * 3 + RIGHT * 0.5,
                     color=TEAL, stroke_width=2)
        self.play(Create(beam), run_time=0.4)

        # 2. ECHO - rain appears
        step2 = Text("2. ECHO  --  raindrops and snowflakes reflect back",
                     color=YELLOW, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step2), run_time=0.3)
        for d in rain_dots:
            self.play(FadeIn(d, scale=0.5), run_time=0.15)

        # 3. PAINT - map fills
        step3 = Text("3. PAINT  --  bright spots fill the rainfall map",
                     color=GREEN, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step3), run_time=0.3)

        # Show the rainfall map (collection of bright dots)
        # Already painted - show them all together by fading out dish + cloud for clarity
        self.play(FadeOut(beam), run_time=0.3)

        # 4. FORECAST - track motion
        step4 = Text("4. FORECAST  --  track storm motion to predict next hour",
                     color=TEAL, font_size=15).to_edge(DOWN)
        self.play(Transform(step, step4), run_time=0.3)

        # Add motion arrows
        motion_arrow1 = Arrow(rain_cells[0][0], rain_cells[0][0] + RIGHT * 1.5,
                               color=GREEN, stroke_width=3, buff=0.15)
        motion_arrow2 = Arrow(rain_cells[1][0], rain_cells[1][0] + RIGHT * 1.5 + UP * 0.5,
                               color=YELLOW, stroke_width=3, buff=0.15)
        motion_arrow3 = Arrow(rain_cells[2][0], rain_cells[2][0] + RIGHT * 1.5,
                               color=RED, stroke_width=3, buff=0.15)
        forecast_label = Text("+ 30 min",
                              color=TEAL, font_size=12, weight="BOLD")\
            .move_to(DOWN * 2.5 + RIGHT * 2)
        self.play(Create(motion_arrow1), Create(motion_arrow2), Create(motion_arrow3),
                  Write(forecast_label), run_time=0.7)

        self.wait(0.6)