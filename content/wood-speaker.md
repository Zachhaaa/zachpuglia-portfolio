+++
date = '2025-07-18T17:21:17-07:00'
title = 'Wood Speaker'
tags = ['Electronics', 'Woodworking', 'Soldering', 'Design']
menupath = 'Electronics'
weight = 130
math = true
+++

{{< img src="wood-speaker/thumbnail.png" convert=true >}}

# Design 

{{< imgtext >}}

The design includes:

 - 2 woofers (for the low to mid sound frequencies)
 - 1 tweeter (for the high sound frequencies)

I used an octahedral design because I thought it looked better. It also allows me to exercise my trigonometry skills.

{{< imgtextend src="wood-speaker/cad.webp" alt="Speaker CAD" convert=true >}}

# Technical Drawing

{{< imgtext >}}

## Math

In order to calculate the side lengths of the octagon, I used these formulas, which I derived using basic trig and geometry concepts. The shape is a regular octagon with the top and bottom sides extended.

<p>
\[S_{1} = {2a \tan \frac{1}{2} \theta}\]
\[S_{2} = W - \sqrt{2}S_{1}\]
\(
a = apothem \\
\theta = angle \ between \ apothems \\
W = the \ width \ of \ the \ speaker \\
S_{1} = short \ side \ length \\
S_{2} = long \ side \ length 
\)
</p>

For me, my values were 

<p>
\(
a = 3.75 \\
\theta = 45^\circ \\
W = 15 \\
S_{1} = 3.11 \\
S_{2} = 10.6 
\)
</p>

with units in inches except for angles.

{{< imgtextend src="wood-speaker/drawing.webp" convert=true >}}

{{< divider >}}

# Build Process 

{{< imgtext >}}

 1. Draft the speaker on a piece of paper
 2. Calculate the side lengths using trigonometry and the formulas above
 3. Cut 5"x0.75" wood vertically on the miter saw
 4. Use the table saw to make rabbet cuts for the front and back plates of the speaker to slot in
 5. Use the miter saw to make 22.5-degree cuts so the boards glue together to form the octagon
 6. Glue the sides together and hold them together with tape while drying
 7. Cut out the front and back plates on the miter saw
 8. Drill the holes for the speaker, tweeter, and port on the back using hole saws of the correct size
 9. Chamfer the woofer holes with a router
 10. Sand with a table sander
 11. Drill pilot holes for the screws to hold the woofers and the tweeter
 12. Apply a beeswax finish to the wood for aesthetics and to protect the wood
 13. Solder all of the components together
 14. Screw in woofers with felt covering
 15. Screw in the tweeter
 16. Solder all of the electronics together according to the schematic
 17. Add foam to improve sound quality
 18. Glue down the amp

{{< imgtextend src="wood-speaker/IMG_1131.jpg" convert=true >}}

{{< divider >}}

# Result 

{{< gallery "wood-speaker/thumbnail.png, wood-speaker/IMG_1128.jpg, wood-speaker/IMG_1129.jpg" >}}

{{< divider >}}

# My Thoughts

Overall, I am very happy with the outcome of my speaker. However, it didn't go perfectly. You can see some inaccuracies. For example, the slots on the top and bottom wood pieces are from cutting the pieces incorrectly on the table saw.

The sound quality was also good. It wasn't better than a good quality speaker, but it sounded better than some cheap knockoff brand speakers.