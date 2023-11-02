let result = document.getElementById('res');
let firstValue = 0;
let secondValue = 0;

let pressZero = () => {
    console.log(result.innerHTML);
    result.innerHTML = result.innerHTML + "0";
}

let pressOne = () => {
    result.innerHTML = result.innerHTML + "1";
}

let clearValues = () => {
    result.innerHTML = "";
}

let calculate = () => {

}

let addition = () => {
    firstValue = parseInt(result.innerHTML);
    console.log(firstValue);
    result.innerHTML = result.innerHTML + "+";
}

let subtract = () => {
    firstValue = parseInt(result.innerHTML);
    console.log(firstValue);
    result.innerHTML = result.innerHTML + "-";
}

let multiply = () => {
    firstValue = parseInt(result.innerHTML);
    console.log(firstValue);
    result.innerHTML = result.innerHTML + "*";
}

let devide = () => {
    firstValue = parseInt(result.innerHTML);
    console.log(firstValue);
    result.innerHTML = result.innerHTML + "/";
}