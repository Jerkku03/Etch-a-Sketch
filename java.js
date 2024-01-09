
document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById('container');

const pixeli = document.getElementById('pixeli');





function divGrid(koko) {
    container.style.gridTemplateColumns = `repeat(${koko}, 1fr)`
    container.style.gridTemplateRows = `repeat(${koko}, 1fr)`

    for (c = 0; c < (koko * koko); c++) {
        let cell = document.createElement("div");
        cell.style.cssText = 'background-color: black; min-height: 5px; min-width:5px;'
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'white';
        }) 
        cell.addEventListener('mousedwn', () => {
            cell.style.backgroundColor = '';
        }) 
        container.appendChild(cell);
    };
};
pixeli.addEventListener('click', () => {
    input = prompt('give input 0-100');
    if (0 < input <= 100){
    divGrid(input)
    }

});

});