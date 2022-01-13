var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var answer = document.getElementById('answer');
function add(n1, n2) {
    var answer = Number(n1) + Number(n2);
    return answer;
}
var addTowValues = function () {
    var result = add(number1.value, number2.value);
    console.log(result);
    answer.textContent = String(result);
};
var reset = function () {
    number1.value = '';
    number2.value = '';
    answer.textContent = '';
};
