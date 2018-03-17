console.log("JS file is connected to HTML! Woo!")

// all the cards you have on the screen
document.addEventListener('DOMContentLoaded', function() {

var cards = ['king', 'king', 'queen', 'queen'];

// shuffle function
// This is the "fisher-yates shuffle". 
// You can read more about it here: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var currentIndex = array.length;
  // we don't want to assign these yet; we will later on these yet
  var temporaryValue = null;
  var randomIndex = null;

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

function '$shuffle' {
for (var i=0; i < cards.length; i++) {
	var $shuffledCard = $('<div>');
	$shuffledCard.addClass('card');
	$shuffledCard.innerText('');
	$shuffledCard.appendTo('.board');
}
}

$shuffle();



/*
For each card in the shuffled array,
- create a new div with class card,
- give it the innerText of the card
- and append it to the div of class board.

Pseudocode:
- Create for loop for card array
When for loop runs, create new 'shuffledCard' var, with new div each time
Add 'card' class to each 'shuffledCard'
Add innerText to each 'shuffledCard'
Append each div to class board



When two cards are clicked on,
- compare the innerText of the cards
- and alert "You are a winner!" if they match.
You'll need to keep track of the card that has been clicked on, and
whether or not it's the first or second card. What you might do is
create two variables, firstCard and secondCard, and at first assign them
to `null`. Then, when the card is clicked, if there's nothing stored in
firstCard, that one gets the value of the card that has been clicked.
Otherwise, secondCard gets the value of the card that has been clicked.
If both firstCard and secondCard have values -- that is, if two cards have
been clicked, we will need to compare them, and cause the alert.
**BONUS**: Keep track of what the card is _without_ using `innerHTML`.
Maybe you can use a class, or something. This way, you can make the player
match them without seeing the text.

Pseudocode:
Create event listeners for when any card is clicked
Pull value of card that has been clicked
Create variables for firstCard and secondCard, with value as null
When a card is clicked, check if either firstCard or secondCard are null. If yes, put value of clicked card into cardOne
Then when a card is clicked again, check if either firstCard or secondCard are null. If firstCard has value already, put value of clicked card into secondCard
Run event listener for when both firstCard and secondCard have values different from null
If this is the case, pull the innerHTML of both cards
If clause for if values are the same or different. If the same, trigger alert saying 'You are a winner'
Otherwise trigger 'You are a loser', and clear values of cards
!'
*/

var $firstCard = $('<div>');
$firstCard.attr('value', 'null');

var $secondCard = $('<div>');
$secondCard.attr('value', 'null');


window.onload = function() {
document.addEventListener('click', cards);
return card.value;
}

function $checkCards() {
	var $firstCardValue = ($firstCard).val();
	var $secondCardValue = ($secondCard).val();
	if ($firstCard.val = "null") {
		$firstCard.innerHTML("card.value");
	}
	else if {
		($secondCard.val = "null") {
		$secondCard.innerHTML("card.value");
		}
	}
}


function cardIsClicked($checkCards) {
	addEventListener('value.change', $secondCard);
	return $firstCardValue
	return $secondCardValue

	if ($firstCardValue = $secondCardValue) {
		alert('You are a winner!')
		clearCardValues()
	}
	else {
		alert('You are a loser - try again')
		clearCardValues()
	}

	function $clearCardValue() {
		$firstCard.val('null');
		$secondCard.val('null');
	}




var shuffledCards = shuffle(cards);

var firstCard = null;
var secondCard = null;





// put everything before this
}