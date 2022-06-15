function multiplyBy2 (inputNumber){
    const result = inputNumber*2;
    return result;
    }
    const output = multiplyBy2(7);
    const newOutput = multiplyBy2(10);
    // console.log(output);
    // console.log(newOutput);

    function createFunction() {
        function multiplyBy2 (num){
        return num*2;
        }
        return multiplyBy2;
       }
       const generatedFunc = createFunction();
       const result = generatedFunc(3); // 6

    console.log(result)