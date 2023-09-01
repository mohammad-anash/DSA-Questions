
// write the function to check the given string is pangram;

// function stringFunction() {
//     let count = 0;
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let string = 'sixty zippers were quickly picked from the woven jute bag';
//     for (let i = 0; i < alphabet.length; i++) {
//         count = 0;
//         for (let j = 0; j < string.length; j++) {
//             if (alphabet[i] == string[j]) {
//                 break;
//             } else {
//                 count++;
//             }
//         }
//         if (count == string.length) {
//             return false;
//         }
//     }
//     return true;
// }

// if (stringFunction()) {
//    console.log('this is pangram')
// } else {
//     console.log('this is not pangram')
// }

// write the function to find the range value

// function findRangeValue() {
//     let arr = [1, 2, 3, 4, -100, 150, 200, 250];
//     let small = arr[0];
//     let largest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] > largest) {
//                 largest = arr[i];
//             }
//             if(arr[i] < small){
//                small = arr[i];
//             }
//         }
//     }
//     console.log(largest + small);
// }
// findRangeValue();

// write the function to get first value of all word in the given string.

// function getfirstvalue() {
//     let arr = ["nawaz", "fayyaz", "abbas", 'mujahid'];
//     let firstcharacter = [];
//     for (let i = 0; i < arr.length; i++) {
//         let name = arr[i];
//         let getfirstcharacter = name.charAt(0);
//         console.log(getfirstcharacter)

//     }
//     return firstcharacter;
// }

// console.log(getfirstvalue());

// write the function to check the user given number is divisible.

// function numberDivivsible(user) {
//     let store = [];
//     for (let i = 0; i <= 100; i++) {
//         if (i % user == 0) {
//             store.push(i);
//         }
//     }
//     return store;
// }

// let user = prompt('enter your number');
// console.log(numberDivivsible(user));

// write a function to give user number and check the value of number.

// function numberConvertword(user) {
//     let store = [];
//     for (let i = 0; i < user.length; i++) {
//         store.push(user.charCodeAt(i));
//     }
//     return store;
// }
// let user = prompt('enter your string');
// console.log(numberConvertword(user));

// write the function to check the perfect number.

// function perfectnumber(user) {
//     let store = [];
//     let sum = 0;
//     for (let i = 1; i <= user / 2; i++) {
//         if (user % i == 0) {
//             sum = sum + i
//         }
//     }
//     if (sum == user) {
//         return true
//     } else {
//         return false;
//     }
// }

// let user = prompt('enter your number');
// console.log(perfectnumber(user))

// wruite the function to user given number to check is even either odd.

// function evenoddnumber(user) {
//     if (user % 2 == 0) {
//         console.log('this is even number')
//     } else {
//         console.log('this is odd number')
//     }
// }

// let user = prompt('enter your number');
// evenoddnumber(user);

// write the function to convert the given dimensional array into noraml array.

// function twoDimenstionalArray(){
//     let dimenstionalarray = [ [1,0,2,3] , [0,1,3,4], [0,5,1,6], [0,7,8,1]];
//     for (let i = 0; i < dimenstionalarray.length; i++) {
//         for (let j = 0; j < dimenstionalarray[i].length; j++) {
//             console.log(dimenstionalarray[i][j]);
//         }
//     }
// }
// twoDimenstionalArray();

// wrhte a function to find secondhihgestvalue.

// function findSecondHighestValue() {
//     let arr = [1, 2, 3, 4, 5, 6, 19, 20];
//     let secondhighest = arr[0];
//     let highestValue = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < highestValue) {
//             secondhighest = highestValue;
//             highestValue = arr[i];
//         } else if (arr[i] > highestValue && arr[i] < secondhighest) {
//             secondhighest = arr[i];
//         }
//     }
//     return secondhighest;
// }

// console.log(findSecondHighestValue()

// write a function to count word in the string.

// function countWord(user) {
//     let count = 0;
//     let emptystring = "";
//     for (let i = 0; i < user.length; i++) {
//         if (user[i] == " ") {
//             emptystring += user[i];
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }

// let user = prompt('enter your string');
// console.log(countWord(user));

// write a function to count word and character.

