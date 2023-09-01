// write a javascriot function to find the word who start the vowels.

// let Vowel_El = (namelist) => {
//     let vowel = 'a,e,i,o,u';
//     let result = [];
//     for (let i = 0; i < namelist.length; i++) {
//         let firstcharacter = namelist[i][0].toLowerCase();
//         if (vowel.includes(firstcharacter)) {
//             result.push(namelist[i]);
//         }
//     }
//     return result;
// }

// console.log(Vowel_El(['Ibrahim', 'Ismail', 'abbas', 'Babar', "moin"]));

// Write a javascript function to find seperate value of given number.

// let Seperate_El = (number) => {
//     let store = [];
//     while (number > 0) {
//         store.push(number % 10);
//         number = number / 10 | 0;
//     }
//     return store.join("");
// }

// console.log(Seperate_El(371))

// write a javascript function to count how many vowel in the string

// let countUserVowel_El = (user) => {
//     let breakString = user.split(" ");
//     let vowel = 'a,e,i,o,u';
//     let counter = 0;
//     for (let i = 0; i < breakString.length; i++) {
//         let firstEl = breakString[i][0].toLowerCase();
//         if (vowel.includes(firstEl)) {
//             counter++;
//         }
//     }
//     return counter;
// }
// let user = prompt('enter your string');

// console.log(countUserVowel_El(user))

// Write a javascript function to remove duplicate Element in the array;

// let Duplicate_El = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j] && !result.includes(arr[j])) {
//                 result.push(arr[i]);
//             }
//         }
//     }
//     return result;
// }
// console.log(Duplicate_El([1, 2, 3, 4, 5, 3, 4, 3, 1]))

// let Unique_El = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//             console.log(result)
//         }
//     }
//     // return result;
// }

// console.log(Unique_El([1, 2, 3, 4, 5, 3, 4, 3]));

// write a javascript function to reverse a string

// let reverse_El = (user) => {
//     let emptyStr = "";
//     for (let i = user.length - 1; i >= 0; i--) {
//         emptyStr += user[i];
//     }
//     return emptyStr;
// }
// let user = prompt('Enter Your String')

// console.log(reverse_El(user))

// Write javascript function To Capitalize every word of string.

// let titleCase_El = (user) => {
//     let removespace = user.split(" ");
//     // console.log(removespace)
//     for (let i = 0; i < removespace.length; i++) {
//         let firstcharacter = removespace[i];
//         let CapitalizeString = firstcharacter.charAt(0).toUpperCase() + firstcharacter.slice(1);
//         removespace[i] = CapitalizeString;
//     }
//      let joinString = removespace.join(" ");
//      return joinString;
// }
// let user = prompt('Enter your String')

// console.log(titleCase_El(user))

// write a javascript function to find longest word in the string.

// let Longest_El = (user) => {
//     let Wordbreak = user.split(" ");
//     let longest = "";
//     for (let i = 0; i < Wordbreak.length; i++) {
//         let character = Wordbreak[i];
//         if (longest.length < character.length) {
//             longest = character;
//         }
//     }
//     return longest;
// }
// let user = prompt('Enter Your String')

// console.log(Longest_El(user))

// write a javascript function to find sumof all array element.

// let SumOf_Array = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         console.log(sum);
//     }
//     // return sum;
// }

// console.log(SumOf_Array([1, 2, 3, 4, 5]))

// Wrtie javascript to check the given string is palimdrom the string is palimdrom return true otherwise return false.

// let palindrom_El = (string) => {
//     let result = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         result += string[i];
//     }
//     if (result == string) {
//         console.log("this is palindrom")
//     } else {
//         console.log('this is not palindrom')
//     }
// }

// console.log(palindrom_El("civic"))

// write javascript function and divide two number 3 and 5 is compeltely divide both number return FizzBuzz and 3 divide return fizz and 5 divide return buzz;

