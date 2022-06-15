let age = 24;
let userName = "kamal";
let hobbies = ["Sport", "cooking", "Reading"];
let job = { 
    title: "Developer",
    place: "New York",
    salary: 70000 
};

let adultYears;

function calculateAdultYears(age) {
let result = age-18;
return result;
}


adultYears = calculateAdultYears(age);  
console.log(adultYears);

age = 45;
adultYears = calculateAdultYears(age);

console.log(adultYears)



let person = {
    name: "kamal",
    greet() {
        console.log("hello!");
    }
};

person.greet();