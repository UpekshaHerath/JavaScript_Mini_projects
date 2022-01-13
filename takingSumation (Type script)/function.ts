const number1 = document.getElementById('num1') as HTMLInputElement;
const number2 = document.getElementById('num2') as HTMLInputElement;
const answer = document.getElementById('answer') as HTMLOutputElement;

function add(n1: string, n2: string): number {
    var answer =  Number(n1) + Number(n2);
    return answer;
}

const addTowValues = () => {
    const result = add(number1.value, number2.value);
    console.log(result);
    answer.textContent = String(result);
}

const reset = () => {
    number1.value = '';
    number2.value = '';
    answer.textContent = '';
}