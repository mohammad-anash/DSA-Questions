// Q1. Write a function to calculate the sum of all elements in an array using reduce().

// function SumOfArray() {
//     let arr = [1, 2, 3, 4, 5];
//     let SumOfEl = arr.reduce((previousvalue, currentvalue) => {
//         return previousvalue += currentvalue;
//     })
//     return SumOfEl;
// }

// console.log(SumOfArray());


// Q2. Write a function to find the maximum value in an array using reduce().

// function maxNum() {
//     let arr = [1, 2, 3, 6, 4, 5];
//     let MaxValue = arr.reduce((previousvalue, currentvalue) => {
//         if (previousvalue < currentvalue) {
//             previousvalue = currentvalue;
//         }
//         return previousvalue;
//     })
//     return MaxValue;
// }
// console.log(maxNum());


// Q3. Write a function to count the number of occurrences of a given element in an array using reduce().

// function countOrrcur(target) {
//     let arr = [1, 2, 3, 4, 5, 4, 6, 4];
//     let find = arr.reduce((previousvalue, currentvalue) => {
//         if (currentvalue == target) {
//             previousvalue++;
//         }
//         return previousvalue;
//     })
//     return find;
// }
// console.log(countOrrcur(4));

// Q4. Write a function to concatenate all elements of an array into a single string using reduce().

// function concatenateAllEl(){
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//     let concatenate = arr.reduce((previousValue,currentValue)=>{
//         return previousValue += currentValue
//     },"")
//     return concatenate
// }
// console.log(concatenateAllEl());


// Q5. Write a function to create a new array that contains only the unique elements from the original array using reduce().

// function uniqueElement(){
//     let arr = [1,2,3,4,5,6,7,8,9,2,4,3,6,5];
//     let unique = arr.reduce((previousValue,currentValue)=>{
//         if(!previousValue.includes(currentValue)){
//             previousValue.push(currentValue)
//         }
//         return previousValue
//     },[])
//     return unique
// }
// console.log(uniqueElement());

// 6. Write a function to reverse the order of elements in an array using reduce().

// function reverseTheOrder() {
//     let arr = [1, 2, 3, 4, 5];
//     let reverse = arr.reduce((previousvalue, currentvalue) => {
//         previousvalue.unshift(currentvalue);
//         return previousvalue;
//     }, [])
//     return reverse;
// }
// console.log(reverseTheOrder());

// Q7. Write a function to multiply all elements of an array together using reduce().

// function PorductOfArray(){
//     let arr = [1, 2, 3, 4, 5];
//     let product = arr.reduce((previousvalue, currentvalue) =>{
//         return previousvalue *= currentvalue;
//     }, 1)
//     return product;
// }

// console.log(PorductOfArray());

// Q8. Write a function to find the average value of all elements in an array using reduce().

// function averageOfElement() {
//     let arr = [1, 2, 3, 4, 5];
//     let average = arr.reduce((previousvalue, currentvalue) =>{
//        return previousvalue += currentvalue;
//     }, 0)
//     return average / arr.length;
// }
// console.log(averageOfElement());

// / Q9. Write a function to find the product of the even elements in an array using reduce().

// function productOfEvenEl() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let evennumPro = arr.reduce((previousvalue, curretnvalue) => {
//         if (curretnvalue % 2 == 0) {
//             return previousvalue * curretnvalue;
//         }
//         return previousvalue;
//     }, 1)
//     return evennumPro;
// }
// console.log(productOfEvenEl());

// / Q10. Write a function to find the index of the largest element in an array using reduce().

// function findLargestIndex() {
//     let arr = [1, 2, 3, 4, 5, 6, 11, 7, 8, 9, 10];
//     let largeIndex = arr.reduce((previousValue, currentValue, _, arr) => {
//         if (previousValue < currentValue) {
//             previousValue = currentValue
//         }
//         return previousValue
//     }, 0)
//     return arr.indexOf(largeIndex)
// }
// console.log(findLargestIndex());

// Q1. Write a function to find the longest word in an array using reduce().

