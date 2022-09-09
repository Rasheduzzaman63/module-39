function add(a, b, c, d){
   const arg = [...arguments];
   console.log(arg);
    // console.log(arguments[3])
    const result = a + b + c;
    return result
}

const total = add(51, 55, 12, 51, 34, 42)
// console.log(total)

console.log(add.length)