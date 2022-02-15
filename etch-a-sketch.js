const squaresGrid = document.querySelector('.grid');
for(let i = 0; i < 16; i++){
    for(let r = 0; r < 16; r++){
        let square = document.createElement('div');
        square.setAttribute('class', 'gridSquare');
        square.addEventListener("mouseover", function (event){
            event.target.style.backgroundColor = 'green';
        });
        squaresGrid.appendChild(square);
    }
}