/* - - - HTML ELEMENTS - - - */
const grid = document.querySelector("#grid");
const sliderText = document.querySelector("#slider-text");
const sliderBar = document.querySelector("#slider-bar");
const buttons = document.querySelector("#buttons");


/* - - - GLOBAL VARIABLES - - - */
let isDrawing = false;
let colorPicked = "black";
const initialGridSize = 10;
let randomColorActivated = false;


/* - - - FUNCTIONS - - - */

// Function to create a N x N grid
function createNxNGrid(n) {
    // Clean the grid before adding cells
    grid.innerHTML = "";

    // Creating the cells
    for (let i = 0; i < n*n; i++) {
        const cell = document.createElement("div");
        cell.style["background-color"] = "white";
        cell.style.boxSizing = "border-box";
        cell.style.border = "1px solid";
        const size = (grid.clientWidth / n);
        cell.style.height = `${size}px`;
        cell.style.width = `${size}px`;
        grid.appendChild(cell);
    }


    /* - - - LISTENERS FOR THE GRID - - - */

    // Listener to color the cell if "clicked"
    grid.addEventListener("mousedown", (eventObject) => {
        if (randomColorActivated) {
            const R = Math.floor(Math.random() * 256);
            const G = Math.floor(Math.random() * 256);
            const B = Math.floor(Math.random() * 256);
            colorPicked = `rgb(${R}, ${G}, ${B})`;
        }

        let cell = eventObject.target;
        cell.style["background-color"] = colorPicked;
        isDrawing = true;
    });

    // Listener to detect when user "stops drawing"
    grid.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    // Listener to color the cell if "passing over it"
    grid.addEventListener("mouseover", (eventObject) => {
        let cell = eventObject.target;

        if (isDrawing) {
            if (randomColorActivated) {
                const R = Math.floor(Math.random() * 256);
                const G = Math.floor(Math.random() * 256);
                const B = Math.floor(Math.random() * 256);
                colorPicked = `rgb(${R}, ${G}, ${B})`;
            }

            cell = eventObject.target;
            cell.style["background-color"] = colorPicked;
        }
    });
}


/* - - - LISTENERS - - - */

// Listener to "detect a change in the "slider"
sliderBar.addEventListener("input", () => {
    let size = sliderBar.value;
    sliderText.textContent = `Size: ${size} x ${size}`;
    createNxNGrid(sliderBar.value);
});

// Listener to "detect the button selected" from the toolbar
buttons.addEventListener("click", (eventObject) => {
    const button = eventObject.target.id;

    switch (button) {
        case "black-btn":
            colorPicked = "black";
            randomColorActivated = false;
            break;
        
        case "erase-btn":
            colorPicked = "white";
            randomColorActivated = false;
            break;

        case "clear-btn":
            createNxNGrid(sliderBar.value);
            break;

        case "random-btn":
            randomColorActivated = true;
            break;

        case "shadow-btn":
            randomColorActivated = false;
            break;
    }
});


/* - - - INITIALIZE - - - */
createNxNGrid(initialGridSize);