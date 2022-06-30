
const editButton1 = document.querySelector("#edit-btn1")
const editButton2 = document.querySelector("#edit-btn2")
var playerName1 = document.querySelector("#player-1 h1");
var playerName2 = document.querySelector("#player-2 h1");
const inputValue1 = document.getElementById("player-name-1")
const inputValue2 = document.getElementById("player-name-2")
const cancelButton = document.querySelectorAll(".cancel-btn")
const confirmButton = document.querySelectorAll(".confirm-btn")
var oldName1 = playerName1.innerHTML;
var oldName2 = playerName2.innerHTML;



editButton1.addEventListener("click", showModal1);
editButton2.addEventListener("click", showModal2);



inputValue1.addEventListener("input", editName1)
inputValue2.addEventListener("input", editName2)








for (let i = 0; i < cancelButton.length; i++) {
   if (i==0) {
    cancelButton[i].addEventListener("click", cancel);
   }
   else{
    cancelButton[i].addEventListener("click", cancel2);
   }
    
}




for (let i = 0; i < confirmButton.length; i++) {
    if (i==0) {
        confirmButton[i].addEventListener("click", confirm);
    }
    else{
        confirmButton[i].addEventListener("click", confirm2);
    }
    
}


function showModal1() {
    const modalComponent = document.querySelector(".overlay1");
    modalComponent.style.display = "block";
  
  }
  function showModal2() {
    const modalComponent = document.querySelector(".overlay2");
    modalComponent.style.display = "block";
  
  }
  
  function editName1(event) {
    
    playerName1.textContent =  event.target.value;
    
  }
  playerNameOnTurn.innerHTML = playerName1.innerHTML
  function editName2(event) {
    playerName2.innerHTML = event.target.value;
   
  }
  
  
  
  function cancel() {
    const modalComponent = document.querySelector(".overlay1");
    modalComponent.style.display = "none";
    playerName1.innerHTML = oldName1;
   
  }
  
  function cancel2() {
    const modalComponent = document.querySelector(".overlay2");
    modalComponent.style.display = "none";
    playerName2.innerHTML = oldName2;
  
  }
  
  
  function confirm() {
    const modalComponent = document.querySelector(".overlay1");
    modalComponent.style.display = "none";
    oldName1 = playerName1.innerHTML;
  }
  
  
  function confirm2() {
    const modalComponent = document.querySelector(".overlay2");
    modalComponent.style.display = "none";
    oldName2 = playerName2.innerHTML;
  } 