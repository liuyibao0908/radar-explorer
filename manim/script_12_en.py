"""
Article 12 - How Does Radar Calculate Distance? (English)

Manim CE animation that visualizes the speed-of-light
round-trip formula:
    distance = c \u00d7 t \u00f7 2
The video walks through:
    1. SEND    \u2014 radar emits the pulse at t=0
    2. TRAVEL  \u2014 the wave covers distance d at the speed of light
    3. ECHO    \u2014 the wave returns the same distance d
    4. COMPUTE \u2014 distance = c \u00d7 t \u00f7 2

Run:
    D:/Users/eddiewen/AppData/Local/Programs/Python/Python312/python.exe \\
        -m manim -ql --media_dir "E:/radar-explorer" \\
        -o "RadarArticle12.en.mp4" manim/script_12_en.py RadarArticle12
"""

from manim import (
    Scene,
    VGroup,
    Dot,
    Polygon,
    Rectangle,
    Triangle,
    Arc,
    Text,
    Line,
    Arrow,
    FadeIn,
    FadeOut,
    Write,
    Create,
    ReplacementTransform,
    UP,
    DOWN,
    LEFT,
    RIGHT,
    ORIGIN,
    PI,
    DEGREES,
    YELLOW,
    WHITE,
    GREY,
    BLUE,
    GREEN,
    RED,
    ORANGE,
    rate_functions,
)


BG = "#101418"
RADAR_CYAN = "#58C4DD"
WAVE_GREEN = "#7CFC00"
ECHO_RED = "#FF6B6B"
PLANE_YELLOW = "#FFD93D"
TEXT_COLOR = "#EAEAEA"
DIM = "#888888"


def wave_arc(color, x_center, radius=0.32, opacity=0.9, stroke_width=3):
    arc = Arc(
        radius=radius,
        start_angle=PI * DEGREES,
        angle=180 * DEGREES,
        color=color,
        stroke_width=stroke_width,
    )
    arc.set_opacity(opacity)
    arc.move_to([x_center, 0, 0])
    return arc


