// revise quetions
// wrtiea afunction to find the similar value in two both arrays.
// function findSimilarValue(arr1, arr2) {
//     let storeValue = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == (arr2[j])) {
//                 storeValue.push(arr1[i])
//             }
//         }
//     }
//     return storeValue;
// }
// console.log(findSimilarValue([1, 2, 3], [3, 4, 5]))
// write a function to find the highest value in ther array
// function Find_HighestValue(array) {
//     let highestValue = Math.max();
//     array.forEach(function (element) {
//         if (highestValue < element) {
//             highestValue = element
//         }
//     });
//     return highestValue;
// }
// console.log(Find_HighestValue([23, 43, 56, 78]))
// write a function to count character without space
// function count_Character(String) {
//     let count = 0;
//     for (let i = 0; i < String.length; i++) {
//         let getChar = String[i]
//         if (getChar != " ") {
//             count++
//         }
//     }
//     return count
// }
// console.log(count_Character("my name is anash"))
// write a function to reverseA number wihout using method
// function reverse_Number(number) {
//     let rev = 0;
//     while (number > 0) {
//       let rem = number % 10;
//       rev = rev * 10 + rem;
//       number = Math.floor(number / 10)
//     }
//     return rev;
// }
// console.log(reverse_Number(384))
// write a function to count word and character
// function Count_Word_Character(string) {
//     let wordcounter = 1;
//     let charcounter = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string != " ") {
//             charcounter++
//         }
//         if (string[i] == " ") {
//             wordcounter++
//         }
//     }
//     console.log(wordcounter, charcounter)
// }
// console.log(Count_Word_Character("this is the sring"))
// write a function to find the the given user number
// function find_Fraction(user) {
//     let number = 100
//     let storeValue = [];
//     for (let i = 1; i <= number; i++) {
//         if (user % i == 0) {
//             storeValue.push(i);
//         }
//     }
//     return storeValue;
// }
// let user = prompt("Enter Your Number")
// console.log(find_Fraction(user))
// write a function to find the common value in the array
// function Find_CommonValue(arr1, arr2) {
//     let storeValue = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 storeValue.push(arr2[j]);
//             }
//         }
//     }
//     return storeValue;
// }
// console.log(Find_CommonValue([1, 2, 3, 4, 5, 6, 7], [2, 4, 3, 5, 7, 6, 8, 9, 10, 1]));
// write a function to find the same word of given string
// function find_SameWord(String, findWord) {
//     let storeValue = [];
//     let breakstring = String.split(" ");
//     for (let i = 0; i < breakstring.length; i++) {
//         let char = breakstring[i];
//         if (char == findWord) {
//             storeValue.push(char)
//         }
//     }
//     return storeValue;
// }
// console.log(find_SameWord("my name is anash", "anash"))
// write a function to check the givem strgin is palimdrom return true otherwise return false
// function check_StringPalimdrom(string) {
//     let reverseString = string.split("").reverse().join("");
//     if (string === reverseString) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(check_StringPalimdrom("madam"));
// write a function to given string from user and convert inot upperCase
// function convert_Case(String) {
//     let char = "";
//     for (let i = 0; i < String.length; i++) {
//         char += String[i];
//     }
//     return char.toUpperCase();
// }
// let user = prompt("Enter Your String")
// console.log(convert_Case(user))
// write a function to find highest and lowest value in the array
// function highest_Lowest(array) {
//     let highestValue = Math.max()
//     let LowesttValue = Math.min()
//     array.forEach(function (element) {
//         if (highestValue < element) {
//             highestValue = element
//         }
//         if (LowesttValue > element) {
//             LowesttValue = element
//         }
//     });
//     console.log(highestValue, LowesttValue)
// }
// console.log(highest_Lowest([23, 45, 64, 98, 56]));
// write a rfcuntion to find the range value in the array
// function range_Value(array) {
//     let highestValue = Math.max()
//     let lowestValue = Math.min()
//     array.forEach(function (element) {
//         if (highestValue < element) {
//             highestValue = element
//         }
//         if (lowestValue > element) {
//             lowestValue = element
//         }
//     });
//     console.log(highestValue - lowestValue)
// }
// console.log(range_Value([1, 2, 3, -100, 100, 250]))
// write a function to convert a dimenstioanl array intoa normal array
// function dimenstionalArray() {
//     let array = [ [1,0,2,3] , [0,1,3,4], [0,5,1,6], [0,7,8,1]];
//     let convertArray = array.flat();
//     console.log(convertArray)
// }
// console.log(dimenstionalArray());
// write a function to find the secondhighest value in the array
// function findSecondHighestValue() {
//     let arr = [1, 2, 3, 4, 5, 6, 19, 20, 21];
//     let secondhighest = arr[0];
//     let highestValue = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > highestValue) {
//             secondhighest = highestValue;
//             highestValue = arr[i];
//         }
//     }
//     return secondhighest;
// }
// console.log(findSecondHighestValue());
// write a function to count a word in the string
// function count_Word(String) {
//     let count = 1;
//     for (let i = 0; i < String.length; i++) {
//         if (String[i] === " ") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count_Word("this is the string"))
// write a function and find the smallest word in the string
// function findSmallestWord(string) {
//     let wordsArray = string.split(" ");
//     let smallestWord = wordsArray[0]; // Initialize with the first word
//     let smallestWordLength = smallestWord.length;
//     wordsArray.forEach(function (word) {
//         let wordLength = word.length;
//         if (wordLength < smallestWordLength) {
//             smallestWord = word;
//             smallestWordLength = wordLength;
//         }
//     });
//     return smallestWord;
// }
// console.log(findSmallestWord("this is the string")); // Output: "is"
// write function to find the given get armstring number
// function arm_Strong_Number(number) {
//     let product = 0;
//     let resulte = [];
//     while (number > 0) {
//         resulte.push(number % 10);
//         number = number / 10 | 0;
//     }
//     for (let i = 0; i < resulte.length; i++) {
//         let multiply = resulte[i] ** 3;
//         product = product + multiply
//     }
//     return product;
// }
// console.log(arm_Strong_Number(153))
// write a functoion to print star
// function trangle_Shape() {
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= i; j++) {
//            document.write("* ")
//         }
//         document.write("<br>")
//     }
// }
// console.log(trangle_Shape())
// write a function to the user given strign convert reverse and uppercase
// function change_Case(string) {
//     let storevalue = [];
//     let breakstring = string.split(" ")
//     for (let i = 0; i < breakstring.length; i++) {
//         let code = breakstring[i];
//         let convert = code.toUpperCase();
//         storevalue.push(convert);
//     }
//     return storevalue.reverse();
// }
// console.log(change_Case("this is the string"))
// write a function to capitalize each word of string
// function capitalize_String(string) {
//     let breakstring = string.split(" ");
//     for (let i = 0; i < breakstring.length; i++) {
//         let code = breakstring[i];
//         let capitalize = code.charAt(0).toUpperCase() + code.slice(1);
//         breakstring[i] = capitalize;
//     }
//     let joinString = breakstring.join(" ");
//     return joinString;
// }
// let user = prompt("Enter Your String")
// console.log(capitalize_String(user));
// write a fcuntion convert temperature
// function convert_Temperature(user){
//     let c;
//     c = ((user - 32) * 5 / 9).toFixed(2);
//     return c;
// }
// let user = prompt("Enter Your Number")
// console.log(convert_Temperature(user))
// write a fcuntion to implement hero's formula
// function Heros_formula() {
//     let a = 5;
//     let b = 10;
//     let c = 13;
//     let sValue = (a + b + c) / 2;
//     let area = Math.sqrt(sValue * (sValue - a), (sValue - b), (sValue - c));
//     return area.toFixed(2)
// }
// console.log(Heros_formula())
// write a function to find the average of array
// function average_Array(array) {
//     let sum = 0;
//     array.forEach(function (element) {
//         sum = sum + element;
//     });
//     return (sum / array.length).toFixed(2);
// }
// console.log(average_Array([45, 67, 85, 34, 66, 34, 72, 90, 100, 43, 78]));
// write a function to find the percentage of the array
// function percentage_Array(array) {
//     let sum = 0;
//     let totalmarks = 400;
//     array.forEach(function (element) {
//         sum = sum + element;
//     });
//     return (sum / totalmarks) * 100
// }
// console.log(percentage_Array([12, 34, 55, 76]))
// write a function to find the cubes o one to ten
// function find_Cubes() {
//     let storeValue = [];
//     for (let i = 1; i <= 10; i++) {
//         storeValue.push(i * i);
//     }
//     return storeValue;
// }
// console.log(find_Cubes())
// function first(arr, elem) {
//     let newarr = []
//     if (elem == null) {
//         newarr.push(arr[0]);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(i)
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
// write a function to find the leap year between inot 1980 to 2023
// function leap_Year(start, end) {
//     let storeValue = []
//     for (let i = start; i <= end; i++) {
//         if (i % 4 == 0) {
//             storeValue.push(i)
//         }
//     }
//     return storeValue;
// }
// console.log(leap_Year(1980, 2023))
// write a function to find the even and odd number in the array
// function evenOdd_Number(array) {
//     array.forEach(function (element) {
//         if (element % 2 == 0) {
//             console.log(`${element} Even Number`)
//         } else {
//             console.log(`${element} odd Number`)
//         }
//     })
// }
// console.log(evenOdd_Number([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// writ3 a function to print array element basic of value
// function nth_Value(array, value = 4) {
//     for (let i = 0; i <= value; i++) {
//         console.log(array[i])
//     }
// }
// console.log(nth_Value([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// writera a function to lengest word in the string
// function longest_Word(String) {
//     let breakstring = String.split(" ");
//     let longest = ""
//     for (let i = 0; i < breakstring.length; i++) {
//         let char = breakstring[i].length;
//         if (longest.length < char) {
//             longest = breakstring[i];
//         }
//     }
//     return longest;
// }
// let user = prompt("Enter Your String")
// console.log(longest_Word(user))
// writea function to find which words startd vowel to print the words just like "Alice", "Eve", "oscar".
// function first_Vowel_letter(array) {
//     let storeValue = [];
//     let vowel = ["a", "e", "i", "o", "ü"]
//     for (let i = 0; i < array.length; i++) {
//         let firstvalue = array[i][0].toLowerCase();
//         if (vowel.includes(firstvalue)) {
//             storeValue.push(array[i]);
//         }
//     }
//     return storeValue;
// }
// console.log(first_Vowel_letter(['Alice', 'Bob', 'Eve', 'Oscar', 'Zara']));
// write a function to find the rwo dimenstional array
// function sum_TwoDientionalArray(array) {
//     let convertFlatArray = array.flat();
//     let sum = 0;
//     convertFlatArray.forEach(function (element) {
//         sum = sum + element;
//     });
//     return sum
// }
// console.log(sum_TwoDientionalArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// write a function to divisible byt botj numbers
// function divisible_BothNumbers(number) {
//     if (number % 3 == 0 && number % 5 == 0) {
//         return "yes it divisible by both number";
//     } else {
//         return "it not divisible by both number";
//     }
// }
// console.log(divisible_BothNumbers(15))
// wrte a function to get the largest element of the arguments
// function largest_Element(a, b, c) {
//     if (a > b && b < a && a > c) {
//         return a;
//     } else if (b > c) {
//         return b
//     } else {
//         return c
//     }
// }
// console.log(largest_Element(34, 55, 93))
// wrtie a function to fins maximum and minimum number in the array
// function maximum_Minimum(arrqy) {
//     let highest = Math.max()
//     let lowest = Math.min()
//     arrqy.forEach(function (element) {
//         if (highest < element) {
//             highest = element;
//         }
//         if (lowest > element) {
//             lowest = element;
//         }
//     });
//     console.log(highest, lowest)
// }
// console.log(maximum_Minimum([23, 49, 12, 45]))
// wrtie a function to count ferquently in the array
// function count_Ferquently(array) {
//     let ferq = [];
//     array.forEach(function (element) {
//         if (ferq.hasOwnProperty(element)) {
//             ferq[element]++;
//         } else {
//             ferq[element] = 1;
//         }
//     });
//     return ferq;
// }
// console.log(count_Ferquently([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))
// write a function to return lessthan five and equal to five
// function leesthanfive(array) {
//     let storeValue = [];
//     array.forEach(function (element) {
//         if (element.length <= 5) {
//             storeValue.push(element)
//         }
//     });
//     return storeValue;
// }
// console.log(leesthanfive(['dainsh', "anash", "yaseen", "ali", "moin bhai", "ahsan sir"]));
// write a function to find both arrays product ans subtract each other
// function findDifference(array1, array2) {
//     let first = 1;
//     let second = 1;
//     array1.forEach(function (element) {
//         first = first * element;
//     });
//     array2.forEach(function (element) {
//         second = second * element;
//     });
//     return second - first;
// }
// console.log(findDifference([28, 16, 29], [7, 8, 17]));
// console.log(findDifference([9, 22, 18], [16, 24, 10]));
// console.log(findDifference([1, 9, 25], [10, 7, 9]));
// console.log(findDifference([7, 6, 16], [26, 9, 26]));
// write a function to sort a array
// function sort_Array(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 let store = array[i];
//                 array[i] = array[j];
//                 array[j] = store;
//             }
//         }
//     }
//     return array;
// }
// console.log(sort_Array([1, 2, 4, 5, 8, 3, 9, 10, 12, 6, 14]));
// write a function if your value 3 the rray nbumber reverse like this  678123459;
// function reverse_value(array, value) {
//     for (let i = 0; i <= value; i++) {
//         let store = array.pop();
//         array.unshift(store)
//     }
//     return array;
// }
// console.log(reverse_value([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
// write a jvascript to add even number
// function add_EvenNumber(array) {
//     let sum = 0;
//     array.forEach(function (element) {
//         sum = sum + element;
//     });
//     return sum;
// }
// console.log(add_EvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// write a javascript function to removwe all duplicaye number
// function remove_Duplicate(array) {
//     let storeValue = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!storeValue.includes(array[i])) {
//             storeValue.push(array[i])
//         }
//     }
//     return storeValue;
// }
// console.log(remove_Duplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// write a function to find the largest word in the array
// function largest_Word(string) {
//     let array = string.split(" ");
//     let longest = "";
//     array.forEach(function (element) {
//         if (element.length > longest.length) {
//             longest = element
//         }
//     });
//     return longest;
// }
// console.log(largest_Word("this is the programming"))
// writea a function to fins the sum of all element in he array using reduce method
// function sumofArray(array) {
//     let sumofProduct = array.reduce((previousvalue, currentvalue) => {
//         return previousvalue += currentvalue;
//     });
//     return sumofProduct;
// }
// console.log(sumofArray([1, 2, 3, 4, 5]));
// write a function to find the maximum value in the array with using reduce method
// function maximum_Value(array) {
//     let maxEl = array.reduce((prevuiousevalue, currentvalue) => {
//         if (prevuiousevalue < currentvalue) {
//            prevuiousevalue = currentvalue;
//         }
//         return prevuiousevalue;
//     })
//     return maxEl;
// }
// console.log(maximum_Value([1, 2, 3, 6, 4, 5]));
// write a function to create a new array and contain only the uniqu element form the array using reduce method
// function Unique_El(array) {
//     let resulte = array.reduce((previouvalue, currentvalue) => {
//         if (!previouvalue.includes(currentvalue)) {
//              previouvalue.push(currentvalue)
//         }
//         return previouvalue;
//     }, []);
//     return resulte;
// }
// console.log(Unique_El([1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 3, 6, 5]));
// write a function tio find the product of all element in the array
// function productOfArray(array) {
//     let result = array.reduce((previousevalue, currentvalue) => {
//         return previousevalue *= currentvalue;
//     }, 1)
//     return result;
// }
// console.log(productOfArray([1, 2, 3, 4, 5, 6]))
// write a function to find the average of array with using reduce method
// function average_array(array) {
//     let average = array.reduce((previousvalue, currentvalue) => {
//         return previousvalue += currentvalue;
//     }, 0)
//     return average / array.length;
// }
// console.log(average_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// write a function to find the even number of all element in the array using reduce method
// function even_ProductNumber(array) {
//     let result = array.reduce((previousvalue, currentvalue) => {
//         if (currentvalue % 2 == 0) {
//              previousvalue *= currentvalue;
//         };
//         return previousvalue
//     }, 1);
//     return result;
// }
// console.log(even_ProductNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// write a function to find the longest word in the array
// function longest_Word(string) {
//     let breakstring = string.split(" ");
//     let result = breakstring.reduce((previousevalue, currentvalue) => {
//         if (previousevalue.length < currentvalue.length) {
//             previousevalue = currentvalue
//         };
//         return previousevalue;
//     }, "");
//     return result
// }
// console.log(longest_Word("this is the string"))
// write a function to find the all square element sum
// function sumOffAllElement(array) {
//     let result = array.reduce((previousevalue, currentvalue) => {
//         return previousevalue *= currentvalue + currentvalue;
//     }, 1);
//     return result;
// }
// console.log(sumOffAllElement([2, 3]))
// function containSpecificElement() {
//     let arr = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let specific = arr.reduce((prevuiousevalue, currentvalue) => {
//         if (currentvalue % 2 == 0) {
//             prevuiousevalue.push(currentvalue);
//         };
//         return prevuiousevalue
//     }, []);
//     return specific
// }
// console.log(containSpecificElement());
// write a function to check the given string is or not
// function check_Integer(array) {
//     let result = array.reduce((previousevalue, currentvalue) => {
//         if (currentvalue < 0) {
//             return true;
//         }
//         return previousevalue
//     }, false);
//     return result;
// }
// console.log(check_Integer([1, 2, 3, 4, 5, 6, 7]));
// write a function to remove all vowels in the word
// function Vowel_remove(string) {
//     let vowel = ["a", "e", "i", "o", "u"];
//     return string.split("").reduce((previousevalue, currentvalue) => {
//         if (!vowel.includes(currentvalue)) {
//             previousevalue += currentvalue;
//         };
//         return previousevalue;
//     }, "");
// }
// console.log(Vowel_remove("this is the programming"))
// write a fnction ti find the unicode of string and convert into uppercase
// function chnage_Case(string) {
//     let breakstring = string.split("");
//     for (let i = 0; i < breakstring.length; i++) {
//         let code = breakstring[i].charCodeAt();
//         let getvalue = code + 32;
//         return getvalue
//     }
// }
// console.log(chnage_Case("my name is anash"))
// write a function to find the sum of all even element on the array using for each method
// function Even_El(array) {
//     let sum = 0;
//     array.forEach(function (element) {
//         if (element % 2 == 0) {
//             sum = sum + element;
//         };
//     });
//     return sum;
// }
// console.log(Even_El([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// write a  function to find the longest word in the array using for each method
// function longest_word(array) {
//     let longest = "";
//     array.forEach(function (element) {
//         if (longest.length < element.length) {
//             longest = element;
//         };
//     });
//     return longest;
// }
// console.log(longest_word(["HTML", "JAVASCRIPT", "C++", "JAVA"]));
// write a function to push all negative element in array
// function negative_El(array) {
//     let storevalue = [];
//     array.forEach(function (element) {
//         if (element < 0) {
//             storevalue.push(element);
//         };
//     });
//     return storevalue;
// }
// console.log(negative_El([-1, -2, -3, -4, 5, 6, 7, 8, 9]));
// write a function to find the duplicate numbers in the array
// function Duplicate_el(array) {
//     let storeValue = [];
//     array.forEach(function (element) {
//         if (!storeValue.includes(element)) {
//             storeValue.push(element)
//         };
//     });
//     return storeValue;
// }
// console.log(Duplicate_el([1, 2, 3, 4, 4, 3, 2, 5, 6, 7,]))
// write a function to find the smallest number in tbe array
// function smallest_number(array) {
//     let smallest = Math.min();
//     array.forEach(function (element) {
//         if (element < smallest) {
//             smallest = element;
//         };
//     });
//     return smallest;
// }
// console.log(smallest_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// wrtie a function to find the all smallest number and positive
// function Positive_Integer(array) {
//     let smallest = Math.min();
//     array.forEach(function (element) {
//         if (smallest < element && element > 0) {
//             smallest = element;
//         };
//     });
//     return smallest;
// }
// console.log([-1, 2, -3, -4, -5, 6, 7, 8])
// write a function to remove vpwel in the string
// function remove_String(string) {
//     let vowel = "aeiou";
//     let stringval = "";
//     for (let i = 0; i < string.length; i++) {
//         if (!vowel.includes(string[i])) {
//             stringval += string[i];
//         }
//     }
//     return stringval
// }
// console.log(remove_String("this is the string"))
// write a function to reverse number
// function reverse_number(number) {
//     let convert = String(number);
//     let join = "";
//     for (let i = convert.length - 1; i >= 0; i--) {
//         join += convert[i];
//    }
//    return typeof Number(join)
// }
// console.log(reverse_number(456))
// write a funconvert a string into alphabetical case ction to
// function alphabetical_Case(string){
//     let breakWord = string.split("").sort().join("");
//     console.log(breakWord)
// }
// console.log(alphabetical_Case("apple"))
// write a function to find the sumof all element in the array with using map
// function sumofArray(array) {
//     let result = array.map(function (element) {
//         return element + element
//     });
//     return result
// }
// console.log(sumofArray([1, 2, 3, 4, 5]))
// write a function to find the of all element in the array of squares
// function square_el(array) {
//     let result = array.map(function (element) {
//             return element * element;
//     });
//     return result;
// }
// console.log(square_el([1, 2, 3, 4, 5]))
// write a function and store the each word fo element in the array
// function wordlength(array) {
//     let result = array.map(function (element) {
//         return element.length;
//     });
//     return result;
// }
// console.log(wordlength(['one', 'two', 'three', 'four', 'five']));
// write a function to convert all element in the array to uppercase using map method
// function convert_Case(array) {
//     let result = array.map(function (element) {
//         return element.toUpperCase();
//     })
//     return result;
// }
// console.log(convert_Case(['javascript', 'Python', 'java', 'c++']));
// write a funct6ion to find the of all element in the array type of using map method
// function typeof_Element(array) {
//     let result = array.map(function (element) {
//         return typeof element;
//     });
//     return result;
// }
// console.log(typeof_Element(["javascript", 17, null, undefined]));
// write a function to find the each element in the arrau of index using map method
// function index_element(array) {
//     let result = array.map(function (element, index) {
//         return index;
//     })
//     return result;
// }
// console.log(index_element([5, 4, 6, 8, 7, 2, 1, 3, 9]))
// write a function to find the sumofeach paris
// function sumOfEachPair() {
//     let arr1 = [1, 2, 3, 4, 5];
//     let arr2 = [5, 4, 3, 2, 1];
//     let sumofpairs = arr1.map((value, index) => {
//         return value + arr2[index];
//     })
//     return sumofpairs
// }
// console.log(sumOfEachPair());
// write a func to fin dht produc tof two array with using map method
// function productOfArray() {
//     let arr1 = [1, 2, 3, 4, 5]
//     let arr2 = [1, 2, 3, 4, 5];
//     let result = arr1.map( (value, index) => {
//           return value + arr2[index];
//     })
//     return result;
// }
// console.log(productOfArray())
// write a function to find the eack word of string wiht using map method
// function wordlength(string) {
//     let breakstring = string.split(" ");
//     let result = breakstring.map(function (element) {
//          return element.length;
//     })
//     return result;
// }
// console.log(wordlength("this is the string"))
// write a function to conver the eacik word of string into capirtalize
// function capitalizeString(string){
//     let breakstring = string.split(" ");
//     let result = breakstring.map((value, index) =>{
//         return  value.charAt(0).toUpperCase() + breakstring[index].slice(1)
//     })
//     return result;
// }
// console.log(capitalizeString("this is the string"))
// write a function to find the minmum value in the array two dimentional array
// function findMinNumOfEachSubArray() {
//     let arr = [[-1, 2, 3], [4, 1, 6], [7, 8, -0]];
//     let miniValues = [];
//     for (let i = 0; i < arr.length; i++) {
//         let min = arr[i][0];
//         for (let j = 1; j < arr[i].length; j++) {
//             if (arr[i][j] < min) {
//                 min = arr[i][j];
//             }
//         }
//         miniValues.push(min)
//     }
//     return miniValues;
// }
// console.log(findMinNumOfEachSubArray());
// write a function to reverse each word of array using map
// function reverseWords(string) {
//     let breakstring = string.split("");
//     let reverseWords = "";
//     for (let i = breakstring.length - 1; i >= 0 ; i--) {
//         reverseWords += breakstring[i];
//     }
//     return reverseWords;
// }
// console.log(reverseWords('this is the string'))
// write a function to to find product of both array and subtract each other
// function findDifference(array1, array2) {
//     let first = 1;
//     let second = 1;
//     array1.forEach(function(element) {
//         return first *= element
//     });
//     array2.forEach(function(element) {
//         return second *= element
//     });
//     return second - first
// }
// console.log(findDifference([9, 22, 18], [16, 24, 10]));
// console.log(findDifference([1, 9, 25], [10, 7, 9]));
// console.log(findDifference([7, 6, 16], [26, 9, 26]));
// write a function tto sort a array using  for loop
// function sort_Array(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 let store = array[j];
//                 array[j] = array[i];
//                 array[i] = store;
//             }
//         }
//     }
//     return array;
// }
// console.log(sort_Array([1, 4, 5, 8, 3, 9, 10, 12, 6, 14]));
// write a function to convert a word in alphabetical
// function alphabetical_Case(string) {
//     let breakstring = string.split("");
//     let storevalue = [];
//     breakstring.forEach(function (element) {
//         let unicode = element.charCodeAt()
//         storevalue.push(unicode);
//     });
//     for (let i = 0; i < storevalue.length; i++) {
//         for (let j = i + 1; j < storevalue.length; j++) {
//             if (storevalue[i] > storevalue[j]) {
//                 let store = storevalue[j];
//                 storevalue[j] = storevalue[i];
//                 storevalue[i] = store;
//             }
//         }
//     }
//     let result = ""
//     for (let i = 0; i < storevalue.length; i++) {
//         result += String.fromCharCode(storevalue[i]);
//     }
//     return result;
// }
// console.log(alphabetical_Case("apple"))
// write a function if you print 3 89101234567;
// function nth_Value(array, nVlaue){
//    for (let i = nVlaue - 1; i >= 0; i--) {
//         console.log(array[i])
//    }
// }
// console.log(nth_Value([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
// write a function to find the factorial to given number
// function factorialIterative(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return `this number to find factorial ${num} and this result ${result}`
// }
// console.log(factorialIterative(5))
// write a function to convert some in the array of alphabetcal Case
// function alphabetical(array) {
//     let storeValue = [];
//     for (let i = 0; i < array.length; i++) {
//         let words = array[i];
//         let char = words.charAt(0).charCodeAt() + words.slice(1);
//         storeValue.push(char);
//     }
//     for (let i = 0; i < storeValue.length; i++) {
//         for (let j = i + 1; j < storeValue.length; j++) {
//             if (storeValue[i] > storeValue[j]) {
//                 let store = storeValue[i];
//                 storeValue[i] = storeValue[j];
//                 storeValue[j] = store;
//             }
//         }
//     }
//     let result = "";
//     for (let i = 0; i < storeValue.length; i++) {
//         result += String.fromCharCode(storeValue[i]);
//     }
//     return result
// }
// console.log(alphabetical(["banana", "anash", "debugger", "canva"]))
// write a function to implement a quadratice equation
// function Quadratic_Equation() {
//     let a = 1;
//     let b = 5;
//     let c = 6;
//     let x = -b + - Math.sqrt(b * 2 - 4 * a * c) / (2 * a);
//     x = (-5 + 1) / 2;
//     console.log(x)
// }
// console.log(Quadratic_Equation())
// write a function to which who started vowel
// function Vowel_Words(array) {
//     let vowel = "a, e, i, o, u";
//     let result = [];
//     array.forEach(function (element) {
//         let firstChar = element.charAt(0).toLowerCase();
//         if (vowel.includes(firstChar)) {
//             result.push(element);
//         }
//     });
//     return result
// }
// console.log(Vowel_Words(['Ibrahim', 'Ismail', 'abbas', 'Babar', "moin"]));
// write a function to remove duplicate element in the array
// function remove_Duplicate(array) {
//     let result = [];
//     array.forEach(function (element) {
//         if (!result.includes(element)) {
//             result.push(element);
//         };
//     });
//     return result;
// }
// console.log(remove_Duplicate([1, 2, 3, 4, 5, 3, 4, 3, 1]));
// write a function to find the longest word in the string
// function longest_Word(string) {
//     let breakstring = string.split(" ");
//     let longest = "";
//     breakstring.forEach(function (element) {
//         if (longest.length < element.length) {
//             longest = element;
//         };
//     });
//     return longest;
// }
// console.log(longest_Word("this is the string"))
// write a function to0 check the given string is palimdrom
// function palimdrom(string) {
//     let result = "";
//     for (let i = string.length - 1; i >= 0; i--) {
//         result += string[i];
//     }
//     if (result === string) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(palimdrom("madam"))
// write a function to find the factorial to given number
// function factorial(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result *= i;
//     }
//    return result;
// }
// console.log(factorial(5))
// write a function to reverse every word of string
// function reverse_words(string) {
//     let breakstring = string.split("");
//     let result = [];
//     for (let i = breakstring.length - 1; i >= 0; i--) {
//         result.push(breakstring[i])
//     }
//     return result.join("");
// }
// console.log(reverse_words("my name is anash"))
// write a function to find the common element in the array
// function common_element(array1, array2) {
//     let result = [];
//     array1.forEach(function (value) {
//         array2.forEach(function (element) {
//             if (value == element) {
//                 result.push(value);
//             };
//         });
//     });
//     return result;
// }
// console.log(common_element([1, 2, 3, 4, 5], [1, 3, 5, 6, 3]));
// write a functionto checkt ethe given number is prsent in the array is if given number present return true otherwise fa;se;
// function check_Number(array, number) {
//     return array.includes(number);
// }
// console.log(check_Number([1, 2, 3, 4, 5], 3));
// write a function to to check the pairs in the array
// function pairs_target(array, target) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) {
//                 result.push(array[i], array[j]);
//             }
//         }
//     }
//     return result;
// }
// console.log(pairs_target([10, 20, 10, 40, 50, 60, 70], 50));
// write a function to find range  in the array
// function rangeValue(array) {
//     let max = Math.max();
//     let min = Math.min();
//     array.forEach(function (element) {
//         if (max < element) {
//             max = element;
//         }
//         if (min > element) {
//             min = element;
//         }
//     });
//     return max - min;
// }
// console.log(rangeValue([100, 250, 300, 400, -150]));
// write a function to check the given character [resent in the string
// function check_character(name, checkWords) {
//     let resent = [];
//     let breakstring = name.split("");
//     breakstring.forEach(function (element) {
//         if (!checkWords.includes(element)) {
//             let joinstring = element;
//             resent.push(joinstring)
//         }
//     });
//     return resent.join("");
// }
// console.log(check_character("my name is anash", "a"));
// write a funcion to find the base and exponent value
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
// write a function to the given user operator plus and subtract
// function user_Opretor(num1, operator, num2) {
//     if (operator == "*") {
//         return num1 * num2;
//     } else if (operator == "+") {
//         return num1 + num2;
//     } else if (operator == "-") {
//         return num1 - num2;
//     } else {
//         return num1 / num2;
//     }
// }
// console.log(user_Opretor(5, "/", 5))
// write a function to convert a string in camel case
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


// write a function to check the value user given in the array exist or not


// function checkvalue(user, array) {
//     let convertCase = user.toLowerCase();
//     let found = false; // Initialize a flag to track if the user input was found in the array
//     array.forEach(function (element) {
//         if (convertCase == element) {
//             console.log(`${element} Exist In The Array`);
//             found = true; // Set the flag to true if the element is found
//         }
//     });
//     if (!found) {
//         console.log(`${user} Not Exist In The Array`);
//     }
// }
// let user = prompt("Enter Your Exist Thing");
// checkvalue(user, ['apple', 'banana', 'orange', 'grapes', 'kiwi']);
// write a func to find the grades od uysing templaye string
// function StudentGrades(score1, score2, score3, studentname) {
//     let avergae = (score1 + score2 + score3) / 3;
//     let percentage = avergae >= 40 ? "passed" : "failed";
//     let feedback = {
//         studentname: `${studentname}`,
//         StudentScore: `${score1} ${score2} ${score3}`,
//         Average: `${avergae}`,
//         Result: `${percentage}`
//     }
//     return feedback;
// }
// console.log(StudentGrades(143, 160, 180, "anash"))
// write a function to convert a string into swapCase
// function swap_Case(string) {
//     // let breakstring = string.split("");
//     let result = "";
//     for (let i = 0; i < string.length; i++) {
//         let code = string.charCodeAt(i);
//         if (code >= 65 && code <= 90) {
//             result += String.fromCharCode(code + 32);
//         } else if (code >= 97 && code <= 122) {
//             result += String.fromCharCode(code - 32);
//         } else {
//             result += String.fromCharCode(code);
//         }
//     }
//     return result;
// }
// console.log(swap_Case("tHE qUICK bROWN fOX"))
// write a function to find the largest even number
// function Largest_Even(array) {
//     let largest = Math.max();
//     let resent = [];
//     array.forEach(function (element) {
//         if (element % 2 == 0) {
//             resent.push(element);
//         };
//     });
//     resent.forEach(function (element) {
//         if (element > largest) {
//             largest = element;
//         };
//     });
//     return largest;
// }
// console.log(Largest_Even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// write a function to find the median value
// function medial_Value(array){
//    let findlength = array.length;
//    let middleValue = Math.floor(findlength / 2);
//    console.log(middleValue)
// //    return array[middleValue]
// }
// // console.log(medial_Value([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(medial_Value([1, 2, 3, 4, 5, 6]));


// write a function a to shuffle array


// function shuffleArray(array) {
//     let totallength = array.length;
//     while (totallength > 0) {
//         totallength--;
//         let randomNumbers = Math.floor(Math.random() * totallength);
//         let temp = array[totallength];
//         array[totallength] = array[randomNumbers];
//         array[randomNumbers] = temp;
//     }
//     return array;
// }
// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// write a function to find the compound interest
// function Compount_Interest() {
//     let r = 10 / 100;
//     let m = 1;
//     let t = 3;
//     let p = 5000;
//     let a = p * Math.pow(1 + r / m, m * t) | 0;
//     console.log(a)
// }
// console.log(Compount_Interest());
// write a function to implement hero'ns formula
// function heronsformula() {
//     let a = 5;
//     let b = 10;
//     let c = 15;
//     let d = (a + b + c) / 2;
//     let area = Math.sqrt(d * (d - a), (d - b), (d - c));
//     return area.toFixed(2)
// }
// console.log(heronsformula())
// write a function to find the parameter and area
// function parameterAndArea(length, width) {
//     let parameter = (2 * width + 2 * length);
//     let area =  length * width;
//     console.log(parameter, area);
// }
// console.log(parameterAndArea(10, 15))
// write a function to find the pyy
// function pyyValue(r){
//   let pyy = 3.14;
//   let area = pyy * r * r;
//   let circumferrence = 2 * pyy * r | 0;
//   console.log(area, circumferrence);
// }
// console.log(pyyValue(10));
// write a function to find the factorial the given nuber
// function factorial(number) {
//     let resent = 1;
//     for (let i = 1; i <= number; i++) {
//         resent = resent * i;
//         console.log(resent)
//     };
//     // return resent;
// }
// console.log(factorial(5))
// write a function to convert a string into alphabetical case
// function alphabetcal_Case(string) {
//     let breakstring = string.split("");
//     let resent = [];
//     breakstring.forEach(function (element) {
//         resent.push(element.charCodeAt());
//     });
//     for (let i = 0; i < resent.length; i++) {
//         for (let j = i + 1; j < resent.length; j++) {
//             if (resent[i] > resent[j]) {
//                 let store = resent[i];
//                 resent[i] = resent[j];
//                 resent[j] = store;
//             }
//         }
//     }
//     let result = "";
//     for (let i = 0; i < resent.length; i++) {
//         result += String.fromCharCode(resent[i])
//     }
//     return result;
// }
// console.log(alphabetcal_Case("apple"))
// write a function to find the factorial hte given number
// function factorialNumber(number) {
//     let resent = 1;
//     for (let i = 1; i <= number; i++) {
//         resent = resent * i;
//     }
//     return resent;
// }
// console.log(factorialNumber(5))
// let addbtn = document.querySelector(".add");
// let displaybtn = document.querySelector(".display");
// let input = document.querySelector("#input")
// let resent = [];
// let converter;
// addbtn.addEventListener('click', () => {
//     let getInputValue = input.value;
//     let converter = Number(getInputValue);
//     resent.push(converter);
//     input.value = " ";
// })
// displaybtn.addEventListener('click', () => {
//     for (let i = 0; i < resent.length; i++) {
//         console.log(resent[i])
//     }
// })
// write a function to get only name value in the object;
// function getvalue() {
//     let array = [
//         { name: "anash", age: 30 },
//         { name: "rahul", age: 20 },
//         { name: "hursh", age: 32 },
//     ]
//     let answer = array.map(function (element){
//         return element.name
//     })
//     return answer;
// }
// console.log(getvalue())
// write a function to find even number in the filter method
// function even_el(array) {
//     let cloned = array.filter(function (element) {
//         if (element % 2 == 0) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     return cloned;
// }
// console.log(even_el([1, 2, 3, 4, 5, 6]));
// write a function to find the prime number;
// function primenumber(number) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//            console.log("this is not prime number")
//            return false;
//         }
//     }
//     console.log("this is prime number")
// }
// console.log(primenumber(9));
// find hcrf and lcm
// function findHCF(num1, num2) {
//     let smaller = Math.min(num1, num2);
//     let hcf = 1;
//     for (let i = 1; i <= smaller; i++) {
//         if (num1 % i === 0 && num2 % i === 0) {
//             hcf = i;
//         }
//     }
//     return hcf;
// }
// function findLCM(num1, num2) {
//     let lcm = (num1 * num2) / findHCF(num1, num2);
//     return lcm;
// }
// // Example usage
// let number1 = 12;
// let number2 = 18;
// let hcf = findHCF(number1, number2);
// let lcm = findLCM(number1, number2);
// console.log("HCF: " + hcf);
// console.log("LCM: " + lcm);
// let para = document.querySelector("#para")
// let input = document.querySelector("#input")
// let button = document.querySelector(".btn");
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// button.addEventListener("click", function () {
//     let inputValue = input.value;
//     let number = Number(inputValue)
//     if (number === randomNumber) {
//         para.innerHTML = "you guess number is correct";
//     } else if (number < randomNumber) {
//         para.innerHTML = "try highest number"
//     } else {
//         para.innerHTML = "try lowest number"
//     }
// })
// write a funcntion to find the are of tranigle
// function areaoftraingel() {
//     let a = 5;
//     let b = 6;
//     let c = 7;
//     let S = (a + b + c) / 2;
//     let area = Math.sqrt(S * ((S - a) * (S - b) * (S - c)));
//     console.log(area)
// }
// console.log(areaoftraingel())
// write a function to find the leap year
// function leapyear(year){
//   return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// function addUp(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));
// write a function to find the min and max
// function minMax(array) {
//   let largest = Math.max();
//   let smallest = Math.min();
//   array.map( (element) => {
//     if (element > largest) {
//       largest = element
//     }
//     if (element < smallest) {
//       smallest = element
//     }
//   });
//   console.log(smallest, largest)
// }
// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));
// write a function to get the first element in the array of basis nvalue
// function getValueOfN(array, n) {
//     let resent = [];
//     for (let i = 1; i <= n; i++) {
//         resent.push(array[i]);
//     }
//     return resent;
// }
// console.log(getValueOfN([1, 2, 3, 4, 5], 1));
// console.log(getValueOfN([1, 2, 3, 4, 5], 2));
// console.log(getValueOfN([1, 2, 3, 4, 5], 0));
// write a function to delete rthe dulpicate element in the array
// function duplicateElement(array) {
//     let resent = [];
//     array.forEach(function (element) {
//         if (!resent.includes(element)) {
//             resent.push(element);
//         }
//     });
//     return resent;
// }
// console.log(duplicateElement([1, 2, 3, 4, 5, 2, 4]))
// write a function to break number in the given string
// function breaknumber(number) {
//     let convert = Array.from(number.toString()).map(Number);
//     let sum = 0;
//     for (let i = 0; i < convert.length; i++) {
//         let add = convert[i] ** 3;
//         sum = sum + add;
//     }
//     return sum;
// }
// console.log(breaknumber(153))
// write a function to count vowel and consonant
// function vowelandconsonant(string) {
//     let words = string.split(" ");
//     let vowels = ["a", "e", "i", "o", "u"];
//     let vowelCount = 0;
//     let consonantCount = 0;
//     for (let word of words) {
//         for (let char of word.toLowerCase()) {
//             if (vowels.includes(char)) {
//                 vowelCount++;
//             } else if (char.match(/[a-z]/i)) {
//                 consonantCount++;
//             }
//         }
//     }
//     console.log("Vowels:", vowelCount);
//     console.log("Consonants:", consonantCount);
// }
// vowelandconsonant("this is the string");
// function areAnagrams(array) {
//     let breakstring = array.split("");
//     let resent = [];
//     breakstring.forEach(function (element) {
//         let getcode = element.charCodeAt();
//         resent.push(getcode);
//     });
//     for (let i = 0; i < resent.length; i++) {
//         for (let j = 0; j < resent.length; j++) {
//             if (resent[i] < resent[j]) {
//                 let char = resent[i];
//                 resent[i] = resent[j];
//                 resent[j] = char;
//             }
//         }
//     }
//     let storeValue = "";
//     for (let i = 0; i < resent.length; i++) {
//         storeValue += String.fromCharCode(resent[i]);
//     }
//     return storeValue;
// }
// console.log(areAnagrams('listen', 'silent'));
// write a function to find the area of rectangle
// function areaofRectangle(length, width) {
//     let area = length * width
//     return area;
// }
// console.log(areaofRectangle(20, 40))
// write a function to find the area of tranigle
// function arteaoftranigle(length, base, height) {
//     let area = length * base * height;
//     return area;
// }
// console.log(arteaoftranigle((1 / 2), 30, 20))
// write a function to find the area of circle
// function areaofCircle(radius) {
//     let area = Math.PI * radius * radius;
//     return area.toFixed(2);
// }
// console.log(areaofCircle(40));
// write a function to find the perimeter of rectangel
// function perimeterofRectangle(length, width) {
//     let p = 2 + (length * width);
//     return p;
// }
// console.log(perimeterofRectangle(20, 10))
// write a function to find the peremeter of traingle
// function peremeterofTranigle(side1, side2, side3){
//    return side1 + side2 + side3;
// }
// console.log(peremeterofTranigle(10, 20, 30))
// write a function to find the circumference of circle
// function circunferenceofCircle(radius){
//    let C = 2 * Math.PI * radius;
//    return C;
// }
// console.log(circunferenceofCircle(40))
// write a function to find the Pythagorean Theorem
// function PythagoreanTheorem(a, b) {
//     const cSquared = a * a + b * b;
//     const c = Math.sqrt(cSquared);
//     return c;
// }
// console.log(PythagoreanTheorem(20, 23));
// write a function if user say in promtp uppercase to change your string n uppercase if prompt say lowecase your string in lowercase
// function change_Case(user) {
//     let string = "this is the string"
//     if (user == "Capitalize") {
//         let breakstring = string.split(" ");
//         for (let i = 0; i < breakstring.length; i++) {
//             let code = breakstring[i];
//             let getvalue = code.charAt(0).toUpperCase() + code.slice(1);
//             breakstring[i] = getvalue;
//         }
//         let joinstring = breakstring.join(" ");
//         return joinstring;
//     }
//     if (user == "UpperCase") {
//         let resent = "";
//         for (let i = 0; i < string.length; i++) {
//             resent += string[i].toUpperCase();
//         }
//         return resent;
//     }
//     if (user == "Lowercase") {
//         let resent = "";
//         for (let i = 0; i < string.length; i++) {
//             resent += string[i].toLowerCase();
//         }
//         return resent;
//     }
// }
// let user = prompt("Enter Your String");
// console.log(change_Case(user))
// write a function to find the even and odd number
// function evenAndOddNumber(user, array) {
//     let firstArray = []
//     let SecondArray = []
//     array.forEach(function (element) {
//         if (user === "even number") {
//             if (element % 2 == 0) {
//                 firstArray.push(element)
//             }
//         }
//         if (user === "odd number") {
//             if (element % 2 !== 0) {
//                 SecondArray.push(element)
//             }
//         }
//     });
//     console.log(firstArray, SecondArray);
// }
// let user = prompt("Enter Your Find Number")
// console.log(evenAndOddNumber(user, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// function hackerSpeak(string) {
//     let resent = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "a") {
//             resent += "4";
//         } else if (string[i] === "s") {
//             resent += "5"
//         }
//         else if (string[i] === "e") {
//             resent += "3"
//         }
//         else if (string[i] === "o") {
//             resent += "0"
//         }
//         else if (string[i] === "i") {
//             resent += "1"
//         }
//         else {
//             resent += string[i];
//         }
//     }
//     return resent;
// }
// console.log(hackerSpeak("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
// console.log(hackerSpeak("programming is fun")); // ➞ "pr0gr4mm1ng 15 fun"
// console.log(hackerSpeak("become a coder")); // ➞ "b3c0m3 4 c0d3r"
// write a function to sort a array with using loop
// function sort_Array(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 let store = array[i];
//                 array[i] = array[j];
//                 array[j] = store;
//             };
//         };
//     };
//     return array;
// }
// console.log(sort_Array([2, 4, 5, 7, 8, 1, 3, 6, 10, 9]))
// writw a function to find the longest word in the string
// function longest_word(string) {
//     let breakWord = string.split(" ");
//     let longest = "";
//     breakWord.forEach(function (element) {
//         if (element.length > longest.length) {
//             longest = element
//         };
//     return longest;
// }
// console.log(longest_word("i want to become programmer"))
// write a function to find the smallest word in the string
// function smallest_String(string) {
//     let breakword = string.split(" ");
//     let smallest = breakword[0];
//     breakword.forEach(function (element) {
//         if (element.length < smallest.length) {
//             smallest = element;
//         };
//     });
//     return smallest;
// }
// console.log(smallest_String("this is the string"))
// write function and finc the which number word who started vowel
// function vowel_Words(array) {
//     let vowel = "aeiou";
//     let resent = array.map(function (element) {
//         let firstchar = element[0];
//         if (vowel.includes(firstchar)) {
//             return element
//         };
//     });
//     return resent;
// }
// console.log(vowel_Words(["anash", "babar", "devil", "thomas", "otabek"]));

