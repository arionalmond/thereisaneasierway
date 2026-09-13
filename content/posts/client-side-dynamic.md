+++
title = 'Client Side Dynamic Site on Github Pages'
date = '2026-09-13T16:25:19-04:00'
draft = true
description = 'info on a client side dynamic site hosted on github pages'
tags = []
+++


GitHub Pages can host client-side dynamic applications (such as Single Page Applications built with React, Vue, or Angular) because it serves static files (HTML, CSS, JavaScript) that execute in the user's browser.  
  
However, it cannot host server-side rendered (SSR) applications or run backend code like PHP or Node.js directly. 

## Routing Challenges and Solutions

### The 404 Issue
GitHub Pages does not support server-side routing (HTML5 pushState); refreshing a non-root route (e.g., /about) returns a 404 error because the server lacks a "front controller."  

* The Fix  
Developers typically resolve this by creating a custom 404.html file that redirects all unknown paths back to index.html with the original path encoded in the URL hash (e.g., #path).  The client-side router then parses this hash to render the correct content.  

* Alternative    
Switching the router to use hash history (e.g., /#/about) avoids 404s entirely, as the fragment is never sent to the server. 

## Dynamic Data and Interactivity

### Client-Side Logic  
While the hosting is static, the app itself can be dynamic by fetching data from external APIs or databases (e.g., Firebase, Supabase) via JavaScript.  

### Python/JS Integration  
Tools like Panel (with pyodide-worker) allow Python scripts to be compiled into JavaScript/WebAssembly, enabling interactive data dashboards on GitHub Pages. 

### Write Operations
For "writable" sites, developers can use GitHub Actions triggered by client-side fetch calls to update repository files, which then rebuild and redeploy the static site. 