// function wordsAndCharacterCount(user) {
//     let count = 1;
//     for (let i = 0; i <= user.length; i++) {
//         if (user[i] == " ") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// let user = prompt('enter your string');
// console.log(wordsAndCharacterCount(user));

// write the function to check the given string is palidrom return true otherwise return false.

// function Palindromfunction() {
//     let string = "nurses run";
//     let removespace = string.split(" ").join('');
//     let newstring = "";
//     for (let i = removespace.length - 1; i >= 0; i--) {
//         newstring += removespace[i];
//     }
//     if (removespace == newstring) {
//         console.log('this is palindrom string')
//     } else {
//         console.log('this is not palindrom')
//     }
// }

// console.log(Palindromfunction());

// write the function to find smallest word in the given string.

// function sameLetterFind() {
//     let string = "nursrun";
//     for (let i = 0; i < string.length / 2; i++) {
//         if (string[i] != string[string.length - 1 - i]) {
//             console.log('this is not palimdrom');
//             return false;
//         }
//     }
//     console.log('this is palimdrom');
//     return true;
// }

// sameLetterFind();


// write a function to count word but using user.

// function Countwordlength(user) {
//     let result = [];
//     let removespace = user.split(" ");
//     for (let i = 0; i < removespace.length; i++) {
//         result.push(removespace[i].length)
//     }
//     return result;
// }
// let user = prompt('enter your string')
// console.log(Countwordlength(user));

// write the function to find priemfactor

// function primefactor() {
//     let number = 256;
//     let result = [];
//     for (let i = 2; i <= 100; i++) {
//         if (number % i == 0) {
//             result.push(i);
//             number = number / i;
//             i--;
//         }
//     }
//     return result;
// }

// console.log(primefactor());

// write the function to find of amount of coin

// function amountTocoins(num1, arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (num1 >= arr[i]) {
//             num1 = num1 - arr[i];
//             result.push(arr[i]);
//             // i--;
//         }
//     }
//     return result;
// }

// console.log(amountTocoins(38, [25, 10, 5, 2, 1]));

// write the function to find arm number.

// function ArmNumber() {
//     let number = 371;
//     let value = number;
//     let sum = 0;
//     let resulte = [];
//     while (number > 0) {
//         resulte.push(number % 10);
//         number = number / 10 | 0;
//     }
//     for (let i = 0; i < resulte.length; i++) {
//         let multiply = resulte[i] ** 3;
//         sum = sum + multiply;
//     }
//     return (sum == value) ? "this is arm number" : "this is not arm number"
// }
// console.log(ArmNumber());

// write a function and print star user nested loop.

// function printStar() {
//     for (let i = 0; i < 5; i++) {
//         for (let j = 0; j <= i; j++) {
//             document.write('* ')
//         }
//         document.write('<br>')
//     }
// }

// printStar();

// wrie a function to find HC Fnumber.

// function findHCF(num1, num2) {
//     let hcf = num1;
//     while (num1 % hcf != 0 || num2 % hcf != 0) {
//         hcf--;
//     }
//     return hcf;
// }
// console.log(findHCF(28, 32));

// write the function to find the LCM number.

// function findLCM(num1, num2, num3) {
//     let lcm = num1;
//     while (lcm % num1 != 0 || lcm % num2 != 0 || lcm % num3 != 0) {
//         lcm++;
//     }
//     return lcm;
// }
// console.log(findLCM(12, 6, 18));

// write the function to the given convert into reverse and uppercase

// function reverseAndUppercase(user){
//     let result = '';
//     for (let i = user.length - 1; i >= 0; i--) {
//         result += user[i].toUpperCase();
//     }
//     return result;
// }

// let user = prompt('enter your string');
// console.log(reverseAndUppercase(user));

// write the function to find the given string capitalize each letter of word

// function toCapitalizeString() {
//     let string = "hello world how are you";
//     let breakstring = string.split(" ");
//     for (let i = 0; i < breakstring.length; i++) {
//         let word = breakstring[i];
//         let CapitalizeString = word.charAt(0).toUpperCase() + word.slice(1);
//         breakstring[i] = CapitalizeString;
//     }
//     let addstring = breakstring.join(" ");
//     return addstring;
// }

// console.log(toCapitalizeString())

// write the function to capitalize the each letter of word.

