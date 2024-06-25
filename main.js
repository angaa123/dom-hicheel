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
function changeClassElmentColors(class_name) {
	let divName = document.getElementsByClassName(class_name);
	for (let i = 0; i < divName.length; i++) {
		divName[i].style.backgroundColor = getRandomColor();
	}
}
function eventChange() {
	changeClassElmentColors("box");
}
button1.addEventListener("click", eventChange);
// create boxes when button is clicked
let container = document.getElementById("container");
function createBoxes() {
	let box = document.createElement("div");
	box.classList.add("box");
	container.appendChild(box);
}
button2.addEventListener("click", createBoxes);
