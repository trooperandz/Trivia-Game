/**
 * Program: app.js
 * Created: 08/23/2016 by Matt Holland
 * Located: desktop/bootcamp/homework/triviagame/assets/javascript
 * Purpose: Provide gameplay code for 5th assignment - Trivia game
 */

 // Main game play object
 var trivia = {

 	correctFeedback: "Nice one! You got it right.",

 	incorrectFeedback: "Sorry, but you need to study more!",

 	unansweredFeedback: "Your time ran out!",

 	// Array of objects for storing round information:
 	// Note: color combinations derived from: http://www.colorcombos.com/color-schemes
	rounds: [
	  	{
			question: "Who is responsible for our entire A/C (alternating current) electrical system?",

			questionImage: "assets/images/backgrounds/ac-motor.jpg",

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

			answerImage: "assets/images/answers/alan-turing.jpg",
	
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

			answerImage: "",
	
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

			answerImage: "",
	
			guesses: [
				{
					answer: "Tokyo",
					correct: "0",
					backgroundColor: "#84596B"
			  	}, 

			  	{
					answer: "Yokohama",
					correct: "1",
					backgroundColor: "#CECFCE"
			  	}, 

			  	{
					answer: "Nagasaki",
					correct: "0",
					backgroundColor: "#6194BC"
			  	},

			  	{
					answer: "Kokura",
					correct: "0",
					backgroundColor: "#B58AA5"
			  	}
			]
	  	},

	  	{
			question: "The world's first underground railway (subway) system in the world was inaugrated in London in what decade?",

			questionImage: "assets/images/backgrounds/subway.jpg",

			answerImage: "",
	
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
					answer: "Steve Jobs",
					correct: "0",
					backgroundColor: "#BCE27F"
			  	}
			]
	  	},

	  	{
			question: "According to modern science, what is the world's heaviest animal to ever exist on the earth?",

			questionImage: "assets/images/backgrounds/sea-scorpion.jpg",

			answerImage: "",
	
			guesses: [
				{
					answer: "Argentinosaurus",
					correct: "0",
					backgroundColor: "#999"
			  	}, 

			  	{
					answer: "Mosasaurus",
					correct: "1",
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

			answerImage: "",
	
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

			answerImage: "",
	
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

			answerImage: "",
	
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

			answerImage: "",
	
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

	pickRandomIndex: function() {
		var index = Math.floor(Math.random() * this.rounds.length);
		return index;
	}
 }

 var timer = {
	startTimer: function() {
		// Set timer for 15 seconds
		var timeLimit = 15;
    	var timer = timeLimit, seconds;
    	setInterval(function () {
    	    var seconds = parseInt(timer, 10);
	
    	    seconds = seconds < 10 ? "0" + seconds : seconds;

    	    // If the time runs out, show the game over modal and reset the game vars
    	    if(seconds == "00") {
    	    	alert("Time up!");
    	    	/*
    	    	game.resetRoundVars();
    	    	game.showGameCompleteModal("Game Over! You ran out of time, slowpoke.");*/
    	    }

    	    // Update the html with the minutes and seconds values
    	    $('.seconds').text(seconds);
			
			// If the timer runs to zero, restart it
    	    if (--timer < 0) {
    	        timer = timeLimit;
    	    }
    	}, 1000);
    }
}

 $(document).ready(function() {
  	
 	// Choose random array item from "rounds" array.
 	var index = trivia.pickRandomIndex();

 	// Set "round" for easy array object access. Use round.
 	var round = trivia.rounds[index];

 	// Create temp array for pusing each "correct" string value for each answer solution ("1" = answer, "0" = wrong answer)
 	// Push correct property into temp array, or later use of IndexOf() method to retrive matching index
 	// Save correct answer for easy access. Correct answer choice is: "correct: "1" ", as indexOf() method requires string
 	var tempArray = [];
 	//var correctAnswerIndex = round.guesses.correct.indexOf("1");
 	//console.log('correctAnswerIndex: ' + correctAnswerIndex);

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

 	// Start the timer
 	//timer.startTimer();

 	console.log('tempArray: ' + tempArray);

 	// Save correct answer index. This will ALWAYS match the id of the <p> tag. It works!!
 	var correctAnswerIndex = tempArray.indexOf("1");
 	console.log('correctAnswerIndex: ' + correctAnswerIndex);

 	// Determine whether or not the user chose the correct answer
 	$('#display-round p').on('click', function(event) {
 		var id = $(this).attr('id').slice(-1);
 		console.log("You clicked the p with id " + id);

 		// Determine if the id was the correct answer
 		var result = (id == correctAnswerIndex) ? "Correct!" : "Incorrect!";
 		console.log(result);
 	});
 });