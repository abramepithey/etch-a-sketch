/*
draw method takes in number of sides
    get document body
    loop number of sides times
        create new square div row
        loop number of sides times
            create new square div
            append square to square row 
        append square row div to body

add click listener to button to fire off draw method
add mouseover listener to squares
on mouseover = () => {}
    apply dark styling to square
*/

let canvas = document.querySelector('.canvas');

function draw(sideNumber) {
    canvas.replaceChildren();
    for (i = 0; i < sideNumber; i++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        for (j = 0; j < sideNumber; j++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.classList.add('light');
            newRow.appendChild(newSquare);
        }
        canvas.appendChild(newRow);
    }
}

draw(16);

