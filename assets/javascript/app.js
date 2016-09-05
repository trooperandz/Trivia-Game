/**
 * Program: app.js
 * Created: 08/23/2016 by Matt Holland
 * Located: desktop/bootcamp/homework/triviagame/assets/javascript
 * Purpose: Provide gameplay code for 5th assignment - Trivia game
 */

// Set token global var for timer use
var token;

// Main game play object
var trivia = {

 	// Message string for storing correct, incorrect or unanswered feedback on screen (see below), set in setGuessState() method
 	guessState: "",

 	// Keep track of total correct guesses for later display
 	correctGuesses: 0,

 	// Keep track of total incorrect guesses for later display
 	incorrectGuesses: 0,

 	// Message to display when user selects the correct answer
 	correctFeedback: "Nice one! You got it right.",

 	// Message to display when user selects the incorrect answer
 	incorrectFeedback: "Sorry, but you need to study more!",

 	// Message to display when user runs out of time
 	unansweredFeedback: "Your time ran out!",

 	// Boolean used 
 	firstQuestion: true,

 	// Set main 'rounds' index so that answer may also access the correct round object generation for image & text content
 	activeIndex: 0,

 	// Set currently picked question as index so that it may be used as a global var
 	correctAnswerIndex: 0,

 	// Store the total count of possible answers, for display at the end of game for score report. Initialize at game start.
 	totalPossibleAnswers: 0,

 	// Array of objects for storing round information:
 	// Note: color combinations derived from: http://www.colorcombos.com/color-schemes
	rounds: [
	  	{
			question: "Who is responsible for our entire A/C (alternating current) electrical system?",

			questionImage: "assets/images/backgrounds/ac-motor.jpg",

			answerInfo: "Nikola Tesla may be the most underappreciated inventor in all of history!",

			answerImage: "assets/images/answers/nikola-tesla.jpg",
	
			guesses: [
				{
					answer: "Albert Einstein",
					correct: "0",
					backgroundColor: "orange"
			  	}, 

			  	{
					answer: "Michael Farraday",
					correct: "0",
					backgroundColor: "purple"
			  	}, 

			  	{
					answer: "Nikola Tesla",
					correct: "1",
					backgroundColor: "brown"
			  	},

			  	{
					answer: "Max Planck",
					correct: "0",
					backgroundColor: "#008cba"
			  	}
			]
	  	},

		{
			question: "Who is considered to be the first person to design the first general purpose computer?",

			questionImage: "assets/images/backgrounds/computer.jpg",

			answerInfo: "Alan Turing faced some serious societal challenges.  In 1952 he was forced to choose between chemical castration or imprisonment as a result of being prosecuted for homosexual acts, which was considered a criminal act in the UK at the time.",

			answerImage: "assets/images/answers/alan-turing.png",
	
			guesses: [
				{
					answer: "Charles Babbage",
					correct: "0",
					backgroundColor: "#669999"
			  	}, 

			  	{
					answer: "Alan Turing",
					correct: "1",
					backgroundColor: "#999999"
			  	}, 

			  	{
					answer: "William Oughtred",
					correct: "0",
					backgroundColor: "#ff3333"
			  	},

			  	{
					answer: "Steve Jobs",
					correct: "0",
					backgroundColor: "#003333"
			  	}
			]
	  	},

	  	{
			question: "In what decade did the first steam locomotive first appear on the railroad?",

			questionImage: "assets/images/backgrounds/locomotive.jpg",

			answerInfo: "The Union Pacific 'Big Boy' was the largest steam locomotive ever built, with a total length of 132 feet, and an output of 6,290 horsepower. It had eight driver wheels, generated 135,375 foot lbs of torque, and could achieve speeds upwards of 80mph.",

			answerImage: "assets/images/answers/big-boy.jpg",
	
			guesses: [
				{
					answer: "1800's",
					correct: "1",
					backgroundColor: "#000044"
			  	}, 

			  	{
					answer: "1780's",
					correct: "0",
					backgroundColor: "#C0C0C0"
			  	}, 

			  	{
					answer: "1880's",
					correct: "0",
					backgroundColor: "#003366"
			  	},

			  	{
					answer: "1910's",
					correct: "0",
					backgroundColor: "#6699CC"
			  	}
			]
	  	},

	  	{
			question: "Out of the following cities, which was scheduled to be the first target site of an atomic bomb in WWII?",

			questionImage: "assets/images/backgrounds/bomb.jpg",

			answerInfo: "The pilots of the Bockscar B-29 had strict orders to only drop the bomb if the target was visible to the naked eye.  Arriving at Kokura, it was determined that cloud cover prevented the crew from obtaining a visual.  The crew proceeded to Nagasaki. Kokura was saved from decimation, thanks to the weather.",

			answerImage: "assets/images/answers/bockscar.jpg",
	
			guesses: [
				{
					answer: "Tokyo",
					correct: "0",
					backgroundColor: "#84596B"
			  	}, 

			  	{
					answer: "Yokohama",
					correct: "0",
					backgroundColor: "#CECFCE"
			  	}, 

			  	{
					answer: "Nagasaki",
					correct: "0",
					backgroundColor: "#6194BC"
			  	},

			  	{
					answer: "Kokura",
					correct: "1",
					backgroundColor: "#B58AA5"
			  	}
			]
	  	},

	  	{
			question: "The world's first underground railway (subway) system in the world was inaugrated in London in what decade?",

			questionImage: "assets/images/backgrounds/subway.jpg",

			answerInfo: "The London Underground has 249 miles of track, and 270 stations. During the Second World War, part of the Piccadilly line was used to store British Museum treasures.",

			answerImage: "assets/images/answers/london-underground.jpg",
	
			guesses: [
				{
					answer: "1860's",
					correct: "1",
					backgroundColor: "#96B566"
			  	}, 

			  	{
					answer: "1870's",
					correct: "0",
					backgroundColor: "#C3C3C3"
			  	}, 

			  	{
					answer: "1880's",
					correct: "0",
					backgroundColor: "#668E39"
			  	},

			  	{
					answer: "1890's",
					correct: "0",
					backgroundColor: "#BCE27F"
			  	}
			]
	  	},

	  	{
			question: "According to modern science, what is the world's heaviest animal to ever exist on the earth?",

			questionImage: "assets/images/backgrounds/sea-scorpion.jpg",

			answerInfo: "The blue whale is the largest documented animal to ever exist on the earth, weighing in at a staggering 300,000 lbs.  It's heart alone is the size of a small car!",

			answerImage: "assets/images/answers/blue-whale.jpg",
	
			guesses: [
				{
					answer: "Argentinosaurus",
					correct: "0",
					backgroundColor: "#999"
			  	}, 

			  	{
					answer: "Mosasaurus",
					correct: "0",
					backgroundColor: "#424242"
			  	}, 

			  	{
					answer: "Brontosauraus",
					correct: "0",
					backgroundColor: "#C5BD99"
			  	},

			  	{
					answer: "Blue Whale",
					correct: "1",
					backgroundColor: "#701112"
			  	}
			]
	  	},

	  	{
			question: "How much horsepower does the world's largest engine have (it's a diesel, by the way)?",

			questionImage: "assets/images/backgrounds/engine.jpg",

			answerInfo: "The Emma Maersk container ship, built in 2006, still has the world's largest engine.  It can carry over 11,000 shipping containers.",

			answerImage: "assets/images/answers/emma-maersk.jpg",
	
			guesses: [
				{
					answer: "150,000",
					correct: "0",
					backgroundColor: "#FF9900"
			  	}, 

			  	{
					answer: "98,000",
					correct: "0",
					backgroundColor: "#CCCCCC"
			  	}, 

			  	{
					answer: "203,000",
					correct: "0",
					backgroundColor: "#CC6633"
			  	},

			  	{
					answer: "109,000",
					correct: "1",
					backgroundColor: "#771100"
			  	}
			]
	  	},

	  	{
			question: "What is the average depth of the ocean (in feet)?",

			questionImage: "assets/images/backgrounds/ocean.jpg",

			answerInfo: "The Mariana Trench is the deepest spot in the ocean, at a depth of 6.8 miles!  The bottom was last reached by producer James Cameron in 2012. It took 70 minutes to sink to the bottom.",

			answerImage: "assets/images/answers/challenger-deep.jpg",
	
			guesses: [
				{
					answer: "8,100",
					correct: "0",
					backgroundColor: "teal"
			  	}, 

			  	{
					answer: "9,100",
					correct: "0",
					backgroundColor: "#646464"
			  	}, 

			  	{
					answer: "12,100",
					correct: "1",
					backgroundColor: "blueviolet"
			  	},

			  	{
					answer: "13,100",
					correct: "0",
					backgroundColor: "#CC1559"
			  	}
			]
	  	},

	  	{
			question: "Of the following list, which active supervolcano is estimated to be the largest?",

			questionImage: "assets/images/backgrounds/volcano.jpg",

			answerInfo: "The Yellowstone Caldera last erupted about 630,000 years ago. Some reports say that it could wipe out half of the United States.",

			answerImage: "assets/images/answers/yellowstone.jpg",
	
			guesses: [
				{
					answer: "Yellowstone Caldera (US)",
					correct: "1",
					backgroundColor: "#129793"
			  	}, 

			  	{
					answer: "Mauna Loa (US)",
					correct: "0",
					backgroundColor: "#9BD7D5"
			  	}, 

			  	{
					answer: "Mount Tambora (Indonesia)",
					correct: "0",
					backgroundColor: "#FF7260"
			  	},

			  	{
					answer: "La Pacana Caldera (Chile/Bolivia)",
					correct: "0",
					backgroundColor: "brown"
			  	}
			]
	  	},

	  	{
			question: "If you were travelling from the Earth to Pluto at the speed of light, about how long would it take you to get there?",

			questionImage: "assets/images/backgrounds/saturn.jpg",

			answerInfo: "The speed of light is 186,000 miles per second.  At that speed, it would take you 4.3 years to get to our nearest star system, Alpha Centauri.  Now that's a long way!",

			answerImage: "assets/images/answers/space.jpg",
	
			guesses: [
				{
					answer: "3.7 Hours",
					correct: "0",
					backgroundColor: "#FF5959"
			  	}, 

			  	{
					answer: "2.3 Hours",
					correct: "0",
					backgroundColor: "#8A949B"
			  	}, 

			  	{
					answer: "1.5 Hours",
					correct: "0",
					backgroundColor: "#243743"
			  	},

			  	{
					answer: "4.6 Hours",
					correct: "1",
					backgroundColor: "#28B78D"
			  	}
			]
	  	}
	], // end rounds array

	// Pick a random index number, for extracting that object out of main rounds array
	pickRandomIndex: function() {
		var index = Math.floor(Math.random() * this.rounds.length);
		return index;
	},

	// Generate all html for a single question ("round")
	generateQuestion: function() {
		// First, clear div#display-answer if it is not the first round to be displayed
		var parent = document.getElementById("display-answer");
		parent.innerHTML = "";

		// Choose random array item from "rounds" array.
 		trivia.activeIndex = trivia.pickRandomIndex();
 
		// Set "round" for easy array object access. Use round.
 		var round = trivia.rounds[trivia.activeIndex];
 		console.log("Active index in generateQuestion: " + trivia.activeIndex);
	
 		// Create temp array for pusing each "correct" string value for each answer solution ("1" = answer, "0" = wrong answer)
 		// Push correct property into temp array, or later use of IndexOf() method to retrive matching index
 		// Save correct answer for easy access. Correct answer choice is: "correct: "1" ", as indexOf() method requires string
 		var tempArray = [];

 		// Start the timer.  Placed inside of this function so that timer does not pop up after other content
 		timer.start();
	
 		// Generate html content for displaying the first question
 		// Grab parent div
 		var parent = document.getElementById("display-round");
 		// Create div.row
 		var masterRow = document.createElement('div');
 		masterRow.setAttribute("class", "row");
 		// Create div.col
 		var div = document.createElement('div');
 		div.setAttribute("class", "col-sm-12 col-md-5 col-lg-5");
 		// Create p for main question
 		var p = document.createElement('p');
 		p.setAttribute("class", "main-question");
 		// Now create text and append question from random array selection
 		var text = document.createTextNode(round.question);
 		// Now append text to p
 		p.appendChild(text);
 		// Now append remaining elements to parent
 		parent.appendChild(masterRow);
 		masterRow.appendChild(div);
 		div.appendChild(p);
 		// Create the background image for the main question container
  		$(".main-question").backstretch(round.questionImage);
	
 		// Create the main width for the answer display containers
 		var div = document.createElement('div');
 		div.setAttribute("class", "col-sm-12 col-md-7 col-lg-7");
 		var row = document.createElement('div');
 		row.setAttribute("class", "row");
 		// Append the items just created
 		masterRow.appendChild(div);
 		div.appendChild(row);
 		// Now run through each possible answer, creating colored div blocks
 		round.guesses.forEach(function(object, index, arr) {
 			var div = document.createElement('div');
 			div.setAttribute("class", "col-sm-12 col-md-6 col-lg-6");
 			var p = document.createElement('p');
 			p.setAttribute("class", "answer-choice" + index);
 			p.setAttribute("id", "p" + index);
 			p.setAttribute("style", "background-color: " + object.backgroundColor + ";");
 			var text = document.createTextNode(object.answer);
 			// Append text to <p>
 			p.appendChild(text);
 			row.appendChild(div);
 			div.appendChild(p);
 			// Push correct property onto temp array, for later retrieval of correct answer
 			tempArray.push(object.correct);
 		});
	
 		// Save correct answer index. This will ALWAYS match the id of the <p> tag. It works!!
 		trivia.correctAnswerIndex = tempArray.indexOf("1");
 		console.log('correctAnswerIndex in generateQuestion(): ' + trivia.correctAnswerIndex);
	},

	// guessState will represent the incorrect, correct or unanswered state, for feedback string
	// Note: if parameter unanswered == true, then run the generateQuestion() method (user click was not executed so must force execution)
	generateAnswer: function(unanswered) {
		console.log("Active index in generateAnswer(): " + trivia.activeIndex);
		// This will only run after an answer selection, or a timeout. First, clear main round content to make room for answer display
		var parent = document.getElementById("display-round");
		parent.innerHTML = "";

		// Now get answer display parent div, and create heading
		var parent = document.getElementById("display-answer");
		var h2 = document.createElement('h2');
		var text = document.createTextNode(trivia.guessState);
		h2.appendChild(text);
		parent.appendChild(h2);

		// Now create paragraph, with correct answer info and background
		var p = document.createElement('p');
		p.setAttribute("class", "answer-info");
		var text = document.createTextNode(this.rounds[trivia.activeIndex].answerInfo);
		p.appendChild(text);
		parent.appendChild(p);

		// Now activate backstretch plugin for <p> image background
		$('p.answer-info').backstretch(this.rounds[trivia.activeIndex].answerImage);

		// Now generate the next question, only if 'unanswered' == true
		if(unanswered) {
			setTimeout(this.generateQuestion, 10000);
		}
	},

	// Create game over html when game has ended
	generateGameOver: function() {
		var parent = document.getElementById("display-game-over");
		var h2 = document.createElement('h2');
		var text = document.createTextNode("Game Over!");
		h2.appendChild(text);
		parent.appendChild(h2);

		// Now create paragraph, with display of correct/incorrect answer counts
		var p = document.createElement('p');
		p.setAttribute("class", "game-over-info");

		if (trivia.correctGuesses > trivia.incorrectGuesses) {
			var msg = "You won the game!";
		} else if (trivia.correctGuesses < trivia.incorrectGuesses) {
			var msg = "You lost the game. Sorry!";
		} else {
			var msg = "You didn't win or lose; you should play again to get better!";
		}
		var text = document.createTextNode("You answered " + trivia.correctGuesses + " questions correctly, and " + trivia.incorrectGuesses + " incorrectly." + msg);
	},

	// Based on the index selected, see if it is correct or not.  Assign feedback to guessState for later display on answer feedback
	setGuessState: function(id) {
		if(id == trivia.correctAnswerIndex) {
			trivia.guessState = trivia.correctFeedback;
			// Increment the correct guess counter
			trivia.correctGuesses += 1;
		} else if (id == "undefined") {
			trivia.guessState = trivia.unansweredFeedback;
			// Increment the incorrect guess counter
			trivia.incorrectGuesses += 1;
		} else {
			trivia.guessState = trivia.incorrectFeedback;
			// Increment the incorrect guess counter
			trivia.incorrectGuesses += 1;
		}
 	},

 	// Remove the last selected quesčion from the main rounds array after it has been used so that id can't be selected again
 	removeRoundObject: function() {
 		trivia.rounds.splice(trivia.activeIndex, 1);
 		console.log("rounds array after remove: " + trivia.rounds.length);
 	},

 	// Display game over message. Offer player the button to play again.
 	displayGameOver: function() {
 		// Generate game over message
 		var msg = "Game Over! You answered " + trivia.correctGuesses + " out of " + trivia.totalPossibleAnswers + " questions correctly.";

 		// Get parent element
 		var parent = document.getElementById('start-container');

 		// Create h2 for insertion into parent, using parameter msg for text
 		var h2 = document.createElement('h2');
 		var text = document.createTextNode(msg);
 		h2.appendChild(text);

 		// Create p for insertion into parent
 		var p = document.createElement('p');
 		// Give p same class name as start button for styling, then set id attribute for window reload if user chooses to play again.
 		p.setAttribute("class", "play-again-button");
 		var text = document.createTextNode("Play Again >>");
 		p.appendChild(text);

 		// Display game over message by appending new items to parent
 		parent.appendChild(h2);
 		parent.appendChild(p);

 		// Clear out the answer content
 		var parent = document.getElementById("display-answer");
 		parent.innerHTML = "";

 		// Clear out the timer display <p> element
 		var parent = document.getElementById("display-timer");
 		var p = document.getElementsByClassName("seconds")[0];
 		parent.removeChild(p);
 	}
 }

