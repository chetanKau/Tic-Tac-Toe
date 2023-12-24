let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset_btn");
let newGame=document.querySelector("#newGame_btn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disabledBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}

const resetGame=()=>{
    enabledBtn();
    turnO=true;
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
}

checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
