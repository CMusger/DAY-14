let circle = document.getElementById("circle");
let text = document.getElementById("text");

circle.addEventListener("mouseover",() => {
    text.innerText = "you are in the circle";
})

circle.addEventListener("mouseleave",() => {
    text.innerText = "you are outside of the circle";
})

circle.addEventListener("click",() => {
    circle.style.backgroundColor ="grey";
})

circle.addEventListener("dblclick",() => {
    circle.style.backgroundColor ="blue"
})
