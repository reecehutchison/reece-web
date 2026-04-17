# Web Technology Cheat Sheet

---

## Chapter 1: HTML Fundamentals

### Document Structure
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <!-- visible content -->
  </body>
</html>
```
- `<!DOCTYPE html>` — declares HTML5
- `<head>` — metadata (title, meta tags, links) — not visible
- `<body>` — visible page content

### Attributes
- Go in the **opening tag** only: `<tag attribute="value">`
- Core attributes: `id` (unique), `class` (grouping), `title` (tooltip), `style` (inline CSS)
- `id` must start with a letter, must be unique in the document
- `class` can have multiple values: `class="intro highlight"`

### Text Elements

| Tag | Purpose |
|-----|---------|
| `<h1>`–`<h6>` | Headings (h1 largest) |
| `<p>` | Paragraph |
| `<b>` / `<strong>` | Bold / semantic bold |
| `<i>` / `<em>` | Italic / semantic italic |
| `<u>` | Underline |
| `<sup>` / `<sub>` | Superscript / subscript |
| `<pre>` | Preformatted (preserves whitespace) |
| `<blockquote>` | Quoted block |
| `<del>` | Strikethrough |
| `<code>` | Code (monospace) |
| `<br>` | Line break (empty tag) |

### Block vs Inline

| Type | Behavior | Examples |
|------|----------|----------|
| Block | New line, full width | `<p>`, `<div>`, `<h1>` |
| Inline | Flows within text | `<span>`, `<a>`, `<img>` |

- `<div>` — block-level grouping container
- `<span>` — inline grouping container

### Lists
```html
<!-- Ordered -->
<ol type="1">        <!-- types: 1, A, a, I, i -->
  <li>Item</li>
</ol>

<!-- Unordered -->
<ul type="disc">     <!-- types: disc, circle, square -->
  <li>Item</li>
</ul>

<!-- Definition -->
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

### Images
```html
<img src="photo.png" alt="Description" width="200" height="100" />
```
- `src` — path to image
- `alt` — required for accessibility
- Empty/self-closing tag

### Links
```html
<a href="https://example.com" title="Tooltip">Link Text</a>
```

| Link Type | Example |
|-----------|---------|
| External | `href="https://example.com"` |
| Same directory | `href="page.html"` |
| Subdirectory | `href="stuff/page.html"` |
| Parent directory | `href="../page.html"` |
| Same page anchor | `href="#section-id"` |

### Absolute vs Relative URLs

| Type | Example |
|------|---------|
| Absolute | `https://www.example.com/page.html` |
| Same dir | `contact.html` |
| Child dir | `blog/post.html` |
| Parent dir | `../page.html` |
| Two levels up | `../../page.html` |

### Nesting Rules
- Close tags in **reverse order**: `<b><i>text</i></b>`
- HTML ignores extra whitespace — use `<br>` for line breaks, `&nbsp;` for spaces

### Comments
```html
<!-- This is a comment -->
```

---

## Chapter 2: CSS Fundamentals

### CSS Syntax
```css
selector {
  property: value;
}
```

### 3 Ways to Add CSS

| Method | How | Priority |
|--------|-----|----------|
| Inline | `style=""` on element | Highest |
| Internal | `<style>` in `<head>` | Medium |
| External | `<link rel="stylesheet" href="style.css">` | Lowest |

- `!important` overrides everything for that property
- Browser defaults are the lowest priority of all

### Selectors

| Selector | Syntax | Selects |
|----------|--------|---------|
| Element | `p` | All `<p>` tags |
| Universal | `*` | Every element |
| Class | `.name` | Elements with that class |
| ID | `#name` | One specific element |
| Group | `h1, h2, p` | Multiple selectors, same rules |

### Class vs ID

| | Class (`.`) | ID (`#`) |
|--|-------------|----------|
| Reusable? | Yes | No — unique per page |
| Multiple per element? | Yes | No |

### Units

**Relative (responsive):**

| Unit | Relative to |
|------|-------------|
| `em` | Current element's font size |
| `rem` | Root element's font size |
| `%` | Parent element |
| `vw` / `vh` | 1% of viewport width / height |

**Absolute:** `px`, `pt`, `cm`, `mm`, `in`

### Colors

| Format | Example |
|--------|---------|
| Name | `color: red;` |
| RGB | `color: rgb(255, 0, 0);` |
| Hex | `color: #FF0000;` |
| Hex shorthand | `color: #F00;` |