// function toCapitalizeArray() {
//     let arr = ['nawaz', 'danish', 'rahul', 'fayyaz'];
//     for (let i = 0; i < arr.length; i++) {
//         let words = arr[i];
//         let capitalize = words.charAt(0).toUpperCase() + words.slice(1);
//         arr[i] = capitalize;
//     }
//     let result = arr;
//     return result;
// }

// console.log(toCapitalizeArray());

// write a function to find temperatureConverter.

// function TemperatueConverter(user) {
//     let c;
//     c = ((user - 32) * 5 / 9).toFixed(2);
//     console.log(c)
// }

// let user = prompt('enter your number')

// console.log(TemperatueConverter(user));

// C = (F − 32) × 5⁄9

// write the function to check eqquation

// function Equationfunction(user){
//     let f;
//     f = user*(9 / 5) + 32;
//     console.log(f)
// }

// let user = prompt('enter your number');
// console.log(Equationfunction(user));

// F = C(9⁄5) + 32

// write a function implemant Hero's formula in the given value

// function herosFormula(){
//     let a = 6;
//     let b = 9;
//     let c = 5;
//     let s = (a + b + c) / 2;
//     let area = Math.sqrt(s*(s - a) * (s - b) * (s - c));
//     return area;
// }

// console.log(herosFormula());

// writ the function to find areaofTraingle

// function areaOfTraingle(){
//     let b = 10;
//     let c = 8;
//     let theta = 60;
//     let area = (b * c / 2) * Math.sin(3.14 / 3);
//     return area;
// }

// console.log(areaOfTraingle());

// write a function to fine x value.

// function findXValue(){
//     let a = 4;
//     let b = 5;
//     let c = 6;
//     let addsValue =  (a + b + c) * 8;
//     let secondstep = (a + b + c) * 4 + (a + c) * 3;
//     let thirdstep = addsValue - secondstep;
//     return thirdstep / c;
// }

// console.log(findXValue());

// write a function to find averageofmarks

// function averagOfMarks(){
//     let math = 70;
//     let science = 89;
//     let chemistry = 65;
//     let english = 95;
//     let addsubject = (math) + (science) + (chemistry) + (english);
//     return addsubject / 4;
// }

// console.log(averagOfMarks());

// write a function to find average of array

// function averageOfArray() {
//     let arr = [45, 67, 85, 34, 66, 34, 72, 90, 100, 43, 78];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return (sum / arr.length).toFixed(2);
// }
// console.log(averageOfArray());

// write a function to find areof percentage

// function averageOfPercentage() {
//     let math = 78;
//     let hindi = 80;
//     let science = 89;
//     let english = 65;
//     let divideMarks = (math) + (hindi) + (science) + (english);
//     let totalmarks = 375;
//     return divideMarks / totalmarks * 100;
// }

// console.log(averageOfPercentage());

// write very simple function to subtract two number

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// // console.log(subtract(10, 20))
// console.log(subtract(20, subtract(10, 6)));

// write a function to find asending order in ther given string

// function asendingOrder() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }
//     }
// }

// console.log(asendingOrder());

// write a function to find pending work.

// function PendingWork(){
//     let a = 6;
//     let b = 3;
//     let c = 4;
//     let value = 60;
//     let firststep = (a + b + c) * 2;
//     let secondstep = (b + c) * 2;
//     let subtract = value - firststep - secondstep;
//     return subtract / c;
// }

// console.log(PendingWork());

// wriete a function to given value and find grades

// function gradesValue(user) {
//     if (user <= 100 && user >= 80) {
//         console.log('grade A')
//     } else if (user <= 79 && user >= 60) {
//         console.log('grade B');
//     } else if (user <= 59 && user >= 40) {
//         console.log('grade C')
//     }
// }

// let user = prompt('enter your number');
// gradesValue(user);

// write a function to find percentage

// function findpercetage() {
//     let number = [56, 87, 90, 61, 78];
//     let sum = 1;
//     let totalmarks = 400;
//     for (let i = 0; i < number.length; i++) {
//         sum = sum + number[i];
//     }
//     return sum / totalmarks * 100;
// }

// console.log(findpercetage());

// write a function to find cubes one to ten

