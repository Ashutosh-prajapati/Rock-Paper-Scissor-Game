let userScore = 0;
let comScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScoreboard = document.querySelector(".userScore");
const comScoreboard = document.querySelector(".comScore");

choices.forEach((choice)=>{
     choice.addEventListener("click", function(){
        let userChoice = choice.getAttribute("id");
        game(userChoice);
     })
})

const comRandomChoice = () => {
    const choice = ['rock', 'paper', 'scisor'];
    let randomInx = Math.floor((Math.random())*3);
    return choice[randomInx];
}

const showResult = (result,userChoice,comChoice)=>{
    if(result){
        userScore++;
        userScoreboard.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "#30b050";
        msg.style.border = "4px solid #195728";
    }
    else{
        comScore++;
        comScoreboard.innerText = comScore;
        msg.innerText = `you lose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.border = "4px solid #ae0000";
    }
}
const game = (userChoice) => {
   let comChoice = comRandomChoice();

   if(userChoice === comChoice){
        console.log(" game draw");
        msg.innerText = "Game draw! try again";
        msg.style.backgroundColor = "#0cabb9";
        msg.style.border = "4px solid #0c54b9";
   }
   else{
    let roundResult = true;
    if(userChoice === "rock"){
        roundResult = comChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        roundResult = comChoice === "scisor" ? false : true;
    }
    else{
        roundResult = comChoice === "rock" ? false : true;
    }
    showResult(roundResult,userChoice,comChoice); 
   }
}
