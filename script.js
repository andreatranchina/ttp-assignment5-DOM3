let numRows = 0;
let numCols = 0;


/***************ADD COLUMNS*********************/
let button = document.querySelector(".btn-add-col");
//add click event listener to the add column button
button.addEventListener("click", function() {

    let grid = document.querySelector(".grid");
    //if number of rows or columns are 0 (empty grid), add a single cell to the grid
    if(numRows===0 || numCols ===0){
        //create the cell and append it to the grid
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        grid.appendChild(newCell);
        //when adding first cell, the number of rows increases as well
        numRows++;
    }
    //else add a new column to the grid (so add as many cells as the number of rows)
    else{
        for (let i=0; i< numRows; i++){
            let newCell = document.createElement("div"); 
            newCell.classList.add("cell");
            grid.appendChild(newCell);
        }
    }
    //increase the number of columns by 1
    numCols++;
    grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`; 

    return numCols;
})

/********************REMOVE COLUMNS*************************/
let buttonRemoveCol = document.querySelector(".btn-rmCol");
//add an event listener to the remove column button
buttonRemoveCol.addEventListener("click", removeCol);
function removeCol(){
    let grid = document.querySelector(".grid");

    //if grid is not empty (number of columns or rows are 0), 
    //remove the last column from the grid, so remove as many cells as the number of rows
    if(numCols!==0 && numRows!==0){
        for (let i=0; i< numRows; i++){
            grid.lastChild.remove();
        }
        //decrease the number of columns by 1
        numCols--;
    }
    //now check if number of columns has become 0 (grid is empty after removing columns)
    //in that case set number of rows to 0 as well
    if(numCols===0){
        numRows = 0;
    }
    grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`; 
    return numCols;
}

//********************************ADD ROWS*******************/
let addRowBtn = document.querySelector(".btn-add-row");
//add event listener for clicking on add row button
addRowBtn.addEventListener("click", function() {

    let grid = document.querySelector(".grid");
    
    //if grid is empty, add first cell to grid
    if(numCols===0 || numRows ===0){
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
    
        grid.appendChild(newCell);
        //when adding first grid by adding row, the number of cells increments as well
        numCols++;
    }
    //else add new row, therefore add as many cells as the number of columns
    else{
        for (let i=0; i< numCols; i++){
            let newCell = document.createElement("div");
            newCell.classList.add("cell");
    
            grid.appendChild(newCell);
        }
    }
    //increment the number of rows
    numRows++;
    grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`; 
    grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 

})

//************************REMOVE ROWS***********************/
let rmRowBtn = document.querySelector(".btn-rm-row");
//add click event listener to the remove row button
rmRowBtn.addEventListener("click", removeRow);

function removeRow(){
    let grid = document.querySelector(".grid");
    //if the grid is not empty, remove the last row, therefore remove as many cells as the number of columns
    if(numCols!==0||numRows!==0){
        for (let i=0; i< numCols; i++){
            grid.lastChild.remove();
        }
        //decrement number of rows
        numRows--;
    }
    //now check if the number of rows has become 0 (grid is now empty) and in that case set numCols to 0
    if(numRows===0){
        numCols = 0;
    }
    grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`; 
}

//*********SELECT A COLOR FROM DROPDOWN MENU *************/
let currentColor = "";
let colorDropdown = document.querySelector(".dropdown");
//add event listener to dropdown menu and on change set current color to the value selected
colorDropdown.addEventListener("change", function(){
    currentColor = colorDropdown.value;
})

//************CHANGE COLOR OF SELECTED CELL*********************/
let cellGrid = document.querySelector(".grid");

//add event listener to the grid
cellGrid.addEventListener("mousedown", function(event){
    //determine the target of the click (the specific cell)
    let cell = event.target;
    //check that the target clicked is indeed a cell and if so change its color to the currentColor
   if(cell.classList[0]=="cell"){
    cell.style.backgroundColor = currentColor;
   }
})


//******************************CLEAR ALL CELL COLORS*******************/
//add event listener to the clear all button
let btnClear = document.querySelector(".btn-clear-all");
btnClear.addEventListener("click", function (){
    //get all cells in an array
    let cellNodeList = document.querySelectorAll(".cell");
    let cellArray = [...cellNodeList];
    for(let i=0; i<cellArray.length; i++){
        //set background color of each cell to clear
        cellArray[i].style.backgroundColor = "";
    }
})

//*****************************FILL ALL UNCOLORED CELLS*************/
//add event listener to color all uncolored button
let fillAllU = document.querySelector(".btn-fill-u");
fillAllU.addEventListener("click", function(){
    //get all cells in the grid as an array
    let cellNodeList = document.querySelectorAll(".cell");
    let cellArray = [...cellNodeList];
    //loop through the cell array, if the backgroundColor is clear, set the color to currentColor
    for(let i=0; i<cellArray.length; i++){
        if(cellArray[i].style.backgroundColor==""){
            cellArray[i].style.backgroundColor = currentColor;
        }
    }
})

//*****************COLOR ALL CELLS**************************
//add event listener to the color all cells button
let btnFillAll = document.querySelector(".btn-fill-all");
btnFillAll.addEventListener("click", function(){
    //get all the cells in the grid as an array
    let cellNodeList = document.querySelectorAll(".cell");
    let cellArray = [...cellNodeList];
    //loop through the array and set the background color to the currentColor
    for(let i=0; i<cellArray.length; i++){
        cellArray[i].style.backgroundColor = currentColor;
    }
})

//******************DRAG AND COLOR ALL SELECTED**************/
//set mousedown boolean to false
let isMouseDown = false;

//on mousedown, set boolean to true
document.addEventListener("mousedown",function(){
    isMouseDown = true;
}) 

//on mouseup set boolean to false
document.addEventListener("mouseup",function(){
    isMouseDown = false;
}) 

//add hover event listener to grid
cellGrid.addEventListener("mouseover", function(event){
    //in combination with isMouseDown, when hovering over the cells check if mouse is clicked
    //if so, then check that the target is a cell and color the cells
    if (isMouseDown){
        let cells = event.target;
        if (cells.classList[0] == "cell")
        cells.style.backgroundColor = currentColor;
    }
})


// let gridCells = document.querySelectorAll(".cell");
// let gridCellArray = [...gridCells];

// for(let i = 0; i < gridCellArray.length; i++){
//     gridCellArray[i].addEventListener("mouseover", function(event){
//         this.style.backgroundColor = currentColor;
//         // if(isMouseDown){
//             // let cells = event.target;
//             // cells.style.backgroundColor = currentColor;
//         // }
//     })
// }
