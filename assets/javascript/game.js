$(document).ready (function () {

// Variables


var jewelRandom=[];

var wins=0;

var losses=0;

var totalScore=0;

$('#numWins').html(wins);

$('#numLosses').html(losses);


//--------------------------------------
// Functions

//creates an array of 4 random numbers between 1-12 for the crystals

 function ranNum () {
 	for(var i=0; i<4; i++){
 		var num=Math.floor(Math.random()*11 + 1);
 		jewelRandom.push(num);
 	}
 	console.log("4 random numbers for the crystals: " + jewelRandom);
 }
 ranNum();

 
function winLose(){
if(totalScore==numToMatch){
	wins++;	
	$('#numWins').html(wins);
	setTimeout(function(){ alert("You won-good job!!!"); }, 50);
	setTimeout(function(){reset();},100);

}
if(totalScore > numToMatch){
	losses++;
	$('#numLosses').html(losses);
	setTimeout(function(){ alert("Sorry Dude- you lost!!!"); }, 50);
	setTimeout(function(){reset();},100);
	}

	
}

function reset(){
	numToMatch=Math.floor(Math.random()*101+19);
	console.log(numToMatch);
	$("#numToMatch").html(numToMatch);
	jewelRandom=[];
	ranNum();
	totalScore=0;
	$('#totalScore').html(totalScore);

}


			    	


//--------------------------------------

// Game Processes

//sets the random number to match

 var numToMatch=Math.floor(Math.random()*101+19);
$("#numToMatch").html(numToMatch);
console.log("Random number to Match: " + numToMatch);


// on click for Crystals-takes the index of jewelRandom-

$('#blue').on('click',function(){
	totalScore=totalScore+(jewelRandom[0]);
	$('#totalScore').html(totalScore);
	console.log("this will stay fixed for each jewel " +totalScore);
	winLose();

})

$('#red').on('click',function(){
	totalScore=totalScore+(jewelRandom[1]);
	$('#totalScore').html(totalScore);
	console.log("this will stay fixed for each jewel " +totalScore);
	winLose();
})

$('#green').on('click',function(){
	totalScore=totalScore+(jewelRandom[2]);
	$('#totalScore').html(totalScore);
	console.log("this will stay fixed for each jewel " +totalScore);
	winLose();
})

$('#yellow').on('click',function(){
	totalScore=totalScore+(jewelRandom[3]);
	$('#totalScore').html(totalScore);
	console.log("this will stay fixed for each jewel " +totalScore);
	winLose();
})

})



