var vid = document.getElementById("splashVideo");
var headNav = document.querySelector('header nav ul');

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

headNav.addEventListener('click', function(evt) {
	var elm = evt.target;
	var href = elm.getAttribute('href');
	if (elm.tagName === 'A' && typeof href === 'string' && href.substring(0,1) === '#') {
		evt.preventDefault();
		evt.stopPropagation();
		var elmToFind = document.querySelector(href);
		zenscroll.to(elmToFind);
	}
});