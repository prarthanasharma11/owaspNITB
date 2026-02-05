let boxes=document.querySelectorAll(".box");
let turnO=true;
let win=document.querySelector("#win");
let restart=document.querySelector("#restart");
let resetGame=document.querySelector(".resetGame");

let play=()=>{
    boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    if(turnO){
        box.style.color="red";
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        box.style.color="green";
        turnO=true;
    }

    box.disabled=true;       //disabled works only on form controls(button, input, select...)
    checkWinner();
    });

});
}

play();
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const showWinner=(_winner)=>{
    win.innerText=`WINNER: ${_winner}`;
    win.classList.replace("hide", "show");
    restart.classList.replace("hide", "show");
}

const checkWinner=()=>{
    for(let position of winPattern){
        let pos1val=boxes[position[0]].innerText;
        let pos2val=boxes[position[1]].innerText;
        let pos3val=boxes[position[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("WINNER", pos1val);
                boxes.forEach((box)=>{
                box.disabled=true;
                });
                showWinner(pos1val);


                // restart.style.marginBottom="90vh";
            }
        }
    }
}


// play();

restart.addEventListener("click", ()=>{
    turnO=true;
    boxes.forEach((box)=>{
    box.disabled=false;
    box.innerText="";
    });
    // restart.style.margin="0";
    win.classList.replace("show", "hide");
    restart.classList.replace("show", "hide");
    // play();
});

resetGame.addEventListener("click", ()=>{
    turnO=true;
    boxes.forEach((box)=>{
    box.disabled=false;
    box.innerText="";
    });
    // play();
});



// MISTAKE

// let _box=boxes.forEach((box)=>{   //for each does not create file handler i.e. why code not working
//     if(turnO){
//         box.innerText="O";
//         turnO=false;
//     }
//     else{
//         box.innerText="X";
//         turnO=true;
//     }
// });
