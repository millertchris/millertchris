import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function animateScroll() {
	gsap.timeline({
		scrollTrigger: {
			trigger: ".gallery",
			start: "center center",
			end: () => innerHeight * 4,
			scrub: true,
			pin: ".gallery",
			anticipatePin: 1,
		},
	})
		.set(".gallery", { autoAlpha: 0 })
		.to(".gallery", { duration: 0.1, autoAlpha: 1 }, 0.001)
		.from(".gallery", {
			scale: 3.3333,
			ease: "none",
		});

	const fadeUp = gsap.utils.toArray(".fade-up");

	fadeUp.forEach((item) => {
		gsap.from(item, {
			autoAlpha: 0,
			y: 200,
			scrollTrigger: {
				trigger: item,
				pin: false,
				start: "top bottom",
				end: "+=500",
				markers: false,
				scrub: 1,
			},
		});
	});
}
