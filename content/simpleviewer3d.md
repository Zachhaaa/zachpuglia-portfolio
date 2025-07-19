+++
date = '2025-07-10T16:26:58-07:00'
title = 'Simple Viewer 3D'
tags = [ 'Software', 'C++', 'Graphics Programming', 'Vulkan', 'UI design', 'Windows API', 'Git']
menupath = 'Software/C++'
weight = 10
+++

{{< img src="simpleviewer3d/thumbnail.png" convert=true >}}

My largest personal accomplishment so far. This is a completely functioning 
app that you can [install](https://simpleviewer3d.netlify.app/) on Windows, 
or you can compile it from [the source code](https://github.com/Zachhaaa/SimpleViewer3D).

{{< divider >}}

# What is it? 

{{< imgtext >}}
Simple Viewer 3D is a simple, fast, open source, 3D file viewer that can open:

 - .stl files
 - .obj files
{{< imgtextend src="Logo.svg" convert=false >}}

{{< divider >}}

# Features 

 - Open Multiple file in tabs at once
 - Window docking
 - Fast file load times
 - Fast Renderer using <img src="vulkan.svg" alt="vulkan" style="height: 28px">

{{< img src="simpleviewer3d/use-ex.png" convert=true >}}

{{< divider >}}

# Code Design

First, lets look at what other code the project depends on.

 - **Dear Imgui** - GUI (Graphical User Interface) library
 - **GLM** - Math library for transforming the model to be presented on the screen.
 - **Nanosvg** - An svg rasterizing library.

The repository is then organized into 4 sub projects

 - **SimpleViewer3D** - The main application pictured above. What you get when you use the [installer](https://simpleviewer3d.netlify.app/).
 - **SimpleViewer3Dinstaller** - The installer itself
 - **SimpleViewer3Dlauncher** - Used when you try open a file in the app with the Windows "Open With" menu.
 - **SimpleViewer3Duninstaller** - Runs when you want to uninstall the app on Windows.

The project then has multiple configuration that can be used by the developer to help debug the program. 
Some of them include menus to help me debug the program, analyze performance, and style the GUI.

{{< img src="simpleviewer3d/debug-ex.png" convert=true >}}
