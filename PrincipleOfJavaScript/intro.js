// JavaScript principles

// When JavaScript code runs, it
// Goes through the code 
// line-by-line and runs/ ’executes’ 
// each line - known as the thread 
// of execution


// Saves ‘data’ like strings and 
// arrays so we can use that data 
// later - in its memory
// We can even save code 
// (‘functions’)


const num = 3;
function myltiplyBy2(inputNumber){
    const result = inputNumber*2;
    return result;
}

console.log(myltiplyBy2(num));
console.log(myltiplyBy2(10));


// Functions
// Created to run the code of a 
// function - has 2 parts (we’ve 
// already seen them!)
// - Thread of execution
// - Memory
// Execution context
// Code we save (‘define’) functions & 
// can use (call/invoke/execute/run) 
// later with the function’s name & ( )


// Call stack
// - JavaScript keeps track of what 
// function is currently running 
// (where’s the thread of execution)
// - Run a function - add to call stack
// - Finish running the function - JS 
// removes it from call stack
// - Whatever is top of the call stack 
// - that’s the function we’re 
// currently running
