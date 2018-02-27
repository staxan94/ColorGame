
var squareCount = 6;
var colors = generateRandomColors(squareCount);
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("color");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	initModeButtons();
	setUpSquares();
	reset();
}

function initModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "easy" ? squareCount = 3: squareCount = 6;
			reset();
		});
	}
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		});
	}
}

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	colors = generateRandomColors(squareCount);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = String(pickedColor);
	resetButton.textContent = "new colors";
	document.querySelector(".top-line").style.backgroundColor = "#3B76AD";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	document.querySelector(".top-line").style.backgroundColor = color;
	squares.forEach(function(square) {
		square.style.backgroundColor = color;
	});
}

function pickColor(array) {
	var index = Math.floor(Math.random() * array.length);
	return array[index];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = randomize(230);
	var g = randomize(230);
	var b = randomize(230);
	return "rgb(" + r + ", "+ g + ", "+ b + ")";
}

function randomize(x) {
		return Math.floor(Math.random() * x + 1);
}