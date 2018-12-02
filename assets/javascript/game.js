$(document).ready(function () {
    //set initial varialbles
    var wins = 0
    var losses = 0
    //randomize target and gems
    var targetNumber = Math.floor(Math.random() * 101 + 19);
    var greenGem = Math.floor(Math.random() * 11 + 1);
    var pinkGem = Math.floor(Math.random() * 11 + 1);
    var blueGem = Math.floor(Math.random() * 11 + 1);
    var yellowGem = Math.floor(Math.random() * 11 + 1);
    //var used for user score
    var currentNumber = 0;

    //Reset function after win or loss
    var reset = function () {
        var wins = 0
        var losses = 0
        //randomize target and gems
        var targetNumber = Math.floor(Math.random() * 101 + 19);
        var greenGem = Math.floor(Math.random() * 11 + 1);
        var pinkGem = Math.floor(Math.random() * 11 + 1);
        var blueGem = Math.floor(Math.random() * 11 + 1);
        var yellowGem = Math.floor(Math.random() * 11 + 1);
        //var used for user score
        var currentNumber = 0;
        //print target score
        $(".target-score").text("Target Score: " + targetNumber);

    }

    //print target score
    $(".target-score").text("Target Score: " + targetNumber);

    if (currentNumber < targetNumber) {
        //click functions
        $(".green").on("click", function () {
            //value of the gem added to the user score
            currentNumber += greenGem;
            //print updated user score
            $(".tally-score").text(currentNumber);
        })
        $(".pink").on("click", function () {
            currentNumber += pinkGem;
            $(".tally-score").text(currentNumber);
        })
        $(".blue").on("click", function () {
            currentNumber += blueGem;
            $(".tally-score").text(currentNumber);
        })
        $(".yellow").on("click", function () {
            currentNumber += yellowGem;
            $(".tally-score").text(currentNumber);
        })
        return (currentNumber);
    }

    //else if statement for when user's number is equal to or greater than target

    else if (currentNumber === targetNumber) {
        wins++;
        alert("Congratulations! You Win!");
        $(".wins-and-losses").text("Wins: " + wins);
        reset()
    }
    else if (currentNumber > targetNumber) {
        losses++;
        alert("Sorry You Lose! Please try again!");
        $(".wins-and-losses").text("Losses: " + losses);
        reset()
    }

})