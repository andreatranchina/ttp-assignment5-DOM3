let numRows = 0;
let numCols = 0;
let button = document.querySelector(".btn-add-col");
let buttonRemoveCol = document.querySelector(".btn-rmCol");

//add columns
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

//remove columns
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

//add rows
let addRowBtn = document.querySelector(".btn-add-row");
addRowBtn.addEventListener("click", function() {

    let grid = document.querySelector(".grid");

    if(numCols===0){
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
    
        grid.appendChild(newCell);
        numCols++;
    }
    else{
        for (let i=0; i< numCols; i++){
            let newCell = document.createElement("div");
            newCell.classList.add("cell");
    
            grid.appendChild(newCell);
        }
    }

    numRows++;
    grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`; 

})

//remove rows
let rmRowBtn = document.querySelector(".btn-rm-row");
rmRowBtn.addEventListener("click", removeRow);

function removeRow(){
    let grid = document.querySelector(".grid");

    if(numCols!=0||numRows!=0){
        for (let i=0; i< numCols; i++){
            grid.lastChild.remove();
        }
        numRows--;
        grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`; 
    }
    if(numRows===0){
        numCols = 0;
    }
}

//select a color from dropdown
let currentColor = "";

let colorDropdown = document.querySelector(".dropdown");


colorDropdown.addEventListener("change", function(){
    currentColor = colorDropdown.value;
})

//change color of selected cell
let cellGrid = document.querySelector(".grid");

cellGrid.addEventListener("click", function(event){
    let cell = event.target;
    cell.style.backgroundColor = currentColor;
})

//clear all cell colors
let btnClear = document.querySelector(".btn-clear-all");
btnClear.addEventListener("click", function (){
    let cellNodeList = document.querySelectorAll(".cell");
    let cellArray = [...cellNodeList];
    for(let i=0; i<cellArray.length; i++){
        cellArray[i].style.backgroundColor = "";
    }
})


