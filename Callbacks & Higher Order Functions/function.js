//Callbacks & Higher Order Functions

// - One of the most misunderstood concepts in JavaScript
// - Enables powerful pro-level functions like map, filter, reduce (a core aspect of 
// functional programming)
// - Makes our code more declarative and readable
// - Forms the backbone of the technical interview (and professional 
// mid/senior level engineering interviews)

//Why do we even have functions?
/* 
Let’s see why…
Create a function 10 squared
- Takes no input
- Returns 10*10
What is the syntax (the exact code we type)?

*/

// tenSquared
function tenSquared() {
 return 10*10;
}
tenSquared() // 100

// What about a 9 squared function?

// nineSquared
function nineSquared() {
 return 9*9;
}
nineSquared() // 81
// And an a 8 squared function? 125 squared?
// What principle are we breaking?
//DRY (Don’t Repeat Yourself)


// We can generalize the function to make it reusable
function squareNum(num){
 return num*num;
}
squareNum(10); // 100
squareNum(9); // 81
squareNum(8); // 64

//Generalizing functions

/*
‘Parameters’ (placeholders) mean we don’t need to decide what data to run our 
functionality on until we run the function 
- Then provide an actual value (‘argument’) when we run the function
Higher order functions follow this same principle. 
- We may not want to decide exactly what some of our functionality is until we 
run our function
*/