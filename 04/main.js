const box = document.querySelector(".container");
let popup = document.querySelector(".popup");
let num = 16;
draw();
popup.addEventListener("click", () => {
    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }
    num = prompt("enter a number");
    draw();
})
function draw() {
    for(i = 0; i < (num * num); i++){
    const basis = 100 / num;
    let div = document.createElement("div");
    div.classList.add("divbox");
    div.style.flex = "0 0 " + basis + "%";
    div.style.aspectRatio = "1 / 1";
    div.style.outline = "2px solid grey"
    box.appendChild(div);
    div.addEventListener("mouseover",(e) => {
        e.currentTarget.style.backgroundColor = "black";
    })
}

}
