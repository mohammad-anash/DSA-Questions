// write a javascript ot check the whether input is an array not

// function checkArray(inputarray) {
//     if (inputarray instanceof Array) {
//         return true;
//     }
//     return false;
// }

// console.log(checkArray([]));
// console.log(checkArray("my name is anash"))
// console.log(checkArray([]))

// write the javascript functiion to get the first element of an array passing pa parameter "n will return the first "n element of an array";

// function getValueOfN(inputarray, n) {
//     let cloned = [];
//     for (let i = 0; i < n; i++) {
//         cloned.push(inputarray[i]);
//     }
//     return cloned;
// }

// console.log(getValueOfN([1, 2, 3, 4, 5], 1));
// console.log(getValueOfN([1, 2, 3, 4, 5], 2));
// console.log(getValueOfN([1, 2, 3, 4, 5], 0));

// write a simple javascript programe to join all element of the following array into a string

// function join_Element(inputarray){
//     return inputarray.split(",").join(" ");
// }

// console.log(join_Element("Red,Green,White,Black"));

// write a function to multiply 2 of all element of array;

// function multiplyOofTwo(inputarray, inputnumber){
//     let multiply = inputarray.map((inputarray) => inputarray * inputnumber);
//     return multiply;
// }

// console.log(multiplyOofTwo([1, 2, 3, 4, 5], 2))

// write a funcion to check the element word is lenght is equal to five so print in <p> tag oherwise print in <span> tag;

// function printTags(inputarray) {
//     let ans = inputarray.map((value) => {
//         if (value.length === 5) {
//             return `<p>${value}</p>`;
//         } else {
//             return `<span>${value}</span>`;
//         }
//     })
//     return ans;
// }

// console.log(printTags(["anash", "nawaz", "fayyaz", "go to room", "mohammad ali"]))

// write a function in array of object peitn only value name;

// function printName() {
//     let cloned = [];
//     let array = [
//         { name: "anash", age: 30 },
//         { name: "rahul", age: 20 },
//         { name: "hursh", age: 32 },
//     ]
//     let ans = array.map((value) =>{
//         return {name: value.name};
//     })
//     return ans
// }

// console.log(printName())

// writw a function to find the even number using filter method;

// function even_el(inputarray) {
//     let cloned = [];
//     cloned = inputarray.filter(function (value) {
//         if (value % 2 == 0) {
//             return true;
//         } else {
//             return false;
//         }
//     })
//     return cloned;
// }

// console.log(even_el([1, 2, 3, 4, 5, 6]))

// write a function to checkt the all word of arrya in the words a present in the word delete this word;

// function DeleteWords(inputarray) {

//     let answer = inputarray.filter((value) => {
//         if (value.split("a").length <= 2) {
//             return true;
//         }
//     })
//     return answer;
// }

// console.log(DeleteWords(["anash", "sumit", "rishi", "tanya", "dada", "moin"]))

// write a javascript function to implement the array in shuffle;

// function shuffleArray(inputarray){
//     let arraylength = inputarray.length;
//     while(arraylength > 0){
//         arraylength--;
//         let shuffleThings = Math.floor(Math.random() * arraylength);
//         let itemValue = inputarray[arraylength];
//         inputarray[arraylength] = inputarray[shuffleThings];
//         inputarray[shuffleThings] = itemValue;
//     }
//     return inputarray;
// }

// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]))

// write a javascript to find the prime number;

// function primeNumber(inputNumber) {
//     for (let i = 2; i < inputNumber; i++) {
//         if (inputNumber % i == 0) {
//             console.log(`${inputNumber} Is Not Prime Number`)
//             return false;
//         }
//     }
//     console.log(`${inputNumber} Is Prime Number`)
// }

// console.log(primeNumber(12))

// write a afunction to implement Fabonanice Series.

// function FabonaniceSeriers(numberOfTerms) {
//     let arr = [1, 1];
//     for (let i = 2; i < numberOfTerms; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr;
// }
// console.log(FabonaniceSeriers(5));

// write a function check the string palimdrom is or not.

// function palimdrom_String(inputstring) {
//     let reverseString = inputstring.split("").reverse().join("");
//     if (reverseString == inputstring) {
//         return `${reverseString} is palimdrom`;
//     } else {
//         return `${reverseString} is not palimdrom`;
//     }
// }

// console.log(palimdrom_String("anash"))
// console.log(palimdrom_String("stepnotonpets"))

// write  a function to find sum of digit.

