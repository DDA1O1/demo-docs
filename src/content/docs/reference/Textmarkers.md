---
title: Text Markers
description: This is a page in my Starlight-powered site
---


function demo() {
  // This line (#2) and the next one are highlighted
  return 'This is line #3 of this snippet';
}

```js {2-3}
function demo() {
  // This line (#2) and the next one are highlighted
  return 'This is line #3 of this snippet';
}
```

Mark selections of text using the " " marker or regular expressions:

// Individual terms can be highlighted, too
function demo() {
  return 'Even regular expressions are supported';
}

```js "Individual terms" /Even.*supported/
// Individual terms can be highlighted, too
function demo() {
  return 'Even regular expressions are supported';
}
```

Mark text or lines as inserted or deleted with ins or del:

function demo() {
  console.log('These are inserted and deleted marker types');
  // The return statement uses the default marker type
  return true;
}

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('These are inserted and deleted marker types');
  // The return statement uses the default marker type
  return true;
}
```

Combine syntax highlighting with diff-like syntax:
function thisIsJavaScript() {
  // This entire block gets highlighted as JavaScript,
  // and we can still add diff markers to it!
  console.log('Old code to be removed')
  console.log('New and shiny code!')
}

```diff lang="js"
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```