---

## Chapter 3: CSS Box Model & Layout

### The Box Model
```
+---------------------------+
|         MARGIN            |
|  +---------------------+  |
|  |       BORDER        |  |
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

**Total width** = margin + border + padding + content + padding + border + margin

### Shorthand (margin & padding)
```css
margin: 10px;                  /* all sides */
margin: 10px 20px;             /* vertical horizontal */
margin: 10px 5px 3px 20px;     /* top right bottom left */
```

### Border
```css
border: 2px solid red;         /* width style color */
```
Styles: `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`

### Positioning

| Value | Behavior |
|-------|----------|
| `static` | Default, normal flow |
| `relative` | Offset from normal position, doesn't affect others |
| `absolute` | Removed from flow, relative to nearest positioned parent |
| `fixed` | Relative to viewport, stays on scroll |
| `sticky` | Relative until scroll threshold, then sticks |

- Use `top`, `right`, `bottom`, `left`, `z-index` with positioning

### Float
```css
img { float: left; }       /* content wraps around right side */
footer { clear: both; }    /* drops below all floats */
```

**Clearfix (best practice):**
```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### Combinators

| Syntax | Name | Selects |
|--------|------|---------|
| `A B` | Descendant | B anywhere inside A |
| `A > B` | Child | B directly inside A |
| `A + B` | Adjacent Sibling | B immediately after A |
| `A ~ B` | General Sibling | All B after A |

---

## Chapter 4: CSS Flexbox

### Setup
```css
.container { display: flex; }
```

### Container Properties

| Property | Values |
|----------|--------|
| `flex-direction` | `row` (default), `row-reverse`, `column`, `column-reverse` |
| `flex-wrap` | `nowrap` (default), `wrap`, `wrap-reverse` |
| `justify-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline` |
| `align-content` | Same as justify-content (for wrapped multi-line) |
| `gap` | `10px`, `10px 20px` (row col) |

- `justify-content` = **main axis** alignment
- `align-items` = **cross axis** alignment

### Item Properties

| Property | Purpose |
|----------|---------|
| `flex-grow` | How much item grows (default: 0) |
| `flex-shrink` | How much item shrinks (default: 1) |
| `flex-basis` | Default size before grow/shrink (default: auto) |
| `flex` | Shorthand: `grow shrink basis` |
| `order` | Visual order (default: 0, lower = first) |
| `align-self` | Override align-items for one item |

### Common Patterns
```css
/* Perfect centering */
.container { display: flex; justify-content: center; align-items: center; }

/* Equal columns */
.item { flex: 1; }

/* Sidebar + main */
.sidebar { flex: 0 0 250px; }
.main    { flex: 1; }
```

---

## Chapter 5: CSS Grid

### Setup
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 10px;
}
```

### Flexbox vs Grid

| | Flexbox | Grid |
|--|---------|------|
| Dimensions | 1D (row OR column) | 2D (rows AND columns) |
| Use case | Nav bars, card rows | Page layouts, dashboards |

### Defining Tracks
```css
grid-template-columns: 200px 1fr 2fr;           /* mixed units */
grid-template-columns: repeat(3, 1fr);           /* 3 equal columns */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));  /* responsive */
```

- `fr` = fraction of free space
- `repeat(n, size)` = reduce repetition
- `minmax(min, max)` = flexible track sizing

### Placing Items
```css
.item {
  grid-column: 1 / 3;       /* start-line / end-line */
  grid-row: 1 / span 2;     /* start at 1, span 2 rows */
}

/* Full shorthand */
.item { grid-area: row-start / col-start / row-end / col-end; }
```

### Template Areas
```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```
- `.` = empty cell

### auto-fill vs auto-fit

| | `auto-fill` | `auto-fit` |
|--|-------------|------------|
| Empty columns | Kept | Collapsed |
| Items stretch | No | Yes |

### Alignment (same keywords as flexbox)
- `justify-items` / `align-items` — items within their cells
- `justify-content` / `align-content` — entire grid within container

---

## Chapter 6: Pseudo-classes & Pseudo-elements

### Pseudo-classes (`:`) — element **states**

| Pseudo-class | Targets |
|---|---|
| `:link` | Unvisited link |
| `:visited` | Visited link |
| `:hover` | Mouse over |
| `:active` | Being clicked |
| `:target` | Matches URL `#hash` |
| `:not(x)` | Everything except x |
| `:first-child` | First child of parent |
| `:last-child` | Last child of parent |
| `:nth-child(n)` | nth child (`odd`, `even`, or number) |
| `:nth-of-type(n)` | nth of that element type |

