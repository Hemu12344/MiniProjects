let userWin = 0
let comWin = 0
let drw = 0
let user = document.querySelectorAll(".box")
let yo = document.getElementsByClassName("yo");
let co = document.getElementsByClassName("co");
let messageBox = document.getElementsByClassName("msg-box")
let me = document.querySelectorAll(".you");
let comm = document.querySelectorAll(".com");
let draw = document.getElementsByClassName("dra")
let instruction = document.querySelectorAll(".instruction")
let winPoint = document.getElementsByClassName("Points")
let showw ="show"
winPoint[0].style.display="none"
let No = () => {
        instruction[0].addEventListener("click", () => { 
            if(showw=="show"){
                winPoint[0].style.display="block"
                document.querySelector(".instruction").innerHTML="X"
                showw="hide"
            }
            else if(showw==="hide"){
                document.querySelector(".instruction").innerHTML=`<i class="bi bi-list"></i>`
                winPoint[0].style.display="none"
                showw="show"
            }
        })
}
No()
// let yes = () => {
//     instruction[0].addEventListener("click", () => {
//         winPoint[0].style.display = "block"
//     })
// }
let dra = () => {
    messageBox[0].classList.add("draw")
    messageBox[0].classList.remove("computer")
    messageBox[0].classList.remove("user")
}
// }
let usermove = () => {
    messageBox[0].classList.add("user")
    messageBox[0].classList.remove("draw")


}

let Commove = () => {
    messageBox[0].classList.remove("draw")
    messageBox[0].classList.add("computer")
    messageBox[0].classList.remove("user")
}
let userChoise
let computerChoise = () => {
    let com = ["rock", "paper", "sesor"]
    let ran = com[Math.floor(Math.random() * com.length)]
    return ran
}

let playgame = (userChoise) => {
    let computer = computerChoise();
    if (userChoise == "paper" && computer == "rock" || userChoise == "sesor" && computer == "paper" || userChoise == "rock" && computer == "sesor") {
        userWin += 1
        yo[0].innerHTML = userWin;
        messageBox[0].innerHTML = `Congratulation You win`;
        usermove();
    }
    else if (computer == "paper" && userChoise == "rock" || computer == "sesor" && userChoise == "paper" || computer == "rock" && userChoise == "sesor") {
        comWin += 1
        co[0].innerHTML = comWin;
        messageBox[0].innerHTML = `Sorry Computer Win . try`;
        Commove();
    }
    else if (userChoise === computer || comWin === user) {
        messageBox[0].innerHTML = `Draw.......`;
        draw[0].innerHTML = `${drw += 1}`
        dra()
    }
    me[0].innerHTML = `Your Choise is : ${userChoise}`
    comm[0].innerHTML = `Computer Choise is : ${computer}`
}

user.forEach((use) => {
    use.addEventListener("click", () => {
        userChoise = use.getAttribute("id")
        playgame(userChoise)
    })
})

// Reset Button

let messageChange = () => {
    messageBox[0].innerHTML = "Game Restart"
    messageBox[0].classList.add("msg-box")
    messageBox[0].classList.remove("user")
    messageBox[0].classList.remove("computer")

}

let btn = document.querySelectorAll(".rmv");

let btnCheck = () => {
    btn[0].addEventListener("click", () => {
        comWin = 0
        userWin = 0
        co[0].innerHTML = "0";
        yo[0].innerHTML = "0";
        me[0].innerHTML = `Restart Re-Enter Your Choise`
        comm[0].innerHTML = `Restart Re-Enter Your Choise`
        messageChange();
    })
}

btnCheck()

// Theme Changer

let access = document.querySelectorAll(".head");
let body = document.querySelectorAll("body")

let change = () => {
    let them = "dark"
    access[0].childNodes[1].addEventListener('click', (e) => {
        if (them === "dark") {
            body[0].style.backgroundColor = "black"
            access[0].childNodes[1].innerHTML = "To Light"
            body[0].style.color = "white"
            body[0].style.transition = "all 1s"
            messageBox[0].classList.add("msg")
            them = "light"
        }
        else if (them === "light") {
            body[0].style.backgroundColor = "white"
            access[0].childNodes[1].innerHTML = "To Dark"
            body[0].style.color = "black"
            body[0].style.transition = "all 1s"
            messageBox[0].classList.add("msg-box")
            messageBox[0].classList.remove("msg")
            them = "dark"
        }
    })
}
change()


