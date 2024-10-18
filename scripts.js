const container = document.querySelector("#container");

for(let i = 0; i < 16; i++){
  container.appendChild(document.createElement("div"));
}

const cols = container.children;

for(let col of cols){
  for(let i = 0; i < 16; i++){
    col.appendChild(document.createElement("div"));
  }
}