let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const array = ["rock", "paper", "scissor"];
    const Indx = Math.floor(Math.random()*3);
    return array[Indx];
}

const massagebox = document.querySelector("#msg");
const drawGame = ()=>{
    massagebox.innerText = "Game was Draw, Play Again";
    massagebox.style.backgroundColor = "rgb(65, 0, 67)";
}

let uscore = document.querySelector("#user-score");
let cscore = document.querySelector("#comp-score");

let rstart = document.querySelector("#restart");
rstart.addEventListener("click", ()=>{
    userScore = 0;
    compScore = 0;
    uscore.innerText = userScore;
    cscore.innerText = compScore;
    massagebox.innerText = "Play Your Move";
    massagebox.style.backgroundColor = "rgb(35, 0, 0)";
})

let ub = document.querySelector("#userBox");
let cb = document.querySelector("#compBox");

const userwiner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userScore++;
        ub.style.border = "thin solid #00d026";
        ub.style.boxShadow = " 0px 0px 50px rgb(77, 255, 37)";
        setTimeout(()=>{
            ub.style.border = "none";
            ub.style.boxShadow = "none";
        },700)
        uscore.innerText = userScore;
        massagebox.style.backgroundColor = " rgb(22, 121, 0)";
        massagebox.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    }else{
        compScore++;
        cb.style.border = "thin solid #d00000";
        cb.style.boxShadow = " 0px 0px 50px rgb(255, 40, 40)";
        setTimeout(()=>{
            cb.style.border = "none";
            cb.style.boxShadow = "none";
        },700)
        cscore.innerText = compScore;
        massagebox.style.backgroundColor = "rgb(121, 0, 0)";
        massagebox.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userwin = compChoice === "scissor" ? false : true;
        }else{
            userwin = compChoice === "rock" ? false : true;
        }
        userwiner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

