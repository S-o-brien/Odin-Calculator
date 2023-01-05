// functions for basic arithmetic


//addition
function addition (array) {
    let sum = 0;

    array.forEach(item => {
        sum += item;
    });

    console.log(sum);
    return sum;
}
//subtraction
function subtraction (array) {
    let sum = array.find(element => element);

    console.log("Testing if sum is = to first item in array " + sum);

    array.slice(1).forEach(item => {
        sum -= item;
    });

    console.log(sum);
    return sum;
}
//multiply
function multiply (array) {
    let sum = 1;

    array.forEach (item => {
        sum *= item;
    });

    console.log(sum);
    return sum;

};

//division
function division(array) {
    let sum = array.find(element => element);

    array.slice(1).forEach (item => {
        sum /= item;
    });

    console.log(sum)
    return sum
};

function operate(num1, num2, operator) {
    if (operator === "add") {
        return addition(num1,num2)
    }
}


operate(2,2,"add")