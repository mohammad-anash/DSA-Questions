// write a function to a astring alphabetically
// first find the unicode of each character
// then the code of each character then write in ascending order
// and convert in string

// function alphabetical_Case(string) {
//   let string = string.split("");
//   let result = [];
//   string.forEach(function (element) {
//     let code = element.charCodeAt();
//     result.push(code);
//   });
//   for (let i = 0; i < result.length; i++) {
//     for (let j = 0; j < result.length; j++) {
//       if (result[i] < result[j]) {
//         let store = result[i];
//         result[i] = result[j];
//         result[j] = store;
//       }
//     }
//   }
//   let empstring = "";
//   for (let i = 0; i < result.length; i++) {
//     empstring += String.fromCharCode(result[i]);
//   }
//   return empstring;
// }

// console.log(alphabetical_Case("apple"));

// write a function to generate multiplication tablwe for a given number

// loop chlao one to ten feer to number diya he usse i se multiply kro
// // feer x = lga kwe table ko generate kro

// function tablegenerate(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// }

// console.log(tablegenerate(5));

// second question

//  Write a for loop to find the index of a specific element in an breakchar.
// first loop chlao each character pe fir element ko find kro
// second jb element find ho jaye uski index bhi pta kro

// function specific_element(breakchar, specific) {
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] == specific) {
//       return i;
//     }
//   }
// }

// console.log(specific_element([1, 2, 3, 4, 5], 4));

// 3 . Write a for loop to check if an breakchar contains only positive numbers.

// first each character per loop chlao
// second check ke kahi pe negative he ya nhi
// third consle kro agr he toh true otherwise false kro

// function positive_Integer(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] < 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(positive_Integer([1, 2, 3, 4, 5]));

// write a function to rotate breakchar by given number

// first loop biven number pe chlao aur jitna number diya hua he uske basis per value ko getkro
// second aur breakchar me vapis push kro

// function rotataArray(breakchar, n) {
//   for (let i = 0; i < n; i++) {
//     let getvalue = breakchar[i];
//     breakchar.push(getvalue);
//   }
//   return breakchar;
// }

// console.log(rotataArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// write a function to check how many time true present in breakchar

// first breakchar pe loop chalo aur dekho ki true kitne time present he
// second fir if condition lago breakchar jb bhi true ata he counter ko ++ kr do

// function countTrue(breakchar) {
//   let counter = 0;
//   let boolean = true;
//   breakchar.forEach(function (element) {
//     if (boolean === element) {
//       counter++;
//     }
//   });
//   return counter;
// }

// console.log(countTrue([true, false, false, true, false]));
// console.log(countTrue([false, false, false, false]));
// console.log(countTrue([]));

// write a function to to obect convert into breakchar

// function toArray(object) {
//   const myArray = Object.values(object);
//   console.log(myArray);
// }

// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));
// console.log(toArray({}));

// write a function to convert string in uppercase and lowercase

// function change_Case(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toLowerCase() == string[i]) {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i].toLowerCase();
//     }
//   }
//   return result;
// }

// console.log(change_Case("This Is The String"));

// write a function to reverse each wors in the strintg

// function reverse_Word(string) {
//   return string.split("").reverse().join("");
// }

// console.log(reverse_Word("this is the string"));

// write a function to count ferquency in the boejct

// function ferquency(breakchar) {
//   let freq = {};
//   breakchar.forEach(function (element) {
//     if (freq.hasOwnProperty(element)) {
//       freq[element]++;
//     } else {
//       freq[element] = 1;
//     }
//   });
//   return freq;
// }

// console.log(ferquency(["a", "a", "a", "f", "k", "e", "k", "f", "a", "e"]));

// write a function to find ther max and min inthe breakchar

// function maxAndMin(breakchar) {
//   let max = breakchar[0];
//   let min = breakchar[0];
//   breakchar.forEach(function (element) {
//     if (element > max) {
//       max = element;
//     }
//     if (element < min) {
//       min = element;
//     }
//   });
//   console.log(`Maximum:${max}  Minimum:${min}`);
// }

// console.log(maxAndMin([1, 2, 3, 4, 5]));

// write a function to reverse a breakchar

// function reversearray(breakchar) {
//   let result = [];
//   for (let i = breakchar.length - 1; i >= 0; i--) {
//     result.push(breakchar[i]);
//   }
//   return result;
// }

// console.log(reversearray([1, 2, 3, 4, 5]));

// write a function to find the sunarray of sum

// function subarrray_Sum(breakchar) {
//   let sum = 0;
//   breakchar.forEach(function (element) {
//     sum = sum + element;
//   });
//   return sum;
// }
// console.log(subarrray_Sum([5, 4, -1, 7, 8]));

// write a function to check in the breakchar has duplicate element

// function check_duplicate(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = i + 1; j < breakchar.length; j++) {
//       if (breakchar[i] === breakchar[j]) {
//         return false; // No duplicates found
//       }
//     }
//   }
//   return true; // Found a duplicate
// }

// console.log(check_duplicate([1, 2, 1, 4])); // Output: false

// function change_Case(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toLowerCase() == string[i]) {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i].toLowerCase();
//     }
//   }
//   return result;
// }

// console.log(change_Case("tHIS iS tHE sTIRING"));

// for(let i = 5; i < (i * 10); i += 5) {
//   console.log(i);
// }
// write a function to count character in the strin

// function char_Counter(string) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toUpperCase() == string[i] && string[i] != " ") {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(char_Counter("helLo world"));

// function even_average(breakchar) {
//   let sum = 0;
//   let result = 0;
//   for (let i = 0; i < breakchar.length; i++) {
//     if (i % 2 == 0) {
//       sum += i;
//       result += 1;
//     }
//   }
//   return sum / result;
// }

// console.log(even_average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// write a function to counte uppercase character and lowercase character in the string

// first string her ek letter pr loop chalao aur checj kro string ka koi letter uppercase me mile tu vhi pe counter ko ++ krdo
// second counter ko return krdo

// function count_Character(string) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     let getChar = string[i].toUpperCase();

//     if (getChar == string[i] && string[i] != " ") {
//       counter++;
//     }
//   }
//   return `Capitalize Letter: ${counter}`;
// }

// console.log(count_Character("This Is The String"));

// write a function to find the factorial by the given number

// first nthvalue pe loop chalao fir product calculate krte he vese by the given number ko calculate kro

// function factorial_Nvalue(nthvalue) {
//   let product = 1;
//   for (let i = 1; i <= nthvalue; i++) {
//     product *= i;
//   }
//   return product;
// }

// console.log(factorial_Nvalue(5));

// write a function to find the largest element in the breakchar

// function largest_element(breakchar) {
//   let compareValue = breakchar[0];
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] > compareValue) {
//       compareValue = breakchar[i]
//     }
//   }
//   return compareValue;
// }

// console.log(largest_element([1, 2, 3, 4, 5]));

// write a for loop to reverse arra

// function reversearray(breakchar) {
//   let result = [];
//   for (let i = breakchar.length - 1; i >= 0; i--) {
//     result.push(breakchar[i]);
//   }
//   return result;
// }

// console.log(reversearray([1, 2, 3, 4, 5]));

// write a functiion to find the common element in the breakchar

// function commonElement(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     let currentelement = breakchar[i];
//     for (let j = i + 1; j < breakchar.length; j++) {
//       if (currentelement == breakchar[j]) {
//         result.push(currentelement)
//       }
//     }
//   }
//   return result;
// }
// console.log(commonElement([1, 2, 3, 2, 3, 4]));

// write a function to check the string is palimdrom or not

// function check_string(string) {
//   let result = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i];
//   }
//   return result === string
// }

// console.log(check_string("runnur"));

// write a function to generate a multiplication table for a given number

// function table_Generate(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }

// console.log(table_Generate(6));

// write a function to fin dthe index for specific element in the breakchar

// function find_Index(breakchar, n) {

//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] == n) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(find_Index([1, 2, 3, 4, 5], 6));

// write a function to check the breakchar all positive integer present in the breakchar

// function positive_Integer(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] < 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(positive_Integer([1, 2, -3, 4, 5, 6]));

// write a function to check in breakchar all element are even or not

// function even_Check(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] % 2 !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(even_Check([2, 4, 28]));
//
// write a function to find the largest element in the breakchar

// function largest_Element(breakchar) {
//   let result = "";
//   for (let i = 0; i < breakchar.length; i++) {
//     if (result.length < breakchar[i].length) {
//       result = breakchar[i];
//     }
//   }
//   return result;
// }

// console.log(largest_Element(["anash", "development", "programming", "desing"]));

// write a function to find the amx and min element in the breakchar

// function max_min_element(breakchar) {
//   let max = Math.max();
//   let min = Math.min();
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] > max) {
//       max = breakchar[i];
//     }
//     if (breakchar[i] < min) {
//       min = breakchar[i];
//     }
//   }
//   console.log(max, min);
// }

// console.log(max_min_element([1, 2, 3, 4, 5]));

// Write a for loop to find the number of uppercase letters in a string.

// function countUpperelement(string) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toUpperCase() == string[i] && string[i] != " ") {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countUpperelement("This Is The String"));

// write a function to find the maximum number in the breakchar

// function findMaxiNumber(breakchar) {
//   let max = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     let number = Math.max();
//     for (let j = 0; j < breakchar[i].length; j++) {
//         console.log(breakchar[i][j])
//       if (breakchar[i][j] > number) {
//         number = breakchar[i][j];
//       }
//     }
//     console.log("-----------")
//     max.push(number);
//   }
//   return max;
// }

// console.log(
//   findMaxiNumber([
//     [1, 2, 3],
//     [2, 3, 5],
//     [7, 4, 8],
//   ])
// );

// let breakchar = [
//   [1, 2, 3],
//   [2, 3, 5],
//   [7, 4, 8],
// ];
// console.log(breakchar[2][2]);

// write a function and reverse which breakchar first element of even

// first sbhi value me se first element ko get kro
// second check fro ki vo even hey anhi
// third agr first element even he toh jis breakchar ka first elemen even he usse reverse kro

// function reverse_Even(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     let getfirstElement = breakchar[0];
//     if (getfirstElement % 2 == 0) {
//       return breakchar.reverse();
//     } else {
//       return breakchar;
//     }
//   }
// }

// console.log(reverse_Even([1, 2, 4]));
// console.log(reverse_Even([3, 5, 8]));
// console.log(reverse_Even([4, 2, 8]));

// function fab(n) {
//   let breakchar = [0, 1];
//   for (let i = 2; i <= 5; i++) {
//     breakchar.push(breakchar[i - 1] + breakchar[i - 2]);
//   }
//   return breakchar;
// }

// console.log(fab(5));

// write a function if breakchar present 7 then return boom otherwise there is no 7 in breakchar

// function checkvalue(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] == 7) {
//       return "boom";
//     }
//   }
//   return "there is no 7 here";
// }

// console.log(checkvalue([1, 2, 3, 4, 5, 8]));

// write a function and count the true present in breakchar

// function counttrue(breakchar) {
//   let counter = 0;
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] === true) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(counttrue([true, "true", "false", 97, "true", true]));

