import Flickity from "flickity";
import "flickity-imagesloaded";

export default function masonry() {
	const carousels = document.querySelectorAll(".carousel");

	carousels.forEach((carousel) => {
		new Flickity(carousel, {
			accessibility: true,
			adaptiveHeight: false,
			autoPlay: false,
			cellAlign: "center",
			cellSelector: undefined,
			contain: true,
			draggable: ">1",
			dragThreshold: 3,
			freeScroll: false,
			friction: 0.2,
			groupCells: false,
			initialIndex: 0,
			lazyLoad: false,
			percentPosition: false,
			prevNextButtons: true,
			pageDots: true,
			resize: true,
			rightToLeft: false,
			setGallerySize: true,
			watchCSS: false,
			wrapAround: true,
			imagesLoaded: true,
		});
	});
}
