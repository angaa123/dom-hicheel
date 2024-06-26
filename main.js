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
//
//
//
//
//audios
let index = 0;
let audioArray = [];
let audioFolder = "./audio/";
let audioFiles = ["1.mp3", "2.mp3", "3.mp3", "4.mp3"];
for (let i = 0; i < audioFiles.length; i++) {
	audioArray.push(audioFolder + audioFiles[i]);
}
console.log(audioArray);

let audioMain = document.getElementsByTagName("audio")[0];
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let stopButton = document.getElementById("stop-button");
let nextButton = document.getElementById("next-button");
let beforButton = document.getElementById("befor-button");
let playOrPause = document.getElementById("play-pause-button");
let rot = document.getElementById("music_rot");
// audio funtions

audioMain.addEventListener("ended", next);

function playAudio() {
	audioMain.play();
}
function pauseAudio() {
	audioMain.pause();
}
function stopAudio() {
	audioMain.pause();
	audioMain.currentTime = 0;
}
function next() {
	index++;
	if (index >= audioArray.length) {
		index = 0;
	}
	audioMain.src = audioArray[index];
	playOrPause.classList = "fa-solid fa-pause";
	audioMain.play();
	rot.classList.remove("rotate");
	rot.classList.add("rotate");
}
function befor() {
	index--;
	if (index < 0) {
		index = audioArray.length - 1;
	}
	audioMain.src = audioArray[index];
	audioMain.play();
	rot.classList.remove("rotate");
	rot.classList.add("rotate");
}
stopButton.addEventListener("click", stopAudio);
nextButton.addEventListener("click", next);
beforButton.addEventListener("click", befor);

TogglePlayPause = () => {
	if (audioMain.paused) {
		playOrPause.classList = "fa-solid fa-pause";
		audioMain.play();
		console.log("play");
		rot.classList.add("rotate");
	} else if (audioMain.played) {
		playOrPause.classList = "fa-solid fa-play";
		audioMain.pause();
		console.log("pause");
		rot.classList.remove("rotate");
		rot.classList = "fa-solid fa-music";
	}
};
playOrPause.addEventListener("click", TogglePlayPause);
