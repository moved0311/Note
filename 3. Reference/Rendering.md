### Browser怎麼畫出畫面(Critical rendering path)

1. Process HTML markup and build the DOM tree.
2. Process CSS markup and build the CSSOM tree.
3. Combine the DOM and CSSOM into a render tree.
4. Run layout on the render tree to compute geometry of each node.
5. Paint the individual nodes to the screen.

[Render Blocking CSS](https://web.dev/critical-rendering-path-render-blocking-css/)

CSS is render blocking resource. Use media types and media query to mark CSS resources as non-render blocking

```css
<link href="print.css" rel="stylesheet" media="print" />
<link href="other.css" rel="stylesheet" media="(min-width: 40em)" />
```

* [Render-tree Construction, Layout, and Paint](https://web.dev/critical-rendering-path-render-tree-construction/)