# JavaScript-Tabs
A JavaScript and Jquery tab system for writing interactive HTML pages.
## Features
 - Any number of tabs.
 - Fully nestable.
 - Tabs can be on the left, center or right.
 - Only 6 lines of JavaScript.
 - 70 lines of CSS.
 
## Usage
The tab system is really easy to use and put on your website.  

Please view the fllowing for any help:
http://scratchos.github.io/JavaScript-Tabs/src/index2.html
http://scratchos.github.io/JavaScript-Tabs/src/index2.html

1. Put the following lines in the head of the document.
  1. `<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>`
  2. `<script type="text/javascript" src="tabs.js"></script>`
  3. `<link rel="stylesheet" href="tabs.css">`
2. You will need to create two elements to get started, one `<ul>` and one `<div>`
3. Add the folowing lines to your code:
  1. `<ul class="tabs" id="tabs1"></ul>`
  2. `<div class="tabcontent" id="tabs1"></div>`
4. In the `<ul>` add one of the folowing lines for each tab, but change the `id` of the `<li>` so it reflects the page number, and the same for the second argument of the `onclick` in the `<a>`  You can set the text in the `<a>` to what you want.
  1. `<li class="tab" id="page1"><a href="#" onclick="tab('1', '1')">page 1</a></li>`
5. In the `<div>` create a new div for each page all of which have a `class` of `page` and an `id` of `'page' + pagenumber`  You can then put the content of the page inside the corresponding `<div>`
6. To have multiple tab systems on one HTML document increase the number in the `id` of the `<ul>` and `<div>` so each system has a new set of `id`'s.  make sure that the `<ul>` and `<div>` do not have anyother code in between each other.

## Planed Features
1. customiseable colour scheme 
2. less attributes to make it easier to use.

## Developers

The gh-pages branch is for testing so you can view whether your tests work before submiting a pull request so the changes can be included in the final version of script. Priorities to be fixed are any open issues.  The page http://scratchos.github.io/JavaScript-Tabs/src/index.html is a test of nesting, http://scratchos.github.io/JavaScript-Tabs/src/index2.html is a test of non nesting.  These pages need to work for the code to be accepted.

## Licence

The MIT License (MIT)

Copyright (c) 2015 ScratchOs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
