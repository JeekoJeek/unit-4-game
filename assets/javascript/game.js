$(document).ready(function(){
    var wins= 0
    var losses= 0
    var targetNumber = Math.floor(Math.random() * 129)+12
    var greenGem= ""
    var pinkGem= ""
    var blueGem= ""
    var yellowGem= ""
    var game=false

    if(game===false){

        $(".green").on("click", function(){
        greenGem=Math.floor(Math.random()*12)+1;
        game=true;
        
    })
}
})