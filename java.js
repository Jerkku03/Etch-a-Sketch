
document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById('container');

const pixeli = document.getElementById('pixeli');

const alkuTila = 16


function divGrid(koko) {
    container.style.gridTemplateColumns = `repeat(${koko}, 1fr)`
    container.style.gridTemplateRows = `repeat(${koko}, 1fr)`

    for (c = 0; c < (koko * koko); c++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'white';
        }) 
        cell.addEventListener('mousedwn', () => {
            cell.style.backgroundColor = '';
        }) 
        container.appendChild(cell);
    };
};

function clearContainer() {
    container.innerHTML = ''
    }

pixeli.addEventListener('click', () => {
    clearContainer();
    input = prompt('give input 0-100');
    if (0 < input < 101){
    divGrid(input)
    }
    else {
        prompt('luku 0-100')
    }
});




});