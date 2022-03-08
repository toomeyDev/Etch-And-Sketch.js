const grid = document.querySelector(".grid");
const resetButton = document.querySelector("#reset");
const rainbowCheck = document.querySelector("#rainbow-mode");
const numberBox = document.querySelector("#size");

let isRainbow; // track if rainbow mode toggle is on or off
if(rainbowCheck.checked) {
    isRainbow = true; 
} else { isRainbow = false; }

rainbowCheck.addEventListener('change', function(){
    colorize();
});

let currentSize = numberBox.value;
if(currentSize > 100) {
    alert("Size cannot be greater than 100 x 100.")
    currentSize = 100;
    numberBox.value = 100;
}

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        for(let x = 0; x < size; x++) {
            let tile = document.createElement('div');
            // get scale of an individual tile based on chosen size
            let scale = 1/size * 100;
            //adjust width and height to be proportional
            tile.style.width = `${scale}%`;
            tile.style.height = `${scale}%`;

            // add event listener for mouseover event
            tile.addEventListener('mouseover', function() {
                colorize(tile);
            });

            tile.classList.add('tile');
            grid.appendChild(tile);
        }
    }
};

function reset() {
    grid.innerHTML = "";
    currentSize = numberBox.value;
    if(currentSize > 100) {
        alert("Size cannot be greater than 100 x 100.")
        currentSize = 100;
        numberBox.value = 100;
    }
    createGrid(currentSize);
}

function colorize(tile) {
    if(isRainbow){
        red = Math.floor(Math.random() * 255);
        green = Math.floor(Math.random() * 255);
        blue = Math.floor(Math.random() * 255);
        tile.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else {
        tile.style.backgroundColor = 'black';
    }
}

// create initial 16x16 grid
createGrid(currentSize);

resetButton.addEventListener('click', function() {
    reset();
});