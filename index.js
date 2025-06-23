// Reverse a String
const rvsString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
// console.log(rvsString("hello"));

// ---------------------------------------------------------------------

// check Pallindrome
const checkPallindrome = (str) => {
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};
// console.log(checkPallindrome("madam"));

const checkPallindromeNum = (num) => {
  let temp = num;
  let rem = 0,
    sum = 0;

  while (temp > 0) {
    rem = temp % 10;
    sum = sum * 10 + rem;
    temp = Math.floor(temp / 10);
  }

  if (sum === num) return true;
  else return false;
};
// console.log(checkPallindromeNum(12321));

// ---------------------------------------------------------------------

// Factorial of a Number
let num = 4;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
// console.log(fact);

const factorial = (num) => {
  if (num === 1) return 1;

  return num * factorial(num - 1);
};
// console.log(factorial(5));

// ---------------------------------------------------------------------

// Check Prime

function checkPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(checkPrime(2));

// ---------------------------------------------------------------------

// Largest ans second number in array

let arr = [10, 12, 23, 14, 54, 21];
let maxi = arr[0];
let maxi2 = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxi) maxi = arr[i];
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== maxi) {
//     if (arr[i] > maxi2) maxi2 = arr[i];
//   }
// }

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxi) {
    maxi2 = maxi;
    maxi = arr[i];
  } else if (arr[i] > maxi2 && arr[i] != maxi) {
    maxi2 = arr[i];
  }
}
// console.log(maxi, maxi2);

// ---------------------------------------------------------------------

// Sum of number

let number = 5322;
let sum = 0,
  rem = 0;
while (number > 0) {
  rem = number % 10;
  sum += rem;
  number = Math.floor(number/10);
}
console.log(sum);