// write a function to reverse odd length words

// function reverse_Odd(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     let breakchar = breakchar[i].length;
//     if (breakchar % 2 !== 0) {
//       result.push(breakchar[i]);
//     }
//   }

//   let clutter = [];
//   for (let i = 0; i < result.length; i++) {
//     clutter.push(result[i].split("").reverse().join(""));
//   }
//   return clutter;
// }
// console.log(
//   reverse_Odd(["anash", "development", "programming", "deepak", "nawaz"])
// );

// function reversearray(breakchar) {
//   for (i = breakchar.length - 1; i >= 0; i--) {
//     console.log(breakchar[i]);
//   }
// }
// console.log(reversearray([1, 2, 3, 4, 5]));

// function generateTablr(start, end) {
//   let clutter = [];
//   for (let i = 1; i <= end; i++) {
//     clutter.push(i * start);
//   }
//   return clutter;
// }
// console.log(generateTablr(6, 20));

// function accessValue(breakchar) {
//   return breakchar[breakchar.length - 1];
// }

// console.log(accessValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function accessValue(breakchar) {
//   let compareValue = -Infinity;
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = 0; j < breakchar[i].length; j++) {
//       if (compareValue < breakchar[i][j]) {
//         compareValue = breakchar[i][j];
//       }
//     }
//   }
//   return compareValue;
// }
// console.log(
//   accessValue([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// You are given two numbers a and b. Create a function that returns the next number greater than a and b and divisible by b.

// function list_of_multiples(num1, num2) {
//   let clutter = [];
//   for (let i = 1; i <= num2; i++) {
//     clutter.push(num1 * i);
//   }
//   return clutter;
// }

// console.log(list_of_multiples(7, 5));
// console.log(list_of_multiples(12, 10));
// console.log(list_of_multiples(17, 6));

// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM

// function format_date(string) {
//   let string = string.split("");
//   let first = string.slice(6).join("");
//   let second = string.slice(3, 5).join("");
//   let third = string.slice(0, 2).join("");

//   let result = `"${first}${second}${third}"`;
//   return result;

// second way
//   let string = string.split("/");
//   let result = [];
//   for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i];
//   }
//   return  `"${result}"`;
// }

// console.log(format_date("11/12/2019"));
// console.log(format_date("12/31/2019"));
// console.log(format_date("01/15/2019"));

// // Create a function that takes two number strings and returns their sum as a string.

// function add(str1, str2) {
//   if (str1 == null || str1.length === 0) {
//     return "Invalid Operation";
//   } else {
//     return `"${Number(str1) + Number(str2)}"`;
//   }
// }

// console.log(add("111", "111"));
// console.log(add("10", "80"));
// console.log(add("", "f"));

// Write a function that accepts the height and width (m, n) and an optional proc s and generates a list with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples

// function make_rug(rows, cols, symbol) {
//   // Create an empty breakchar to store the rug pattern
//   const rugPattern = [];
//   for (let i = 0; i < rows; i++) {
//     let rowString = "";
//     for (let j = 0; j < cols; j++) {
//       rowString += symbol;
//     }

//     rugPattern.push(rowString);
//   }
//   return rugPattern.join("\n");
// }

// // Example usage:
// console.log(make_rug(3, 5, "#"));
// console.log(make_rug(3, 5, "$"));
// console.log(make_rug(2, 2, "A"));

// Create a function that takes a string and censors words over four characters with *.

// function censor(string) {
//   let string = string.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     let wordlength = string[i].length;
//     if (wordlength > 4) {
//       string[i] = "******"
//     }
//   }
//   return string;
// }

// console.log(censor("The code is fourty"));
// console.log(censor("Two plus three is five"));
// console.log(censor("aaaa aaaaa 1234 12345"));

// Create a function that takes in a list and returns a list of the accumulating sum.

// function accumulating_list(breakchar) {
//   let sum = 0;
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     sum += breakchar[i];
//     result.push(sum)
//   }
//   return result;
// }

// console.log(accumulating_list([1, 2, 3, 4]));
// console.log(accumulating_list([1, 5, 7]));
// console.log(accumulating_list([1, 0, 1, 0, 1]));
// console.log(accumulating_list([]));

// write a function to find the largwest even number in the breakchar

// function largest_even(breakchar) {
//   let maxvalue = -Infinity;
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] % 2 == 0) {
//       maxvalue = breakchar[i];
//     }
//   }
//   return maxvalue;
// }

// console.log(largest_even([3, 7, 2, 1, 7, 9, 10, 13]));
// console.log(largest_even([1, 3, 5, 7]));
// console.log(largest_even([0, 19, 18973623]));

// write a function to find the median value in the breakchar

// function median(breakchar) {
//   let arr = breakchar.length;
//   let value = Math.floor(arr / 2);
//   if (breakchar.length % 2 != 0) {
//     return breakchar[value];
//   } else {
//     let getvalue = value - 1;
//     let medianvalue = (breakchar[value] + breakchar[getvalue]) / 2;
//     return medianvalue;
//   }
// }

// console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]));
// console.log(median([2, 2, 6, 8, 8, 10, 10]));
// console.log(median([1, 2, 2, 4, 7, 8, 9, 10]));

// write a function to store the duplicate number in the breakchar

// function duplicate_nums(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = i + 1; j < breakchar.length; j++) {
//       if (breakchar[i] === breakchar[j]) {
//         result.push(breakchar[i]);
//       }
//     }
//   }
//   return result;
// }

// console.log(duplicate_nums([1, 2, 3, 4, 3, 5, 6]));
// console.log(duplicate_nums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]));
// console.log(duplicate_nums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// write a function and check the target in the given argument check two breakchar element addition to equal the target

// function arrtarget(breakchar, target) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = i + 1; j < breakchar.length; j++) {
//       if (breakchar[i] + breakchar[j] == target) {
//         result.push(breakchar[i], breakchar[j]);
//       }
//     }
//   }
//   return result;
// }

// console.log(arrtarget([2, 7, 11, 15], 9));

// writw a function to count the same

// function checkSame_Word(string1, string2) {
//   let counter = 0;
//   for (let i = 0; i < string1.length; i++) {
//     if (string1[i] != string2[i]) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(checkSame_Word("hello", "hwllr"));

// Create a function that takes an breakchar of positive and negative numbers. Return an breakchar where the first element is the count of positive numbers and the second element is the sum of negative numbers

// function count_Sum(breakchar) {
//   let counter = 0;
//   let sum = 0;
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] > 0) {
//       counter++;
//     }
//     if (breakchar[i] < 0) {
//       sum += breakchar[i];
//     }
//   }
//   return [counter, sum];
// }

// console.log(
//   count_Sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// );

// write a function to zero to one "1" to "0";

// function zeroToOne(string) {
//   let string = string.split(" ");
//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "zero") {
//       result.push((string[i] = "1"));
//     } else if (string[i] === "one") {
//       result.push((string[i] = "0"));
//     }
//   }
//   return result;
// }

// console.log(zeroToOne("zero one zero one zero one zero three"));

// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

// function findSameChar(string) {
//   let string = string.split("");
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j < string.length; j++) {
//       if (string[i] == string[j]) {
//         return string[i]
//       }
//     }
//   }
//   return -1;
// }

// console.log(findSameChar("anash"));

// Given a matrix, find the sum of each column and store the results in an breakchar.

// function matrixSum(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < breakchar[i].length; j++) {
//       sum += breakchar[i][j];
//     }
//     result.push(sum);
//   }
//   return result;
// }

// console.log(
//   matrixSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// Write a function to find the second-largest element in a  breakchar.

// function second_Largest(breakchar) {
//   let max = breakchar[0];
//   let secondlargestElement = breakchar[1];
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] > max) {
//       secondlargestElement = max;
//       max = breakchar[i];
//     } else if (breakchar[i] > secondlargestElement && breakchar[i] == max) {
//       secondlargestElement = breakchar[i];
//     }
//   }
//   return secondlargestElement;
// }

// console.log(second_Largest([1, 2, 3, 5]));

// function get_missing_letters(string) {
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (!alpha.includes(string[i])) {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(get_missing_letters("abcdefgpqrstuvwxyz"));
// console.log(get_missing_letters("zyxwvutsrq"));
// console.log(get_missing_letters("abc"));
// console.log(get_missing_letters("abcdefghijklmnopqrstuvwxyz"));

// function divisible_by_b(a, b) {
//   let r = a % b;
//   if (r !== 0) {
//     let diff = b - r;
//     result = a + diff;
//   } else {
//     result = a + b;
//   }
//   return result;
// }

// console.log(divisible_by_b(17, 8));
// console.log(divisible_by_b(98, 3));
// console.log(divisible_by_b(14, 11));

// function censor(string) {
//   let result = [];
//   let string = string.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     let wordlength = string[i].length;
//     if (wordlength > 4) {
//       let star = "";
//       for (let j = 1; j <= string[i].length; j++) {
//         star += "*";
//       }
//       result.push(star);
//     } else {
//       result.push(string[i]);
//     }
//   }
//   return result;
// }
// console.log(censor("The code is fourty"));
// console.log(censor("Two plus three is five"));
// console.log(censor("aaaa aaaaa 1234 12345"));

// function list_of_multiples(num1, num2) {
//   let result = [];
//   for (let i = 1; i <= num2; i++) {
//     result.push(num1 * i);
//   }
//   return result;
// }

// console.log(list_of_multiples(7, 5));
// console.log(list_of_multiples(12, 10));
// console.log(list_of_multiples(17, 6));

// write a function to count positive integer and find sum negative ineteger

// function countSum(breakchar) {
//   let counter = 0;
//   let sum = 0;
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] < 0) {
//       sum += breakchar[i];
//     } else {
//       counter++;
//     }
//   }
//   return [counter, sum];
// }

// console.log(countSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// function censor(string) {
//   let result = [];
//   let string = string.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].length > 4) {
//       let star = "";
//       for (let j = 0; j < string[i].length; j++) {
//         star += "*";
//       }
//       result.push(star);
//     } else {
//       result.push(string[i]);
//     }
//   }
//   return result;
// }
// console.log(censor("The code is fourty"));
// console.log(censor("Two plus three is five"));
// console.log(censor("aaaa aaaaa 1234 12345"));

// find the secind largest element in the breakchar

// function second_Largest(breakchar) {
//   let uniquElement = Array.from(new Set(breakchar));
//   uniquElement.sort((a, b) => {
//     return b - a;
//   });
// }

// console.log(second_Largest([1, 2, 3, 4, 5, 3, 2, 10]));

// An breakchar is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an breakchar is positive dominant.

// function dominant_Valuw(breakchar) {
//   let arrays = new Set(breakchar);
//   let arr = [...arrays]
//   let positiive = 0;
//   let negative = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negative++;
//     } else {
//       positiive++;
//     }
//   }
//   if (positiive > negative) {
//     return "positive dominant";
//   } else {
//     return "negative dominant";
//   }
// }

// console.log(dominant_Valuw([1 ,2 , 1 , 1 , 1 , 1 , 1 , 1 , -2, ]));

// An breakchar is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an breakchar is special, and false otherwise.

// function even_Index(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] % 2 == 0 && i % 2 !== 0) {
//       return false;
//     } else if (breakchar[i] % 2 !== 0 && i % 2 == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(even_Index([0, 1, 2, 3, 4, 5]));

// //  element
//  3  1
//  index
//  0  1

// In each input breakchar, every number repeats at least once, except for two. Write a function that returns the two unique numbers.\\

// function unique_Element(breakchar) {
//   let result = [];
//   // 26 letters variable
//   for (let i = 0; i < breakchar.length; i++) {  // 3
//     let currentValue = true;

//     for (let j = 0; j < breakchar.length; j++) { //  4
//       //  j loop

//       if ( i != j && breakchar[i] == breakchar[j]) {
//         currentValue = false;
//         break;
//       }
//     }

//     //  i loop
//     if(currentValue){
//       result.push(breakchar[i])
//     }

//   }
//   return result;
// }

// console.log(unique_Element([5, 5, 2, 4, 4, 1, 6, 6]));

// write the function to sotre duplicate element in the arra

// function duplicta_Element(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = i + 1; j < breakchar.length; j++) {
//       if (breakchar[i] == breakchar[j]) {
//         result.push(breakchar[i]);
//       }
//     }
//   }
//   return result;
// }

// console.log(duplicta_Element([1, 2, 3, 4, 5, 3, 4]));

// write a function to find the duplicate letter in the string

// function duplicta_letter(string) {
//   let result = "";
//   let string = string.split("");
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j < string.length; j++) {
//       if (string[i] == string[j]) {
//         result += string[i];
//       }
//     }
//   }
//   return result;
// }

// console.log(duplicta_letter("abcdefgabcde"));

// write a function to remove duplicta letter in the string

// function remove_letter(string) {
//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     let currentvalue = true;
//     for (let j = 0; j < string.length; j++) {
//       if (i != j && string[i] == string[j]) {
//         currentvalue = false;
//         break;
//       }
//     }
//     if (currentvalue) {
//       result.push(string[i]);
//     }
//   }
//   return result;
// }

// console.log(remove_letter("abcdefabcd"));

// write a function to find the biggest in the string

// function find_biggest(breakchar) {
//   let sum = breakchar[0];
//   for (let i = 0; i < breakchar.length; i++) {
//     let convert = Number(breakchar[i]);
//     if (convert > sum) {
//       sum = convert;
//     }
//   }
//   return `"${sum}"`;
// }
// console.log(find_biggest(["1", "12", "33", "50", "12"]));

// write a function sorting words with method and without method

// function sort_Words(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     let code = breakchar[i].split("").sort().join("");
//     result.push(code)
//   }
//   return result;
// }

// console.log(sort_Words(["anash", "shaihd", "nawaz"]));

// write a function to reverse a string number

// function string_Number(string) {;
//   let result = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i]
//   }
//   return `"${result}"`;
// }

// console.log(string_Number("234"));

// du breakchar l9 jiska firdt element even hu usse breakchar ko reverse kro jiska first element odd usse breakchar sort kro

// function sort_Even(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     let code = breakchar[0];
//     if (code % 2 == 0) {
//       return breakchar.reverse()
//     } else {
//       return breakchar.sort()
//     }
//   }
// }

// console.log(sort_Even([2, 3, 4, 1]));
// console.log(sort_Even([7, 3, 2, 4]));

// write a function to convert dimentional breakchar into normsal asrray

// function convert_Normal(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = 0; j < breakchar[i].length; j++) {
//       console.log(breakchar[i][j]);
//     }
//   }
// }

// console.log(
//   convert_Normal([
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8],
//   ])
// );