// let fizzBuzz_El = () => {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 == 0) {
//             console.log("Fizz")
//         } else if (i % 5 == 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//     }

// }

// console.log(fizzBuzz_El())

// Write a ajvascript function to find the factorial the givem number.

// let factorial_El = (number) =>{
//     let result = 1;
//     for (let i = 2; i <= number; i++) {
//         result *= i;
//     }
//     return result;

// }

// console.log(factorial_El(5));

// Write a javascript function to reverse every word of string.

// let Reverse_words = (wordslist) => {
//     let breakwords = wordslist.split(" ");
//     for (let i = 0; i < breakwords.length; i++) {
//         return breakwords.split("").reverse().join("");
//     }
//     let reveressentences = breakwords.join(" ");
//     return reveressentences;
// }

// console.log(Reverse_words("my name is anash"))

// Write a javascript function to find common element in the array.

// let common_El = (arr1, arr2) => {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j] && !result.includes(arr1[i])) {
//                 result.push(arr1[i]);
//             }
//         }
//     }
//     return result;
// }
// console.log(common_El([1, 2, 3, 4, 5], [1, 3, 5, 6, 3]))

// Write a javascript function to delete the repeating element in the array.

// let sortted_array = (arr1, arr2) => {
//     let result = [];
//     let number = 3;
//     let concatarray = arr1.concat(arr2);
//     for (let i = 0; i < concatarray.length; i++) {
//         if(concatarray[i] == number){
//            result.push(concatarray[i])
//         }
//     }
//     return result;
// }

// console.log(sortted_array([1, 2, 3, 4, 5],[1, 3, 5, 6, 3]))

// write ja vascript to check the givem number present in the array return true otherwise return false.

// let find_el = (arr, number) => {
//     for (let i = 0; i < arr.length; i++) {
//         let array = arr[i];
//         if (array == number) {
//             return true;
//         } 
//     }
//     return false;
// }

// console.log(find_el([1, 2, 3, 4, 5], 2));

// Write a javascript to find sum of all array and print return who number given extra.

// let sumof_El = (arr1, arr2) => {
//     let result = [];
//     let store = [];
//     let firstlength = arr1.length;
//     let secondlength = arr2.length;
//     for (let i = 0; i < 5; i++) {
//         if (firstlength < secondlength) {
//             result.push(firstlength);
//             break;
//         }
//         if(firstlength > secondlength){
//           store.push(firstlength)
//         }
//         console.log(store)
//     }
//     return store;
//     // return result;
// }

// console.log(sumof_El([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12]));

// write a javascript to check in the array add two digit and the answer is equale to target.

// let find_Target = (arr, target) => {
//     let pairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 pairs.push(arr[i], arr[j]);
//             }
//         }
//     }
//     return pairs;
// }

// console.log(find_Target([10, 20, 10, 40, 50, 60, 70], 50

// Write a jvascript function do capitalize all words of given string.

// let capitalize_El = (string) => {
//     let removespace = string.split(" ");
//     for (let i = 0; i < removespace.length; i++) {
//         let getvalue = removespace[i];
//         let firstcharacter = getvalue.charAt(0).toUpperCase() + getvalue.slice(1);
//         removespace[i] = firstcharacter;
//     }
//     let joinstring = removespace.join(" ");
//     return joinstring;
// }

// console.log(capitalize_El('my name is anash'))

// write a javascript to find rangevalue in the array.

// let range_El = (rangevalue) => {
//     let largetvalue = Math.max();
//     let smallestvalue = Math.min();
//     for (let i = 0; i < rangevalue.length; i++) {
//         let value = rangevalue[i];
//         if (largetvalue < value) {
//             largetvalue = value;
//         }
//         if (smallestvalue > value) {
//             smallestvalue = value;
//         }
//     }
//     console.log(largetvalue - smallestvalue)
// }

// console.log(range_El([100, -250, 300, 400, -150]))

// Write a javascript function to count the given character how many time present in the array.

