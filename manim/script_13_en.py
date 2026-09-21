"""Article 13 — How Does Radar Know the Direction? (EN).

Beam sweep animation:
  1) Radar at left; thin yellow beam pointing right
  2) Beam rotates (sweeps) across the sky
  3) Echo comes back when the beam passes over the target
  4) Direction is highlighted when detected
"""

from manim import (
    Scene, VGroup, Circle, Sector, Line, Arrow, Text, Dot, Rectangle,
    UP, DOWN, LEFT, RIGHT, ORIGIN, PI, DEGREES, Create, FadeIn, FadeOut,
    Write, Transform, Rotate, Indicate, Flash, SurroundingRectangle,
    YELLOW, BLUE, GREEN, GREY, RED, ORANGE, TEAL, BLACK, WHITE,
    np
)
import numpy as np


class RadarArticle13(Scene):
    def construct(self):
        np.random.seed(13)
        self.camera.background_color = "#0F1A1F"

        # ----- Title -----
        title = Text("How Does Radar Know the Direction?",
                     color=TEAL, font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=1.2)

        # ----- Radar at left -----
        radar_box = Rectangle(width=1.6, height=1.0, color=TEAL,
                              stroke_width=2, fill_color="#0F1A1F",
                              fill_opacity=1).shift(LEFT * 5.5 + DOWN * 0.4)
        radar_label = Text("RADAR", color=TEAL, font_size=16, weight="BOLD")\
            .move_to(radar_box.get_center())
        radar = VGroup(radar_box, radar_label)
        self.play(FadeIn(radar), run_time=0.4)

        # ----- Beam (sector) -----
        beam_outer = Sector(radius=8, start_angle=-12 * DEGREES,
                            angle=24 * DEGREES, fill_color=TEAL,
                            fill_opacity=0.18, stroke_color=TEAL,
                            stroke_width=1.5).move_arc_center_to(radar_box.get_center())
        beam_inner = Sector(radius=6.2, start_angle=-12 * DEGREES,
                            angle=24 * DEGREES, fill_color=TEAL,
                            fill_opacity=0.35, stroke_width=0)\
            .move_arc_center_to(radar_box.get_center())
        beam = VGroup(beam_outer, beam_inner)

        # ----- Step 1: SHOW BEAM -----
        step_label = Text("1. SWEEP  --  beam rotates to scan",
                          color=GREY, font_size=18).to_edge(DOWN)
        self.play(FadeIn(beam), Write(step_label), run_time=1.0)

        # ----- Step 2: SWEEP across the sky -----
        step_label_2 = Text("2. SCAN  --  beam sweeps left to right",
                            color=YELLOW, font_size=18).to_edge(DOWN)
        self.play(Transform(step_label, step_label_2), run_time=0.4)

        self.play(Rotate(beam, angle=70 * DEGREES,
                         about_point=radar_box.get_center()),
                  run_time=3.5, rate_func=lambda t: t)

        # ----- Step 3: DETECT  --  target appears, echo returns -----
        target_pos = radar_box.get_center() + np.array([5.6, 2.4, 0])

        target = Dot(point=target_pos, radius=0.16, color=YELLOW)
        target_label = Text("TARGET", color=YELLOW, font_size=14,
                            weight="BOLD").next_to(target, UP, buff=0.1)
        target_group = VGroup(target, target_label)

        # Re-aim beam so it actually hits the target
        beam_to_target = Line(
            radar_box.get_center(), target_pos,
            stroke_color=TEAL, stroke_width=2, stroke_opacity=0.6,
        )

        # Sweep rotation so beam now points at the target
        # Compute the angle to the target relative to the radar (current beam is +70 deg from start)
        # Simpler: replace the beam with a fresh one pointed at the target.
        target_angle = np.arctan2(target_pos[1] - radar_box.get_center()[1],
                                  target_pos[0] - radar_box.get_center()[0])
        # Use a narrower beam sector aimed at the target
        new_outer = Sector(radius=8, start_angle=target_angle - 12 * DEGREES,
                           angle=24 * DEGREES, fill_color=TEAL,
                           fill_opacity=0.18, stroke_color=TEAL,
                           stroke_width=1.5).move_arc_center_to(radar_box.get_center())
        new_inner = Sector(radius=6.2, start_angle=target_angle - 12 * DEGREES,
                           angle=24 * DEGREES, fill_color=TEAL,
                           fill_opacity=0.35, stroke_width=0)\
            .move_arc_center_to(radar_box.get_center())
        new_beam = VGroup(new_outer, new_inner)

        self.play(FadeIn(target_group),
                  Transform(beam, new_beam),
                  run_time=0.8)

        # Echo flash
        self.play(Flash(target.get_center(), color=YELLOW,
                       flash_radius=0.5, line_length=0.2,
                       num_lines=10, run_time=0.6))
        echo_arrow = Arrow(start=target.get_center(),
                           end=radar_box.get_center() + np.array([0.4, 0, 0]),
                           color=ORANGE, stroke_width=4, buff=0.2)\
            .shift(np.array([0, -0.05, 0]))
        self.play(Create(echo_arrow), run_time=0.6)

        step_label_3 = Text("3. DETECT  --  echo returns when beam hits target",
                            color=GREEN, font_size=18).to_edge(DOWN)
        self.play(Transform(step_label, step_label_3), run_time=0.4)

        # ----- Step 4: LOCATE  --  direction angle highlighted -----
        angle_arc = Sector(radius=1.4, start_angle=0,
                           angle=target_angle, fill_opacity=0,
                           stroke_color=YELLOW, stroke_width=3)\
            .move_arc_center_to(radar_box.get_center())
        # If target_angle is negative (below horizontal), arc geometry:
        # Manim Sector sweeps counter-clockwise from start_angle.
        # We instead use a thin angle marker line through the radar.
        angle_line = Line(
            radar_box.get_center(),
            radar_box.get_center() + np.array([
                np.cos(target_angle) * 1.4,
                np.sin(target_angle) * 1.4, 0]),
            color=YELLOW, stroke_width=3,
        )
        angle_marker = VGroup(angle_line)
        self.play(Create(angle_marker), run_time=0.5)

        direction_text = Text("direction = beam angle",
                              color=YELLOW, font_size=16, weight="BOLD")\
            .next_to(angle_marker, UP, buff=0.15)
        self.play(Write(direction_text), run_time=0.6)

        step_label_4 = Text("4. LOCATE  --  direction = current beam angle",
                            color=YELLOW, font_size=18).to_edge(DOWN)
        self.play(Transform(step_label, step_label_4), run_time=0.4)

        # ----- Step 5: REPORT  --  range + direction = position -----
        # Range indicator: dotted line from radar to target, label
        range_line = Line(radar_box.get_center(), target_pos,
                          color=GREEN, stroke_width=3, stroke_opacity=0.8)
        range_label = Text("RANGE",
                           color=GREEN, font_size=14, weight="BOLD")\
            .move_to(range_line.get_center() + np.array([0, 0.35, 0]))
        self.play(Create(range_line), Write(range_label), run_time=0.7)

        # Final summary text near target
        final = Text("range + direction = 3D position",
                     color=TEAL, font_size=18, weight="BOLD")\
            .next_to(target_group, DOWN, buff=0.4)
        self.play(Write(final), run_time=0.7)

        step_label_5 = Text("5. REPORT  --  range + direction = 3D position",
                            color=TEAL, font_size=18).to_edge(DOWN)
        self.play(Transform(step_label, step_label_5), run_time=0.4)

        # Hold for a moment so the viewer can read it
        self.wait(1.2)