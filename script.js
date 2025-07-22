
let userscore = 0
let computerscore = 0
let message = document.querySelector("#msg")
let userscoreprint = document.querySelector("#user-score")
let computerscoreprint = document.querySelector("#computer-score")

const computerguessmeth = () =>{
    let arr = ["Rock","Paper","Scissors"]
    return arr[Math.floor(Math.random()*3)]
}
const playgame = (choice) =>{ 
    
    let computerguess = computerguessmeth()
    console.log("Computer Guess", computerguess)
    if(choice == computerguess){
        console.log("Its a Draw")
        message.innerText = `It’s a tie! 🤷 You both went with ${choice}. Great minds think alike!`
        message.style.backgroundColor = "#AFAFAF"
    }
    else{
    let winner = true
    if(choice == "Paper"){
        // Computer choice can only be Rock Scissors
        winner = computerguess == "Rock" ? true : false
        
    }
    else if(choice == "Rock"){
        // Computer choice can only be Paper Scissors
        winner = computerguess == "Scissors" ? true : false
    }
    else{
        // Computer choice can only be Paper Rock
        winner = computerguess == "Paper" ? true : false
    }
    if(winner){
        console.log("Your a Winner")
        userscore++
        userscoreprint.innerText = userscore
        message.innerText = `Boom! 🎉 You picked ${choice} and totally outsmarted the computer’s ${computerguess}. Victory is yours!`
        message.style.backgroundColor = "#D4B249"
        
    }
    else{
        console.log("Computer won ")
        computerscore++
        computerscoreprint.innerText = computerscore
        message.innerText = `Ouch! 🤖 The computer picked ${computerguess} and beat your ${choice}. Better luck next time!`
        message.style.backgroundColor = "#800020"
    }
    }
    
}



const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        console.log("Users Guess ", choice.getAttribute("id"))
        playgame(choice.getAttribute("id"))
    })
})