// let count_Delete_El = (string, character) => {
//     let removespace = string.split(" ");
//     let counter = 1;
//     for (let i = 0; i < removespace.length; i++) {
//         if (removespace[i].includes(character)) {
//             counter++;
//         }
//     }
//    return emptyStr;
// }

// console.log(count_Delete_El('my name is anash', 'a'))

// Write a javascript function to remove the givem leeterremove in hte string.

// function removeLetterFromString(inputstring, letterremove) {
//     let resultstring = "";

//     for (let i = 0; i < inputstring.length; i++) {
//         if (inputstring[i] !== letterremove) {
//             resultstring += inputstring[i]
//         }
//     }
//     return resultstring;
// }

// console.log(removeLetterFromString('my name is anash', "a"))

// Write a javascript function check the given value present in the array.

// let contain_el = (arr, number) => {
//     if (arr.includes(number)) {
//         return true;
//     }
//     return false;
// }

// console.log(contain_el([1, 2, 3, 4, 5], 6))

// Write javascript function to find basevalue and exponentvalue.

// function power(x, n) {
//     if (n === 0) {
//         return 1;
//     } else if (n > 0) {
//         return x * power(x, n - 1);
//     } else {
//         return 1 / power(x, n)
//     }
// }

// // Test the power function
// const base = 2;
// const exponent = 3;
// const result = power(base, exponent);

// console.log(`${base}^${exponent} = ${result}`);

// Write javascript function to user give the operator num1 and num2.

// let user_Application = (num1, num2, opretor) => {
//     if (opretor == "+") {
//         return num1 + num2;
//     } else if (opretor == "*") {
//         return num1 * num2;
//     } else if (opretor == "/") {
//         return num1 / num2;
//     } else if (opretor == "-") {
//         return num2 - num1;
//     } else {
//         console.log('false')
//     }
// }


// console.log(user_Application(2, 4, ""))

// write a function to give user operator to num1 operator num2 using swicth case statment

// function user_Application(num1, operator, num2) {
//     let value;
//     switch (operator) {
//         case "*":
//             value = num1 * num2;
//             break;
//         case "-":
//             value = num2 - num1;
//             break;
//         case "/":
//             value = num1 / num2;
//             break;
//         case "+":
//             value = num1 + num2;
//             break;
//         default:
//             console.log('enter your operator')
//             break;
//     }
//     return value;
// }

// let value = (user_Application(2, "+", 4));
// console.log(value)

// Write a javascript function to find GCD value.

// function gcd_el(num1, num2) {
//     let count = 0, i;
//     if (num1 < 1 || num2 < 1) {
//         console.log('enter positive integer')
//     }
//     else if (num1 < num2) {
//         i = num1;
//     } else if (num2 < num1) {
//         i = num2;
//     } else {
//         return num1;
//     }
//     for (; i >= 1; i--) {

//         console.log(++count);
//         if (num1 % i == 0 && num2 % i == 0) {
//             return i;
//         }
//     }
// }

// console.log(gcd_el(1, 28))

// Write a jvascript function to LCM of givem number.

// function lcm_El(num1, num2) {
//     let count = 0, i;
//     if (num1 < 1 || num2 < 1) {
//         console.log('enter positive integer')
//     }
//     else if (num1 < num2) {
//         i = num1;
//     } else if (num2 < num1) {
//         i = num2;
//     } else {
//         return num1;
//     }
//     for (; i >= 1; i--) {

//         console.log(++count);
//         if (num1 % i == 0 && num2 % i == 0) {
//             let lcm = (num1 * num2) / i;
//             return lcm;
//         }
//     }
// }

// console.log(lcm_El(14, 21))

// Write a javascript function to check the given integer same.

// let inetger_El = (number) => {
//     let arr = [];
//     while (number > 0) {
//         arr.push(number % 10);
//         number = number / 10 | 0;
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         // console.log(arr)
//         if(arr[i] != arr[i + 1]){
//            return false;
//         }  
//     }
//     return true;
// }

