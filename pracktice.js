// const a = []
// const b = true;
// if(a===b){
//     console.log('true')
// }
// else{
//     console.log('false')
// }

// if(true === 'true'){
//     console.log('true')
// }
// else{
//     console.log('false')
// }

// const number = (num1) =>{
//     if(typeof(num1)){
//         return true
//     }
//     else if(isNaN(num1)){
//        return false
//     }
// }

// const result = number('d')
// console.log(result)

// let storeFalsyValue = true;
// if(!storeFalsyValue){
//     console.log('nothing to show!')
// }
// else{
//     console.log('You are amazing!');
// }



const operation = (num1, num2, name) =>{
    if(name === 'add'){
        return name = num1 + num2;
    }
    else if( name === "substraction"){
        return name = num1 - num2;
    }
    else if(name === "multipication"){
        return name = num1 * num2
    }
    else if(name === "divission"){
        return name = num1 / num2
    }
    else if(name === "modulas"){
        return name = num1 % num2
    }
   else{
        return 'wrong anser'
   }
}


const added = operation(15, 7, 'ma')
console.log(added)