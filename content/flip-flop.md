+++
date = '2025-07-17T21:22:07-07:00'
title = 'Flip Flop'
tags = ['Electronics', 'Soldering']
menupath = 'Electronics'
weight = 50
+++

{{< img src="flip-flop/thumbnail.png" convert=true >}}

# What is a Flip Flop Circuit?

{{< imgtext >}}

**A flip flop is a circuit that can hold a state after a short pulse sets it.**

While that might not make sense for some, the video will hopefully explain it.

Looking at just one of the LEDs, let's say the top one, notice how it can be turned on indefinitely with a short click of a button. This is called "setting" the flip flop.

If we want to turn the top one off, we can click the other button. This is called "resetting" the flip flop.

{{< imgtextend src="flip-flop/use-ex.jpg" convert=true >}}

# Why 2 LEDS? 

{{< imgtext >}}

The reason for two LEDs is to represent the two outputs of the flip flop which are often represented with Q and <span style="text-decoration: overline;">Q</span> (Q not). <span style="text-decoration: overline;">Q</span> will always be the opposite of Q.

{{< imgtextend src="logic-gates.svg" >}}

{{< divider >}}

# Development

{{< imgtext >}}

## Testing / Prototyping

Using a breadboard, I tested different logic gate designs to see what worked and didn't work. Then I tested my first complete prototype on a breadboard.

{{< imgtextend src="flip-flop/working.jpg" alt="Me developing the flip flop." convert=true >}}

## Drawing the circuit

From my breadboard prototype, I drew a schematic using [KiCAD](/what-is-cad)

{{< img src="flip-flop/schematic.webp" convert=true >}}

{{< imgtext >}}

From the schematic, I added lines to a picture of the components placed on an unsoldered breadboard to plan out my solder paths beforehand.

{{< imgtextend src="flip-flop/soldering-diagram.webp" convert=true >}}

## Soldering 

{{< imgtext >}}

As you can see, the traces I soldered on the bottom are a mirror image of the diagram I used above.

{{< imgtextend src="flip-flop/IMG_3432.jpg" convert=true >}}

{{< divider >}}

# Result

{{< img src="flip-flop/thumbnail.png" convert=true >}}