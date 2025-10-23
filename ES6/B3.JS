const numbers = [3, 5, 7];
const moreNumbers = [1, 2, ...numbers, 8, 9];
const [first, second, ...others] = moreNumbers;

console.log("first:", first);
console.log("second:", second);
console.log("others:", others);

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

const result = sum(...moreNumbers);

console.log("Tổng các số:", result);
