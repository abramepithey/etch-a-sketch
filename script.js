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

let canvas = document.querySelector(".canvas");

function draw(sideNumber) {
    canvas.replaceChildren();
    for (i = 0; i < sideNumber; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        for (j = 0; j < sideNumber; j++) {
            let newSquare = document.createElement("div");
            newSquare.classList.add("square", "light");
            let darkCover = document.createElement("div");
            darkCover.classList.add("cover", "dark");
            newSquare.appendChild(darkCover);
            newRow.appendChild(newSquare);
        }
        canvas.appendChild(newRow);
    }
    setSquaresInteractive();
}

draw(16);

let resizeButton = document.getElementById("resize");
resizeButton.addEventListener("click", () => {
    let response = prompt("Enter a size", "16");
    if (isNaN(response)) {
        alert("Input a number, max of 100");
    } else if (response > 100) {
        draw(100);
        alert("Number is over 100, defaulting to 100");
    } else if (response < 1) {
        draw(16);
        alert("Number is less than 1, defaulting to 16");
    } else {
        draw(response);
    }
});

function darken(event) {
    opacity = Number(window.getComputedStyle(event.target).getPropertyValue("opacity")) + 0.1;
    event.target.style.opacity = opacity;
}

let opacity = 0;
function setSquaresInteractive() {
    let darkSquares = document.querySelectorAll(".cover");
    for (i = 0; i < darkSquares.length; i++) {
        darkSquares[i].addEventListener("mouseover", (event) => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
        });
        darkSquares[i].addEventListener("mouseover", (event) => darken(event));
    }
}
