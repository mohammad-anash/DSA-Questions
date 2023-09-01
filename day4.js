
// write two varibale to swep the value.

// // let num1 = 10;
// let num2 = 20;
// let num3 = num1;
// num1 = num2;
// num2 = num3;
// console.log(num1, num2)

// write a jvascript function to count the string without count hte space.

// function countstring(){
//     let string = "i want to say that you are so pretty";
//     return string.split(" ").length;
// }
// console.log(countstring());

// write a javascript function to find the given string every letter of character code.

// function stringlettercode() {
//     let value = "";
//     let string = "what's your name my name is anash";
//     for (let index = 0; index < string.length; index++) {
//      value += string[index].charCodeAt(0);
//     }
//     return value;
// }
// console.log(stringlettercode());

// write a javascript function to count how many vowel in the given string. 
// function vowelfind(string) {
//     let vowel = "a,e,i,o,u";
//     let counter = 0;
//     for (let i = 0; i < string.length; i++) {
//         for (let j = 0; j < vowel.length; j++) {
//             if (string[i] == vowel[j]) {
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }

// console.log(vowelfind('my name is anash'))

// write a javascript function to reverse each word of array.

// function reverse() {
//     let store = [];
//     let arr = ['dainsh', "anash", "yaseen", "ali", "moin bhai", "ahsan sir"];
//     let length = arr.length;
//     for (let index = 0; index < length; index++) {
//         store.push(arr.pop());
//     }
//     console.log(arr)
//     return store;
// }
// console.log(reverse());

// write a jvascript function return which  lessthan and equal five.

// function lessthanfive() {
//     let store = [];
//     let arr = ['dainsh', "anash", "yaseen", "ali", "moin bhai", "ahsan sir"];
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].length <= 5) {
//             store.push(arr[index])
//         }
//     }
//     return store;
// }


// console.log(lessthanfive());

// write a function to return lessthan and equale length of five with using filter method.

// const number = ['anash', "ali", "abbas", "nawaz", "tushar"];

// const result = number.filter(function(number){
//     return number.length <= 5;
// })

// console.log(result)

// wirte a function to chekc in the array how many number is even.

// function evenodd() {
//     let store = [];
//     let arr = [2, 3, 7, 9, 10, 32, 15];
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] % 2 == 0) {
//             store.push(arr[index]);
//         }
//     }
//     return store;
// }

// console.log(evenodd());

// write a function to check prime number.

// function primenumber() {
//     let store = [];
//     let flag = false;
//     for (i = 2; i <= 100; i++) {
//         for (j = 2; j < i / 2; j++) {
//             if (i % j == 0) {
//                 flag = true; break;
//             }
//             flag = false;
//         }
//         if (!flag) {
//             store.push(i)
//         }
//     }
//     return store;
// }

// console.log(primenumber())

// write a function to find maximum value in the array.

// function maxvalue() {
//     let max = [];
//     let arr = [15, 100, 120, 110, 34, 150, 200, 220];
//     for (let index = 1; index < arr.length; index++) {
//         if (max > arr[index]) {
//             max = arr[index];
//         }
//     }
//     return max;
// }

// console.log(maxvalue());

// write a function to find sumofarray.

// function sumOfArray() {
//     let arr = [15, 100, 120, 110, 34, 150, 200, 220];
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum = sum + arr[index]
//     }
//     return sum;
// }

// console.log(sumOfArray())

// write a function to find productofarray.

// function productOfArray() {
//     let arr = [23, 45, 19, 65, 71, 82, 44];
//     let product = 1;
//     for (i = 1; i < arr.length; i++) {
//         product = product * arr[i]
//     }
//     return product;
// }

// console.log(productOfArray());

// wrte a function to find the halfQuarterEighth.

// function halfQuarterEighth(number){
//     return number / 2;
// }

// console.log(halfQuarterEighth(6));
// console.log(halfQuarterEighth(22));
// console.log(halfQuarterEighth(25));

// write a function to multiply all integer in the array.

// function getMultipliedArr(arr) {
//     return arr.map(function (value) {
//         return value * 2;
//     })
// }

// console.log(getMultipliedArr([2, 5, 3]))
// console.log(getMultipliedArr([1, 86, -5]))
// console.log(getMultipliedArr([5, 382, 0]))

// write a javascript function to find the word length in the array.

// function wordLengths(arr) {
//     let store = [];
//     for (i = 0; i < arr.length; i++) {
//         store.push(arr[i].length)
//     }
//     return store;
// }
// console.log(wordLengths(["hello", "world"]));
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));

// write javascript function you have a two array find productofarray and subtract each other.

// function findDifference(array1, array2) {
//     let product = 1;
//     let product1 = 1;
//     for (i = 0; i < array1.length; i++) {
//         product = product * array1[i];
//         product1 = product1 * array2[i];
//         // console.log(product)
//     }
//     return Math.abs(product - product1);
// }
// console.log(findDifference([28, 16, 29], [7, 8, 17]));
// console.log(findDifference([9, 22, 18], [16, 24, 10]));
// console.log(findDifference([1, 9, 25], [10, 7, 9]));
// console.log(findDifference([7, 6, 16], [26, 9, 26]));

// write a javascript function to sort the array.

// function sortFunction() {
//    let arr = [1, 4, 5, 8, 3, 9, 10, 12, 6, 14];
//    for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//          if (arr[i] > arr[j]) {
//             let variable = arr[i];
//             arr[i] = arr[j];
//             arr[j] = variable;
//          }
//       }
//    }
//    return arr;
// }

// console.log(sortFunction());

// write if you print in 3 the array will be reverse 3 number just like 6, 7, 8, 1, 2, 3, 4, 5;

