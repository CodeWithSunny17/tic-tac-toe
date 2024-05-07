let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");

let turnO=true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

resetGame = () => {
    console.log("reset");
    turnO=true;
    for(let i of boxes){
        i.disabled=false;
        i.innerHTML="";
    }
    document.querySelector('.winner').style.visibility = 'hidden';
}




boxes.forEach((x) => {
    x.addEventListener("click", ()=>{
        if(turnO===true){
            x.innerHTML = "O";
            turnO=false;
        }else{
            x.innerHTML = "X";
            turnO=true;
        }
        x.disabled=true;
        checkWinner();
        // console.log(checkWinner());
    })
});

const checkWinner =()=>{
    for(let i=0;i<winPatterns.length;i++){
        let [a,b,c] = winPatterns[i];
        // console.log(b)
        if(boxes[a].innerHTML==='O' || boxes[a].innerHTML==='X'){

            if(boxes[a].innerHTML===boxes[a].innerHTML&& 
                boxes[a].innerHTML===boxes[b].innerHTML&& 
                boxes[b].innerHTML===boxes[c].innerHTML){
                console.log(boxes[a].innerHTML+" is The Winner");
                document.querySelector('.winner').style.visibility = 'visible';
                document.querySelector('.prompt').innerHTML = "'"+boxes[a].innerHTML+"'"+" is The Winner";
                // return boxes[i];
            }
        }
        
    }
}

resetbtn.addEventListener("click", resetGame);