// function longestWord() {
//     let arr = ["javaScript", "kotlin", "java", "c++"];
//     let longestWord = arr.reduce((previousvalue, curretnvalue) => {
//         if (curretnvalue.length > previousvalue.length) {
//             previousvalue = curretnvalue;
//         }
//         return previousvalue;
//     }, '')
//     return longestWord;
// };
// console.log(longestWord());


// Q4. Write a function to find the sum of the squares of all elements in an array using reduce().

// function sumOfAllElement() {
//     let arr = [2, 3];
//     let result = arr.reduce((previousvalue, currentvalue) =>{
//         return previousvalue += currentvalue * currentvalue;
//     }, 0);
//     return result;
// }
// console.log(sumOfAllElement());

// / Q6. Write a function to check if an array contains a specific element using reduce().

// function containSpecificElement() {
//     let arr = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let specific = arr.reduce((previousvalue, currentvalue) =>{
//         if(currentvalue % 2 == 0){
//            previousvalue.push(currentvalue);
//         }
//         return previousvalue;
//     }, []);
//     return specific;
// }
// console.log(containSpecificElement());

// . Check if a list contains any negative numbers using reduce().

// function containAnyNegativeNum() {
//     let arr = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     return arr.reduce((previousValue, currentValue) => {
//         if (currentValue < 0) {
//             return true
//         }
//         return previousValue
//     }, false)
// }
// console.log(containAnyNegativeNum());

// Q10. Find the number of uppercase letters in a sentence using reduce().

// function numberOfUpperCaseLetter() {
//     let arr = "javaScript is Programming Language";
//     return arr.split("").reduce((previousValue, currentValue, index, array) => {
//         if (currentValue == array[index].toUpperCase()) {
//             previousValue++
//         }
//         if (arr[index] === " ") {
//             previousValue--
//         }
//         return previousValue
//     }, 0)
// }
// console.log(numberOfUpperCaseLetter());


// / Q11.  Check if a string is a palindrome using reduce().

// function checkPalindrome() {
//     let arr = "madam"
//     let reverseString = arr.split(" ").reduce((previousvalue, currentvalue) => {
//         previousvalue.unshift(currentvalue);
//         return previousvalue;
//     }, []);
//     if (reverseString.join("") === arr) {
//         console.log('this is plaindrom string')
//     } else {
//         console.log('this is string is not palindrom')
//     }
// }
// console.log(checkPalindrome());

// / Q12. Find the common elements between two given array using reduce().

// function commonElement(){
//     let arr1 = [1,2,3,4,5];
//     let arr2 = [3,4,2,6,4,3,1];
//     return arr1.reduce((previousValue,currentValue, _,arr)=>{
//        if(arr2.includes(currentValue)){
//         previousValue.push(currentValue)
//        }
//        return previousValue;
//     },[])
// }
// console.log(commonElement());


// Q13. Remove all vowels from a sentence using reduce().

// function RemoveAllVowelsEl() {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let sentence = "this is javascript code";
//     return sentence.split("").reduce((previousvalue,currentvalue) =>{
//         if(!vowels.includes(currentvalue)){
//             previousvalue += currentvalue;
//         }
//         return previousvalue;
//     }, '')
// }
// console.log(RemoveAllVowelsEl());


// Q14.  Remove punctuation marks from a string using reduce().

// function RemoveAllPunctionMarks() {
//     let str = "Hello, how are you today?";
//     let punctuationMarks = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-'];
//     return Array.from(str).reduce((previousvalue, currentvalue) => {
//         if (!punctuationMarks.includes(currentvalue)) {
//             previousvalue += currentvalue;
//         }
//         return previousvalue;
//     }, "")
// }
// console.log(RemoveAllPunctionMarks());

// For Each Metho

// / Q1. Write a function to print all elements of an array using forEach().

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

// function consoleAllEl(arr) {
//     arr.forEach(element => {
//         console.log(element);    // this will console all the element but the function will return undefined
//     });
//     return "."
// }
// console.log(consoleAllEl(numbers));

