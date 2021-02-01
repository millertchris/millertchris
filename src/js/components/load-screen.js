export default function loadScreen() {
	setTimeout(function () {
		var loadScreen = document.getElementById("load-screen");
		loadScreen.classList.add("hide");
	}, 3000);
}