// function sumOfDigit(n) {
//     let digitSum = 0;
//     let numStr = String(n);
//     for (let i = 0; i < numStr.length; i++) {
//         let getvalue = parseInt(numStr[i]);
//         digitSum += getvalue;
//     }
//     return digitSum;

// }
// let digit = prompt("Enter Your Digit");

// if (Number.isNaN(digit) || digit <= 0) {
//     console.log("Invalid input. Please enter a positive integer.");
// } else {
//     const result = sumOfDigit(digit);
//     console.log("Sum of digits:", result);
// }


// write a function to find factorial n value number of terms

// function factorialSeriers(n){
//     let cloned = 1;
//     for (let i = 1; i <= n; i++) {
//         cloned = i * cloned;
//     }
//     return cloned;
// }

// console.log(factorialSeriers(6))

// write a function to find the armstorm number;

// function armStormNumber(inputarray) {
//     let numStr = inputarray.toString();
//     console.log(typeof numStr)
//     let NumDigit = numStr.length;
//     let sum = 0;

//     for (let i = 0; i < NumDigit; i++) {
//         let digit = parseInt(numStr[i]);
//         sum += Math.pow(digit, NumDigit);
//     }

//     return sum === inputarray;
// }

// const inputStr = prompt("Enter a positive integer:");
// let number = parseInt(inputStr);

// if (Number.isNaN(number) || number <= 0) {
//     console.log("Invalid input. Please enter a positive integer.");
// } else if (armStormNumber(number)) {
//     console.log(`${number} is an Armstrong Number`)
// } else {
//     console.log(`${number} is an Not Armstrong Number`)
// }

// write a function to create a simple programmer of number guess.

// let InputEl = document.getElementById("input");
// let paraEl = document.getElementById("para");
// let BtnEl = document.querySelector(".btn");

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber)
// BtnEl.addEventListener("click", () => {
//     let InputElValue = Number(InputEl.value);
//     if (InputElValue == randomNumber) {
//         paraEl.textContent = `Congratulation! Your Guess Number ${InputElValue} Is Correct`
//     } else if (InputElValue <= 0 || InputElValue > 100) {
//         paraEl.textContent = "Please valid Correct number";
//     } else if (InputElValue < randomNumber) {
//         paraEl.textContent = "try to Higher number";
//     } else {
//         paraEl.textContent = "Try to lower Number";
//     }
// })

// write a function to chekc the user given year leap year is not.

// function LeapYear(user) {
//     if (user % 4 == 0) {
//         return `This Is Leap year ${user}`;
//     } else {
//         return `This Is Not Leap Year ${user}`
//     }
// }

// let user = prompt("enter your year");
// console.log(LeapYear(user))

// write a function to count vowel and consonants.

// function voewlConsonant(user) {
//     let changeCase = user.toLowerCase().split("");
//     let vowels = ["a", "e", "i", "o", "u"];
//     let vowelCounter = 0;
//     let consonantCounter = 0;

//     for (let i = 0; i < changeCase.length; i++) {
//         const element = changeCase[i];

//         if (element === " ") {
//             continue;
//         }

//         if (vowels.includes(element)) {
//             vowelCounter++;
//         } else {
//             consonantCounter++;
//         }
//     }

//     console.log(`Vowels: ${vowelCounter}    Consonants: ${consonantCounter}`);
// }

// let user = prompt("Enter your string");
// voewlConsonant(user);

// write the function to print the given pattern

// function trainglePatter() {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 0; j < i; j++) {
//             document.write("* ");
//         }
//         document.write("<br>");
//     }
// }

// console.log(trainglePatter())

// write a function to prime sum of all prime number.

// function SumofPrimeNumber(inputarray) {
//     let cloned = [];
//     for (let i = 2; i < inputarray.length; i++) {
//         if (inputarray[i] % i == 0) {
//             cloned.push(inputarray);
//         }
//     }
//     return cloned;
// }

// console.log(SumofPrimeNumber([1, 2, 3, 4,5, 6, 7, 8, 9, 10]));

// function areAnagrams(str1, str2) {
//     let first = str1.split('').sort().join("");
//     let second = str2.split('').sort().join('');
//     console.log(first, second)
// }

// console.log(areAnagrams('listen', 'silent')); // true
// console.log(areAnagrams('hello', 'world'));   // false


// Wrtei a function to find the missing letter in the array.

// function findMissingNumber(arr) {
//     let n = arr[arr.length - 1];
//     let expectvalue = (n * (n + 1)) / 2;
//     let actualSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         actualSum += arr[i];
//     }
//     let getvalue = expectvalue - actualSum;
//     return getvalue;
// }

