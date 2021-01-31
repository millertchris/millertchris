import "../scss/main.scss";

import vue from "./components/vue";
import styleGuide from "./components/styleguide";
import masonry from "./components/masonry";
import header from "./components/header";

document.addEventListener("DOMContentLoaded", function () {
	// vue();
	styleGuide();
	masonry();
	header();
});
