const printSum = document.getElementById("calculated-sum");
const outputSum = document.querySelector(".btn");
const highlight = document.getElementById("btn-2");
const displayData = document.getElementById("btn-3");

function sum() {
  const num = document.querySelector(".input-box").value;
  let ans = 0;
  for (let i = 0; i <= num; i++) {
    ans += i;
  }
  printSum.innerHTML = ans;
  printSum.style.display = "block";
}

function highlightLinks() {
  const anchorElements = document.querySelectorAll(".text-p a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlight.addEventListener("click", highlightLinks);

outputSum.addEventListener("click", sum);

// 3rd

const dummyUserData = {
  name: "Kamal",
  Phone: "Redmi Note 9",
  Age: 19,
  Address: "B.V.M Nainital",
};

function showData() {
  const lists = document.getElementById("list");
    // lists.innerHTML = " ";
  for (const key in dummyUserData) {
    const element = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    element.textContent = outputText;
    lists.append(element);
  }
}

displayData.addEventListener("click", showData);


//last


const diceRoll = document.getElementById("btn-4");


function matchTarget() {
    const listofItem = document.getElementById("list-item");
    listofItem.innerHTML = " ";
    const targetNumber = document.getElementById("input-dice").value;
    let hasRolledTargetNumber = false;
    let countNumberOfRolls = 0;
    while(!hasRolledTargetNumber){
        const randNum =  Math.floor(Math.random() * 6) + 1;
        countNumberOfRolls = countNumberOfRolls+1;
        const newRollListElement = document.createElement("li");
        newRollListElement.textContent = "Roll "+ countNumberOfRolls + ": " + randNum;
        listofItem.append(newRollListElement);
        hasRolledTargetNumber = targetNumber == randNum;
    }
    const outputTotalRollsElement  = document.getElementById("output-total-rolls")
    const outputTargetNumber = document.getElementById("outputTargetNumber");
    
    outputTotalRollsElement.textContent = countNumberOfRolls;
    outputTargetNumber.textContent= targetNumber;
}

diceRoll.addEventListener("click", matchTarget);