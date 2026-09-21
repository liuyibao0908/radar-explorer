"""
Article 11 - Why Can Radar See Aircraft?

Manim CE animation: radar sends a wave, it reflects off an
aircraft, the echo comes back, and the radar reports its
measurements. The whole scene runs as a clean 4-step loop
designed to be both self-explanatory and visually calm.

Run:
    D:/Users/eddiewen/AppData/Local/Programs/Python/Python312/python.exe \\
        -m manim -ql script.py RadarArticle11

Output:
    media/videos/script/480p15/RadarArticle11.mp4
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
    config,
)


# Palette (matches the site's CSS so the MP4 feels native)
BG = "#101418"
RADAR_CYAN = "#58C4DD"
WAVE_GREEN = "#7CFC00"
ECHO_RED = "#FF6B6B"
PLANE_YELLOW = "#FFD93D"
TEXT_COLOR = "#EAEAEA"
DIM = "#888888"


def wave_arc(color, x_center, radius=0.32, opacity=0.9, stroke_width=3):
    """A single sin-shaped wave packet: a 180\u00b0 arc sitting on y=0."""
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


class RadarArticle11(Scene):
    """Send-reflect-receive-decide loop. ~16s at 30fps."""

    def construct(self):
        self.camera.background_color = BG

        # -------------------------------------------------------------
        # LAYOUT  (radar on left, aircraft on right, both at y=0)
        # -------------------------------------------------------------
        RADAR_X = -5.2
        TARGET_X = 4.6

        # Radar rig
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

        # Aircraft silhouette
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

        aircraft_label = Text(
            "AIRCRAFT",
            font_size=20, color=PLANE_YELLOW, weight="BOLD",
        ).move_to([TARGET_X, -1.6, 0])

        # Distance bracket under the scene
        distance_bracket = VGroup(
            Line(
                start=[RADAR_X, -2.6, 0],
                end=[TARGET_X, -2.6, 0],
                color=DIM, stroke_width=1,
            ),
            Line(
                start=[RADAR_X, -2.7, 0],
                end=[RADAR_X, -2.5, 0],
                color=DIM, stroke_width=2,
            ),
            Line(
                start=[TARGET_X, -2.7, 0],
                end=[TARGET_X, -2.5, 0],
                color=DIM, stroke_width=2,
            ),
        )

        # Step badge (top-center)
        step_label = Text(
            "1. SEND",
            font_size=30, color=WAVE_GREEN, weight="BOLD",
        ).move_to([0, 2.6, 0])

        # Measurement readout (right side)
        readout_title = Text(
            "DETECTED",
            font_size=18, color=DIM, weight="BOLD",
        ).move_to([3.6, 1.8, 0])

        readout_box = Rectangle(
            width=4.2, height=2.6,
            color=RADAR_CYAN, fill_opacity=0.05, stroke_width=1,
        ).move_to([3.6, 0.6, 0])

        readout_distance = Text(
            "42.0 km",
            font_size=24, color=TEXT_COLOR, weight="BOLD",
        ).move_to([3.6, 1.4, 0])

        readout_direction = Text(
            "NE \u00b7 037\u00b0",
            font_size=18, color=TEXT_COLOR, weight="BOLD",
        ).move_to([3.6, 0.7, 0])

        readout_speed = Text(
            "820 km/h",
            font_size=18, color=TEXT_COLOR, weight="BOLD",
        ).move_to([3.6, 0.05, 0])

        readout = VGroup(
            readout_title, readout_box,
            readout_distance, readout_direction, readout_speed,
        )

        # The wave packets: 3 staggered arcs each, sitting on y=0.
        # Outgoing: just outside the radar rig, traveling right.
        # Echo:     just outside the aircraft, traveling left.
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

        # Travel distance per phase (so wave reaches the target exactly).
        # The wave group has 3 arcs spanning 3*GAP; we move the group so
        # the leading edge ends at the target's antenna tip.
        SEND_DX = (TARGET_X - 0.4) - (RADAR_X + 0.9 + 2 * ARC_GAP) - 0.2
        RECEIVE_DX = (RADAR_X + 0.4) - (TARGET_X - 1.1 - 2 * ARC_GAP) - 0.0

        # =============================================================
        # OPENING
        # =============================================================
        self.play(
            Write(Text("How Radar Sees an Aircraft",
                       font_size=24, color=TEXT_COLOR, weight="BOLD")
                 .move_to([0, 3.3, 0])),
            run_time=0.8,
        )
        self.play(
            FadeIn(radar_body, scale=0.6),
            FadeIn(radar_antenna, scale=0.6),
            Write(radar_label),
            run_time=0.8,
        )
        self.play(
            FadeIn(aircraft, shift=LEFT * 0.5),
            Write(aircraft_label),
            Create(distance_bracket),
            run_time=0.8,
        )
        self.wait(0.4)

        # =============================================================
        # STEP 1: SEND
        # =============================================================
        step_label.set_text("1. SEND")
        step_label.set_color(WAVE_GREEN)
        self.play(Write(step_label), run_time=0.4)

        # wave_out already placed at radar_x + 0.9 by wave_arc()
        self.play(FadeIn(wave_out), run_time=0.3)
        self.play(
            wave_out.animate.shift(RIGHT * SEND_DX),
            run_time=2.0,
            rate_func=rate_functions.linear,
        )
        self.play(FadeOut(wave_out), run_time=0.2)

        # =============================================================
        # STEP 2: REFLECT
        # =============================================================
        step_label.become(
            Text("2. REFLECT", font_size=30, color=ECHO_RED, weight="BOLD")
            .move_to([0, 2.6, 0])
        )
        self.wait(0.2)

        # wave_back already placed at target_x - 1.1 by wave_arc()
        self.play(FadeIn(wave_back), run_time=0.3)
        self.play(
            wave_back.animate.shift(LEFT * RECEIVE_DX),
            run_time=2.0,
            rate_func=rate_functions.linear,
        )
        self.play(FadeOut(wave_back), run_time=0.2)

        # =============================================================
        # STEP 3: RECEIVE
        # =============================================================
        step_label.become(
            Text("3. RECEIVE", font_size=30, color=RADAR_CYAN, weight="BOLD")
            .move_to([0, 2.6, 0])
        )
        self.wait(0.2)
        self.play(
            radar_antenna.animate.set_color(WHITE).scale(1.8),
            run_time=0.3,
        )
        self.play(
            radar_antenna.animate.set_color(RADAR_CYAN).scale(0.55),
            run_time=0.5,
        )
        self.wait(0.3)

        # =============================================================
        # STEP 4: DECIDE
        # =============================================================
        step_label.become(
            Text("4. DECIDE", font_size=30, color=YELLOW, weight="BOLD")
            .move_to([0, 2.6, 0])
        )
        self.wait(0.2)

        # Fade in measurement readout
        self.play(
            FadeIn(readout, shift=UP * 0.3),
            run_time=0.9,
        )
        self.wait(2.0)

        # =============================================================
        # LOOP RECAP
        # =============================================================
        self.play(
            FadeOut(step_label),
            FadeOut(readout),
            run_time=0.5,
        )

        loop_caption = Text(
            "send  \u2192  reflect  \u2192  receive  \u2192  decide",
            font_size=22, color=TEXT_COLOR, weight="BOLD",
        ).to_edge(DOWN, buff=0.8)
        self.play(Write(loop_caption), run_time=1.0)
        self.wait(1.0)

        # =============================================================
        # CLEAN EXIT
        # =============================================================
        self.play(
            FadeOut(loop_caption),
            *[FadeOut(m) for m in [
                radar_body, radar_antenna, radar_label,
                aircraft, aircraft_label, distance_bracket,
            ]],
            run_time=0.7,
        )
        self.wait(0.2)


if __name__ == "__main__":
    pass