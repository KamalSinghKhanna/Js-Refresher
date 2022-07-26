let paragraphElement = document.querySelector("p");

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log('paragraph clicked')
}
paragraphElement.addEventListener("click", changeParagraphText)



let inputElement = document.getElementById("text");


function retrieveUserInput(event) {
    // let enteredText = event.data.value;
    let enteredText = event.target.value;
    console.log(enteredText)
    // console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput)
