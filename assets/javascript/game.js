setGame();

//----------------------Set game function-----------------------------//
function setGame(){
//	Declare game variables
var numWins = 0;
var numLosses= 0;
var counter = 0;
var numAdd = 0;

//	Generate random game numbers and store them in variables
var gameNum = Math.floor(Math.random()*102)+19;
//	Generate random value for crystal 1
var crystNum1 = Math.floor(Math.random()*12)+1;
//	Generate random value for crystal 2
var crystNum2 = Math.floor(Math.random()*12)+1;
//	Generate random value for crystal 3
var crystNum3 = Math.floor(Math.random()*12)+1;
//	Generate random value for crystal 4
var crystNum4 = Math.floor(Math.random()*12)+1;

//	Pass relevant variable values into the appropriate text of html Ids
$("#gameNumber").text(gameNum);
$("#wins").text(numWins);
$("#losses").text(numLosses);
$("#playerCounter").text(counter);


	//-----------Check output in console--------------//
	//---------uncomment to view in console-----------//
	console.log(gameNum);
	console.log("new" + crystNum1);
	console.log("new" + crystNum2);
	console.log("new" + crystNum3);
	console.log("new" + crystNum4);

	//---------------------On Click Events-----------------------------//


	$("#crystal1").on("click", function(){
		counter += crystNum1;
		$("#playerCounter").text(counter);
		checkWin();
	});

	$("#crystal2").on("click", function(){
		counter += crystNum2;
		$("#playerCounter").text(counter);
		checkWin();
	});

	$("#crystal3").on("click", function(){
		counter += crystNum3;
		$("#playerCounter").text(counter);
		checkWin();
	});
	$("#crystal4").on("click", function(){
		counter += crystNum4;
		$("#playerCounter").text(counter);
		checkWin();
	});



//-----------------Check if player won function-----------------------//
	function checkWin(){
		if (counter == gameNum){
			numWins ++;
			$("#gameAlert").text("you won!!");
			resetGame();
		}
		if (counter > gameNum){
			numLosses ++;
			$("#gameAlert").text("you lost!!");
			resetGame();
		}
	} //checkWin brace



//-------------------reset game function-------------------------------//
	function resetGame(){
	counter = 0;
	gameNum = Math.floor(Math.random()*102)+19;
	//Generate random value for crystal 1
	crystNum1 = Math.floor(Math.random()*12)+1;
	//Generate random value for crystal 2
	crystNum2 = Math.floor(Math.random()*12)+1;
	//Generate random value for crystal 3
	crystNum3 = Math.floor(Math.random()*12)+1;
	//Generate random value for crystal 4
	crystNum4 = Math.floor(Math.random()*12)+1;

	//-------------Check output in console--------------//
	//-----------uncomment to view in console-----------//
	// console.log(gameNum);
	// console.log("new" + crystNum1);
	// console.log("new" + crystNum2);
	// console.log("new" + crystNum3);
	// console.log("new" + crystNum4);
	
	$("#gameNumber").text(gameNum);
	$("#wins").text(numWins);
	$("#losses").text(numLosses);
	$("#playerCounter").text(counter);

	bounceNumber();
	} //resetGame brace

	//---------New Game number bounce effect function-------------//
	function bounceNumber(){
		$("#gameNumber").effect("bounce", {times: 4, distance: 10}, 200);
	}

	//----------button function to show/hide instructions----------//
	$("button").click(function() {
		$("p").toggle();
	});

} //setGame brace