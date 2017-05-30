$(document).ready(function() {
	var wins,
	losses,
	targetNumber,
	userTotal,
	aqua,
	orange,
	pink,
	yellow;

	wins = 0
	losses = 0

	var numberSelection = [1, 5, 10, 25];

console.log("Start Game")

function newGame(){
	resetVariables()
	updateGameboard()
}

function resetVariables(){
	targetNumber = Math.floor(Math.random() * 120) + 19;
	// numberSelection = shuffle(numberSelection);

	aqua= Math.floor(Math.random() * 12) + 1;
	pink= Math.floor(Math.random() * 12) + 1;
	orange= Math.floor(Math.random() * 12) + 1;
	yellow= Math.floor(Math.random() * 12) + 1;

	userTotal = 0;
}

function updateGameboard(){
	$("#goal").text(targetNumber);
	$("#sum").text(userTotal)
	$("#wins").text(wins)
	$("#losses").text(losses)
}

function userScoreIncrease(amount){
	userTotal += amount;
	$("#sum").text(userTotal)
	console.log("newUserTotal", userTotal)

	if(targetNumber === userTotal){
		wins ++
		newGame()
	} else if(targetNumber < userTotal){
		losses ++
		newGame()
	} else{

	}


}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


$("#aqua").on('click', function(event){
	event.preventDefault()
	userScoreIncrease(aqua)
	clickSound.play()
})

$("#pink").on('click', function(event){
	event.preventDefault()
	userScoreIncrease(pink)
})

$("#orange").on('click', function(event){
	event.preventDefault()
	userScoreIncrease(orange)
})

$("#yellow").on('click', function(event){
	event.preventDefault()
	userScoreIncrease(yellow)
})

newGame()




})