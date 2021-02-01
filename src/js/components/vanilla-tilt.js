import VanillaTilt from "../../../node_modules/vanilla-tilt/src/vanilla-tilt.js";

export default function vanillaTilt() {
	VanillaTilt.init(document.querySelectorAll(".cards .item"), {
		max: 10,
		speed: 400,
		glare: true,
	});

	VanillaTilt.init(document.querySelectorAll(".gallery .item"), {
		max: 10,
		speed: 400,
		glare: true,
	});
}