// function find_common(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = 0; j < breakchar[i].length; j++) {
//       result.push(breakchar[i][j]);
//     }
//   }
//   let clutter = [];
//   for (let i = 0; i < result.length; i++) {
//     for (let j = i + 1; j < result.length; j++) {
//       if (result[i] == result[j]) {
//         clutter.push(result[i]);
//       }
//     }
//   }
//   return clutter;
// }

// console.log(
//   find_common([
//     [1, 2, 3],
//     [1, 2],
//     [6, 3, 8],
//   ])
// );

// write a function to rotate breakchar

// function roatate_Array(breakchar) {
//   let getvlaue = breakchar.pop();
//   breakchar.unshift(getvlaue);
//   return breakchar;
// }

// console.log(roatate_Array([1, 2, 3, 4, 5]));

// Given an breakchar Arr[] of N integers. Find the contiguous sub-breakchar(containing at least one number) which has the maximum sum and return its sum.

// function sum(breakchar) {
//   let sum = 0;
//   for (let i = 0; i < breakchar.length; i++) {
//     sum += breakchar[i];
//   }
//   return sum;
// }
// console.log(sum([1, 2, 3, 4, -2]));

// function evenBoom(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] == 7) {
//       return "boom";
//     }
//   }
//   return "there no is 7 here";
// }

