let myName = "Prince";
let repoCount = "5";
let emailId = "princebisht@google.com"

console.log(`My name is ${myName} and my Github Email Id is ${emailId} and my Repo Count is ${repoCount}...`);
// This is an ideal way doing it
// This is known as String Impositioning

const gameName = new String("Prince")
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(myName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

console.log(myName.substring(0,4)); //creates a new string with characters from main string from index of 0 to 3 which is 0 to n-1
console.log(myName.slice(0,4));
//Difference between both of them is that Substring doesn't support -ve values which means backword string but slice does it.
console.log(gameName.slice(-4, 4));

const idNAME = new String("        PriyanshuBisht     ");
console.log(idNAME.trim());
//Trim Functions removes unnecessary spaces and indents from String

const url = "princebisht.com/prince%20bisht";
console.log(url.replace('%20','-'));
//replace is used to replace anything in string
console.log(url.includes("priyanshu"));
//includes is used to find anything inside the main string, it returns boolean values

const my13 = "Prince-Bisht";
console.log(my13.split("-"));
//split is used to split two strings by using a reference(it can be - or / or anything) into substrings but in the form of arrays