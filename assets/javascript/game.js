$(document).ready(function () {
    //set initial varialbles for wins and losses
    var win = 0
    var loss = 0
    //randomize target and gems
    var targetNumber = Math.floor(Math.random() * 101 + 19);
    var greenGem = Math.floor(Math.random() * 11 + 1);
    var pinkGem = Math.floor(Math.random() * 11 + 1);
    var blueGem = Math.floor(Math.random() * 11 + 1);
    var yellowGem = Math.floor(Math.random() * 11 + 1);
    //var used for user score
    var currentNumber = 0;

    //Reset function after win or loss
    function reset() {

        //randomize target and gems
        targetNumber = Math.floor(Math.random() * 101 + 19);
        greenGem = Math.floor(Math.random() * 11 + 1);
        pinkGem = Math.floor(Math.random() * 11 + 1);
        blueGem = Math.floor(Math.random() * 11 + 1);
        yellowGem = Math.floor(Math.random() * 11 + 1);
        //var used for user score
        currentNumber = 0;
        //print target score
        $(".target-score").text("Target Score: " + targetNumber);
        //print current user score
        $(".tally-score").text(currentNumber);

        
    }
    var wins = function() {
        //add 1 to wins
        win++;
        // alert winning message
        alert("Congratulations! You Win!");
        //print wins text
        $(".wins-and-losses").html("<p>Wins: " + win + "</p>" + "<br>" + "<p>Losses: " + loss + "</p>");
        //run reset function
        reset();
    }
    var losses = function () {
        // add 1 to lossses value
        loss++;
        // loss alert
        alert("I'm sorry you lose! Please try again");
        //print loss text
        $(".wins-and-losses").html("<p>Wins: " + win + "</p>" + "<br>" + "<p>Losses: " + loss + "</p>");
        //run reset function
        reset();
    }
    //print target score
    $(".target-score").text("Target Score: " + targetNumber);
    //print current user score
    $(".tally-score").text(currentNumber);

        //click functions
        $(".green").on("click", function () {
            //value of the gem added to the user score
            currentNumber = currentNumber + greenGem;
            //print updated user score
            $(".tally-score").text(currentNumber);
            if (currentNumber === targetNumber) {
                wins();
            }
            else if (currentNumber > targetNumber) {
                losses();
            }
        })
        $(".pink").on("click", function () {
            currentNumber = currentNumber + pinkGem;
            $(".tally-score").text(currentNumber);
            if (currentNumber === targetNumber) {
                wins();
            }
            else if (currentNumber > targetNumber) {
                losses();
            }
        })
        $(".blue").on("click", function () {
            currentNumber = currentNumber + blueGem;
            $(".tally-score").text(currentNumber);
            if (currentNumber === targetNumber) {
                wins();
            }
            else if (currentNumber > targetNumber) {
                losses();
            }
        })
        $(".yellow").on("click", function () {
            currentNumber = currentNumber + yellowGem;
            $(".tally-score").text(currentNumber);
            if (currentNumber === targetNumber) {
                wins();
            }
            else if (currentNumber > targetNumber) {
                losses();
            }

        })
    
    


    //else if statement for when user's number is equal to or greater than target


    reset();
})