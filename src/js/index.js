import "../scss/main.scss";

import vue from "./components/vue";
import styleGuide from "./components/styleguide";
import masonry from "./components/masonry";
import header from "./components/header";
import loadScreen from "./components/load-screen";
import vanillaTilt from "./components/vanilla-tilt";
import darkMode from "./components/dark-mode";
import particles from "./components/particles";

document.addEventListener("DOMContentLoaded", function () {
	// vue();
	styleGuide();
	masonry();
	header();
	// loadScreen();
	vanillaTilt();
	darkMode();
	particles();
});
