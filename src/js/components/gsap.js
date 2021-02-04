import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function animateScroll() {
	const fadeIn = gsap.utils.toArray(".g-fade-up");

	fadeIn.forEach((box) => {
		gsap.from(box, {
			autoAlpha: 0,
			y: 200,
			scrollTrigger: {
				trigger: box,
				// pin: true, // pin the trigger element while active
				start: "top bottom", // when the top of the trigger hits the top of the viewport
				end: "+=500", // end after scrolling 500px beyond the start
				markers: true,
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		});
	});
}