// const arrayWithMissingNumber = [1, 2, 3, 4, 6];  // Missing 4
// const missingNumber = findMissingNumber(arrayWithMissingNumber);
// console.log("Missing number:", missingNumber);


// wrtie a function to rotate array digits by the given number.

// function rotataArray(inputarray, n) {
//     for (let i = 0; i < n; i++) {
//         console.log(inputarray[i])
//     }
// }

// console.log(rotataArray([1, 2, 3, 4, 5, 6], 5))

// write a function to create a simpel calculator in javascript;

// function simpleCalculator(num1, operator, num2) {
//     if (operator == "-") {
//         return num2 - num1;
//     }
//      else if (operator == "/") {
//         return num1 / num2;
//     }
//      else if (operator == "*") {
//         return num1 * num2;
//     }
//      else {
//         return num1 + num2;
//     }
// }

// console.log(simpleCalculator(2, "/", 5))

// write the function to find the perfect number in the given user.

// function perfectNumber(Inputnumber) {
//     let sum = 0;
//     for (let i = 1; i < Inputnumber; i++) {
//         if (Inputnumber % i == 0) {
//             sum += i;
//             console.log(sum)
//         }
//     }
//     return sum === Inputnumber;
// }

// let user = parseInt(prompt("Enter Your Number"));
// let Value = perfectNumber(user);

// if (Value == true) {
//     console.log(`${user} Is a Perfect Number`)
// } else {
//     console.log(`${user} Not Is a Perfect Number`)
// }
// write a afunction tocheck the array all word of string palimsrom or not

// function palindrome_el(inputarry) {
//     for (let i = 0; i < inputarry.length; i++) {
//         let word = inputarry[i];
//         let reversed = word.split("").reverse().join("");
//         if (reversed === word) {
//             console.log(`${word}:` + " palindrome");
//         } else {
//             console.log(`${word}:` + " not palindrome");
//         }
//     }
// }

// palindrome_el(["civic", "anash", "nursesrun", "hello"]);

// write a functiont to count ferquency in the string.

// function ferquencyCounter(inputString) {
//     let object = {};
//     for (let i = 0; i < inputString.length; i++) {
//         let getvalue = inputString[i];
//         if(object.hasOwnProperty(getvalue)){
//            object[getvalue]++;
//         } else {
//             object[getvalue] = 1;
//         }
//     }
//     return object;
// }

// console.log(ferquencyCounter("what's your name my name is anash"));

// wrtue a function to calculate the given power.

// function power(base, exponent) {
//     let result = 1;
//     for (let i = 1; i <= exponent; i++) {
//         result *= base;
//     }
//     if (exponent < 0) {
//         return 1 / result
//     } else {
//         return result;
//     }
// }
// let base = 2;
// let exponent = 5;

// console.log(power(base, exponent))

// write a function to find the factorial the given number.

// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         console.log(`${result = i * result}`);
//     }
//     return result;
// }

// console.log(factorial(6));

// function Missing_Letter(inputArray) {
//     let arrlength = inputArray[inputArray.length - 1];
//     let expectValue = (arrlength * (arrlength + 1) / 2);
//     let sumDigit = 0;
//     for (let i = 0; i < inputArray.length; i++) {
//         sumDigit += inputArray[i];
//     }
//     return expectValue - sumDigit;
// }

// console.log(Missing_Letter([1, 2, 3, 4, 6]));expectValue

// write a function to the given string fins the unicode and calculate the sum of unicode;

// function findTheSum(inputstring) {
//     let sum = 0;
//     for (let i = 0; i < inputstring.length; i++) {
//         let getCode = inputstring.charCodeAt(i);
//         sum += getCode;
//     }
//     return sum;
// }

// console.log(findTheSum("Hello world"))

// write the function to find the given string unicode and every character of string multiply by 3 ad find the total sum;

// function character_El(inputString) {
//     let charCodes = [];
//     let value = 3;
//     let totalSum = 0;
//     for (let i = 0; i < inputString.length; i++) {
//         charCodes.push(inputString.charCodeAt(i));
//         let code = charCodes[i];
//         let multiple_el = code * value;
//         console.log(multiple_el);
//         totalSum += multiple_el;
//     }
//     return totalSum;
// }

// console.log(character_El("GPT-3.5"))

// write a function to given find the unicode and and get the even and calculat product;

// function even_product(inputString) {
//     let result = 1;
//     for (let i = 0; i < inputString.length; i++) {
//         if (i % 2 == 0) {
//             let code = inputString.charCodeAt(i);
//             result *= code;
//         }
//     }
//     return result;
// }