- Link order: `:link` → `:visited` → `:hover` → `:active` (**LoVe HAte**)

### Pseudo-elements (`::`) — element **parts**

| Pseudo-element | Targets |
|---|---|
| `::first-line` | First line of text |
| `::first-letter` | First letter |
| `::before` | Insert content before element |
| `::after` | Insert content after element |
| `::marker` | List bullet/number |
| `::selection` | User-highlighted text |

```css
h1::before { content: ">> "; }
h1::after  { content: " <<"; }
li + li::before { content: " > "; }   /* breadcrumb separator */
```

---

## Chapter 7: CSS Gradients

### 3 Types

| Type | Direction | Use case |
|------|-----------|----------|
| `linear-gradient` | Straight line | Buttons, backgrounds |
| `radial-gradient` | Outward from center | Glows, spotlights |
| `conic-gradient` | Around a point (360°) | Pie charts, spinners |

### Linear Gradient
```css
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, red, orange, yellow);
background: linear-gradient(to bottom, red 0%, green 50%, blue 100%);  /* color stops */
```
- Default: top → bottom
- `0deg` = up, `90deg` = right, `180deg` = down

### Radial Gradient
```css
background: radial-gradient(circle, red, blue);
background: radial-gradient(circle closest-side at 30% 50%, red, blue);
```
- Shape: `circle` or `ellipse` (default)
- Size: `closest-side`, `farthest-corner` (default), etc.

### Conic Gradient
```css
background: conic-gradient(red, yellow, green, blue, red);
/* Pie chart (hard stops) */
background: conic-gradient(red 0deg 120deg, green 120deg 240deg, blue 240deg 360deg);
```

### Repeating
```css
background: repeating-linear-gradient(45deg, red, blue 20px, red 40px);
```

### Hard vs Smooth Stops
```css
/* Smooth blend */
linear-gradient(to right, red, blue)

/* Hard line (same position = no fade) */
linear-gradient(to right, red 50%, blue 50%)
```

---

## Chapter 8: CSS Transforms

### 2D Transform Functions

| Function | Effect |
|----------|--------|
| `translate(x, y)` | Move element |
| `scale(x, y)` | Resize (multiplier: 1 = normal, 2 = double) |
| `rotate(angle)` | Rotate (positive = clockwise) |
| `skew(x, y)` | Distort/shear |

```css
transform: translate(100px, 50px);
transform: scale(2);
transform: rotate(45deg);
transform: skew(20deg, 10deg);
```

- Does **not** affect surrounding elements (no reflow)
- Only works on `block` / `inline-block`

### `transform-origin`
```css
transform-origin: top left;    /* default is center */
```

### 3D Transforms
```css
/* Parent: create 3D space */
.parent { perspective: 500px; }

/* Child: transform in 3D */
.child {
  transform-style: preserve-3d;
  transform: rotateY(180deg);
}
```

- `perspective` on parent — lower value = more dramatic
- `rotateX()` — tips forward/back
- `rotateY()` — spins left/right
- `rotateZ()` — same as 2D rotate
- `translateZ()` — toward/away from viewer
- `backface-visibility: hidden` — hides back face of flipped element

---

## Chapter 9: CSS Transitions

### Shorthand
```css
transition: property duration timing-function delay;
transition: background-color 0.3s ease-in-out 0s;
transition: all 0.3s ease;
transition: transform 0.4s ease, opacity 0.2s linear;  /* multiple */
```

- `transition-duration` is **required** (defaults to 0s = no animation)

### Timing Functions

| Value | Feel |
|-------|------|
| `ease` | Default — slow start, fast middle, slow end |
| `linear` | Constant speed |
| `ease-in` | Slow start |
| `ease-out` | Slow end |
| `ease-in-out` | Slow both ends |
| `cubic-bezier(n,n,n,n)` | Custom curve |

### How It Works
```css
.button {
  background: blue;
  transition: background 0.3s ease;
}
.button:hover {
  background: red;    /* browser animates blue → red */
}
```

