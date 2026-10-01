"""Article 30 — Passive vs Active Phased Array (EN). Animation:

1. PESA  -- one transmitter feeds every element through a splitter
2. LIMIT  -- the splitter adds loss and a single point of failure
3. AESA  -- each element carries its own transmit and receive module
4. ROBUST -- one element failing barely dents the beam
"""
from manim import (
    Scene, VGroup, Dot, Line, Rectangle, Text, Arrow,
    UP, DOWN, LEFT, RIGHT, DEGREES, FadeIn, FadeOut,
    Write, Create, Transform, YELLOW, GREEN, GREY, TEAL, RED, BLUE, np
)

# Line with arrow dashes via stroke_dasharray kwarg is unreliable in
# manim 0.21; emulate by creating N short Line segments with gaps.
def dashed(start, end, color="#54A0FF", n=8, opacity=0.7):
    from manim import DashedLine as _Dashed
    return _Dashed(start, end, dash_length=0.05, color=color,
                  stroke_opacity=opacity)


class RadarArticle30(Scene):
    def construct(self):
        np.random.seed(30)
        self.camera.background_color = "#061a30"

        title = Text("PESA vs AESA", color=TEAL,
                     font_size=30, weight="BOLD").to_edge(UP)
        self.play(Write(title), run_time=0.7)

        origin = DOWN * 2.2
        N = 6
        elements = VGroup(*[
            Dot(point=origin + RIGHT * (i - (N - 1) / 2) * 0.9,
                radius=0.08, color="#54A0FF")
            for i in range(N)
        ])

        # ---- 1. PESA ----------------------------------------------------
        # central transmitter box with output going up to a splitter,
        # then one line down to each element.
        tx_box = Rectangle(width=1.2, height=0.5, color="#FF6B6B",
                           stroke_width=2, fill_color="#0F1A1F", fill_opacity=1)
        tx_box.move_to(origin + DOWN * 1.6)
        tx_text = Text("1 TX", color="#FF6B6B", font_size=11,
                       weight="BOLD").move_to(tx_box.get_center())

        # splitter at midpoint
        splitter = Dot(point=origin + DOWN * 0.9,
                       radius=0.10, color="#FFD93D")
        # three lines from splitter to each element
        feed_lines = VGroup(*[
            Line(splitter.get_center(), e.get_center(),
                 stroke_width=1, color="#FFD93D", stroke_opacity=0.8)
            for e in elements
        ])

        pesa_label = Text("1. PESA  --  one TX feeds every element",
                         color=GREY, font_size=14).to_edge(DOWN)

        self.play(FadeIn(elements), Write(pesa_label), run_time=0.4)
        self.play(FadeIn(tx_box), Write(tx_text),
                  FadeIn(splitter), Create(feed_lines),
                  run_time=0.9)

        # ---- 2. LIMIT: the TX fails --------------------------------------
        limit_label = Text("2. LIMIT  --  central TX = single point of failure",
                           color=RED, font_size=14).to_edge(DOWN)
        self.play(Transform(pesa_label, limit_label), run_time=0.3)
        # fade out everything except the title and the broken TX
        self.play(FadeOut(splitter), FadeOut(feed_lines),
                  run_time=0.5)
        # X over the TX
        x1 = Text("X", color=RED, font_size=36, weight="BOLD")
        x1.move_to(tx_box.get_center())
        self.play(FadeIn(x1, scale=2.0), run_time=0.5)
        # dim the elements to show the whole array is dead
        self.play(elements.animate.set_opacity(0.3),
                  FadeOut(tx_box), FadeOut(tx_text),
                  FadeOut(pesa_label), run_time=0.6)

        # ---- 3. AESA ----------------------------------------------------
        # each element now has its own T/R module box behind it
        tr_modules = VGroup()
        for e in elements:
            tr = Rectangle(width=0.5, height=0.18,
                           color="#FFD93D", stroke_width=1.5,
                           fill_color="#152040", fill_opacity=1)
            tr.move_to(e.get_center() + DOWN * 0.55)
            tr_modules.add(tr)

        # digital control bus underneath
        bus = Rectangle(width=5.6, height=0.18, color="#54A0FF",
                        stroke_width=2, fill_color="#152040", fill_opacity=1)
        bus.move_to(origin + DOWN * 1.4)
        bus_text = Text("DIGITAL CONTROL BUS", color="#54A0FF",
                        font_size=10, weight="BOLD").move_to(bus.get_center())

        # bus-to-module links (dashed)
        links = VGroup(*[
            dashed(tr.get_top(), bus.get_top(),
                   color="#54A0FF", opacity=0.7)
            for tr in tr_modules
        ])
        # rotate the link points so they come up from below the tr box
        for i, link in enumerate(links):
            link.put_start_and_end_on(tr_modules[i].get_bottom(),
                                       bus.get_top())

        aesa_label = Text("3. AESA  --  each element has its own T/R module",
                          color=TEAL, font_size=14).to_edge(DOWN)

        # clear the X, brighten elements
        self.play(FadeOut(x1), elements.animate.set_opacity(1.0),
                  run_time=0.5)
        self.play(FadeIn(tr_modules), FadeIn(bus), Write(bus_text),
                  Create(links), run_time=0.9)
        self.play(Write(aesa_label), run_time=0.4)

        # ---- 4. ROBUST: kill two elements, others keep radiating -------
        robust_label = Text("4. ROBUST  --  one element down, beam still works",
                            color=GREEN, font_size=14).to_edge(DOWN)
        self.play(Transform(aesa_label, robust_label), run_time=0.3)

        # mark two elements as failed with a faint x
        dead_indices = [1, 4]
        dead_xs = VGroup()
        for idx in dead_indices:
            xm = Text("X", color=RED, font_size=18, weight="BOLD")
            xm.move_to(elements[idx].get_center())
            dead_xs.add(xm)
        self.play(elements[dead_indices[0]].animate.set_opacity(0.3),
                  elements[dead_indices[1]].animate.set_opacity(0.3),
                  FadeIn(dead_xs, scale=1.5), run_time=0.7)

        # surviving elements pulse brightly to show they still work
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