// console.log(even_product("Unicode"))

// write a afunction to find the unicode of the given string and calcuto the string and find largest unicode value or smallest unicode value find the diffrence.


// function findDiffernce(inputString) {
//     let largest = Math.max();
//     let smallest = Math.min();
//     for (let i = 0; i < inputString.length; i++) {
//         let code = inputString.charCodeAt(i);
//         console.log(code)
//         if (largest < code) {
//             largest = code;
//         }
//         if(smallest > code){
//            smallest = code;
//         }
//     }
//     console.log("The Largest Value:", largest)
//     console.log("The Smallest Value:", smallest)
//     console.log("The Difference:", largest - smallest)
// }

// console.log(findDiffernce("Javascript and Unicode"))


// write a function to the given array of unicode find the value use the froCharCode method

// function string_element(inputString) {
//     let result = "";
//     for (let i = 0; i <= inputString.length; i++) {
//         let getCode = inputString[i];
//         let getValue = String.fromCharCode(getCode);
//         result += getValue;
//     }
//     return result;
// }

// console.log(string_element([65, 78,  65, 83, 72]));


// function changeCase(InputString) {
//     let result = [];
//     for (let i = 0; i < InputString.length; i++) {
//         let code = InputString.charCodeAt(i);
//         let value = String.fromCharCode(code - 32);
//         result.push(value);
//     }
//     return result;
// }

// console.log(changeCase("HELLO, ANASH"))

// wrtie a function in the given array find the even number and store new array.

// function evenNumber(inputArray) {
//   return inputArray.filter((element) => {
//     if (element % 2 == 0) {
//       return element;
//     }
//   });
// }

// console.log(evenNumber([1, 2, 3, 4, 5, 6, 7, 8]))

// wrtie a functio to find the maximum and minimum value in the array.


// function findValue(inputArray) {
//   let largetNumber = Math.max();
//   let SmallestNumber = Math.min();
//   inputArray.forEach((element) => {
//     if (largetNumber < element) {
//       largetNumber = element;
//     }
//     if (SmallestNumber > element) {
//       SmallestNumber = element;
//     }
//   });
//   console.log(largetNumber, SmallestNumber);
// }

// console.log(findValue([12, 45, 7, 23, 1, 67, 89]))

// appko ek string di gayi he apko usme ek specific character ya susstring aata hai ye count krna he.

// function countCharacter(inputString) {
//   let character = {};
//   for (let i = 0; i < inputString.length; i++) {
//     let char = inputString[i];
//     if (character[char]) {
//       character[char]++;
//     } else {
//       character[char] = 1;
//     }
//   }
//   return character;
// }
// console.log(countCharacter("the quickt brown fox"))

// Ek string di gayi hai, aapko usko reverse karna hai bina ek naye string banaaye.
// Example Input: "hello world"
// Output: "dlrow olleh"

// function reversewords() {
//   let name = "hello, world";
//   let breakWords = name.split("").reverse();
//   let clatter = "";
//   for (let i = 0; i < breakWords.length; i++) {
//     let char = breakWords[i].split("").reverse().join(" ");
//     clatter += char;
//   }
//   return clatter;
// }

// console.log(reversewords());

// write a function to remove duplicate element in the given string.

// function remove_Duplicate_El(inputString) {
//   let result = [];
//   let breakWords = inputString.split("");
//   for (let i = 0; i < breakWords.length; i++) {
//     let char = breakWords[i];
//     if (!inputString.includes(char)) {
//       result.push(inputString);
//     }
//   }
//   return result;
// }

// console.log(remove_Duplicate_El("programming"))

// wrtie a function to check the given array is greater than 0 or not usign every method

// function areAllPositive(numbers) {
//   return numbers.every(number => number > 0)
// }

// // Example usage
// const array1 = [5, 10, 2, 8];
// const array2 = [1, -3, 4, 7];

// console.log(areAllPositive(array1)); // Output: true
// console.log(areAllPositive(array2)); // Output: false

// write function to check the guven string length is grater then five or not using every method

// function stringLength(inputString){
//  return inputString.every(string => string.length >= 5)
// }

// const array1 = ["apple", "banana", "orange"];
// const array2 = ["apple", "kiwi", "grape"];

// console.log(stringLength(array1));
// console.log(stringLength(array2));

// write a function to check the given number is divisible by five or not using every method.

// function Divisible(inputNumber){
//   let convert = inputNumber;
//   return convert.some(string => string % 3 == 0)
// }

// console.log(Divisible([3, 6, 9]))

