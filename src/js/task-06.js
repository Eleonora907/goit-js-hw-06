const input = document.getElementById("validation-input");
const dataLength = input.getAttribute("data-length");

input.addEventListener('blur', ()=>{
    const isValid = input.value.length === parseInt(dataLength);
    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
});