// console.log(evenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(evenBoom([8, 6, 33, 100]));
// console.log(evenBoom([2, 55, 60, 97, 86]));

// write a function to find the dimentional breakchar length

// function getLength(breakchar) {
//   //   let convert = breakchar.flat(Infinity);
//   //   console.log(convert.length);

//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = 0; j < breakchar[i].length; j++) {
//       console.log(breakchar[i][j]);
//     }
//   }
// }

// getLength([1, [2, 3]]);
// getLength([1, [2, [3, 4]]]);
// getLength([1, [2, [3, [4, [5, 6]]]]]);
// getLength([1, [2], 1, [2], 1]);

// function sort(breakchar) {
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = i + 1; j < breakchar.length; j++) {
//       if (breakchar[i] > breakchar[j]) {
//         let value = breakchar[i];
//         breakchar[i] = breakchar[j];
//         breakchar[j] = value;
//       }
//     }
//   }
//   return breakchar;
// }

// console.log(sort([[4], [1], [3]]));

// function fibonacci(n) {
//   let prev = 0,
//     curr = 1,
//     next;
//   for (let i = 2; i <= n; i++) {
//     next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return next;
// }

// console.log(fibonacci(5));

// function missingnumber(breakchar) {
//   let sum = 0;
//   for (let i = 0; i < breakchar.length; i++) {
//     sum += breakchar[i];
//   }
//   return (breakchar.length * (breakchar.length + 1)) / 2 - sum;
// }

// console.log(missingnumber([1, 2, 4]));

// find the largest common element in the breakchar

// function largest_Common(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     for (let j = i + 1; j < breakchar.length; j++) {
//       if (breakchar[i] == breakchar[j]) {
//         result.push(breakchar[i]);
//       }
//     }
//   }
//   let Max = -Infinity;
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] > Max) {
//       Max = result[i];
//     }
//   }
//   return Max;
// }

// console.log(largest_Common([1, 2, 2, 3, 4, 5, 5]));

// .Write a function that moves all the zeroes to the end of an breakchar. Do this without returning a copy of the input breakchar.

// function push_Zero(breakchar) {
//   let result = [];
//   let clutter = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] !== 0) {
//       result.push(breakchar[i]);
//     } else {
//       clutter.push(breakchar[i]);
//     }
//   }
//   let joinArray = [...result, ...clutter];
//   return breakchar;
// }

// console.log(push_Zero([1, 2, 3, 0, 3, 4, 0, 2, 0, 2, 1]));

// write a function to reverse word in the breakchar

// function reverse_Words(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     let convert = breakchar[i].split("").reverse().join("");
//     result.push(convert)
//   }
//   return result;
// }

// console.log(reverse_Words(["amash", "shahid", "nawaz", "fayyaz"]));

// without split.reverse.join

// function reverse_Words(breakchar) {
//   let result = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     let convert = breakchar[i].split("").reverse().join("");
//     result.push(convert)
//   }
//   return result;
// }

// console.log(reverse_Words(["amash", "shahid", "nawaz", "fayyaz"]));

// ek function likho jo jisme negatgvie number ko breakchar ke piche le jao

// function nagative_Integer(breakchar) {
//   let negative = [];
//   let clutter = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] < 0) {
//       negative.push(breakchar[i]);
//     } else {
//       clutter.push(breakchar[i]);
//     }
//   }
//   let joinArray = [...clutter, ...negative];
//   return joinArray;
// }

// console.log(nagative_Integer([1, 2, 3, -1, -3, -4, 5, -2, -5, 4]));

// write a function to capitalice string

// function Capitalize_String(string) {
//   let breakchar = string.split(" ");
//   let result = "";
//   for (let i = 0; i < breakchar.length; i++) {
//     let word = breakchar[i];
//     let firstword = word[0];

//     if (firstword.toLowerCase() === firstword) {
//       result += firstword.toUpperCase() + word.slice(1);
//     } else {
//       result += firstword.toLowerCase();
//     }
//   }
//   return result;
// }

// console.log(Capitalize_String("this is the string"));

// ek function likho jisme ek string jo letter upper mehe usse lower me kro jo lower mehe unhe upper me kro

// function string_Cases(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toLowerCase() == string[i]) {
//       result += string[i].toUpperCase();
//     } else if (string[i].toUpperCase() == string[i]) {
//       result += string[i].toLowerCase();
//     } else {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(string_Cases("This Is The String"));

// sum of digit in the given number

// function sumofDigit(number) {
//   let convert = Number(number.toString().split("").join(""));
//   let sum = 0;
//   for (let i = 0; i < convert.length; i++) {
//     sum += convert[i];
//   }
//   return sum;;
// }

// console.log(sumofDigit(123));

// function ZeroEndOfArray(breakchar) {
//   let store = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] == 0) {
//       store.push(breakchar[i]);
//       breakchar.splice(i, 1);
//       i--;
//     }
//   }
//   return breakchar.concat(store)
// }
//                                //                i
// console.log(ZeroEndOfArray([1, 2, 0, 3, 3, 4, 2, 2, 1]));

// what is the length the given Integer  1234

// let letter = 'abd';

// function missing_letters(string){
//   let str = 'abcdefghijklmnopqrst';
//   for(let i = 0; i < string.length; i++){
//     let exist = true;
//     for(let j = 0; j < str.length; j++){
//       if(string[i] == string[j] )
//     }
//   }
// }
// console.log(missing_letters(letter))

// write a function to find th largest even number and the factorial;

// function even_Factorial(breakchar) {
//   let result = breakchar[9];
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] % 2 == 0) {
//       result = breakchar[i];
//     }
//   }
//   let clutter = [];
//   for (let i = 1; i <= result; i++) {
//     clutter.push(i * i);
//   }
//   return clutter;
// }

// console.log(even_Factorial([1, 2, 3, 4, 5, 5, 6, 7, 8, 9]));

// write the function to count ferqunecy

// function count_Ferqunecy(arr) {
//   let obj = {};
//   let breakchar = arr.split("")
//   for (let i = 0; i < breakchar.length; i++) {
//     if (obj.hasOwnProperty(breakchar[i]) === false) {
//       obj[breakchar[i]] = 1;
//     } else {
//       obj[breakchar[i]]++;
//     }
//   }
//   return obj;
// }

// console.log(count_Ferqunecy("this the rigth to learn coding"));

// function sumofdigit(number) {
//   let convert = number.toString().split("");
//   let sum = 0;
//   for (let i = 0; i < convert.length; i++) {
//     let value = Number(convert[i]);
//     sum += value;
//   }
//   return sum;
// }

// console.log(sumofdigit(45632));

// function censor(string) {
//   let breakchar = string.split(" ");
//   let clutter = [];
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i].length > 4) {
//       let result = "";
//       for (let j = 0; j < breakchar[i].length; j++) {
//         result += "*";
//       }
//       clutter.push(result);
//     } else {
//       clutter.push(breakchar[i]);
//     }
//   }
//   return clutter;
// }

// console.log(censor("The code is fourty"));
// console.log(censor("Two plus three is five"));
// console.log(censor("aaaa aaaaa 1234 12345"));

// write a function to count the occurence

// function count_Occ(string) {
//   let breakchar = string.split("");
//   let obj = {};
//   for (let i = 0; i < breakchar.length; i++) {
//     if (obj.hasOwnProperty(breakchar[i]) === false) {
//       obj[breakchar[i]] = 1;
//     } else {
//       obj[breakchar[i]]++;
//     }
//   }
//   return obj;
// }

// console.log(count_Occ("this is the right way to learn coding"));

// function countword(string) {
//   let result = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] != " ") {
//       result++;
//     }
//   }
//   return result;
// }

// console.log(countword("this is the right way to learn coding"));

// write the function to find the letter who has in even index

// function if_Calc(num1, oper, num2) {
//   if (num1 < num2) {
//     let x = num1;
//     num1 = num2;
//     num2 = x;
//   }

//   if (oper === "+") {
//     return num1 + num2;
//   } else if (oper === "-") {
//     return num1 - num2;
//   } else if (oper === "/") {
//     return num1 / num2;
//   } else {
//     return num1 * num2;
//   }
// }

// console.log(if_Calc(5, "-", 10));

// write a function to count vowel and consonant

// function vowel_Count(string) {
//   let vowel = "aeiou";
//   let counterv = 0;
//   let counterC = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (vowel.includes(string[i])) {
//       counterv++;
//     } else {
//       counterC++;
//     }
//   }
//   return `Vowel: ${counterv} Consonant: ${counterC}`;
// }
// console.log(vowel_Count("apple"));

// function numInStr(object) {
//   let numbers = "12345678910";
//   let stringwithNumber = [];

//   object.forEach(function (element) {
//     for (let i = 0; i < numbers.length; i++) {
//       if (element.includes(numbers[i])) {
//         stringwithNumber.push(element);
//         break
//       }
//     }
//   });
//   return stringwithNumber;
// }

// console.log(numInStr(["1a", "a", "2b", "b"])); // Output: ["1a", "2b"]
// console.log(numInStr(["abc", "abc10"])); // Output: ["abc10"]
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // Output: ["ab10c", "a10bc"]
// console.log(numInStr(["this is a test", "test1"])); // Output: ["test1"]

// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// function findNemo(string) {
//   let result = "";
//   let string = string.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == "Nemo") {
//       let Nemo_Index = i;
//       result += `i found Nemo at ${Nemo_Index}!`;
//     }
//   }
//   return result;
// }

// console.log(findNemo("I am finding Nemo !"));
// console.log(findNemo("Nemo is me"));
// console.log(findNemo("I Nemo am"));

// Create a function that takes in an object (slot machine outcome) and returns true if all elements in the object are identical, and false otherwise. The object will contain 4 elements.

// function testJackpot(object) {
//   for (let i = 0; i < object.length - 1; i++) {
//     if (
//       object[i].length !== object[i + 1].length ||
//       object[i] !== object[i + 1]
//     ) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(testJackpot(["@", "@", "@", "@"]));
// console.log(testJackpot(["abc", "abc", "abc", "abc"]));
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
// console.log(testJackpot(["SS", "SS", "SS", "Ss"]));

// Create a function which concatenates the number 7 to the end of every chord in an object. Ignore all chords which already end with 7.

// function jazzify(object) {
//   let result = [];
//   for (let i = 0; i < object.length; i++) {
//     let pushvalue = object[i].split("7").join("");
//     result.push(pushvalue + "7");
//   }
//   return result;
// }

// console.log(jazzify(["G", "F", "C"]));
// console.log(jazzify(["Dm", "G", "E", "A"]));
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
// console.log(jazzify([]))

// jo two dimentional object ke andar value ka product nikal kr arrays object ka sum find  kro

// function totalVolume() {
// console.log(arguments[0])
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     let value = arguments[i];
//     let totalProduct = value[0] * value[1] * value[2];
//     sum += totalProduct;
//   }
//   return [sum];
// }

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
// console.log(totalVolume([2, 2, 2], [2, 1, 1]));
// console.log(totalVolume([1, 1, 1]));

// write a function to find the indexmultiplier index;

// function indexMultiplier(object) {
//   let sum = 0;
//   for (let i = 0; i < object.length; i++) {
//     let index = i * object[i];
//     sum += index;
//   }
//   return sum;
// }
// console.log(indexMultiplier([1, 2, 3, 4, 5]));
// console.log(indexMultiplier([-3, 0, 8, -6]));

// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given object. Create a function that takes an object and returns the sum of all numbers in the object.

// function numbersSum(object) {
//   let sum = 0;
//   for (let i = 0; i < object.length; i++) {
//     if (typeof object[i] === "number") {
//       sum += object[i];
//     }
//   }
//   return sum;
// }

// console.log(numbersSum([1, 2, "13", "4", "645"]));
// console.log(numbersSum([true, false, "123", "75"]));
// console.log(numbersSum([1, 2, 3, 4, 5, true]));

// function isPositiveDominant(object) {
//   let positvie = 0;
//   let negatvie = 0;

//   let removesuplicate = new Set(object);
//   let convertArray = [...removesuplicate];

//   for (let i = 0; i < convertArray.length; i++) {
//     if (convertArray[i] < 0) {
//       negatvie++;
//     } else {
//       positvie++;
//     }
//   }
//   return positvie > negatvie;
// }

// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
// console.log(isPositiveDominant([5, 99, 832, -3, -4]));
// console.log(isPositiveDominant([5, 0]));
// console.log(isPositiveDominant([0, -4, -1]));

// function arithmeticOperation(string) {
//   console.log
//   let oprators = string.slice(3, 4);
//   let num1 = Number(string.slice(0, 2));
//   let num2 = Number(string.slice(5, 7));

//   if (num1 == 0 || num2 == 0) {
//     return -1;
//   }

//   if (oprators === "+") {
//     return num1 + num2;
//   } else if (oprators === "-") {
//     return num1 - num2;
//   } else if (oprators === "/") {
//     return num1 / num2;
//   } else {
//     return num1 * num2;
//   }
// }

// console.log(arithmeticOperation("12 + 12"));
// console.log(arithmeticOperation("12 - 12"));
// console.log(arithmeticOperation("12 * 12"));
// console.log(arithmeticOperation("12 / 0"));

// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// function findBrokenKeys(string1, string2) {
//   let result = [];
//   for (let i = 0; i < string1.length; i++) {
//     let currentValue = true;
//     for (let j = 0; j < string2.length; j++) {
//       if (string1[i] == string2[j]) {
//         currentValue = false;
//         break;
//       }
//     }
//     if (currentValue) {
//       result.push(string1[i]);
//     }
//   }
//   return result;
// }

// console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
// console.log(findBrokenKeys("starry night", "starrq light"));
// console.log(findBrokenKeys("beethoven", "affthoif5"));

// Create a function that takes two "sorted" arrays of numbers and returns an object of numbers which are common to both the input arrays. \

// function commonElements(array1, array2) {
//   let result = [];
//   let joinArray = [...array1, ...array2];
//   for (let i = 0; i < joinArray.length; i++) {
//     for (let j = i + 1; j < joinArray.length; j++) {
//       if (joinArray[i] == joinArray[j]) {
//         result.push(joinArray[i]);
//       }
//     }
//   }
//   let removeDuplicates = new Set(result);
//   return removeDuplicates;
// }

// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]));

// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

// function countNumberOfOccurrences(object) {
//   let obj = object;

//   let result = {};

//   for(const key of obj){
//     if(result[key]){
//       result[key] += 1;
//     }else{
//       result[key] = 1;
//     }
//   }

//   return result;
// }

// console.log(
//   countNumberOfOccurrences({
//     a: "moron",
//     b: "scumbag",
//     c: "moron",
//     d: "idiot",
//     e: "idiot",
//   })
// );

// console.log(countNumberOfOccurrences({ a: "moron", b: "moron", c: "moron" }));

// console.log(countNumberOfOccurrences({ a: "idiot", b: "scumbag" }));

// function allAboutStrings(string) {
//   let Stringlength = string.length;
//   let string = string.split("");
//   let firstChar = string[0];
//   let lastchar = string[Stringlength - 1];

//   return [`${Stringlength} ${firstChar} ${lastchar}`];
// }

// console.log(allAboutStrings("LASA"));
// console.log(allAboutStrings("Computer"));
// console.log(allAboutStrings("Science"));

// function numInStr(string) {
//   let numbers = "12345678910";
//   let result = [];

//   string.forEach((element) => {
//     for (let i = 0; i < numbers.length; i++) {
//       if (element.includes(numbers[i])) {
//         result.push(element);
//         break;
//       }
//     }
//   });
//   return result;
// }

// console.log(numInStr(["1a", "a", "2b", "b"]));
// console.log(numInStr(["abc", "abc10"]));
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
// console.log(numInStr(["this is a test", "test1"]));

// // Given a string, reverse all the words which have odd length. The even length words are not changed.

// function reverseOdd(string) {
//   let string = string.split(" ");
//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     let wordslength = string[i].length;

//     if (wordslength % 2 != 0) {
//       result.push(string[i].split("").reverse().join(""));
//     }

//   }
//   return result;
// }

// console.log(reverseOdd("Bananas"));
// console.log(reverseOdd("One two three four"));
// console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));

// In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

// function returnUnique(array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     let currentvalue = true;

//     for (let j = 0; j < array.length; j++) {
//       if (i != j && array[i] == array[j]) {
//         currentvalue = false;
//         break;
//       }
//     }

//     if (currentvalue) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]));
// console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]));
// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

// di gyi hui string ko reverse aur upper ko lower me lower ko upper me

// function invert(string) {
//   let string = string.split("");
//   let result = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     let characters = string[i];

//     if (characters.toUpperCase() == characters) {
//       result += characters.toLowerCase();
//     } else if (characters.toLowerCase() == characters) {
//       result += characters.toUpperCase();
//     } else {
//       result += characters;
//     }
//   }
//   return result;
// }

// console.log(invert("dLROW YM sI HsEt"));
// console.log(invert("ytInIUgAsnOc"));
// console.log(invert("step on NO PETS"));
// console.log(invert("XeLPMoC YTiReTXeD"));

// function missing(array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     let currentvalue = true;
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         currentvalue = false;
//         break;
//       }
//     }

//     if (currentvalue) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }

// console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]));
// console.log(
//   missing([true, true, false, false, true], [false, true, false, true])
// );
// console.log(
//   missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])
// );

// In this challenge, you have to obtain a sentence from the elements of a given matrix. In the matrix, each word of the sentence follows a columnar order from the top to the bottom, instead of the usual left-to-right order: it's time for transposition!

// function transposeMatrix(array) {
//   let result = "";
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       result += array[i][j];
//     }
//     result += " ";
//   }
//   return `"${result}"`;
// }

// console.log(transposeMatrix([["Enter"], ["the"], ["Matrix!"]]));
// console.log(
//   transposeMatrix([
//     ["The", "are"],
//     ["columns", "rows."],
//   ])
// );
// console.log(
//   transposeMatrix([
//     ["You", "the"],
//     ["must", "table"],
//     ["transpose", "order."],
//   ])
// );

// function secondLargest(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let maxNum = -Infinity;
//     for (let j = 0; j < arr[i].length; j++) {
//       if (maxNum < arr[i][j]) {
//         maxNum = arr[i][j];
//       }
//     }
//   }
//   return maxNum;
// }
// console.log(
//   secondLargest([
//     [1, 2, 3],
//     [4, 5, 2],
//     [2, 8, 9],
//   ])
// );

//  second largest number

// function FindSecondLargestElBrute(arr) {
//   let sortedArr = arr.sort((a,b)=> a - b);
//   console.log(arr)
//   let SecondMaxNum = sortedArr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (SecondMaxNum < sortedArr[i] && sortedArr[i] !== sortedArr[sortedArr.length - 1]) {
//       SecondMaxNum = sortedArr[i];
//     }
//   }
//   return SecondMaxNum;
// }
// console.log(FindSecondLargestElBrute([1, 6, 5, 4, 8, 9, 10, 2])

// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.

// Given a censored string and a string of the censored vowels, return the original uncensored string.

// pending

// function uncensor(string, char) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//       if (string[i] == "*") {
//         result += string[i] = char;
//     }
//   }
//   return result;
// }
// console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
// console.log(uncensor("abcd", ""));
// console.log(uncensor("*PP*RC*S*", "UEAE"));

// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

// function insertWhitespace(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toUpperCase() === string[i]) {
//       result += " " + string[i];
//     } else {
//       result += string[i];
//     }
//   }
//   return result.toLowerCase();
// }

// console.log(insertWhitespace("SheWalksToTheBeach"));
// console.log(insertWhitespace("MarvinTalksTooMuch"));
// console.log(insertWhitespace("TheGreatestUpsetInHistory"));

// function fabnaciSerires(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     console.log(arr[i])
//     // arr.push(arr[i - 1] + arr[i - 2]);
//   }
// //   return arr;
// }

// console.log(fabnaciSerires(5));
// Create a function that moves all capital letters to the front of a word.

// function apToFront(string) {
//   let breakchar = string.split("");
//   let capitalCharStore = "";
//   let smallCharStore = "";
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i].toUpperCase() == breakchar[i]) {
//       capitalCharStore += breakchar[i];
//     } else {
//       smallCharStore += breakchar[i];
//     }
//   }
//   return `${capitalCharStore}${smallCharStore}`;
// }

// console.log(apToFront("hApPy"));
// console.log(apToFront("moveMENT"));
// console.log(apToFront("shOrtCAKE"));

// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// PENDING

// function matchLastItem(array) {
//   let lastElement = array[array.length - 1];
//   let seperateArray = [];
//   for (let i = 0; i < array.length - 1; i++) {
//       seperateArray.push(array[i]);
//   }
//   let joinString = `${seperateArray.join("")}`;
//     return lastElement == joinString
// }

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
// console.log(matchLastItem([1, 1, 1, "11"]));
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// function reverseAndNot(number) {
//   let convert = number.toString().split("").reverse().join("");
//   let reverseOrOriginal = `${convert}${number}`;
//   return reverseOrOriginal;
// }

// console.log(reverseAndNot(123));
// console.log(reverseAndNot(152));
// console.log(reverseAndNot(123456789));

// Given a string of numbers separated by a comma and space, return the product of the numbers. \

// pending

// function multiplyNums(string) {

// }

// console.log(multiplyNums("2, 3"));
// console.log(multiplyNums("1, 2, 3, 4"));
// console.log(multiplyNums("54, 75, 453, 0"));
// console.log(multiplyNums("10, -2"));

// function makeTitle(string) {
// let string = string.split(" ");
// for (let i = 0; i < string.length; i++) {
//   let firsrtchar = string[i];
//   let firstCharUpper = firsrtchar.charAt(0).toUpperCase() + firsrtchar.slice(1);
//   string[i] = firstCharUpper
// }
// return string.join(" ");
// second way
// let string = string.split(" ");
// let rest = "";
// for (let i = 0; i < string.length; i++) {
//   let firstChar = string[i][0];
//   let firstChar2 = string[i];

//   if (firstChar.toLowerCase() == firstChar) {
//     rest += firstChar.toUpperCase()
//     rest +=`${string[i].slice(1)} `
//   } else{
//     rest += `${firstChar2} `
//   }
// }
// return rest;
// }

// console.log(makeTitle("This is a title"));
// console.log(makeTitle("capitalize every word"));
// console.log(makeTitle("I Like Pizza"));
// console.log(makeTitle("PIZZA PIZZA PIZZA"));

// Write a function that reverses all the words in a sentence that start with a particular letter.

// function specialReverse(string, letter) {
//   let string = string.split(" ");
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     let firstChar = string[i][0];
//     if (firstChar == letter) {
//       result += `${string[i].split("").reverse().join("")} `;
//     } else {
//       result += `${string[i] }`;
//     }
//   }
//   return result;
// }

// console.log(specialReverse("word searches are super fun", "s"));
// console.log(specialReverse("first man to walk on the moon", "m"));
// console.log(specialReverse("peter piper picked pickled peppers", "p"));

// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.\

// function counterpartCharCode(letter) {
//   let unicode = letter.charCodeAt();
//   return `The Unicode ${letter}: ${unicode}`
// }

// console.log(counterpartCharCode("A"));
// console.log(counterpartCharCode("a"));

// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

// function removeABC(string) {
//   if (string == null) {
//     return "";
//   }

//   let removeLetter = "abc";
//   let result = "";
//   let string = string.split("");
//   for (let i = 0; i < string.length; i++) {
//     if (!removeLetter.includes(string[i])) {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));
// console.log(removeABC(""));

// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// function isIsogram(string) {
//   let changeCase = string.toLowerCase();
//   let result = true;
//   let breakChars = changeCase.split("");
//   for (let i = 0; i < breakChars.length - 1; i++) {
//     for (let j = 0; j < breakChars.length; j++) {
//       if (i !== j && breakChars[i] == breakChars[j]) {
//         result = false;
//         return result;
//       }
//     }
//   }
//   return true;
// }

// console.log(isIsogram("Algorism"));
// console.log(isIsogram("PasSword"));
// console.log(isIsogram("Consecutive"));

// Create a function that takes a word and returns true if the word has two consecutive identical letters.\

// function doubleLetters(string) {
//   let breakchar = string.split("");
//   for (let i = 0; i < breakchar.length; i++) {
//     if (breakchar[i] == breakchar[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(doubleLetters("loop"));
// console.log(doubleLetters("yummy"));
// console.log(doubleLetters("orange"));
// console.log(doubleLetters("munchkin"));

// PENDING
// formatNum(1,000)
// formatNum(1,00,0000)
// formatNum(20)

// let number = "1000";
// if ((number.length = 4)) {

//   number.split("").splice(1, 0, ",");
// }
// console.log(number);

// Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.

// function emphasise(string) {
//   let changeCase = string.toLowerCase();
//   let string = changeCase.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     let getvalue = string[i];
//     let capitalize = getvalue.charAt(0).toUpperCase() + getvalue.slice(1);
//     string[i] = capitalize;
//   }
//   let joinString = string.join(" ");
//   return `"${joinString}"`;
// }

// console.log(emphasise("hello world"));
// console.log(emphasise("GOOD MORNING"));
// console.log(emphasise("99 red balloons!"));

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

// function maskify(string, n = 4) {
//   if (string.length < 1) {
//     return string;
//   }

//   let result = "";
//   let backvalue = string.slice(-n);

//   for (let i = 0; i < string.length - n; i++) {
//     let getvlaue = string[i];
//     result += getvlaue = "#";
//   }
//   return `${result}${backvalue}`;
// }

// console.log(maskify("4556364607935616"));
// console.log(maskify("64607935616"));
// console.log(maskify("1"));
// console.log(maskify("453534"));

// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// function reverse(string) {
//   let result = "";
//   let fiveLetter = string.split(" ");

//   for (let i = 0; i < fiveLetter.length; i++){
//     let words = fiveLetter[i].length;
//     if (words > 5) {
//       result += fiveLetter[i].split("").reverse().join("")
//     } else {
//       result += fiveLetter[i] + " "
//     }
//   }
//   return result;
// }

// console.log(reverse("Reverse"));
// console.log(reverse("This is a typical sentence."));
// console.log(reverse("The dog is big."));

// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// function transformUpvotes(string) {
//   let string = string.split(".").join("");
//   let letter = "k";
//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == letter) {
//       result.push((string[i] = "00"));
//     } else {
//       result.push(string[i]);
//     }
//   }
//   return result.join("");
// }

// console.log(transformUpvotes("6.8k 13.5k"));
// console.log(transformUpvotes("5.5k 8.9k 32"));
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));

// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

// not giving proeper answer

// function isAnagram(string, string2) {
//   let change_Case = string.toLowerCase();
//   let change_Case2 = string2.toLowerCase();
//   for (let i = 0; i < change_Case.length; i++) {
//     for (let j = 0; j < change_Case2.length; j++) {
//       if (change_Case[i] === change_Case2[j]) {
//         console.log(change_Case[i]);
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(isAnagram("rcistian", "Cristina"));
// console.log(isAnagram("Dave Barry", "Ray Adverb"));
// console.log(isAnagram("Nope", "Note"));

// reverse which array whos first element are even

// function reverse_Even(array) {
//   for (let i = 0; i < array.length; i++) {
//     let firstelement = array[0];
//     if(firstelement % 2 == 0){
//        return array.reverse()
//     }
//   }
//   return array;
// }

// console.log(reverse_Even([2, 5, 6, 3]));
// console.log(reverse_Even([3, 7, 6, 3]));

// write a function and check which word first letter has vowel and return uppercase this word

// function Vowel_Case(string) {
//   let string = string.split(" ");
//   let vowel = "aeiouAEIOU";
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     let firstletter = string[i].charAt(0);

//     if (vowel.includes(firstletter)) {
//       result += string[i].toUpperCase() + " ";
//     } else {
//       result += string[i] + " ";
//     }
//   }
//   return result;
// }