// console.log(inetger_El(7777))

// write a function to implement string of camelcase.

// let camel_Case = (string) => {
//     let breakword = string.split(" ");
//     for (let i = 0; i < breakword.length; i++) {
//         let getletter = breakword[i];
//         let camelalize = getletter.charAt(0).toUpperCase() + getletter.slice(1);
//         breakword[i] = camelalize;
//     }
//     let joinString = breakword.join("");
//     console.log(joinString)
// }

// console.log(camel_Case("java script excersice"))

// write a function to uncamalize string.

// let Uncommelize_El = (string) => {
//     let breakword = string.split("");
//     for (let i = 0; i < breakword.length; i++) {
//         let getvalue = breakword[i];
//         let uncammalize = getvalue.charAt(0).toLowerCase() + getvalue.slice(1);
//         breakword[i] = uncammalize;
//     }
//     let joinstring = breakword.join("");
//     return joinstring;
// }

// console.log(Uncommelize_El('helloWorld'))

// write a funtionc to implement insert value.

// let insert = (string, secondstring, number) => {
//     if (secondstring == null) {
//         return string;
//     } else if (number == null) {
//         return `${secondstring} ${string}`
//     } else {
//        let splicers = string.slice(0, 18);
//        let getvalue = string.slice(18, 27)
//        let value = `${splicers}${secondstring}${getvalue}`;
//        console.log(value)
//     }

// }
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

// insert = function insert(main_string, ins_string, pos) {
//     if (typeof (pos) == "undefined") {
//         pos = 0;
//       } else if (typeof (ins_string) == "undefined") {
//         ins_string = '';
//      }
//      return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
// }
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

// wrtie a function to find chop and chip value in the string.

// Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// function string_chop(string, number) {
//     for (let i = 0; i < string.length; i++) {
//         for (let j = 0; j < number; j++) {
//             if (number == null) {
//                 return string;
//             } else if(number == 2){

//             }
//         }
//     }
// }

// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource', 2));
// console.log(string_chop('w3resource', 3));
// // ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// write a function  check the value Exist in the array.

// let exist_El = (user, fruitslist) => {
//     let chanegCase = user.toLowerCase();
//     for (let i = 0; i < fruitslist.length; i++) {
//         let fruits = fruitslist[i];
//         if (chanegCase == fruits) {
//             return `${fruits} Is Exist In The Array`
//         }
//     }
//     return `${fruits} Is Not Exist In The Array`
// }
// let user = prompt('Enter Your fruit name')

// console.log(exist_El(user, ['apple', 'banana', 'orange', 'grapes', 'kiwi']))

// write a function to find the grades for student unsing template string.

// let student_grades = (name, score1, score2, score3) => {
//     let findaverage = (score1 + score2 + score3) / 3;
//     let percentage = findaverage >= 70 ? "passed" : "failed"; // Changed this line

//     let feedMessage = {
//         Studentname: `${name}`,
//         scores: `${score1}, ${score2}, ${score3}`,
//         average: `${findaverage.toFixed(2)}`,
//         result: `${percentage}`
//     };
//     return feedMessage;
// };

// let studentname = "anash";
// let subject1Score = 76;
// let subject2Score = 69;
// let subject3Score = 82;

// let feedback = student_grades(studentname, subject1Score, subject2Score, subject3Score);

// console.log(feedback);


// let student_grades = (name, score1, score2, score3) => {
//     let average = (score1 + score2 + score3) / 3;
//     let percentage = average >= 70 ? "passed" : "failed";

//     let feedmessage = {
//         studentname: `${name}`,
//         studentScore: `${score1}, ${score2}, ${score3},`,
//         average: `${average.toFixed(2)}`,
//         percentage: `${percentage}`
//     }
//     return feedmessage
// }

// let studentname = "anash";
// let subject1Score = 87;
// let subject2Score = 21;
// let subject3Score = 69;