// function findCubeOneToTen() {
//     let result = [];
//     let i = 1;
//     while (i <= 10) {
//         result.push(i * i);
//         i++;
//     }
//     return result;
// }

// console.log(findCubeOneToTen());

// write a function to get value given of elem

// function first(arr, elem) {
//     let newarr = []
//     if (elem == null) {
//         newarr.push(arr[0]);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (i < elem) {
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }
// console.log(first([7, 9, 0, 2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], -3));
// console.log(first([7, 9, 0, -2], 6));

// write a function to find the leap year leap year means whoe divided 4.

// function LeapYear() {
//     let result = [];
//     for (let i = 1980; i <= 2023; i++) {
//         if (i % 4 == 0 && i % 100 != 0 && i % 400 != 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log(LeapYear());

// write a simpel function to add tw number

// function addnum(num1, num2) {
//     return num1 + num2;
// }

// let number = addnum(4, 6)

// console.log(number)

// write a function to find even and odd number

// function evenNumber(num) {
//     if (num % 2 === 0) {
//         return `${num} is even number`
//     } else {
//         return `${num} is odd number`
//     }
// }
// let arr = [2, 3, 4, 5, 6, 8]
// for (let j = 0; j < arr.length; j++) {
//     console.log(evenNumber(arr[j]))
// }

// write a function day dayname if day is y to print the dayanme sunday.

// let day = 7;
// let dayname;

// switch (day) {
//     case 0:
//         dayname = 'sunday'
//         break;
//     case 1:
//         dayname = "Monday";
//         break;
//     case 2:
//         dayname = "tuesday";
//         break;
//     case 3:
//         dayname = "wednesday";
//         break;
//     case 4:
//         dayname = "thuesday";
//         break;
//     case 5:
//         dayname = "friday";
//         break;
//     case 6:
//         dayname = 'saturday';
//         break;
//     default:
//         dayname = "undefined day";
//         break;
// }

// console.log(dayname)

// write a function fo find the even and  odd number using swicth case statment

// let number = 10;
// let numbers;

// switch (number % 2) {
//     case 0:
//         console.log('the number is even')
//         break;
//     default:
//         console.log('the number is odd')
//         break;
// }

// write a function to find country short name just like countrycode "USA"and countryname United state America

// let countrycode = 'USA';
// let countryname;

// switch (countrycode) {
//     case 'UK':
//         countryname = "United Kingdom";
//         break;
//     case 'USA':
//         case 'US':
//         countryname = "United State Amrica";
//         break;
//     case "UAE":
//         countryname = "Dubai"
//         break;
//     default:
//         countryname = "Undefined Country";
//         break;
// }

// console.log(countryname);

// write a function to find monthname and days just like days 28 monhtname febuary to using swicth case statment

// let monthname = "Febuary";
// let days;

// switch (monthname) {
//     case 'January':
//     case 'March':
//     case "May":
//     case "July":
//     case "August":
//     case "October":
//     case "December":
//         days = 31;
//         break;
//     case "Aprile":
//     case "june":
//     case "September":
//     case "November":
//         days = 30;
//         break;
//     case "Febuary":
//         days = 28;
//         break;
//     default:
//         days = "Invalid";
//         break;
// }

// console.log(days)

// write a function to find vowel using switch case statment

// let letter = 'A';
// letter = letter.toLowerCase();

// switch (letter) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log('this is vowel letter')
//         break;

//     default:
//         console.log('this is not vowel');
//         break;
// }

// write a function to check the givem number is positive and negative using swicth case statment

// let number  = -5;

// switch (true) {
//     case number > 0:
//         console.log('number is positive')
//         break;
//     case number < 0:
//         console.log('number is nugative');
//         break;
//     default:
//         console.log('number is zero');
//         break;
// }

// write a function to find the grads using switch case statment

// let marks = 80;
// let grades;

// switch (true) {
//     case  marks <= 100 && marks >= 80:
//         grades = "Your grade is A";
//         break;
//     case marks < 80 && marks >= 70:
//         grades = "Your Grade is B";
//         break;
//     case marks < 70 && marks >= 60:
//         grades = "Your grade is c";
//         break;
//     case marks < 60 && marks >= 40:
//         grades = "your grade is d";
//         break;
//     default:
//         grades = "you are fail";
//         break;
// }
// console.log(grades)

