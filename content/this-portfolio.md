+++
date = '2025-07-18T14:48:00-07:00'
title = 'This Portfolio'
tags = ['HTML', 'CSS', 'JavaScript', 'Hugo', 'Git']
menupath = 'Software/Web Development'
weight = 110
+++

{{< img src="this-portfolio/thumbnail.png" convert=true >}}

# How it was built

{{< imgtext >}}

Websites are built using tools like HTML, CSS, and JavaScript. 

However, a common problem with these tools is building things like navigation bars. Where, if updated, needs to be updated along with every other page... Not very efficient 


[Hugo](https://gohugo.io/) handles these inefficiencies presented with plain HTML.  

{{< imgtextend src="hugo.svg" alt="Hugo Logo" >}}

# Why Hugo

Some of the benefits of using Hugo are that I can create pages using markdown. Which is much less verbose than HTML. 

{{< highlight md >}}

+++
date = '2025-07-10T16:26:58-07:00'
title = 'Simple Viewer 3D'
tags = [ 'Software', 'C++', 'Graphics Programming', 'Vulkan', 'UI design', 'Windows API', 'Git']
menupath = 'Software/C++'
weight = 10
+++

This would be paragraph text.

 - This would be a list item

{{< /highlight  >}}

This markdown file configures multiple things

 1. The Title of the page 
 2. Tags: the skills used as would appear on the home page card
 3. The path in which it resides in the navigation menu
 4. Weight: which determines its priority on the home page

Hugo also allows JPG and PNG images to be automatically converted into more efficient formats like WebP. 

{{< divider >}}

# Design and device flexibility

When viewing on large screen devices(desktops and laptops), the content is centered in the middle of the page for a natural experience, and the content is set to a limited width so you don’t have to track what line you're on when reading. 

On small screen/mobile devices, the center content takes up the entire width of the page, and the navigation menu is moved to the bottom for a better viewing experience.