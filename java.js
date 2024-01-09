
document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById('container');

divGrid(16, 16);

function divGrid(rivi, rivi2) {
    for (c = 0; c < (rivi * rivi2); c++) {
        let cell = document.createElement("div");
        cell.style.cssText = 'background-color: black;'

        cell.innerText = (c + 1);
        container.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'white';
        }) 
        cell.addEventListener('mouseout', () => {
            cell.style.backgroundColor = 'green';
        }) 
    };
};



});