import _ from "lodash";

export default function header() {
	// Determine when user scrolls up or down
	var lastScrollTop = 0;
	var header = document.getElementById("main-nav");

	window.addEventListener(
		"scroll",
		_.throttle(function () {
			// or window.addEventListener("scroll"....
			var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
			if (st > lastScrollTop) {
				// downscroll code
				header.classList.add("hide");
			} else {
				// upscroll code
				header.classList.remove("hide");
			}

			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

			if (lastScrollTop >= 100) {
				header.classList.add("bg");
			} else {
				header.classList.remove("bg");
			}
		}, 300),
		false
	);
}