// Code instructions for the timer functionality
var timer = {

	// Establish the time (in seconds)
	timeLimit: 20,

	// Function to decrement the time count
	count: function() {
		var seconds = timer.timeLimit -= 1;
		if(seconds < 0) {
			timer.stop();
			// Reset timer so that new count can start for next round
			timer.timeLimit = 20;
			// Set id to null so that unanswered feedback is displayed (tell user their time ran out)
			var id = "undefined";
			// Set the message string above the correct answer image
			trivia.setGuessState(id);
			// Generate the correct answer display. First set unanswered == true so next question will be generated
			var unanswered = true;
			trivia.generateAnswer(unanswered);
			// Now remove last displayed object from the main rounds array so that it can't be chosen again
 			trivia.removeRoundObject();
		} else {
			// Add leading zeros if value is less than 10
			seconds = seconds < 10 ? "00:0" + seconds : "00:" + seconds;
			// Now display the updated time on the page
			var parent = document.getElementById("display-timer");
			var p = parent.getElementsByClassName('seconds')[0];
			//var time = document.createTextNode(seconds);
			p.innerHTML = seconds;
		}
	},

	// Function to start the timer
	start: function() {
		timer.timeLimit = 20;
		if(token == undefined) {
			token = setInterval(timer.count, 1000);
		}
	},

	// Function to stop the timer
	stop: function() {
		// Use clearInterval to stop the count here
		clearInterval(token);
		token = undefined;
	}
}

