let buttons = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector(".msg")

let turnO = true

const winners=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const resetfunc =() => {
    for(let box of buttons)
        {
            box.disabled=false;
            box.innerText=""
        }
        turnO=true;
        msgcontainer.classList.add("hide")
    
}
buttons.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turnO) {
            box.innerText = "O"
            turnO = false
        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        for (let pattern of winners) {
            let pos1 = buttons[pattern[0]].innerText
            let pos2 = buttons[pattern[1]].innerText
            let pos3 = buttons[pattern[2]].innerText
    
            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos2 === pos3 && pos3 === pos1) {
                    console.log("winnner",pos1)
                    msg.innerText=`Congratultion ,The Winner is ${pos1}`
                    msgcontainer.classList.remove("hide")
                    for(let box of buttons)
                        {
                            box.disabled=true;
                        }
                }
            }
        }
    })
})

resetbtn.addEventListener("click",resetfunc)