;(function() {
  function featureTest( property, value, noPrefixes ) {
	// Thanks Modernizr!
	var prop = property + ':',
		el = document.createElement( 'test' ),
		mStyle = el.style;
	
	if( !noPrefixes ) {
		mStyle.cssText = prop + [ '-webkit-', '-moz-', '-ms-', '-o-', '' ].join( value + ';' + prop ) + value + ';';
	} else {
		mStyle.cssText = prop + value;
	}    
	return mStyle[ property ];
  }

  function toggleSticky(sticky) {
		var orig = parseInt(sticky.getAttribute("data-orig-pos"));
		var scrollPos = Math.abs(document.body.parentNode.getBoundingClientRect().top);
		var isStuck = sticky.className.match(/^stuck$| stuck$|^stuck | stuck /g);
		if (scrollPos > orig && !isStuck) {
			sticky.className = (sticky.className.length == 0) ? "stuck" : sticky.className+" stuck";
		} else if (scrollPos <= orig && isStuck) {
			sticky.className = sticky.className.replace(/^stuck$| stuck$|^stuck | stuck(?= )/g, "");
		}
	}

	if (!featureTest("position", "sticky")) {
		var stickies = document.querySelectorAll(".sticky");
		var scrollPos = document.body.parentNode.getBoundingClientRect().top;
		for (var i = 0; i < stickies.length; i++) {
			var sticky = stickies[i];
			sticky.setAttribute("data-orig-pos", sticky.getBoundingClientRect().top-scrollPos);
			window.addEventListener("optimizedScroll", toggleSticky.bind(window, sticky), false);
			toggleSticky(sticky);
		}
	}
})();

// From mdn.io/scrollevent
;(function() {
	var throttle = function(type, name, obj) {
		var obj = obj || window;
		var running = false;
		var func = function() {
			if (running) { return; }
			running = true;
			requestAnimationFrame(function() {
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type, func);
	};

	/* init - you can init any event */
	throttle ("scroll", "optimizedScroll");
})();
