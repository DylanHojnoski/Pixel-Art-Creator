let width = 16;
let height = 16;
let active =false;
let selectedColor = "black"
let currentColor;
let root = document.querySelector(":root");

const body = document.querySelector("body");
body.addEventListener("load" , createGrid(width, height));
body.addEventListener("load" , colors());
body.addEventListener("load" , addClearGridButton());
body.addEventListener("load" , addChangeGridButton());
const container = document.getElementById("container");

function createGrid(width, height)
{
    let numGrids = width * height;
    for(let i = 0; i < numGrids; i++)
    {
        const container = document.getElementById("container");
        const div = document.createElement("div");
        div.addEventListener("mouseover", () => {
            if(active)
            {
                div.style.backgroundColor = selectedColor;
            }
        });
        div.addEventListener("click", () => {
           if(active)
           {
               active = false;
           }
           else
           {
               active = true;
           }
        });
        
        div.setAttribute("style", "flex: 1 1 " + (100/width) + "%;");

        container.append(div);
    }
}

function clearGrid() 
{
    while(container.lastChild)
    {
        container.removeChild(container.lastChild);
    }
}

function gridSize()
{
    width = prompt("Please enter the width of the grid max is 100");
    height = prompt("Please enter the heigth of the grid max is 100");
    if(width > 100 || width ===  null || width == "")
    {
        width = 100;
    }
    if(height > 100 || height === null || height == "")
    {
        height = 100;
    }
}

function colors()
{
    let colors = ["black", "white", "red", "blue", "green", "yellow", "orange"];
    for(let i = 0; i < colors.length; i++)
    {
        const buttonHolder = document.getElementById("buttonHolder");
        const colorSelect = document.createElement("button");
        colorSelect.style.backgroundColor = colors[i];
        colorSelect.style.borderRadius = "50%";
        colorSelect.style.height = "50px";
        colorSelect.style.width = "50px";
        colorSelect.addEventListener("click", () => {
            selectedColor = colors[i];
            root.style.setProperty("--hoverColor", colors[i]);
        });
        colorSelect.setAttribute("class", "colors");
        buttonHolder.append(colorSelect);
    }
}

function addClearGridButton()
{
    const buttonHolder = document.getElementById("buttonHolder");
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear Grid";
    clearButton.addEventListener("click", () => {
        clearGrid();
        createGrid(width, height);
    });
    buttonHolder.append(clearButton);
}

function addChangeGridButton()
{
    const buttonHolder = document.getElementById("buttonHolder");
    const clearButton = document.createElement("button");
    clearButton.textContent = "Change Grid";
    clearButton.addEventListener("click", () => {
        clearGrid();
        gridSize();
        createGrid(width, height);
    });
    buttonHolder.append(clearButton);
}


 

