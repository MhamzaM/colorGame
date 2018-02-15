var numSquares = 6;
var squares = document.querySelectorAll(".squares");
var correct = document.getElementById("toGuess");
var lis = document.querySelectorAll("li");
var colors =  generateRandomColor(numSquares);
var msg = document.querySelector("#message");
var header = document.querySelector("header");
var reset = document.querySelector("#reset");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");



var picked;


correct.textContent = pickColor();

for(var i = 0;i < squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

}


for (var i =0 ;i < squares.length; i++) {
	
	squares[i].addEventListener("click",function(){

		picked = this.style.backgroundColor;
		console.log(picked);
		
		if(picked == correct.textContent){
			
			msg.textContent = "Correct!";
			changeColor();
			reset.textContent = "PLAY AGAIN?";

		}

		else{
			this.style.backgroundColor = "#232323";
			msg.textContent = "Try Again";
		}

		
	});	

}



function changeColor(){

	for(var j=0;j<squares.length;j++){
		squares[j].style.backgroundColor = correct.textContent;
	}

	header.style.backgroundColor = correct.textContent;
}

function pickColor(){

	var at = Math.floor(Math.random() * colors.length);
	return colors[at];	
}


function generateRandomColor(len){

	var arr = [];

	for(var i=0; i<len;i++){

		arr.push(RandomColor());

	}

	return arr;
}

function RandomColor(){


	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);	
	var b = Math.floor(Math.random() *256);
		
	var color = "rgb(" + r + ", " + g + ", " + b + ")";


	return color;
}



reset.addEventListener("click",function(){


	if(reset.textContent == "PLAY AGAIN?"){

		reset.textContent = "NEW COLORS";

	}

	if(msg.textContent != ""){

		msg.textContent = "";
	}

	colors =  generateRandomColor(numSquares);

	correct.textContent = pickColor();	
	
	for(var i = 0;i < squares.length; i++){

	squares[i].style.backgroundColor = colors[i];
	}

	header.style.backgroundColor = "steelblue";
	
});


hard.addEventListener("click",function(){

	hard.classList.add("selected");
	easy.classList.remove("selected");

	if(msg.textContent != ""){

		msg.textContent = "";
	}

	numSquares = 6;
	colors = generateRandomColor(numSquares);
	correct.textContent = pickColor();
	header.style.backgroundColor = "steelblue";

	for(var i=0; i<squares.length;i++){

		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	
	}

});

easy.addEventListener("click",function(){

	easy.classList.add("selected");
	hard.classList.remove("selected");

	if(msg.textContent != ""){

		msg.textContent = "";
	}

	numSquares = 3;

	colors = generateRandomColor(numSquares);
	correct.textContent = pickColor();
	header.style.backgroundColor = "steelblue";
	
	for(var i=0; i<squares.length;i++){

		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{

			squares[i].style.display = "none";
		}
	}


});

