const container = document.querySelector("#container");

for(let i = 0; i < 16; i++){
  container.appendChild(document.createElement("div"));
}

const cols = container.children;

for(let col of cols){
  for(let i = 0; i < 16; i++){
    col.appendChild(document.createElement("div")).classList.add("square");
  }
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", (e) => {
    e.target.classList.add("colored");
  });

  square.addEventListener("mouseleave", (e) => {
    setTimeout( () => e.target.classList.remove("colored"), 3000);
  });
});
