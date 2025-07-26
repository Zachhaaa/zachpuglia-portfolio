+++
date = '2025-07-09T16:27:18-07:00'
title = 'Quadcopter'
tags = ['CAD', '3D Printing', 'Electronics', 'Soldering', 'Control Systems']
menupath = 'CAD'
weight = 20
+++

{{< img src="quadcopter/thumbnail.png" convert=true >}}

# Parts 

To build a drone, you need the following parts

 - Frame
 - Motors
 - Flight Controller
 - Propellers
 - LIPO Battery
 - Radio Transmitter(Controller)
 - Radio Receiver

{{< divider >}}

# Frame Design

{{< imgtext >}}

While you can buy carbon fiber frames online (which honestly are better because they are extremely strong), I decided to design and 3D print my own for the fun of it.

The arms are separated into 2 parts since my 3D printer can only handle parts that can fit in its 180mm x 180mm x 180 mm build volume.

[CAD Model](https://cad.onshape.com/documents/866ab9c6caf4ef0d556cf74f/w/afbfc1b3f894fb35a03c55d7/e/7ede20e92695a272f2da970b)

{{< imgtextend src="quadcopter/cad.webp" alt="Drone CAD" convert=true >}}

{{< divider >}}

# Electronics 
{{< imgtext >}}
All of the electronics, except for the motors, are housed in the center between the battery and the bottom frame.
{{< imgtextend src="quadcopter/IMG_3568.jpg" alt="Electronics" convert=true >}}

{{< divider >}}

# Tuning 
{{< imgtext >}}
In order for the drone to stay level in the air, I have to tune the PID controller, which drives the motors when the gyro sensor reports an angle different from the desired angle.
{{< imgtextend src="quadcopter/configurator.webp" alt="Configurator" convert=true >}}

# Result
{{< gallery "quadcopter/drone-result.jpg, quadcopter/high-fly.jpg" >}}

{{< divider >}}

# Quadcopter Gallery
{{< gallery "quadcopter/IMG_3565.jpg, quadcopter/IMG_3570.jpg, quadcopter/IMG_3566.jpg, quadcopter/IMG_3568.jpg" >}}

{{< divider >}}

# Crashed parts 

In total, I crashed the quadcopter 3 times. Using a 3d printed frame certainly didn't help with strength. So... stuff like this happens when it crashes. 

{{< img src="quadcopter/IMG_3569.jpg" convert=true  >}}