// write a afunction to given object and check the property age above the age of 18;

// function checkage(){
//   const users1 = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 30 }
//   ];

//   return users1.every(value => value.age > 18);
// }

// console.log(checkage());

// write a function to the given object each object has title and author inplement a functio to check the book pages have mre than 200 pages.

// function checkPages() {
//   const books1 = [
//     { title: "Book 1", author: "Author 1", pages: 300 },
//     { title: "Book 2", author: "Author 2", pages: 250 },
//     { title: "Book 3", author: "Author 3", pages: 280 }
//   ];
//   return books1.every(element => element.pages > 200)
// }

// console.log(checkPages())

// function shuffleArray(inputarray) {
//   let arraylength = inputarray.length;
//   while (arraylength > 0) {
//     arraylength--;
//     let inputNumber = Math.floor(Math.random() * 10);
//     let clotter = inputarray[inputNumber];
//     inputarray[inputNumber] = inputarray[arraylength];
//     inputarray[arraylength] = clotter;
//   }
//   return inputarray;
// }

// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// write a function to sort array.

// function soertedArray(inputArray) {
//   for (let i = 0; i < inputArray.length; i++) {
//     for (let j = i + 1; j < inputArray.length; j++) {
//       if (inputArray[i] == inputArray[j]) {
//         let clotter = inputArray[j];
//         inputArray[j] = inputArray[i]
//         inputArray[i] = clotter;
//       }
//     }
//   }
//   return inputArray;
// }

// console.log(soertedArray([64, 34, 25, 12, 22, 11, 90]));

// writw a function reverse a number.

// function reversekaro(number){
//   let rev = 0;
//   while (number > 0) {
//     let rem = number % 10;
//     rev = rev * 10 + rem;
//     number = Math.floor(number / 10)
//   }
//   return rev;
// }

// console.log(reversekaro(3456));

// write a function to the given string convert into aplphabatical case

// function alphabeticalCase(string){
//   return string.split("").sort().join("")
// }

// console.log(alphabeticalCase("apple"));

// writea afunction to convert the string in title case.

// function titleCase(inputString) {
//   let breakSring = inputString.split(" ");
//   for (let i = 0; i < breakSring.length; i++) {
//      let char = breakSring[i];
//      let getvalue = char.charAt(0).toUpperCase() + char.toString(1);
//      breakSring[i] = getvalue;
//   }
//   let joiString = breakSring.join(" ");
//   return joiString;
// }

// console.log(titleCase("hello world, this is a title case example"));;

// function fruitsname(fruitlist) {
//   for (let i = 0; i < fruitlist.length; i++) {
//     let char = fruitlist[i];
//     if (char === "banana") {
//       return true
//     }
//   }
//   return false;
// }

// const fruits = ["apple", "banana", "orange", "grape"];
// console.log(fruitsname(fruits))

// write a function removing duplicat element in the array.

// function duplicate_Element(numbers) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let char = numbers[i];
//     if (!result.includes(char)) {
//       result.push(char);
//     }
//   }
//   return result;
// }

// const numbers = [2, 4, 6, 8, 4, 10, 2, 12, 6];
// console.log(duplicate_Element(numbers));

// wrtite a function to find the duplicate elemen;

// function duplicate_El_Find(inputArray) {
//   let result = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     for (let j = i + 1; j < inputArray.length; j++) {
//       if (inputArray[i] === inputArray[j] && !result.includes(inputArray[i])) {
//         result.push(inputArray[i])
//       }
//     }
//   }
//   return result;
// }

// console.log(duplicate_El_Find([2, 4, 6, 8, 4, 10, 2, 12, 6]));

// wrtie a function to find the longest word in the string.

// function longestWord(inputstring) {
//   let breakSring = inputstring.split(" ");
//   let wordlength = "";
//   for (let i = 0; i < breakSring.length; i++) {
//     let word = breakSring[i];
//     if (word.length > wordlength.length) {
//       wordlength = word;
//     }
//   }
//   return wordlength;
// }

// console.log(longestWord("the quick brown fox jumps over hte lazy dog"));

// write a function to format full name.

// function formatFullName(fullname){
//   let [firstname, lastname] = fullname.split(" ");
//   let firstInitial = firstname.charAt(0).toUpperCase();
//   let formatname = `${lastname}, ${firstInitial}`;
//   return formatname;
// }

// console.log(formatFullName("The anash"));

function change_Case(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    let code = inputString.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else if (code >= 90 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += String.fromCharCode(code);
    }
  }
  return result;
}

console.log(change_Case("tHE qUICK bROWN fOX"))
