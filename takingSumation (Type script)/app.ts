// const num1 = document.getElementById('num1');
// const num2 = document.getElementById('num2');
// const answer = document.getElementById('answer');
//
// //use to add two numbers
// function addTwoNumbers(num1: number, num2: number): number{
//     return num1 + num2;
// }
//
// function add() {
//
// }

//*************************************//
// function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
//     const result = n1 + n2;
//     if (showResult) {
//         console.log(resultPhrase + result);
//     } else {
//         return n1 + n2;
//     }
// }
//
// let number1: number;
// number1 = 6;
// const number2: number = 2.8;
// const pritResult: boolean = true;
// const resultPhrase: string = 'Result is: ';
//
// add(number1, number2, pritResult, resultPhrase);

//************************************************
//object's in type script

// This hole one is a object
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]  //This type is a tuple
// } = {
//     name: 'Upeksha',
//     age: 30,
//     hobbies: ['cricket playing', 'collection of stamps'],
//     role: [2, 'author']
// };

// console.log(person.name + ' is ' + person.age + ' years old.' + '\n' + 'The hobbies are ');

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }

// console.log(person.role[1]);
// person.role[1] = 'Dilshan';
// console.log(person.role[1]);

enum Role { ADMIN, MANAGER, AUTHOR };

const person: {
    name: string,
    age: number,
    hobbies: string[],
    roles: Role
} = {
    name: 'Upeksha',
    age: 20,
    hobbies: ['banana', 'apple'],
    roles: Role.ADMIN
};

if (person.roles === Role.ADMIN)
    console.log('He is a Admin');
else 
    console.log('He is not a abmin');

let helloWorld: string = 'Hello World !';

console.log(helloWorld);