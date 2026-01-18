const grid = document.querySelector("#grid");

function createNxNGrid(n) {
    for (let i=0; i<n*n; i++) {
        // Creating the cell
        const cell = document.createElement("div");
        cell.style.boxSizing = "border-box";
        const size = (grid.clientWidth / n);
        cell.style.border = "1px solid";
        cell.style.height = `${size}px`;
        cell.style.width = `${size}px`;
        grid.appendChild(cell);
    }
}

createNxNGrid(10);