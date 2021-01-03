let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let startFlag = true;
let level = 0;

//click any key to start game
$(document).keydown(function(){
    if (startFlag){
        startFlag = false;
        $("h1").html("Level "+level);
        nextSequence();
    };
});

//shows the next button in the sequence
function nextSequence(){
    level+=1;
    userClickedPattern = [];
    $("h1").html("Level "+level);
    let randomNum = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}

//if a button is clicked by user
$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAns(userClickedPattern.length-1)
})

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){$("#"+currentColor).removeClass("pressed")}, 100);
}

function playSound(color){
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}

//check if the button clicked by user is correct
function checkAns(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){nextSequence()}, 1000);
        }
    }else{
        console.log("wrong");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    level=0;
    startFlag = true;
}

    