// console.log(Vowel_Case("my name is nash"));
//  find the secondlargest element in the Array

// function secondlargest(array) {
//   let sortedArr = array.sort((a, b) => a - b);
//   let firstelement = sortedArr[0];
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (
//       firstelement < sortedArr[i] &&
//       sortedArr[i] != sortedArr[sortedArr.length - 1]
//     ) {
//       firstelement = sortedArr[i];
//     }
//   }
//   return firstelement;
// }

// console.log(secondlargest([1, 3, 4, 6, 5, 7, 8, 9, 10]));

// function uncensors(string, char) {
//   let counter = 0;
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//       if (string[i] == "*") {
//         result += char[counter];
//         counter++
//     }else{
//       result += string[i]
//     }
//   }
//   return result;
// }
// console.log(uncensors("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
// console.log(uncensors("abcd", ""));
// console.log(uncensors("PP*RC*S", "UEAE"));

// 10

// function fabnaciSerires(n) {
//   let arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     let value = arr[i - 1] + arr[i - 2];
//     arr.push(value);
//   }
//   return arr;
// }

// console.log(fabnaciSerires(10));

// function secondlargest(array) {
//   let sortedarr = array.sort((a, b) => a - b);
//   let firstelement = sortedarr[0];
//   for (let i = 0; i < sortedarr.length; i++) {
//     if (
//       firstelement < sortedarr[i] &&
//       sortedarr[i] != sortedarr[sortedarr.length - 1]
//     ) {
//       firstelement = sortedarr[i];
//     }
//   }
//   return firstelement;
// }

// console.log(secondlargest([1, 2, 3, 4, 5]));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// function addUp(numbers) {
//   let sum = 0;
//   for (let i = 1; i <= numbers; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// ek string lo jisme example "anash" isme aplhabet yani abcd ka jonhi kletter he jo sabse last me he usse return kro

// function alphabetLetter(string) {
// let breakLetter = string.split("");
// let result = [];
//  find the unicode
// for (let i = 0; i < breakLetter.length; i++) {
// let unicode = breakLetter[i].charCodeAt();
// result.push(unicode);
// }
// sorting the unicode
// for (let i = 0; i < result.length; i++) {
// for (let j = i + 1; j < result.length; j++) {
// if (result[i] > result[j]) {
// let store = result[i];
// result[i] = result[j];
// result[j] = store;
// }
// }
// }
//  find the maxmum unicode
// let firstelement = result[0];
// let newString = "";
// for (let k = 0; k < result.length; k++) {
// newString += String.fromCharCode(result[k]);
// if (firstelement < result[k]) {
// firstelement = result[k];
// }
// }
// return in alphabetical case
// let word = String.fromCharCode(firstelement);
// return `this the alphabetical Case: ${newString}   last letter this string: ${word}`
// }

// console.log(alphabetLetter("anash"));
// Function to simulate image loading with a delay

// function findlastelement(array) {
//   for (let i = 0; i < array.length; i++) {
//     let value = array[i];
//     console.log(value[array[i].length - 1])
//   }
// }

// console.log(findlastelement([[1, 2, 3, 8, 9],[4, 5, 6],[7, 8, 9]]));

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9, 4],
// ];
// console.log(arr[arr.length - 1][arr.length - 1]);