// let feedback = student_grades(studentname, subject1Score, subject2Score, subject3Score)

// console.log(feedback)

// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function camalize_String(string) {
//     let upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let lowerString = "abcdefghijklmnopqrstuvwxyz";
//     let result = "";
//     for (let i = 0; i < string.length; i++) {
//         let value = string[i];
//         console.log(upperString.indexOf(value))
//         if (upperString.indexOf(value) >= 0) {
//             result += value.toLowerCase();
//             console.log(lowerString.indexOf(value))
//         } else if (lowerString.indexOf(value) >= 0) {
//             result += value.toUpperCase();
//         } else {
//             result += value;
//         }
//     }
//     return result;
// }

// console.log(camalize_String("MohammaD AnaSh"))

// function swapCase(input) {
//      let result = "";
//      for (let index = 0; index < input.length; index++) {
//          let code = input.charCodeAt(index)
//          if (code >= 65 && code <= 90) {//// letter is present between A and Z
//             //  console.log(code)
//              result += String.fromCharCode(code + 32);
//             //  console.log(result)
//          }
//          else if (code >= 97 && code <= 122) {
//             console.log(code)
//              result += String.fromCharCode(code - 32);
//              console.log(result)
//          }
//          else {
//              result += String.fromCharCode(code);
//          }
//      }
//     //  return result;
//  }
//  console.log(swapCase("The Quick Brown Fox"));

// // let inputEl = document.getElementById('input');
// // let addbtn = document.querySelector('.add');
// let displaybtn = document.querySelector('.display');
// let result = [];

// addbtn.addEventListener('click', () => {
//     let getInputValue = inputEl.value;
//     let converter = Number(getInputValue);
//     result.push(converter);
//     inputEl.value = " ";
// })

// displaybtn.addEventListener('click', () => {
//   for (let i = 0; i < result.length; i++) {
//        document.write(`Element ${i} = ${result[i]}`);
//        document.write("<br>");
//   }
// })

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];


// let sum_Of_Two_Array = (arr1, arr2) => {
//     let result = [];
//     if (arr1.length < arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             let addsvalue = arr1[i] + arr2[i];
//             result.push(addsvalue);
//         }
//     }
//     return result;
// }

// console.log(sum_Of_Two_Array([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]))

// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// let pairOf_El = (arr, target) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//        for (let j = i + 1; j < arr.length; j++) {
//           if(arr[i] + arr[j] === target){
//               result.push(arr[i], arr[j]);
//               return result;
//           }     
//        }
//     }
//     console.log('target is not match');
//     return false;
// }


// console.log(pairOf_El([10, 20, 10, 40, 50, 60, 70], 40))

// function findSpaceCode(inputString) {
//     let counter = 1;
//     for (let i = 0; i < inputString.length; i++) {
//         let code = inputString[i];
//         let getCode = code.charCodeAt();
//         if (getCode == 32) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(findSpaceCode("Write Code in vs by an asamer"))

// Create a function that takes in a list and returns a list of the accumulating sum.

// function accumulating_List(inputArray) {
//     let result = [];
//     let sum = 0;
//     for (let i = 0; i < inputArray.length; i++) {
//        sum += inputArray[i];
//        result.push(sum);
//     }
//     return result;
// }
// console.log(accumulating_List([1, 2, 3, 4]));

// function largest_even(inputArray) {
//     let largetsNumber = -1;
//     for (let i = 0; i < inputArray.length; i++) {
//         if (inputArray[i] % 2 == 0 && inputArray[i] > largetsNumber) {
//             largetsNumber = inputArray[i];
//         }
//     }
//     return largetsNumber;
// }


// console.log(largest_even([3, 7, 2, 1, 7, 9, 10, 13]));
// console.log(largest_even([1, 3, 5, 7]));
// console.log(largest_even([0, 19, 18973624]));