// Q2. Write a function to calculate the sum of all elements in an array using forEach().

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

// function maxNumber(arr) {
//     let MaxValue = arr[0];
//     arr.forEach(value => {
//         if (value > MaxValue) {
//           MaxValue = value;
//         }
//     });
//     return MaxValue;
// }
// console.log(maxNumber(numbers));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];
// function EvenNumCount(arr) {
//     let count = 0;
//     arr.forEach(value => {
//         if (value % 2 == 0) {
//             count++
//         }
//     });
//     return count;
// }

// console.log(EvenNumCount(numbers))

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

// function findAverage(arr){
//     let sum = 0;
//     arr.forEach(value => {
//         sum = sum + value;
//     });
//     return sum;
// }

// console.log(findAverage(numbers))

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

// function CheckPostiveNumber(arr) {
//     let isTrue = 0;
//     arr.forEach((value) => {
//         if (value > 0) {
//             isTrue++;
//         }
//     })
//     if (isTrue == arr.length) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(CheckPostiveNumber(numbers));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];
// function FindElement(arr, value) {
//     let indexValue = 0;
//     arr.forEach((element, index) => {
//         if (element == value) {
//             indexValue = index
//         }
//     });
//     return indexValue
// }

// console.log(numbers, 5)

// Q8. Write a function to calculate the product of all elements in an array using forEach().

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

// function productOfArray(arr) {
//     let product = 1;
//     arr.forEach(value => product *= value);
//     return product;
// }

// console.log(productOfArray(numbers));

// Q9. Write a function to create a new array that contains the squares of the elements in the original array using forEach().

// function SquareRoot(arr) {
//     let square = []
//     arr.forEach(value => {
//         square.push(value * value);
//     });
//     return square;
// }

// console.log(SquareRoot(numbers));

// / Q1 Write a function to remove all duplicate elements from an array using forEach().

// function removeDuplicate(arr) {
//     let removedElement = [];
//     arr.forEach(value => {
//         if (!removedElement.includes(value)) {
//               removedElement.push(value);
//         }
//     });
//     return removedElement;
// }
// console.log(removeDuplicate(numbers));


// Q2. Write a function to find the first occurrence of an element in an array using forEach().

// let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

// function firstOccurrence(arr,value){
//     let foundIndex = -1;
//     arr.forEach((element,index)=>{
//         if(element == value && foundIndex == -1){
//             foundIndex = index
//         }
//     });
//     return foundIndex
// }
// console.log(firstOccurrence(number2,1));

// Write a function to find the second smallest element in an array using forEach().

// function secondSmallestNum(arr) {
//     let smallNum = Math.min(...arr);
//     let result = [];
//     arr.forEach((value, index) => {
//         if (value == smallNum) {
//             arr.splice(index, 1);
//         }
//     });
//     smallestNum = Math.min(...arr)
//     return smallestNum;
// }

// console.log(secondSmallestNum(number2));

// Q4. Write a function to concatenate all elements of an array into a single string using forEach().

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

// function concatenateAllEl(arr) {
//     let concatenateStr = "";
//     arr.forEach(value => {
//         concatenateStr += value;
//     });
//     return concatenateStr;
// }
// console.log(concatenateAllEl(numbers));

// Q6. Write a function to find the sum of the squares of all even elements in an array using forEach().

// function AddEvenNumber(arr) {
//     let sum = 0;
//     arr.forEach((element) => {
//         if (element % 2 == 0) {
//             sum += element * element;
//         }
//     });
//     return sum;
// }

// console.log(AddEvenNumber(numbers))


// Q8. Write a function to find the first positive element in an array using forEach().

// function firstPositiveElement(arr) {
//     let firstElement = null;
//     arr.forEach((value) => {
//         if (value > 0 && firstElement === null) {
//             firstElement = value;
//         }
//     });
//     return firstElement;
// }
// console.log(firstPositiveElement(numbers));

// Q9.Write a function to find the number of times a given element appears in an array using forEach().;