// Main program execution code
$(document).ready(function() {
 	
 	// When the user clicks the main start button, generate first question and then start the timer
 	$('div#start-container').on('click', 'p.start-button', function() {
 		// Remove the start button to make room for question content
 		var parent = document.getElementById("start-container");
 		var p = parent.getElementsByClassName('start-button')[0];
 		parent.removeChild(p);

 		// Set/store total possible answer count for game over score report
 		trivia.totalPossibleAnswers = trivia.rounds.length;

 		// Generate the first question
 		trivia.generateQuestion();
 	});

 	// Determine whether or not the user chose the correct answer
 	$('div#display-round').on('click', 'p', function(event) {
 		// Store the id selected for determining correct or incorrect answer
 		var id = $(this).attr('id').slice(-1);

 		// Stop the timer
 		timer.stop();

 		// Set feedback message string based on correct or incorrect id
 		trivia.setGuessState(id);

 		// Display answer content. Set unanswered == false so that generateAnswer() does not execute the generateQuestion() method again
 		var unanswered = false;
 		trivia.generateAnswer(unanswered);

 		// Now remove last displayed object from the main rounds array so that it can't be chosen again
 		trivia.removeRoundObject();

 		// Now check to see if it was the last round.  If so, game over.
 		if(trivia.rounds.length == 0) {
 			// Display the Game Over message, and offer player chance to play again, but only after last answer content has been displayed
 			setTimeout(trivia.displayGameOver, 10000);

 		} else {
 			// Game is still in session.  
 			// Set a timeout so that the answer is available for viewing, before moving on and generating the next question.
 			trivia.firstQuestion = false;
 			setTimeout(trivia.generateQuestion, 8000);
 		}
 	});

 	// If user clicks "Play Again" button, reload the page for a new game round
 	$('div#start-container').on('click', 'p.play-again-button', function() {
 		location.reload();
 	});
});