// function median(inputArray) {
//     let findlength = inputArray.length;
//     // console.log(findlength)
//     let middleIndex = Math.floor(findlength / 2);
//     console.log(middleIndex)
//     if (findlength % 2 != 0) {
//         console.log(inputArray[middleIndex]);
//     } else {
//         return (inputArray[middleIndex] + inputArray[middleIndex - 1]) / 2;
//     }
// }


// console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]));
// console.log(median([2, 2, 6, 8, 8, 10, 10]));
// console.log(median([1, 2, 2, 4, 7, 8, 9, 10]));

// function median(inputArray) {
//     let findlength = inputArray.length;
//     let middleIndex = Math.floor(findlength / 2);
//     if (findlength % 2 != 0) {
//         return inputArray[middleIndex]
//     } else {
//         return (inputArray[middleIndex] + inputArray[middleIndex - 1]) / 2;
//     }
// }

// console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]));
// console.log(median([2, 2, 6, 8, 8, 10, 10]));
// console.log(median([1, 2, 2, 4, 7, 8, 9, 10]));

// var a = 1;
// var b = 5;
// var c = 6;

// var discriminant = Math.pow(b, 2) - 4 * a * c;
// console.log(discriminant)
// var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
// var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

// console.log("Root 1:", root1);
// console.log("Root 2:", root2);

// let a = 1;
// let b = 5;
// let c = 6;

// function shuffleArea(arr) {
//     let totallength = arr.length;
//     while (totallength > 0) {
//         totallength--;
//         let IndextobeExchange = Math.floor(Math.random() * totallength);
//         let temp = arr[totallength];
//         arr[totallength] = arr[IndextobeExchange];
//         arr[IndextobeExchange] = temp;
//     }
//     return arr;
// }

// console.log(shuffleArea([1, 2, 3, 4, 5, 6, 7, 8]))

// function quadraticeEquation(){
//     let a = 1;
//     let b = 5;
//     let c = 6;
//     let root1 = (-b + Math.sqrt(b*b - 4*a*c)) / 2 * a;
//     let root2 = (-b - Math.sqrt(b*b - 4*a*c)) / 2 * a;
//     console.log(root1, root2);
// }

// console.log(quadraticeEquation())

// function cumpoundInterest(){
//     let r = 10 / 100;
//     let m = 1;
//     let t = 3;
//     let p = 5000;
//     let a = p * Math.pow(1 + r / m, m * t) | 0;
//     console.log(a);
// }

// console.log(cumpoundInterest())

// function perimeterAndArea(length, width){
//    let perimeter = (2 * width + 2 * length);
//    let area = length * width;
//    console.log(perimeter, area)
// }

// console.log(perimeterAndArea(10, 10));

// function areaAndPerimeter(r){
//   let pyy = 3.14;
//   let area = pyy * r * r;
//   let circumference = 2 * pyy * r | 0;
//   console.log(area, circumference);
// }

// console.log(areaAndPerimeter(10));

// function celsiusToFahrenhiet(){
//     let c = 100;
//     let tf = (9 / 5) * c + 32;
//     let f = 212;
//     let tc = 5 / 9 * (f - 32);
//     console.log(tf, tc);
// }

// console.log(celsiusToFahrenhiet())

// function simpleAndCompoundInterest(p, r, t, n){
//     let simpleInetrest = (p*r*t) / 100;
//     r = r / 100;
//     let compounInterest = p * (Math.pow((1 + r / n), t * n) - 1)
//     console.log(simpleInetrest, compounInterest)
// }

// console.log(simpleAndCompoundInterest(10, 5, 20, 15))

// function factorial_El(inputNumber) {
//     let result = 1;
//     for (let i = 1; i <= inputNumber; i++) {
//         result = i * result;
//     }
//     return result;
// }

// console.log(factorial_El(5))

function primeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            console.log(`${number} Is Not Prime`);
            return false
        } 
    }
    console.log(`${number} Is Prime`)
}

primeNumber(17);