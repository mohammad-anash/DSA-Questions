
// write the function to find the intersecting array

// function interSectionArray() {
//     let store = [];
//     let arr1 = [1, 2, 3];
//     let arr2 = [3, 4, 5];
//     let combine = arr1.concat(arr2);
//     for (let i = 0; i < combine.length; i++) {
//         for (let j = i + 1; j < combine.length; j++) {
//             if (combine[i] == combine[j]) {
//                 store.push(combine[i]);
//             }
//         }
//     }
//     return store;
// }

// console.log(interSectionArray())

// write the function to find the union array.

// function unionArray() {
//     let store = [];
//     let arr1 = [1, 2, 3];
//     let arr2 = [3, 4, 5];
//     let combine = arr1.concat(arr2);
//     for (let i = 0; i < combine.length; i++) {
//         for (let j = i + 1; j < combine.length; j++) {
//             if (combine[i] != combine[j]) {
//                 store.push(combine[i]);
//                 break;
//             }
//         }
//     }
//     return store;
// }

// console.log(unionArray());


// write the function to find the highest value in hte array.

// function hightestValue(){
//     let maxvalue = Number.NEGATIVE_INFINITY;
//     let secondhighest = Number.NEGATIVE_INFINITY;
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 100, 101];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > maxvalue){
//            secondhighest = maxvalue;
//            maxvalue = arr[i];
//         } else if(maxvalue > arr[i] && arr[i] > secondhighest){
//           secondhighest = arr[i];
//         }
//     }
//     return secondhighest;
// }

// console.log(hightestValue());

// write the function to count character without space.

// function characterCountwithoutspace() {
//     let string = "my name is anash";
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if(string[i] != " "){
//           count++;
//         }
//     }
//     return count;
// }

// console.log(characterCountwithoutspace());

// write the function to find the separate value in the given number.

// function separateValue() {
//     let number = 145;
//     let arr = [];
//     while (number > 0) {
//         arr.push(number % 10);
//         number = number / 10 | 0;
//     }
//     return arr;
// }

// console.log(separateValue());

// write the javascript function to count character and word 

// function countCharacterAndWord(user) {
//     let string = '';
//     let count = 1;
//     for (let i = 0; i <= user.length; i++) {
//         if (user[i] == " ") {
//             string += user[i];
//             count++;
//         } 
//     }
//     console.log(count);
//     return string.length;
// }
// let user = prompt('enter your string');

// console.log(countCharacterAndWord(user));

// write a javascript function to count vowel to give user String 

// function VowelCount(user) {
//     let vowel = "a,e,i,o,u";
//     let count = 0;
//     for (let i = 0; i < vowel.length; i++) {
//         for (let j = 0; j < user.length; j++) {
//             if (vowel[i] == user[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// let user = prompt('enter your vowel string');
// console.log(VowelCount(user));

// write the function to find fraction

// function hundredFraction(user) {
//     let number = 100;
//     let store = [];
//     for (let i = 1; i <= number; i++) {
//         if (user % i == 0) {
//             store.push(i);
//         }
//     }
//     return store;
// }

// let user = prompt('enter your number');
// console.log(hundredFraction(user));

// write the function to find the common value

// function commonValue() {
//     let store = [];
//     let arr = [1, 2, 3, 4, 5, 6, 7];
//     let arr1 = [2, 4, 3, 5, 7, 6, 8, 9, 10, 1];
//     let one = arr.concat(arr1);
//     for (let i = 0; i < one.length; i++) {
//         if (!store.includes(one[i])) {
//             store.push(one[i])
//         }
//     }
//     return store;
// }

// console.log(commonValue());

// write the function to find the same word in the given string

// function findSameName() {
//     let name = 'anash';
//     let string = "my name is anash"
//     for (let i = 0; i < string.length; i++) {
//         for (let j = 0; j < name.length; j++) {
//             if (string == name) {
//                 console.log('true')
//             } else {
//                 console.log('false')
//             }         
//         }
//     }
// }

// console.log(findSameName());

// write the function to check the given string is palimdrom return true otherwise return false 

// function PalindronFunction() {
//     let string = 'madam';
//     let emptystring = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         emptystring += string[i];
//     }
//     if (string == emptystring) {
//         console.log('this is palindrop')
//     } else {
//         console.log('this is not palindrop')
//     }
//     return emptystring;
// }
// console.log(PalindronFunction());

// write the function to uppercase user given string 

// function convertInUpper(user) {
//     let string = "";
//     for (let i = user.length - 1; i >= 0; i--) {
//         string += user[i];
//     }
//     return string.toUpperCase();
// }

// let user = prompt('enter your string');
// console.log(convertInUpper(user));

// write the function to find the maximum and minimum value in the givem array.

// function findMinMaxValue() {
//     let store = [];
//     let arr = [-1000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000];
//     let small = Number.MAX_VALUE;
//     console.log(small)
//     let largest = Number.MIN_VALUE;
//     console.log(largest)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//         if (arr[i] < small) {
//             small = arr[i];
//         }
//     }
//     console.log(largest, small)
// }

// findMinMaxValue();

// write the function to find the rangevalue in the givn array 

// function findRangeValue() {
//     let arr = [1, 2, 3, -100, 100, 250];
//     let largest = arr[0];
//     let small = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//         if (arr[i] < small) {
//             small = arr[i];
//         }
//     }
//     console.log(largest);
//     console.log(small);
//     let range = largest - small;
//     console.log(range)
// }

// console.log(findRangeValue());

// write the function to check the modevalue.

// function modeValue() {
//     let store = [];
//     let check = 1;
//     let arr = [1, 2, 3, 4, 4, 4, 5, 5, 5];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 check++;
//             }  
//         }
//         store.push(check);
//         check = 1;
//     }
//     console.log(check)
//     return store;
// }

// console.log(modeValue())






