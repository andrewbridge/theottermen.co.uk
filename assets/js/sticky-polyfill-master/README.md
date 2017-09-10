# Another `position: sticky` polyfill

Other polyfills either required extra libraries or made the CSS styling very rigid. This polyfill simply allows an element to be set as position sticky when a user scrolls below the element on the page - the most common use of the property value.

## Usage

Add:

```
<script src="sticky-polyfill.js" type="text/javascript"></script>
```

...and...


```
<link href="sticky-polyfill.css" rel="stylesheet">
```

...or just add the two rules to your own stylesheet.

Now add the `sticky` class to those elements you wish to stick. The script does feature detection before applying the polyfill, so adding `position: sticky` to elements will allow future browsers to provide the functionality natively.

The script is only adding and removing a `stuck` class when the viewport is below the top of the sticky element. How the element reacts to the `stuck` class is up to the developer.

## Support

This polyfill is currently only tested in Chrome 41, it uses CustomEvents, so versions older than IE9 will have issues. However, this is only used for debouncing the scroll event, so a fix could easily be applied to extend support further.

