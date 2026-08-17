const box = document.querySelector(".container");
let num = 16;
for(i = 0; i < (num * num); i++){
    const basis = 100 / num;
    let div = document.createElement("div");
    div.classList.add("divbox");
    div.style.flex = "0 0 " + basis + "%";
    div.style.aspectRatio = "1 / 1";
    div.style.outline = "2px solid grey"
    box.appendChild(div);
}