const numbers = [2, 5, 7, 9, 8];
const output = [];

for(let i = 0; i < numbers.length; i++){
     const element = numbers[i];
     const result = element * element
     output.push(result);
}
console.log(output)