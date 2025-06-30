// count total nums

// let num = 43151;
// let count = 0;
// while (num > 0) {
//   count++;
//   num = Math.floor(num / 10)
// }
// console.log(count)

// ---------------------------------------------------------------------

// Reverse a String
// const rvsString = (str) => {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse;
// };
// console.log(rvsString("hello"));

// ---------------------------------------------------------------------

// Reverse a Number

// let num = 4252;
// let res = 0,
//   rem = 0;

// while (num > 0) {
//   rem = num % 10;
//   res = res * 10 + rem;
//   num = Math.floor(num / 10);
// }
// console.log(res);

// ---------------------------------------------------------------------

// check Pallindrome
// const checkPallindrome = (str) => {
//   let i = 0,
//     j = str.length - 1;

//   while (i < j) {
//     if (str[i] !== str[j]) return false;
//     i++;
//     j--;
//   }
//   return true;
// };
// console.log(checkPallindrome("madam"));

// ------

// const checkPallindromeNum = (num) => {
//   let temp = num;
//   let rem = 0,
//     sum = 0;

//   while (temp > 0) {
//     rem = temp % 10;
//     sum = sum * 10 + rem;
//     temp = Math.floor(temp / 10);
//   }

//   if (sum === num) return true;
//   else return false;
// };
// console.log(checkPallindromeNum(12321));

// ---------------------------------------------------------------------

// Factorial of a Number
// let num = 4;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(fact);

// --------

// const factorial = (num) => {
//   if (num === 1) return 1;

//   return num * factorial(num - 1);
// };
// console.log(factorial(5));

// ---------------------------------------------------------------------

// Check Prime

// function checkPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// console.log(checkPrime(2));

// ---------------------------------------------------------------------

// Largest ans second number in array

// let arr = [10, 12, 23, 14, 54, 21];
// let maxi = arr[0];
// let maxi2 = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxi) maxi = arr[i];
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== maxi) {
//     if (arr[i] > maxi2) maxi2 = arr[i];
//   }
// }

// ---

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxi) {
//     maxi2 = maxi;
//     maxi = arr[i];
//   } else if (arr[i] > maxi2 && arr[i] != maxi) {
//     maxi2 = arr[i];
//   }
// }
// console.log(maxi, maxi2);

// ---------------------------------------------------------------------

// Sum of number

// let number = 5322;
// let sum = 0,
//   rem = 0;
// while (number > 0) {
//   rem = number % 10;
//   sum += rem;
//   number = Math.floor(number/10);
// }
// console.log(sum);

// ---------------------------------------------------------------------

// // Promise example =>

// let newPromise = new Promise((res, rej) => {
//   if (false) {
//     res("success");
//   } else {
//     rej("error");
//   }
// });

// newPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// ---------------------------------------------------------------------

// Fetching data using fetch method

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ---------------------------------------------------------------------

// using async / await =>

// let fetchData = async () => {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error : ", error);
//   }
// };
// fetchData();

// ---------------------------------------------------------------------

// Promise.all example

// const fetchData = (id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
//     res.json()
//   );
// };

// const fetchAllposts = () => {
//   const ids = [1, 2, 3];
//   const promises = ids.map((id) => fetchData(id));

//   Promise.all([promises])
//     .then((res) => console.log(res))
//     .catch((err) => console.log("error : ", err));
// };

// fetchAllposts();

// ---------------------------------------------------------------------

// Implement a function that throttles another function (HOF + Closures).

// const throatFunction = (fnc) => {
//   let lastCall = 0;

//   return () => {
//     let current = Date.now();
//     if (current - lastCall >= 3000) {
//       fnc();
//       lastCall = current;
//     }
//   };
// };

// let callBack = () => console.log("hello World");
// let x = throatFunction(callBack);
// x();
// x();
// x();

// ---------------------------------------------------------------------

// let a = true;
// a++;
// console.log(a);       // => 2

// let a = false
// a++;
// console.log(a);       // => 1

// ---------------------------------------------------------------------

// remove duplicate =>

// let arr = [1, 2, 3, 2, 3, 5, 3, 6, 5, 6, 7];
// let newArr = [...new Set(arr)];
// console.log(newArr);

// let newArr = [];
// arr.forEach((num) => {
//   if (!newArr.includes(num)) newArr.push(num);
// });
// console.log(newArr);

// ---------------------------------------------------------------------

// let arr = [1, 1, 2, 2, 2, 3, 3, 3, 4, 3, 5, 6, 4, 6, 7, 6, 7, 45, 45];
// let obj = {};
// arr.forEach((num) => (obj[num] === undefined ? (obj[num] = 1) : obj[num]++));
// console.log(obj);

// let maxCount = 0;
// let mostFreq = null;

// for (x in obj) {
//   if (obj[x] > maxCount) {
//     maxCount = obj[x];
//     mostFreq = x;
//   }
// }

// console.log(`${mostFreq} appears maximum ${maxCount} times in array`);

// ---------------------------------------------------------------------

// Implement your own version of `.map()` as a higher-order function. =>

// let arr = [1, 2, 3, 4, 5, 6];
// let double = (num) => num * 2;

// let mapKiCopy = (arr, fnc) => {
//     let newArr = [];
//     arr.forEach(element => {
//         newArr.push( fnc(element) )
//     });
//     return newArr;
// }

// let res = mapKiCopy(arr, double)
// console.log(res)

// ---------------------------------------------------------------------

// let counter = () => {
//   let count = 0;

//   return {
//     increment: () => {
//       count++;
//       console.log(count);
//     },
//     decrement: () => {
//       count--;
//       console.log(count);
//     },
//     reset: () => {
//       count = 0;
//       console.log(count);
//     },
//   };
// };

// let useCounter = counter();
// useCounter.increment();
// useCounter.increment();
// useCounter.increment();
// useCounter.decrement();
// useCounter.reset();
// useCounter.increment();

// ---------------------------------------------------------------------

// let limitFnc = (fnc, time) => {
//   let count = 0;

//   return () => {
//     if (count < time) {
//       fnc();
//       count++;
//     } else {
//       console.error("limit reached , purchase subscription to continue");
//     }
//   };
// };

// let x = limitFnc(() => console.log("Hello"), 2);
// x();
// x();
// x();

// ---------------------------------------------------------------------

// Hello World => olleH dlroW

let reverseEachWord = (str) => {
  // console.log(str);
  let res = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      for (let j = word.length - 1; j >= 0; j--) {
        res += word[j];
      }

      res += " ";
      word = "";
    }
  }
  // console.log(word);
  for (let j = word.length - 1; j >= 0; j--) {
    res += word[j];
  }

  return res;
};