// function userIndexChange(user) {
//    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//    for (let i = 0; i < user; i++) {
//          let pop = arr.pop();
//          arr.unshift(pop)
//    }
//    return arr;
// }

// let user = prompt('enter your pop number')

// console.log(userIndexChange(user))

// write a javascript function to find the HCf;

// function divide(num, num1){
//     let hcf = num;
//     while(num % hcf != 0 || num1 % hcf != 0){
//          hcf--;
//     }
//     return hcf;
// }

// console.log(divide(18, 12));

// write the javascript function to LCM

// function lcmFunction(num1, num2) {
//     let lcm = num1;
//     while (lcm % num1 != 0 || lcm % num2 != 0) {
//         lcm++;
//     }
//     return lcm;
// }

// console.log(lcmFunction(15, 75));

// write a simple function in hte given string to change case

// function toChangeCase() {
//     let string = "this is change to case";
//     return string.toUpperCase();
// }

// console.log(toChangeCase());

// write the javascript function to find the given number factorial.

// function factorial(num1){
//    let store = [];
//    for (let i = 0; i <= 0; i++) {
//         store.push(num1*num1*num1)
//    }
//    return store;
// }

// console.log(factorial(3))

// write the javascript to find the fabonanci serires just like this 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// function fabonanciserires(num) {
//     let store = [1,1];
//     for (let i = 0; i < num; i++) {
//        store.push(store[i] + store[i + 1])
//     }
//     return store;
// }

// console.log(fabonanciserires(10))

// write the javascript function to find the LCM 

// function lcmFunction(num1, num2) {
//     let lcm = num1;
//     while (lcm % num1 != 0 || lcm % num2 != 0) {
//         lcm++;
//     }
//     return lcm;
// }

// console.log(lcmFunction(45, 8));

// write the javascript function to print five table.

// function multplesValue(num){
//      for (let i = 1; i <= 10; i++) {
//         console.log(`${i} x ${num} = ${num*i}`)
//      }
// }

// console.log(multplesValue(5));

// Write the javascript function reverse the array 

// function reverseArray() {
//     let store = [];
//     let arr = ['sohail bhai', "yaseen", "anash", "moin bhai",];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         store.push(arr[i])
//     }
//     return store;
// }

// console.log(reverseArray());

// write the javascript function to find in the array minimum value.

// function minvalue() {
//     let store = 0;
//     let arr = [1, 10, -5, 20, 3, 85, -34, 50, -100];
//     for (let i = 0; i <= arr.length; i++) {
//         if (store < arr[i]) {
//             store = arr[i];
//         }
//     }
//     return store;
// }

// console.log(minvalue());

// Write the javascript function to add even number 

// function addEvenNumber() {
//     let sum = 0;
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 20];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sum = sum + arr[i];
//         }
//     }
//     return sum;
// }

// console.log(addEvenNumber());

// write javascript function to find the leap year 

// function leapYear(year) {
//     if (year % 4 === 0) {
//         console.log('this is leap year')
//     } else {
//         console.log('this is not leap year')
//     }
// }

// leapYear(2021);

// write a function to generat random number 

// function randomIndexNumber(){
//     let random_number = Math.floor(Math.random() * 100);
//     return random_number;
// }

// console.log(randomIndexNumber());

// write a javascript function to remove duplicate number in the array 

// function duplicateindex() {
//     let store = [];
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (arr[i] == arr[j]) {
//                 store.push(arr[j])
//             }
//         }
//     }
//     return store;
// }

// console.log(duplicateindex())

// write a function to find missing number in the array 

// function missingLetter() {
//     let store = [];
//     let arr = [1, 2, 3, 5, 6, 7, 10];
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)
//     for (let i = min + 1; i < max; i++) {
//         if (!arr.includes(i)) {
//             store.push(i)
//         }
//     }
//     return store;
// }

// console.log(missingLetter());

// write the function to find the largest word in the array.

// function largestWord(str) {
//     let newstr = ""
//     let str1 = str.split(" ");
//     let largestStr = str1[0].length;
//     for (i = 1; i < str1.length; i++) {
//         if (largestStr < str1[i].length) {
//             largestStr = str1[i].length;
//             newstr = str1[i]
//         }
//     }
//     return newstr;
// }
// console.log(largestWord("This is the biggest highlander"));

// write the function to find repeating number in the array.

// function findRepeatingNumber() {
//   let store = [];
//   let arr = [1, 2, 3, 4, 4, 5, 6, 8, 8];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] != arr[i]) {
//         store.push(arr[j]);
//         break;
//       }
//     }
//   }
//   return store;
// }

// console.log(findRepeatingNumber());

// write the function to sort the array.

// function sortfunction() {
//   let arr2;
//   let arr = [8, 3, 4, 6, 9, 1, 2, 5, 7,];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//          arr2 = arr[j];
//          arr[j] = arr[i];
//          arr[i] = arr2;
//       }
//     }
//     console.log(arr)
//   }
//   return arr;
// }

// console.log(sortfunction());

// write the function to find "m" the word whick index in present.

// function findLetterString() {
//   let store = [];
//   let check = 0;
//   let name = "mohammad anash";
//   for (let i = 0; i < name.length; i++) {
//     if (name[i] == "m") {
//       store.push(i + 1);
//       check++;
//     }
//   }
//   console.log(check);
//   return store;
// }

// console.log(findLetterString())

// write the function to find the prime number.

// function primenumber() {
//     let store = [];
//     let flag = false;
//     for (i = 2; i <= 100; i++) {
//         for (j = 2; j < i / 2; j++) {
//             if (i % j == 0) {
//                 flag = true; break;
//             }
//             flag = false;
//         }
//         if (!flag) {
//             store.push(i)
//         }
//     }
//     return store;
// }

// console.log(primenumber())