// function reverseAndCase(string) {
//   let result = "";
//   for (let i = string.length - 1; i >= 0 ; i--) {

//     if (string[i].toUpperCase() == string[i]) {
//       result += string[i].toLowerCase();
//     } else if (string[i].toLowerCase() == string[i]) {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i]
//     }

//   }
//   return result;
// }

// console.log(reverseAndCase("heLLo hoW ArE"));

// function sumOfIndexes(array, target) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == target) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sumOfIndexes([1, 2, 3, 2, 4, 2], 2));

// function sumOfLargestAndSecondLargest(array) {
//   let maxNum = -Infinity;
//   let secondLargest = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxNum) {
//       maxNum = array[i];
//     }
//     if (secondLargest !== array[i] && array[i] !== array[array.length - 1]) {
//       secondLargest = array[i];
//     }
//   }
//   return secondLargest + maxNum;
// }

// console.log(sumOfLargestAndSecondLargest([1, 2, 3, 4, 5, 6]));

// function common_Element(arr1, arr2) {
//   let store = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         store.push(arr1[i]);
//       }
//     }
//   }
//   return store;
// }

// console.log(common_Element([-1, 3,, 4, 6, 7, 9], [4, 1, 3]));

// function specialArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0 && i % 2 != 0) {
//       return false;
//     } else if (array[i] % 2 != 0 && i % 2 == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(specialArray([0, 1, 2, 3, 8, 5, 6, 7, 8, 9, 10]));