### What Can Be Transitioned?
- Yes: `color`, `opacity`, `width`, `height`, `transform`, `padding`, `margin`, `box-shadow`
- No: `display`, `visibility` (use `opacity` instead)

---

## Chapter 10: Modern CSS

### CSS Nesting
```css
.parent {
  color: red;

  .child { color: blue; }          /* descendant: .parent .child */
  &.active { color: green; }       /* compound: .parent.active */
  &:hover { color: yellow; }       /* pseudo: .parent:hover */
  & + .sibling { margin: 10px; }   /* combinator */

  @media (min-width: 768px) {      /* nested media query */
    width: 750px;
  }
}
```

- Without `&` = descendant selector (different element inside parent)
- With `&` = compound selector (same element)

### Custom Properties (Variables)
```css
:root {
  --primary: #007ade;
  --spacing: 8px;
}

.button { background: var(--primary); }
.card   { padding: calc(var(--spacing) * 2); }  /* 16px */
```

- Must be inside a selector
- `:root` = global scope (`<html>`)
- Fallback: `var(--color, hotpink)`
- **Live at runtime** — can change with JS: `el.style.setProperty('--color', 'red')`

### `@property` — Typed Variables
```css
@property --my-color {
  syntax: '<color>';
  initial-value: hotpink;
  inherits: false;
}
```
- Enables transitions/animations on custom properties

### Custom Functions
```css
@function --spacing(--multiplier) {
  result: calc(var(--base-size) * var(--multiplier));
}
.element { padding: --spacing(2); }
```

---

## Chapter 11: Responsive Design & Media Queries

### Viewport Meta Tag (required)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media Query Syntax
```css
@media media-type and (media-feature) {
  /* conditional CSS */
}
```

### Media Types
`screen`, `print`, `speech`, `all` (default)

### Common Features
- `min-width` — viewport at least this wide
- `max-width` — viewport at most this wide
- `orientation` — `portrait` or `landscape`

### Logical Operators
```css
@media screen and (min-width: 600px) and (max-width: 900px) { }  /* AND */
@media (orientation: portrait), (min-width: 768px) { }            /* OR */
@media not print { }                                               /* NOT */
```

### Mobile First (correct approach)
```css
/* Base styles = mobile */
.container { width: 100%; }

@media (min-width: 768px) {     /* tablet */
  .container { width: 750px; }
}

@media (min-width: 1024px) {    /* desktop */
  .container { width: 960px; }
}
```

- **`min-width` = mobile first** (scale up)
- **`max-width` = desktop first** (scale down — avoid)

### Common Breakpoints
- **768px** — tablet
- **1024px** — desktop
- **1280px** — large desktop

---

## Chapter 12: DOM (Vanilla JS)

### Entry Points
```js
document.documentElement   // <html>
document.head              // <head>
document.body              // <body>
```

### Selecting Elements

| Method | Returns | Notes |
|--------|---------|-------|
| `document.getElementById("id")` | Single element | ID only |
| `document.querySelector("css")` | **First** match | Any CSS selector |
| `document.querySelectorAll("css")` | **All** matches (static NodeList) | Any CSS selector |
| `document.getElementsByClassName("x")` | Live HTMLCollection | By class |
| `document.getElementsByTagName("tag")` | Live HTMLCollection | By tag |
| `elem.matches("css")` | `true`/`false` | Check if element matches |
| `elem.closest("css")` | Nearest ancestor matching | Walks up the tree |

### Walking the DOM

**All nodes (includes text/comments):**
- `childNodes`, `firstChild`, `lastChild`
- `parentNode`, `nextSibling`, `previousSibling`

**Element-only (usually what you want):**
- `children`, `firstElementChild`, `lastElementChild`
- `parentElement`, `nextElementSibling`, `previousElementSibling`

### Node Types & Names

```js
elem.nodeType    // 1 = element, 3 = text, 9 = document
elem.tagName     // uppercase tag name — elements only (e.g. "DIV")
elem.nodeName    // any node — same as tagName for elements
```

### Reading/Changing Content

| Property | Does |
|----------|------|
| `innerHTML` | Get/set HTML inside (parses tags) |
| `textContent` | Get/set text only (safe, no injection) |
| `nodeValue` / `data` | Content of text/comment nodes |

### Hiding Elements

```js
elem.hidden = true;     // DOM property
// or: <div hidden>...</div>
```