// function elAppearInEl(arr, target) {
//     let counter = 0;
//     arr.forEach((value) => {
//         if (value == target) {
//            counter++;
//         }
//     });
//     return counter++;
// }

// console.log(elAppearInEl(numbers, 1));

// Q10. Write a function to find the longest string in an array using forEach().

// let names = ["HTML", "JAVASCRIPT", "C++", "JAVA"];

// function longestNames(arr) {

//     let longest = "";
//     arr.forEach((value) => {
//         if (value > longest) {
//             longest = value;
//         }
//     });
//     return longest;
// }
// console.log(longestNames(names));

// Q11. Write a function to filter out all negative elements from an array using forEach().
// let number3 = [-1, -2, -3, -4, 5, 6, 7, 8, 9]

// function filterAllNegativeNumber(arr) {

//     let result = [];
//     arr.forEach((value) => {
//         if (value < 0) {
//           result.push(value);
//         }
//     });
//     return result;
// }

// console.log(filterAllNegativeNumber(number3));

// Q12. Write a function to find the smallest element in an array that is greater than a given value using forEach().

// let number4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function smallestNumber(arr) {
//     let small = Infinity;
//     arr.forEach(value => {
//         if (value < small) {
//             small = value;
//         }
//     });

//     return small;
// }

// console.log(smallestNumber(number4));

//  Q14. Write a function to remove all elements from an array that are divisible by a given value using forEach().

