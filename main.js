// hex random color generator
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	console.log(color);
	return color;
}
// change color of h1 to random color when button is clicked
function changeColor() {
	document.getElementsByClassName("box")[0].style.backgroundColor =
		getRandomColor();
}
button.addEventListener("click", changeColor);
