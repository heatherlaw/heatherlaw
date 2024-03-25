function choseRock(){
    var userChoice=0;
    var compChoice=parseInt(Math.random()*3);
    document.getElementById("choices").style="display:none";
    if (compChoice==0){
        document.getElementById("gameTitle").innerHTML="It's a draw!";
        document.getElementById("info").innerHTML="The computer also chose rock";
        document.getElementById("refresh").style="display:block";
        }
    else if (compChoice==1){
        document.getElementById("gameTitle").innerHTML="You lose!";
        document.getElementById("info").innerHTML="You chose rock and the computer chose paper";
        document.getElementById("loseImage").style="display:block";
        document.getElementById("refresh").style="display:block";
    }
    else if (compChoice==2){
        document.getElementById("gameTitle").innerHTML="You win!";
        document.getElementById("info").innerHTML="You chose rock and the computer chose scissors";
        document.getElementById("winImage").style="display:block";
        document.getElementById("refresh").style="display:block";
    }
}
function chosePaper(){
    var userChoice=1;
    var compChoice=parseInt(Math.random()*3);
    document.getElementById("choices").style="display:none";
    if (compChoice==0){
        document.getElementById("gameTitle").innerHTML="You win!";
        document.getElementById("info").innerHTML="You chose paper and the computer chose rock";
        document.getElementById("winImage").style="display:block";
        document.getElementById("refresh").style="display:block";
        }
    else if (compChoice==1){
        document.getElementById("gameTitle").innerHTML="It's a draw!";
        document.getElemtentById("info").innerHTML="The computer also chose paper";
        document.getElementById("refresh").style="display:block";
    }
    else if (compChoice==2){
        document.getElementById("gameTitle").innerHTML="You lose!";
        document.getElementById("info").innerHTML="You chose paper and the computer chose scissors";
        document.getElementById("loseImage").style="display:block";
        document.getElementById("refresh").style="display:block";
    }
}
function choseScissors(){
    var userChoice=2;
    var compChoice=parseInt(Math.random()*2);
    document.getElementById("choices").style="display:none";
    if (compChoice==0){
        document.getElementById("gameTitle").innerHTML="You lose!";
        document.getElementById("info").innerHTML="You chose scissors and the computer chose rock";
        document.getElementById("loseImage").style="display:block";
        document.getElementById("refresh").style="display:block";
        }
    else if (compChoice==1){
        document.getElementById("gameTitle").innerHTML="You win!";
        document.getElementById("info").innerHTML="You chose scissors and the computer chose paper";
        document.getElementById("winImage").style="display:block";
        document.getElementById("refresh").style="display:block";
    }
    else if (compChoice==3){
        document.getElementById("gameTitle").innerHTML="It's a draw!";
        document.getElementById("info").innerHTML="The computer also chose scissors";
        document.getElementById("refresh").style="display:block";
    }
}