let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function removeElDivisible(arr, target) {

//     let result = [];
//     arr.forEach((value) => {
//         if (value % target == 0) {
//             result.push(value);
//         }
//     });
//     return result;
// }

// console.log(removeElDivisible(number2, 4));

// / Q15. Write a function to transform an array into an object where the elements are keys and their counts are values using forEach().

// function keyValue(arr) {
//     let object = {};
//     arr.forEach((value) => {
//         object[value] = (object[value] || 0) + 1
//     });
//     return object
// }
// console.log(keyValue(number2));

// Q16. Write a function to check if an array is sorted in ascending order using forEach().

// function isArraySort(arr) {
//     let isSort = true;
//     let previousValue = arr[0];
//     arr.forEach((value) => {
//         if (value < previousValue) {
//             isSort = false;
//         }
//         console.log(previousValue, value);
//         previousValue = value;
//         console.log(previousValue, value);

//     })
//     return isSort;
// }
// console.log(isArraySort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// / Q17.  Write a function to remove all falsy values from an array using forEach().

// let falsyValue = [true, false, -1, "", null, undefined, 1, 2, 3, 4, -5, NaN, -0]

// function removeFalsyValue(arr) {
//     let truthyValue = [];
//     arr.forEach((value) => {
//         if (value) {
//             truthyValue.push(value)
//         }
//     })
//     return truthyValue
// }
// console.log(removeFalsyValue(falsyValue));


//  Q18. Write a function to find the smallest positive integer that is not present in an array using forEach().

let number3 = [-1, -2, -3, -4, 5, 6, 7, 8, 9]

// function smallPositiveInteger(arr) {
//     let small = [];
//     arr.forEach((value) => {
//         if (value < 0) {
//             small.push(value);
//         }
//     });
//     console.log(small)
//     return Math.min(...small)
// }

// console.log(smallPositiveInteger(number3));


// function smallestNumIndex(arr) {
//     let smallestIndex = 0;
//     let firstElement = arr[0]
//     arr.forEach((element, index) => {
//         if (element < firstElement) {
//             firstElement = element;
//             smallestIndex = index
//         }
//     });
//     return smallestIndex;
// }
// console.log(smallestNumIndex([2, 3, 4, 5, 3, 6, 7, 1, 8]));

// MAP METHOD   

// Q1.Write a function to create a new array that contains the double of each element in the original array using map().

// function doubleEachEl(){
//     let arr = [1,2,3,4,5];
//     let doubleEachEl = arr.map((element => element + element));
//     return doubleEachEl;
// }
// console.log(doubleEachEl());

// // Q2. Write a function to create a new array that contains the square of each element in the original array using map().

// function findsquareEl(){
//     let arr = [1, 2, 3, 4, 5];
//     let squareEl = arr.map((element => element * element));
//     return squareEl;
// }

// console.log(findsquareEl());

// Q3. Write a function to create a new array that contains the length of each string in the original array using map().

// function everyElementLength(){
//     let arr = ['one', 'two', 'three', 'four', 'five'];
//     let Elementlength = arr.map((element => element.length));
//     return Elementlength;
// }

// console.log(everyElementLength());

// Q4. Write a function to create a new array that contains the uppercase version of each string in the original array using map().

// function everyElToUpperCase(){
//     let arr = ['javascript', 'Python', 'java', 'c++'];
//     let capitalize = arr.map((value) => value.toUpperCase());
//     return  capitalize;
// }

// console.log(everyElToUpperCase());

// Q6. Write a function to create a new array that contains the type of each element in the original array using map().

// function typeOfEl(){
//     let arr = ["javascript", 17, null, undefined];;
//     let checktype = arr.map((value) => typeof value);
//     return checktype;
// }

// console.log(typeOfEl());

// / Q7. Write a function to create a new array that contains the index of each element in the original array using map().

// function returnIndexOfEveryEl(){
//     let arr = [5,4,6,8,7,2,1,3,9]; // just a random number;
//     let returnIndex = arr.map((element, index)=>{
//         return index
//     });
//     return returnIndex
// }
// console.log(returnIndexOfEveryEl());


// Q8. Write a function to create a new array that contains the sum of each pair of elements from two arrays using map().

// function sumOfEachPair() {
//     let arr1 = [1, 2, 3, 4, 5];
//     let arr2 = [5, 4, 3, 2, 1];
//     let sumOfEachPair = arr1.map((value, index) => {
//         return value += arr2[index]
//     })
//     return sumOfEachPair;
// }
// console.log(sumOfEachPair());

// Q9. Write a function to create a new array that contains the difference between each pair of elements from two arrays using map().

// function differenceBetweenEachPairs() {
//     let arr1 = [1, 2, 3, 4, 5];
//     let arr2 = [6, 7, 8, 9, 10];
//     let diffrence = arr2.map((element, index) =>{
//         return element - arr1[index];
//     }) 
//     return diffrence;
// }
// console.log(differenceBetweenEachPairs());

// Q10. Write a function to create a new array that contains the product of each pair of elements from two arrays using map().

// function productOfEachPair() {
//     let arr1 = [1, 2, 3, 4, 5]
//     let arr2 = [1, 2, 3, 4, 5];
//     let product = arr1.map((element, index) => {
//         return element * arr2[index];
//     })
//     return product;
// }

// console.log(productOfEachPair());

// Q1. Calculate the length of each word in a sentence using map().

// function findTheLengthOfEachEl(){
//     let string = "my name is anash";
//     return string.split(" ").map(value => value.length);
// }

// console.log(findTheLengthOfEachEl());

// Q3. Given an array of strings, capitalize the first letter of each word using map().

// function CapitalizeFirstEl() {
//     let arr = ["javascript", "java", "kotlin"];
//     return arr.map((value, index) =>{
//         return value.charAt(0).toUpperCase() + arr[index].slice(1);
//     })
// }

// console.log(CapitalizeFirstEl());

// Q5. Take an array of numbers and make them strings

// function numberToString(){
//     let arr = [1,2,3,4,5];
//     return arr.map(element => element.toString())
// }
// console.log(numberToString());

// Q6. Given an array of numbers, check if each number is a prime number using map().

// function checkPrimeNum() {
//     let arr = [1, 2, 3, 4, 5, 6];
//     let result = true;
//     let PrimeNum = arr.map((value) => {
//         if (value % 2 == 0) {
//            result = false;
//         }
//     })
//     return result;
// }

// console.log(checkPrimeNum());


// Q8. Given an array of numbers, find the minimum number in each subarray using map().

// function findMinNumOfEachSubArray() {
//     let arr = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];
//     return arr.map(element => Math.min(...element))
// }
// console.log(findMinNumOfEachSubArray());


// Q9. Given an array of strings, replace specific words with another word using map().

// function replacewords(target, newword){
//     let arr = ['this', 'is', "c++", 'code'];
//     arr.map((element, index)  =>{
//         if(element == target){
//           arr[index] = newword;
//         }
//     })
//     return arr[index];
// }

// console.log(replacewords('c++', 'javascript'));

// Q11.  Given an array of strings, find the number of words in each string using map().

// function findTheLengthOfWords(){
//     let string = "what's your name my name is anash";
//     return string.split(" ").map((element) => element.length);
// }

// console.log(findTheLengthOfWords());

// let name = "anash";

// Q11.  Given an array of strings, find the number of words in each string using map().

// function numberOfWordsInEachStr() {
//     let arr = ["hello this", "is", "javaScript", "code"];
//    return arr.map((element) =>{
//     let words = element.split(" ");
//     return words.length
//    })
// }
// console.log(numberOfWordsInEachStr());

// Q12. Given an array of strings, remove special characters from each string using map().

// function removeSpecialCharactersFromEachStr(){
//     let arr = ['Hello!', 'How are you?', 'I love programming!']
//     const regex = /[^\w\s]/g;
//     return arr.map((element) =>{
//         return element.replace(regex, "");
//     })
// };
// console.log(removeSpecialCharactersFromEachStr());



// let result = [];
// let number = [1, 2, 3, 4, 5];
// function Multiple2AllEl() {
//     number.forEach((number) => {
//         result.push(number * 2)
//     });
// }

// console.log(result);
// Multiple2AllEl();
// console.log(result);
// Multiple2AllEl();
// console.log(result);
// Multiple2AllEl();
// console.log(result);

// let numbers = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]

// function sumEvenNumber(){

// }
// let x = 10;
// function increament() {
//     console.log(x++)
//     console.log(x)
//     // x++;
// }
// increament();
// console.log(++x)
// console.log(x)
// x++;

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// function evenOddNumber() {
//     let result = [];
//     arr1.forEach((value) => {
//         if (value % 2 == 0) {
//             result.push(value);
//         }
//     });
//     return result;
// }

// console.log(evenOddNumber());

// var globalVar = "Hello";

// function greet() {
//   console.log(globalVar + " World");
// }

// greet();

// function calculateSum(a, b) {
//     var result = a + b;
//     return result;
//   }

//   let result = calculateSum(20, 13);

//   console.log(result);

// var x = 10;

// function outerFunction() {
//   var y = 5;

//   function innerFunction() {
//     var z = 3;
//     console.log(x + y + z);
//     console.log(z)
//   }

//   console.log(y)
//   innerFunction();
// }

// outerFunction();

// var message = "Hello, ";

// function greet1(a) {
//   console.log(a + "John");
// }

// function greet() {
//   console.log(message + "Alice");
// }

// greet1('hey ');
// greet()


// function outerFunction() {
//     const count = 5;
//     console.log(count)


//     function innerFunction() {
//         const count = 10;
//         console.log(count);
//     }

//     innerFunction();
// }

// outerFunction();

// var myVar1 = "Global";

// function funcA() {
//     console.log(myVar1);
// }

// function funcB() {
//     var myVar = "Local";
//     funcA();
//     console.log(myVar)
// }

// funcB();

// function printNumbers() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }

// printNumbers();
// console.log(i);

// var num = 10;

// (function () {
//     var num = 5;
//     console.log(num);
// })();

// console.log(num);

// // function nextEdge(a, b) {
// //     return a + b - 1;
// // }

// // console.log(nextEdge(8, 10));
// // console.log(nextEdge(5, 7));
// // console.log(nextEdge(9, 2));

// function printTable() {
//     let i = 1;
//     do {
//         console.log(i * 5);
//         i++;
//     } while (i < 1);
// }
// printTable();