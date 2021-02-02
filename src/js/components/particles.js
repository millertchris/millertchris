// import particlesJS from "../../../node_modules/particles.js/particles.js";

export default function particles() {
	// Particles.init({
	// 	selector: ".particles",
	// 	color: "#000",
	// });

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load("particles", "/particles.json", function () {
		console.log("callback - particles.js config loaded");
	});

	// Particles.color.value = "#fff";
	// Particles.fn.particlesRefresh();

	// pJSDom[0].pJS.particles.array[i].color.value = newColor;
	// Particles.options.color = "#fff";
	// console.log(Particles.options.color);
	// console.log(Particles);
	// Particles.particlesRefresh();
}
