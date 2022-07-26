let editedPlayer = 0;
let activePlayer = 0;
let currrentRound = 1;
let gameIsOver = false;
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    
]
const players = [
  {
    name: " ",
    symbol: "X",
  },
  {
    name: " ",
    symbol: "O",
  },
];
const editButton1 = document.querySelector("#edit-btn-1");
const editButton2 = document.querySelector("#edit-btn-2");
const cancelButton = document.querySelector("#cancel-btn");
const errorsOutputElement = document.getElementById("config-errors");
const modalComponent = document.querySelector(".modal");
const backDrop = document.getElementById("backdrop");
const activePlayerNameElement = document.getElementById("active-player-name")
// const gameFieldElements = document.querySelectorAll("#game-board li")
const gameBoardElement = document.getElementById("game-board");
const formElement = document.querySelector("form");
const gameAreaElement = document.getElementById("active-game");
const startNewGAmeBtnElement = document.getElementById("start-game-btn");
const gameOverElement = document.getElementById("game-over");


editButton1.addEventListener("click", showModal);
editButton2.addEventListener("click", showModal);

cancelButton.addEventListener("click", closeModal);

formElement.addEventListener("submit", updatePlayerName);

startNewGAmeBtnElement.addEventListener("click", startNewGame);


// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener("click", selectGameField)
// }

gameBoardElement.addEventListener("click", selectGameField);

// for (let i = 0; i < cancelButton.length; i++) {
//    if (i==0) {
//     cancelButton[i].addEventListener("click", cancel);
//    }
//    else{
//     cancelButton[i].addEventListener("click", cancel2);
//    }

// }

// for (let i = 0; i < confirmButton.length; i++) {
//     if (i==0) {
//         confirmButton[i].addEventListener("click", confirm);
//     }
//     else{
//         confirmButton[i].addEventListener("click", confirm2);
//     }

// }

// function showModal1() {
//     const modalComponent = document.querySelector(".overlay1");
//     modalComponent.style.display = "block";

//   }
//   function showModal2() {
//     const modalComponent = document.querySelector(".overlay2");
//     modalComponent.style.display = "block";

//   }

//   function editName1(event) {

//     playerName1.textContent =  event.target.value;

//   }
//   playerNameOnTurn.innerHTML = playerName1.innerHTML
//   function editName2(event) {
//     playerName2.innerHTML = event.target.value;

//   }

//   function cancel() {
//     const modalComponent = document.querySelector(".overlay1");
//     modalComponent.style.display = "none";
//     playerName1.innerHTML = oldName1;

//   }

//   function cancel2() {
//     const modalComponent = document.querySelector(".overlay2");
//     modalComponent.style.display = "none";
//     playerName2.innerHTML = oldName2;

//   }

//   function confirm() {
//     const modalComponent = document.querySelector(".overlay1");
//     modalComponent.style.display = "none";
//     oldName1 = playerName1.innerHTML;
//   }

//   function confirm2() {
//     const modalComponent = document.querySelector(".overlay2");
//     modalComponent.style.display = "none";
//     oldName2 = playerName2.innerHTML;
//   }
