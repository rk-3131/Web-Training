console.log("This one is for the strings");

let str1 = "String can be declared using double quotes";
let str2 = 'String can be declared using single quotes';
let str3 = `String can be declared using backticks`;
// string declared using backticks is called as the template

// length of the string
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// \ is used to add the special character into the string
// \n is used to add new line
// \\ to add backslash and so on

// Strings can also be declared as object and hence we can use it in the further part of execution
// But declaring the string as object will yeild different result as js objects cannot be compared and hence we will not be able to compare the strings which are created using object type
// Comparing two JavaScript objects always returns false.


let testStr = "This is the test string This This";

console.log(testStr.length);
// used to print the length of the string

console.log(testStr.charAt(3));
// returns the character at particular location in string 

console.log(testStr.charCodeAt(3));
// this is used to get the character code at particular location in string

console.log(testStr.at(3));
// returns the character at particular location in string 

console.log(testStr[3]);
// returns the character at particular location in string 

console.log(testStr.slice(3, 9));
// slice is used to get the part of the string which is mentioned in the parameters
// the first parameter is start of the slice (included) and the second one is end index (excluded)

console.log(testStr.substring(3 , 9));
// this is same as slice and is used to get the part of the string

console.log(testStr.toUpperCase());

console.log(testStr.toLowerCase());

console.log(testStr.concat(" " ,"I am radhakrushna"));

// trim trimstart and trimend these methods are used in the string method technique to remove extra blank spaces at the start and end of the string


// padstart and padend are the parameters used for the purpose of adding extra character number of times in the given strings

let num = "31";
console.log(num.padStart(8, "0"));

console.log(num.padEnd(10, "0"));
// here in both of the cases the total number of character will be length the parameter given


console.log(num.repeat(5));

console.log(testStr.replace("This", "That"));
// above method is case sensitive hence it will not replace the character string which does not match the exact case as of the given text

console.log(testStr.replace(/this/i, "That"));
// by using the above syntax we can replace the string without considering the case in the string

// as by default the string matches the single occurence of the string we can make it to match all the occurence by using g
console.log(testStr.replace(/This/g, "That"));

// and here is the combination of both the properties
console.log(testStr.replace(/this/gi, "That"));

// replaceAll can also be used to replace all the occurence of the text string

let wordsArray = testStr.split(" ");
console.log(wordsArray);

console.log(testStr.indexOf("is"));
// this returns index of the first occurence of the character or sequence

console.log(testStr.lastIndexOf("is"));
// this returns index of the first occurence of the character or sequence from the last
// both return -1 if the txt is not found there
// we can give the second parameter to the text by giving the number which will tell the machine to start the search from that index

// console.log(testStr.search("is"));

// match is used to match the given string and hence we can get the output in the form of array of number of match and match

// includes() is a method which is used to check if the string is present in the given text or not
// hence we can see if its there or not based on the true or false value
// it can also be given the number which will check if the string is present at that index or not

// startswith and endswith are the functions which will return the value of true or false based start or end of the character

let name = "Radhakrushna Mahadik";
let city = "Nagpur";

console.log(`Welcome ${name} here in the ${city}`);
// This is called as string interpolation

// It can be used to add in the html tags as well

let header = "Header section";
let values = ["Item", "Item", "Item", "Item"];

let str = `<h1>${header}</h2>`;
str += `<ul>`
for (let i in values){
    str += `<li>${values[i]}</li>`;
}
`</ul>`;

document.getElementById("demo").innerHTML = str;