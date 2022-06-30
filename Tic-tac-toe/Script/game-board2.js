const boxValue = document.querySelectorAll(".board-box");
const gameBoard = document.querySelector(".game-board")
var playerName1 = document.querySelector("#player-1 h1");
var playerName2 = document.querySelector("#player-2 h1");
var currentPosition = playerName1.innerHTML;
var round = 0;


var currentIndex;
for (let i = 0; i < 9; i++) {
  if (currentPosition===playerName1.innerHTML) {
    
    if (round === 0) {
        boxValue[i].addEventListener("click", changeData => {
        boxValue[i].innerHTML = 0;
        console.log("o is working")
        round = 1;
    }); 
    currentIndex = i;
    currentPosition = playerName2.innerHTML;
  }
   
   
   
  } if(currentPosition === playerName2.innerHTML){
    if (round === 1) {     
        boxValue[i].addEventListener("click", changeData2 => {
        boxValue[i].innerHTML = "X";
        
        console.log("x is working")
        currentIndex = i;
        }); 
        round = 0;
    }
    currentPosition = playerName1.innerHTML;       
    }
      
  }
  
  
  
// boxValue.addEventListener("click", changeData);