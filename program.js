/* - - - HTML ELEMENTS - - - */

const grid = document.querySelector("#grid");


/* - - - GLOBAL VARIABLES - - - */

let isDrawing = false;


/* - - - FUNCTIONS - - - */

// Function to create a N x N grid
function createNxNGrid(n) {
    for (let i = 0; i < n*n; i++) {
        // Creating the cell
        const cell = document.createElement("div");
        cell.style.boxSizing = "border-box";
        const size = (grid.clientWidth / n);
        cell.style.border = "1px solid";
        cell.style.height = `${size}px`;
        cell.style.width = `${size}px`;
        grid.appendChild(cell);


        // Listeners for the hover effect (for each cell)
        cell.addEventListener("mousedown", () => {
            cell.style.background = "black";
            isDrawing = true;
        });

        cell.addEventListener("mouseup", () => {
            isDrawing = false;
        });

        cell.addEventListener("mouseenter", () => {
            if (isDrawing) {
                cell.style.background = "black";
            }
        });
    }let isDrawing = false;
}


/* - - - PROGRAM LOGIC - - - */
createNxNGrid(16);

