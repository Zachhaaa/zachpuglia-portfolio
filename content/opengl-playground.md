+++
date = '2025-07-07T16:27:35-07:00'
title = 'Opengl Playground'
tags = ['Software', 'C++', 'Graphics Programming', 'OpenGL', 'UI design']
menupath = 'Software/C++'
weight = 40
+++

{{< img src="opengl-playground/thumbnail.png" convert=true >}}

This is not a project, but more of a place where I can learn OpenGL and improve my skills.

The thumbnail above is the current state of the project.

As you can see, so far I have

 - Rendered objects using OpenGL
 - Created a graphical user interface to easily change settings without compiling the code
 - Added lighting algorithms
 - Created an environment
 - Used visual smoothing

All of it is in C++!

While this may seem trivial at first, it isn't. Just the initialization 
file is already 400 lines of code! 400 lines of code just to boot a simple window app.

This is because I am coding most of this from scratch, including the [lighting algorithm](https://learnopengl.com/Lighting/Basic-Lighting).

You can find the GitHub page [here](https://github.com/Zachhaaa/OpenGL-Playground).

{{< divider >}}

# Libraries/APIs used

{{< imgtext >}}

 - Win32 API
 - OpenGL
 - Dear ImGui

{{< imgtextend src="opengl.svg" alt="OpenGL Logo" >}}

# What is OpenGL? 

Overall, OpenGL allows developers to use the power of the GPU to render an image on the screen.

If you have ever installed GPU drivers, you are installing the function definitions for this library (along with other stuff, of course).

{{< img src="opengl-playground/menu.png" convert=true >}}