const grid = document.querySelector(".grid");
const resetButton = document.querySelector("#reset");
const rainbowButton = document.querySelector("#rainbow");
const numberBox = document.querySelector("#size");

let currentSize = numberBox.value;

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
                tile.style.backgroundColor = 'black';
            });

            tile.classList.add('tile');
            grid.appendChild(tile);
        }
    }
};

function reset() {
    grid.innerHTML = "";
    currentSize = numberBox.value;
    createGrid(currentSize);
}

// create initial 16x16 grid
createGrid(currentSize);

resetButton.addEventListener('click', function() {
    reset();
});