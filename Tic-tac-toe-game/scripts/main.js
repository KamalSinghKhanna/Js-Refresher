function showModal(event) {
  editedPlayer = +event.target.dataset.playerid;
  modalComponent.style.display = "block";
  backDrop.style.display = "block"
  
}

function closeModal() {
  modalComponent.style.display = "none";
  backDrop.style.display = "none"
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = " ";
  formElement.firstElementChild.lastElementChild.value = " "
}



function updatePlayerName(event) {
  event.preventDefault(); 
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); //"  Max   "
  
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error")
    errorsOutputElement.textContent = "Please enter a valid name!"
    return;
  }

  const updatePlayerDataElement  =  document.getElementById("player-" + editedPlayer + "-data")
  console.log(updatePlayerDataElement);
  updatePlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer -1].name = enteredPlayername;

  closeModal();
}