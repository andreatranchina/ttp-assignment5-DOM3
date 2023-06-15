let numRows = 0;
let numCols = 0;
let button = document.querySelector(".btn-add-col");
let buttonRemoveCol = document.querySelector(".btn-rmCol");

button.addEventListener("click", function() {

    let grid = document.querySelector(".grid");

    if(numRows===0){
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
    
        grid.appendChild(newCell);
        numRows++;
    }
    else{
        for (let i=0; i< numRows; i++){
            let newCell = document.createElement("div");
            newCell.classList.add("cell");
    
            grid.appendChild(newCell);
        }
    }
    // grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    numCols++;
    grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 

    return numCols;
})

buttonRemoveCol.addEventListener("click", removeCol);

function removeCol(){
    let grid = document.querySelector(".grid");

    if(numCols!=0||numRows!=0){
        for (let i=0; i< numRows; i++){
            grid.lastChild.remove();
        }
        numCols--;
        grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 
    }
    if(numCols===0){
        numRows = 0;
    }
    // grid.style.gridTemplateColumns = "repeat(3, 1fr)";

    return numCols;
}

