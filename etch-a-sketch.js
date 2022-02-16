const squaresGrid = document.querySelector('.grid');
drawGrid(16);

function drawGrid(size){
    squaresGrid.innerHTML = "";
    for(let i = 0; i < size; i++){
        for(let r = 0; r < size; r++){
            let square = document.createElement('div');
            square.setAttribute('class', 'gridSquare');
            square.addEventListener("mouseover", function (event){
                event.target.style.backgroundColor = 'black';
            });
            squaresGrid.appendChild(square);
        }
    }
}
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
    let squares = squaresGrid.querySelectorAll('div');
    squares.forEach(
        function(currentValue){
            currentValue.style.backgroundColor = 'white';
        } 
    )
    do{
        let response = prompt("Enter pixel size (max 100): ");
        if(response <= 0 || response > 100 || isNaN(response)){
            alert("Please enter a valid non-zero number between 1-100.");
            continue;
        } else {
            drawGrid(response);
            break;
        }      
    }while(true)
});