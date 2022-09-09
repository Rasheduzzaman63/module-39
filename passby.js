// primitive types are pass by value
let num1 = 4;
let num2 = 3;
function multiPly(n1, n2){
    n1 = 6;
    // console.log(num1,num2)

    const result = n1 * n2;
    return result;
}
// console.log(num1)
const multiply = multiPly( num1, num2)
// console.log(multiply)



// object and array are pass by reference
const student1 = { name: 'Rashed', partner:'Suraiya Akter Maya'}
const student2 = { name: 'Rasheduzzaman', partner:'Hawa'}

function mkMovie(couple1, couple2){
    couple1.name ='Bipul';
    couple2.name = 'Rasheuzzamana';
}

console.log(student1)
mkMovie(student1, student2)
console.log(student1)