const container = document.querySelector(".container");

let numOfSquares;
const button = document.querySelector("button");
button.addEventListener("click", () => {
  numOfSquares = prompt("Enter the number of squares!");
  while (numOfSquares < 0 || numOfSquares > 100) {
    alert("The number must be between [0,100]");
    numOfSquares = prompt("Enter the number of squares!");
  }

  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    container.removeChild(square);
  });

  for (i = 1; i <= numOfSquares ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 100 / numOfSquares + "%";
    square.style.height = 100 / numOfSquares + "%";
    container.appendChild(square);
  }

  squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.classList.add("hovered");
    });
  });
});
