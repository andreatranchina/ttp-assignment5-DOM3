let numRows = 2;
let numCols = 2;
let button = document.querySelector(".btn-add-col");

button.addEventListener("click", function() {

    let grid = document.querySelector(".grid");

    for (let i=0; i< numRows; i++){
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
    
        grid.appendChild(newCell);
    }
    // grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    numCols++;
    grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 




})