### Creating, Inserting, Removing

```js
let div = document.createElement("div");
div.textContent = "Hello";

parent.append(div);        // inside, at end
parent.prepend(div);       // inside, at beginning
node.before(div);          // outside, before
node.after(div);           // outside, after
node.replaceWith(div);     // replace
node.remove();             // delete from DOM
elem.cloneNode(true);      // deep clone (with children)
```

### Attributes & Dataset

```js
elem.hasAttribute("name")
elem.getAttribute("name")
elem.setAttribute("name", "value")
elem.removeAttribute("name")

elem.dataset.something     // reads data-something attribute
```

### Styles & Classes

```js
elem.style.backgroundColor = "red";   // camelCase CSS, always include units
elem.style.cssText = "color: red; padding: 10px;";
getComputedStyle(elem).marginTop;     // resolved/final style

elem.className = "foo bar";
elem.classList.add("x");
elem.classList.remove("x");
elem.classList.toggle("x");
elem.classList.contains("x");
```

### Events

```js
elem.addEventListener("click", handler);
elem.addEventListener("click", handler, { once: true });
elem.removeEventListener("click", handler);   // needs same function ref
```

**Common event types:**

| Category | Events |
|----------|--------|
| Mouse | `click`, `dblclick`, `contextmenu`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`, `mousemove` |
| Keyboard | `keydown`, `keyup`, `keypress` |
| Form | `submit`, `change`, `input`, `focus`, `blur` |
| Document | `DOMContentLoaded`, `load`, `scroll`, `resize` |
| CSS | `transitionend`, `animationend` |

### Event Object

```js
elem.addEventListener("click", function(event) {
  event.type             // "click"
  event.target           // element that originated event (deepest)
  event.currentTarget    // element the handler is on (same as `this`)
  event.clientX, clientY // cursor coordinates
  event.key              // key pressed (keyboard events)
  event.preventDefault() // cancel default action (e.g. form submit)
  event.stopPropagation() // stop bubbling
});
```

### Object Handlers (handleEvent)

```js
let obj = {
  handleEvent(event) {
    alert(event.type + " at " + event.currentTarget);
  }
};
elem.addEventListener("click", obj);  // calls obj.handleEvent(event)
```

### Bubbling, Capturing, Delegation

- **Bubbling:** event goes from target UP to `document` (default)
- **Capturing:** event goes DOWN from `document` to target — pass `true` as 3rd arg
- **Delegation:** one handler on parent, use `event.target` to figure out which child

```js
document.getElementById("menu").addEventListener("click", function(e) {
  let action = e.target.dataset.action;
  if (action === "save") { /* ... */ }
});
```

---

## Chapter 13: jQuery

### Setup
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

### Document Ready
```js
$(document).ready(function() { /* ... */ });
$(function() { /* shorter */ });
```

### Selecting & Creating

```js
$("p")              // all <p>
$("#id")            // by id
$(".class")         // by class
$("a[target='_blank']")  // attribute selector
$("ul li:first-child")   // compound CSS
$("*")              // all elements
$(this)             // wrap current DOM element
$("<li>")           // CREATE a new <li>
```

### Custom jQuery Selectors

| Selector | Matches |
|----------|---------|
| `:first` / `:last` | First/last match |
| `:even` / `:odd` | Even/odd indices |
| `:header` | `h1`–`h6` |
| `:animated` | Currently animating |
| `:contains('text')` | Contains text |
| `:has(sel)` | Contains matching descendant |
| `[href]` | Has href attribute |

### Events

```js
$("#btn").click(function() { /* ... */ });
$("#btn").on("click", function() { /* ... */ });
$("#btn").on("mouseenter mouseleave", fn);  // multiple at once
$("#btn").on({ click: fnA, mouseenter: fnB });  // different handlers
$("#btn").off("click");  // remove
$("p").hover(enterFn, leaveFn);  // special: takes 2 functions
```

**Event methods:** `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`, `hover`, `keypress`, `keydown`, `keyup`, `submit`, `change`, `focus`, `blur`, `ready`, `load`, `resize`, `scroll`

### Getters/Setters (call with arg = set, without = get)

```js
$("#test").text()                     // get text
$("#test").text("New")                // set text
$("#test").html()                     // get HTML
$("#test").html("<b>New</b>")         // set HTML
$("input").val()                      // get input value
$("input").val("hi")                  // set input value
$("a").attr("href")                   // get attribute
$("a").attr("href", "url")            // set attribute
$("a").attr({ href: "url", title: "x" })  // set multiple
$("a").removeAttr("href")
```

### Classes & CSS

```js
$("p").addClass("highlight")
$("p").removeClass("highlight")
$("p").toggleClass("highlight")
$("p").hasClass("highlight")

