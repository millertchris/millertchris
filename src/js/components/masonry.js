import Bricks from "bricks.js";

export default function masonry() {
	// callmecavs.com/bricks.js

	const gallery = document.querySelectorAll(".gallery .items");
	var initGallery = [];

	// Creating breakpoints and sizes
	const sizes = [
		{ mq: "320px", columns: 1, gutter: 10 },
		{ mq: "540px", columns: 2, gutter: 10 },
		{ mq: "768px", columns: 2, gutter: 10 },
		{ mq: "1080px", columns: 3, gutter: 10 },
	];

	gallery.forEach((items, i) => {
		// Brick settings
		initGallery[i] = Bricks({
			container: items, // required
			packed: "data-packed", // required
			sizes: sizes, // required
			position: false, // optional
		});
	});

	// Wait until all image on the page has loaded.
	Promise.all(
		Array.from(document.images)
			.filter((img) => !img.complete)
			.map(
				(img) =>
					new Promise((resolve) => {
						img.onload = img.onerror = resolve;
					})
			)
	).then(() => {
		gallery.forEach((items, i) => {
			initGallery[i].pack();
			initGallery[i].resize(true);
		});
	});

	gallery.forEach((items, i) => {
		initGallery[i].on("resize", (size) => {
			// 'size' is the newly matching size object
			// ...
			console.log(size);
		});
	});

	// window.addEventListener("resize", function () {
	// 	gallery.forEach((items, i) => {
	// 		initGallery[i].pack();
	// 	});
	// });
}