// write a function to find the fruitcolor  and frruits using switch case statment.

// let fruitcolor = "orange";
// let fruit;

// switch (fruitcolor) {
//     case 'green':
//         fruit = "waterMelon"
//         break;
//     case "yellow":
//         fruit = "banana";
//         break;
//     case "red":
//         fruit = "apple";
//         break
//     default:
//       fruit = "undefined fruit"
//         break;
// }

// console.log(fruit)

// write a function to check the given month and season to using switch case statment.

// let month = 12;
// let season;

// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         season = "Winter Season";
//         break;
//     case 4:
//     case 5:
//     case 6:
//         season = "Spring Season";
//         break
//     case 7:
//     case 8:
//     case 9:
//         season = "Summer Season";
//         break
//     case 10:
//     case 11:
//     case 12:
//         season = "Autumn Season"
//         break;
//     default:
//         season = "Undefined Season";
//         break;
// }

// console.log(season);

// write a function to find the direction just like example firection north "you are heading towards north" using switch case statment.

// let direction = "South";
// let side;

// switch (direction) {
//     case "North":
//         side = "You are heading towards North";
//         break;
//     case 'South':
//         side = "You are heading towards South";
//         break;
//     case 'East':
//         side = "You are heading towards East";
//         break;
//     case 'West':
//         side = "You are heading towards West";
//         break;

//     default:
//         side = "undefined Side"
//         break;
// }

// console.log(side)

// let number  = 13;

//  write a simpele functionto multiply two numbers

// function multiply(num1, num2) {
//     if (num2 == null) {
//         return num1 * num1;
//     }
//     return num1 * num2;
// }

// console.log(multiply(50))
// console.log(multiply(2, 5))

// write a function if user given 3 number to print 1 2 3.

// function Numbervalue(arr, value){
//     if(value >= arr.length){
//         return arr;
//     } else if(value == null || value <= 0){
//        return arr.shift();
//     }
//     let getvalue = arr.slice(0, value);
//     return getvalue;
// }

// console.log(Numbervalue([1, 2, 3, 4, 5], 3));

// write a function to find the numbers if value give just like 2 to print 4, 5

// function getFirstValue(arr, value) {
//     if (value >= arr.length) {
//         return arr;
//     } else if (value <= 0 || value == null) {
//         return arr.pop();
//     }
//     return arr.slice(arr.length - value);
// }

// console.log(getFirstValue([1, 2, 3, 4, 5], 2));

// write a function to reverse number

// function reverseNumberEl(number){
//   let result = 0;
//   while (number > 0){
//     result = (result * 10) + (number % 10);
//     number = number / 10 | 0;
//   }
//   return result;
// }

// console.log(reverseNumberEl(5291029))

// write a function to find the longest element in the string.

// function findLongestEl(string) {
//     let brekstring = string.split(" ");
//     let longest = "";
//     console.log(longest.length)
//     // console.log(brekstring)
//     for (let i = 0; i < brekstring.length; i++) {
//       console.log(brekstring[i].length);
//     //    if(longest.length < brekstring[i].length){
//     //      longest = brekstring[i];
//     //    }
//     }
//     return longest;
// }

// console.log(findLongestEl("Something  ne in Coding"));

// writea function to find which words startd vowel to print the words just like "Alice", "Eve", "oscar".

// function vowelEl(namelist) {
//     let vowel = 'a, e, i, o, u';
//     let result = [];
//     for (let i = 0; i < namelist.length; i++) {
//         let firstvalue = namelist[i][0].toLowerCase();
//         if (vowel.includes(firstvalue)) {
//             result.push(namelist[i])
//         }
//     }
//     return result
// }

// console.log(vowelEl(['Alice', 'Bob', 'Eve', 'Oscar', 'Zara']));

// write a function to find area of rectangle.

// function areaOfRctangle() {
//     let arr = [1, 1]
//     let result = [];
//     for (let i = 1; i <= 100; i++) {
//       result.push(arr[i - 1] + arr[i + 2])
//     }
//     return result;
// }


// console.log(areaOfRctangle());

// write a function to get common element in the array.

