const squaresGrid = document.querySelector('.grid');
for(let i = 0; i < 16; i++){
    for(let r = 0; r < 16; r++){
        let square = document.createElement('div');
        square.setAttribute('class', 'gridSquare');
        square.textContent="square";
        squaresGrid.appendChild(square);
    }
}