class RadarArticle12(Scene):
    """Send-travel-echo-compute time-axis visualization. ~14s."""

    def construct(self):
        self.camera.background_color = BG

        # LAYOUT
        RADAR_X = -5.2
        TARGET_X = 4.6

        # Radar
        radar_label = Text(
            "RADAR",
            font_size=20, color=RADAR_CYAN, weight="BOLD",
        ).move_to([RADAR_X, -1.6, 0])

        radar_body = Rectangle(
            width=1.4, height=1.0,
            color=RADAR_CYAN, fill_opacity=0.15, stroke_width=2,
        ).move_to([RADAR_X, 0, 0])

        radar_antenna = Dot(
            point=[RADAR_X, 0.7, 0],
            radius=0.10, color=RADAR_CYAN,
        )

        # Aircraft (target)
        aircraft = VGroup(
            Rectangle(
                width=1.6, height=0.18,
                color=PLANE_YELLOW, fill_opacity=0.95, stroke_width=0,
            ).move_to([TARGET_X, 0, 0]),
            Triangle(
                color=PLANE_YELLOW, fill_opacity=0.95, stroke_width=0,
            ).scale(0.4).rotate(90 * DEGREES).move_to([TARGET_X + 0.95, 0, 0]),
            Polygon(
                [TARGET_X - 0.6, 0, 0],
                [TARGET_X - 0.85, 0.5, 0],
                [TARGET_X - 0.5, 0.5, 0],
                color=PLANE_YELLOW, fill_opacity=0.95, stroke_width=0,
            ),
        )

        target_label = Text(
            "AIRCRAFT",
            font_size=20, color=PLANE_YELLOW, weight="BOLD",
        ).move_to([TARGET_X, -1.6, 0])

        # Distance bracket below
        distance_bracket = VGroup(
            Line(start=[RADAR_X, -2.6, 0], end=[TARGET_X, -2.6, 0],
                 color=DIM, stroke_width=1),
            Line(start=[RADAR_X, -2.7, 0], end=[RADAR_X, -2.5, 0],
                 color=DIM, stroke_width=2),
            Line(start=[TARGET_X, -2.7, 0], end=[TARGET_X, -2.5, 0],
                 color=DIM, stroke_width=2),
        )

        # Step label (top-center, large, color follows the phase)
        step_label = Text(
            "1. SEND",
            font_size=30, color=WAVE_GREEN, weight="BOLD",
        ).move_to([0, 2.6, 0])

        # Time axis (under the scene)
        time_axis = Line(
            start=[RADAR_X, -3.4, 0],
            end=[TARGET_X + 0.4, -3.4, 0],
            color=DIM, stroke_width=1,
        )

        t0_label   = Text("t = 0",   font_size=14, color=DIM,  weight="BOLD"
                        ).move_to([RADAR_X,    -3.85, 0])
        thalf_label = Text("t = t/2", font_size=14, color=PLANE_YELLOW, weight="BOLD"
                          ).move_to([0,            -3.85, 0])
        tend_label  = Text("t = t",   font_size=14, color=DIM,  weight="BOLD"
                          ).move_to([TARGET_X,    -3.85, 0])

        # Right-side formula card
        formula_title = Text(
            "FORMULA",
            font_size=18, color=DIM, weight="BOLD",
        ).move_to([3.6, 1.8, 0])

        formula_box = Rectangle(
            width=4.2, height=2.6,
            color=RADAR_CYAN, fill_opacity=0.05, stroke_width=1,
        ).move_to([3.6, 0.6, 0])

        formula_l1 = Text(
            "distance d = c \u00d7 t \u00f7 2",
            font_size=22, color=TEXT_COLOR, weight="BOLD",
        ).move_to([3.6, 1.2, 0])

        formula_l2 = Text(
            "c = 300,000 km/s",
            font_size=16, color=DIM,
        ).move_to([3.6, 0.55, 0])

        formula_l3 = Text(
            "example: t = 1 ms  \u2192  d = 150 km",
            font_size=16, color=WAVE_GREEN,
        ).move_to([3.6, 0.05, 0])

        formula = VGroup(
            formula_title, formula_box,
            formula_l1, formula_l2, formula_l3,
        )

        # Wave packets
        ARC_GAP = 0.42
        wave_out = VGroup(
            wave_arc(WAVE_GREEN, RADAR_X + 0.9, opacity=0.95),
            wave_arc(WAVE_GREEN, RADAR_X + 0.9 + ARC_GAP, opacity=0.70),
            wave_arc(WAVE_GREEN, RADAR_X + 0.9 + 2 * ARC_GAP, opacity=0.45),
        )
        wave_back = VGroup(
            wave_arc(ECHO_RED, TARGET_X - 1.1, opacity=0.95),
            wave_arc(ECHO_RED, TARGET_X - 1.1 - ARC_GAP, opacity=0.70),
            wave_arc(ECHO_RED, TARGET_X - 1.1 - 2 * ARC_GAP, opacity=0.45),
        )

        SEND_DX = (TARGET_X - 0.4) - (RADAR_X + 0.9 + 2 * ARC_GAP) - 0.2
        RECEIVE_DX = (RADAR_X + 0.4) - (TARGET_X - 1.1 - 2 * ARC_GAP) - 0.0

        # OPENING
        self.play(
            Write(Text("How Does Radar Calculate Distance?",
                       font_size=24, color=TEXT_COLOR, weight="BOLD")
                 .move_to([0, 3.3, 0])),
            run_time=0.8,
        )
        self.play(
            FadeIn(radar_body, scale=0.6),
            FadeIn(radar_antenna, scale=0.6),
            Write(radar_label),
            Create(distance_bracket),
            run_time=0.8,
        )
        self.play(
            FadeIn(aircraft, shift=LEFT * 0.5),
            Write(target_label),
            Create(time_axis),
            Write(t0_label), Write(tend_label),
            run_time=0.8,
        )
        self.wait(0.4)

        # STEP 1: SEND
        step_label.set_text("1. SEND")
        step_label.set_color(WAVE_GREEN)
        self.play(Write(step_label), run_time=0.4)

        self.play(FadeIn(wave_out), run_time=0.3)
        moving_tick = thalf_label.copy().set_color(WAVE_GREEN)
        self.play(
            wave_out.animate.shift(RIGHT * SEND_DX),
            FadeIn(moving_tick, run_time=0.1),
            moving_tick.animate.move_to([0, -3.85, 0]),
            run_time=2.0,
            rate_func=rate_functions.linear,
        )
        self.play(FadeOut(wave_out), run_time=0.2)
        moving_tick.set_color(PLANE_YELLOW)
        self.wait(0.2)

        # STEP 2: TRAVEL
        step_label.become(
            Text("2. TRAVEL", font_size=30, color=WAVE_GREEN, weight="BOLD")
            .move_to([0, 2.6, 0])
        )
        self.wait(0.2)

        # STEP 3: ECHO
        step_label.become(
            Text("3. ECHO", font_size=30, color=ECHO_RED, weight="BOLD")
            .move_to([0, 2.6, 0])
        )
        self.wait(0.2)

        self.play(FadeIn(wave_back), run_time=0.3)
        echo_tick = thalf_label.copy().set_color(ECHO_RED)
        self.play(
            wave_back.animate.shift(LEFT * RECEIVE_DX),
            FadeIn(echo_tick, run_time=0.1),
            echo_tick.animate.move_to([TARGET_X, -3.85, 0]),
            run_time=2.0,
            rate_func=rate_functions.linear,
        )
        self.play(FadeOut(wave_back), run_time=0.2)
        self.wait(0.3)

        # STEP 4: COMPUTE
        step_label.become(
            Text("4. COMPUTE", font_size=30, color=YELLOW, weight="BOLD")
            .move_to([0, 2.6, 0])
        )
        self.wait(0.2)

        # antenna flash
        self.play(
            radar_antenna.animate.set_color(WHITE).scale(1.8),
            run_time=0.3,
        )
        self.play(
            radar_antenna.animate.set_color(RADAR_CYAN).scale(0.55),
            run_time=0.5,
        )

        self.play(
            FadeIn(formula, shift=UP * 0.3),
            run_time=0.9,
        )
        self.wait(2.0)

        # LOOP RECAP
        self.play(
            FadeOut(step_label),
            FadeOut(formula),
            FadeOut(echo_tick),
            run_time=0.5,
        )

        loop_caption = Text(
            "send  \u2192  travel  \u2192  echo  \u2192  compute",
            font_size=22, color=TEXT_COLOR, weight="BOLD",
        ).to_edge(DOWN, buff=0.8)
        self.play(Write(loop_caption), run_time=1.0)
        self.wait(1.0)

        # CLEAN EXIT
        self.play(
            FadeOut(loop_caption),
            *[FadeOut(m) for m in [
                radar_body, radar_antenna, radar_label,
                aircraft, target_label, distance_bracket,
                time_axis, t0_label, thalf_label, tend_label,
            ]],
            run_time=0.7,
        )
        self.wait(0.2)


if __name__ == "__main__":
    pass