$("p").css("color")                                     // get
$("p").css("color", "red")                              // set one
$("p").css({ color: "red", "font-size": "20px" })       // set many
```

### Insert / Remove

```js
$("p").append("<b>end</b>")       // inside, at end
$("p").prepend("<b>start</b>")    // inside, at beginning
$("p").after("<p>after</p>")      // outside, after
$("p").before("<p>before</p>")    // outside, before

$("p").remove()                   // remove element
$("p").remove(".test")            // filtered removal
$("p").empty()                    // remove all children
```

### Effects

```js
$("p").hide(speed, callback)
$("p").show(speed, callback)
$("p").toggle(speed, callback)

$("p").fadeIn(speed, callback)
$("p").fadeOut(speed, callback)
$("p").fadeToggle(speed, callback)
$("p").fadeTo(speed, opacity, callback)

$("p").slideDown(speed, callback)
$("p").slideUp(speed, callback)
$("p").slideToggle(speed, callback)

$("p").animate({ left: "250px", opacity: "0.5" }, speed, callback)
$("p").animate({ left: "+=50px" })   // relative
$("p").stop(clearQueue, jumpToEnd)
```

- `speed`: `"slow"`, `"fast"`, or ms (e.g., `400`)
- Animate uses camelCase CSS properties, numeric values only

### Chaining

```js
$("#p1")
  .css("color", "red")
  .slideUp(2000)
  .slideDown(2000);
```
- Getters (`.text()`, `.val()`) break the chain (they return a value, not the jQuery object)

### Traversing

| Method | Returns |
|--------|---------|
| `.parent()` | Direct parent |
| `.parents()` | All ancestors |
| `.parentsUntil(sel)` | Ancestors up to selector |
| `.children()` | Direct children |
| `.find(sel)` | All descendants matching |
| `.siblings()` | All siblings |
| `.next()` / `.prev()` | Next/previous sibling |
| `.nextAll()` / `.prevAll()` | All next/previous siblings |
| `.nextUntil(sel)` / `.prevUntil(sel)` | Until selector |

### Filtering

```js
$("div").first()
$("div").last()
$("p").eq(1)              // by index (0-based)
$("p").filter(".intro")   // keep matching
$("p").not(".intro")      // keep non-matching
```

### Making a jQuery Plugin

```js
(function($) {
  $.fn.myPlugin = function(options) {
    let settings = $.extend({
      color: "green",
      fontSize: "16px"
    }, options);

    return this.each(function() {    // iterate over each matched element
      $(this).css({
        color: settings.color,
        fontSize: settings.fontSize
      });
    });
  };
})(jQuery);

// Usage:
$("p").myPlugin({ color: "red" });
```

- IIFE wrapper `(function($){ ... })(jQuery)` — protects `$` alias
- `$.fn.name` — adds method to all jQuery objects
- Always `return this` (or `return this.each()`) for chaining
- `$.extend(defaults, options)` — merges user options over defaults

### Vanilla DOM vs jQuery Quick Reference

| Task | Vanilla | jQuery |
|------|---------|--------|
| Select by id | `document.getElementById("x")` | `$("#x")` |
| Select by class | `document.querySelectorAll(".x")` | `$(".x")` |
| Add class | `elem.classList.add("x")` | `$(sel).addClass("x")` |
| Set style | `elem.style.color = "red"` | `$(sel).css("color","red")` |
| Set text | `elem.textContent = "hi"` | `$(sel).text("hi")` |
| Set HTML | `elem.innerHTML = "<b>hi</b>"` | `$(sel).html("<b>hi</b>")` |
| Click event | `elem.addEventListener("click", fn)` | `$(sel).click(fn)` |
| Create elem | `document.createElement("li")` | `$("<li>")` |
| Append | `parent.append(child)` | `$(parent).append(child)` |
| Remove | `elem.remove()` | `$(sel).remove()` |
| Input value | `input.value` | `$(input).val()` |
