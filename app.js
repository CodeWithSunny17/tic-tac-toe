let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".reset");


let turnO=true;


const winPatterns = [
    [0, 1, 21],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 71],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((x) => {
    x.addEventListener("click", ()=>{
        
        if(turnO===true){
            x.innerHTML = "O";
            turnO=false;
        }else{
            x.innerHTML = "X";
            turnO=true;
        }
    })
});