// function getCommenEl(arr1, arr2) {
//     let commonEl = [];
//     for (const element of arr1) {
//         if (arr2.includes(element) && !commonEl.includes(element)) {
//             commonEl.push(element);
//         }
//     }
//     return commonEl;
// }

// console.log(getCommenEl([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))

// write a function to print 1 to ten using two loops.

// function printTableOneToTen(num){
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num*i}`)
//     }
// }
// function myfunction(start, end){
//     for (let j = start; j <= end; j++) {
//         printTableOneToTen(j);
//     }
// }

// myfunction(1, 10)

// write a function to find sum of two dimensional array.

// function sumTWODimenstionalArray() {
//     let sum = 0;
//     let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum = sum + arr[i][j];
//         }
//     }
//     return sum;
// }
// console.log(sumTWODimenstionalArray());

// write a function to find arm number.

// function ArmStrongNumber() {
//     let number = 371;
//     let value = number;
//     let sum = 0;
//     let result = [];
//     while (number > 0) {
//         result.push(number % 10);
//         number = number / 10 | 0;
//     }
//     for (let i = 0; i < result.length; i++) {
//         sum = sum + result[i] ** 3;
//     }
//     if(value == sum){
//        console.log('this is armstring number')
//     } else {
//         console.log('this is not armstring number')
//     }
// }

// console.log(ArmStrongNumber());

// write a function to divisible to number.

// function isDivisibleByBoth(Number) {
//     if (Number % 3 == 0 && Number % 5 == 0) {
//         console.log('this is divisible by both')
//     } else {
//         console.log('this is not divisible by both')
//     }
// }

// let inputNumber = 15;
// console.log(isDivisibleByBoth(inputNumber))

// write a function to print diamond pattern

// function diamonPattern() {
//     for (let i = 0; i <= 10; i++) {
//         for (let j = i; j <= 5; j++) {
//             document.write("* ")
//         }
//         document.write("<br>")
//     }
// }

// console.log(diamonPattern());

// write hte largest Element but remember you have three argument.

// function largestEl(a, b, c) {
//     if (a > b && b < a && a > c) {
//         return a;
//     } else if (b > a && a < b && c < a && c < b) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(largestEl(21, 22, 23))

// write a function to find diffrence last element

// function diffLastEl(a, b, c) {
//     let avalue = a % 10;
//     let bvalue = b % 10;
//     let cvalue = c % 10;
//     if (a % 10 == b % 10 && a % 10 == c % 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(diffLastEl(77, 27, 37))

// write a simple function to divide element.

// function DivideEl(a, b) {
//     if (a % 7 == 0 && b % 11 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(DivideEl(77))

// write a function to find maxmimum and minimum element

// function findMaxAndMinEl(arr){
//     let small = Math.min();
//     let big = Math.max();
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < small){
//            small = arr[i];
//         }
//         if(arr[i] > big){
//             big = arr[i];
//          }
//     }
//     console.log(big, small)
// }
// console.log(findMaxAndMinEl([1, 2, 3, 4, 5]))

// write a function to convert a dimensional array into normal array

// function arrflating(arr) {
//     let result = [];
//    for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             result.push(arr[i][j]);
//         }
//    }
//    return result;
// }

// console.log(arrflating([[1, 2], [3, 4], [5, 7]]));

// write a function to find missing element in the array.

// function missingEl(arr, arr1) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr1.length; j++) {
//             if (arr[i] !== arr1[j]) {
//                 result.push(arr1[j]);
//             }
//         }
//     }
//     return result;
// }

// console.log(missingEl([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// write a function to find ferquent element in the array.

// function findFerquentEl(arr) {
//     let counter = 1;
//     let most = 0;
//     let item;
//     for (let i = 0; i < arr.length; i++) {
//         counter = 1;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] == arr[i]) {
//                 counter++;
//             }
//         }
//         if (counter < most) {
//             counter = most;
//             item = arr[i];
//         }
//         console.log(counter)
//     }
//     return counter;
// }

// console.log(findFerquentEl([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

// write a function to check which element how many time present in the array.

// function FerquentEl(arr) {
//     let counts = {};
//     for (const item of arr) {
//         if (counts[item]) {
//             counts[item]++;
//         } else {
//             counts[item] = 1;
//         }
//     }
//     return counts;
// }

// console.log(FerquentEl([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))