// function countTruthyFalsyValue(array) {
//   let truthyValue = 0;
//   let falsyValue = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       truthyValue++;
//     } else {
//       falsyValue++;
//     }
//   }
//   return [truthyValue, falsyValue];
// }

// console.log(countTruthyFalsyValue([true, 1, NaN, "false", -1, [], 0]));

// function naturalNumber(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log(i);
//   }
// }

// console.log(naturalNumber(10));

// . Implement a while loop to find the factorial of a given number.

// function factorial(n) {
//   let i = 1;
//   let product = 1;
//   while (i <= n) {
//     product = product * i;
//     i++;
//   }
//   return product;
// }

// console.log(factorial(5));

// Write a program to print the Fibonacci series up to n terms using a loop.

// function fabonanciSeries(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// }

// console.log(fabonanciSeries(5));

// d. Create a program that prints the multiplication table for a given number using a nested loop.

// function multiplicattionTable(n) {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i * n);
//   }
// }

// console.log(multiplicattionTable(5));

// a. Define a function that calculates the area of a rectangle given its length and width.

// function CalutculateLengthWidth(length, width) {
//   let calculate = length * width;
//   return calculate;
// }

// console.log(CalutculateLengthWidth(5, 10));

// c. Create a function that takes a list of numbers as input and returns the sum of even numbers.

// function sumOfEven() {
//   let sum = 0;
//   for (let i = 0; i <= 10; i += 2) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOfEven());

// d. Implement a function that reverses a given string.

// function reverseString(string) {
//   let result = "";
//   for (i = string.length - 1; i >= 0; i--) {
//     result += string[i];
//   }
//   return result;
// }

// console.log(reverseString("this is the string"));

// function checkevenindex(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0 && i % 2 != 0) {
//       return false;
//     } else if (array[i] % 2 != 0 && i % 2 == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkevenindex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// write a function to check the string

// function secondlargest(array) {
//   let firstElement = array[0];
//   let lastElement = array[array.length - 1];
//   for (let i = 0; i < array.length; i++) {
//     if (firstElement !== array[i] && array[i] != lastElement) {
//       firstElement = array[i];
//     }
//   }
//   return firstElement
// }

// console.log(secondlargest([1, 2, 3, 4, 5, 6, 7]));

// function findMissingNumber(array) {
//   let n = array.length + 1;

//   let value = (n * (n + 1)) / 2;

//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   if (sum < value) {
//     let x = sum;
//     sum = value;
//     value = x;
//   }
//   return sum - value;
// }

// console.log(findMissingNumber([1, 2, 3, 4, 5, 7]));

// function findSum(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < array[i].length; j++) {
//       sum += array[i][j];
//     }
//     result.push(sum);
//   }
//   return result;
// }

// console.log(
//   findSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// function fabonanciSeries(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//     console.log(arr);
//   }
//   return arr;
// }

// console.log(fabonanciSeries(5));
// [0, 1, 1]

// DO THIS
// You are given two numbers a and b. Create a function that returns the next number greater than a and b and divisible by b.

// function divisible_by_b(a, b) {
//   let condition = true;
//   let result = a;

//   while (condition) {
//     result++;
//     if (result % b == 0) {
//       condition = false
//       return result;

//     }
//   }
// }

// console.log(divisible_by_b(17, 8));
// console.log(divisible_by_b(98, 3));
// console.log(divisible_by_b(14, 11));

// DO THIS

// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

// function area_of_country(Countryname, numbers) {
//   const totallandmass = 148940000;
//   const calculation = (numbers / totallandmass) * 100;
//   const roundfigure = parseFloat(calculation.toFixed(2));
//   return roundfigure;
// }

// console.log(area_of_country("Russia", 17098242));
// console.log(area_of_country("USA", 9372610));
// console.log(area_of_country("Iran", 1648195));
// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

// function add(str1, str2) {
//   if (str1 == null || str2 == null) {
//     return "invalid operation";
//   } else {
//     return `"${Number(str1) + Number(str2)}"`;
//   }
// }

// console.log(add("111", "111"));
// console.log(add("10", "80"));
// console.log(add("", "20"));

// function list_of_multiples(num1, num2) {
//   let store = [];
//   for (let i = 1; i <= num2; i++) {
//     store.push(num1 * i);
//   }
//   return store;
// }

// console.log(list_of_multiples(7, 5));
// console.log(list_of_multiples(12, 10));
// console.log(list_of_multiples(17, 6));

// do this

// Return the Time Saved by Speeding
// One cause for speeding is the desire to shorten the time spent traveling. In long distance trips, speeding does save an appreciable amount of time. However, the same cannot be said about short distance trips.

// Create a function that calculates the amount of time saved were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.

// Examples
// # The parameter's format is as follows:
// # (speed limit, avg speed, distance traveled at avg speed)
// time = distance / speed

// function time_saved(speedlimit, avespeed, travel) {
//   const a = travel / speedlimit;

//   const b = travel / avespeed;
//   let subt = (a - b) * 60;
//   return subt.toFixed(1);
// }

// console.log(time_saved(80, 90, 40));
// console.log(time_saved(80, 90, 4000));
// console.log(time_saved(80, 100, 40));
// console.log(time_saved(80, 100, 10));
//
//
// function make_rug(row, col, rug) {
// let result = "";
// for (let i = 0; i < row; i++) {
// for (let j = 0; j < col; j++) {
//   result += rug;
// }
//   }
//   return result;
// }
//
// console.log(make_rug(3, 5, "#"));
// console.log(make_rug(3, 5, "$"));
// console.log(make_rug(2, 2, "A"));
//
// function make_rug(row, col, rug) {
//   let result = "";
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       result += rug;
//     }
//    result += "\n"
//   }
//   return result;
// }

// // Test cases
// console.log(make_rug(3, 5, "#")); // Prints a rug of "#" with 3 rows and 5 columns
// console.log(make_rug(3, 5, "$")); // Prints a rug of "$" with 3 rows and 5 columns
// console.log(make_rug(2, 2, "A")); // Prints a rug of "A" with 2 rows and 2 columns

// function fabSeries(n = 5) {
//   let arr = [0, 1];
//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//     console.log(arr);
//   }
//   return arr;
// }

// console.log(fabSeries());
// // index 1 + 0 = 1

// function capitalize_Words(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let words = array[i];
//     let firstLetter = words[0];

//     if (firstLetter.toLowerCase() == firstLetter) {
//       result.push(firstLetter.toUpperCase());
//     } else {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(capitalize_Words(["anash", "three", "shahid", "hello"]));

// function divisible_by_b(a, b) {
//   let currentValue = true;

//   let result = a;
//   while (currentValue) {
//     result++;
//     if (result % b == 0) {
//       currentValue = false;
//       return result;
//     }
//   }
// }

// console.log(divisible_by_b(17, 8));
// console.log(divisible_by_b(98, 3));
// console.log(divisible_by_b(14, 11));

// function rotate_Array(array, n) {
//   for (let i = 0; i < n; i++) {
//     let getvalue = array.shift();
//     array.push(getvalue);
//   }
//   return array;
// }

// console.log(rotate_Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
