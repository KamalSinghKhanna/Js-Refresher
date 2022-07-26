const inputText = document.getElementById("product-name");
const maxElement = inputText.maxLength;
const changeValue = document.getElementById("remaining-chars");
function enteredText(event){
    const text = event.target.value;
    const remainingChar = maxElement -text.length;
    changeValue.textContent= remainingChar;
    if (remainingChar === 0) {
        inputText.classList.add("error");
        changeValue.classList.add("error");
    } else if(remainingChar <=10) {
        inputText.classList.add("warning");
        changeValue.classList.add("warning");
        inputText.classList.remove("error");
        changeValue.classList.remove("error");
    } else {
        inputText.classList.remove("warning", "error");
        changeValue.classList.remove("warning", "error");
    }
}

inputText.addEventListener("input", enteredText)