const rangeInput = document.getElementById("font-size-control");
const text = document.getElementById("text");

rangeInput.addEventListener("input", ()=>{
    text.style.fontSize = rangeInput.value + "px";
});