// console.log(reverseEachWord("Hello World"));

// Hello World => olleH dlroW
// let reverseWordOrder = (str) => {
//   let res = "";
//   let word = "";

//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str[i] !== " ") {
//       word = str[i] + word;
//     } else {
//       if (word.length > 0) {
//         res += word + " ";
//         word = "";
//       }
//     }
//   }

//   // Append the last word (first in the original string)
//   if (word.length > 0) {
//     res += word;
//   }

//   return res;
// };

// console.log(reverseWordOrder("Hello World"));

// ---------------------------------------------------------------------

// let rvsStr = (str) => {
//   let res = "";
//   let word = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       word = str[i] + word;
//     } else {
//       if (word.length > 0) {
//         res += word + " ";
//         word = "";
//       }
//     }
//   }

//   if (word.length > 0) {
//     res += word;
//   }

//   return res;
// };
// console.log(rvsStr("Hello World"));  // olleH dlroW

// ---------------------------------------------------------------------

// const rvsStr = (str) => {
//   let res = "";
//   let word = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== " ") {
//       word += str[i];
//     } else {
//       if (word.length > 0) {
//         res += word + " ";
//         word = "";
//       }
//     }
//   }

//   if (word.length > 0) {
//     res += word;
//   }

//   return res;
// };
// console.log(rvsStr("Hello World"));  // dlroW olleH

// ---------------------------------------------------------------------

// let rvsStr = (str) => {
//   let res = "";
//   let word = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== " ") {
//       word = str[i] + word;
//     } else {
//       if (word.length > 0) {
//         res += word + " ";
//         word = "";
//       }
//     }
//   }

//   if (word.length > 0) {
//     res += word;
//   }

//   return res;
// };

// console.log(rvsStr("Hello World")); // World Hello

// ---------------------------------------------------------------------

// if ([] == true) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // false

// console.log(0 / 0);
// console.log(2 / 0);
// console.log(2 / "4");
// console.log('h' / 2);
// console.log([] == []);
