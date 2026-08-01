let name = "Sunny";
let age = 22;
//let city = 'delhi'

console.log(name);
console.log(age);

let username="sunny"
console.log(username)

console.log("My name is " + name + " and my age is "+ age)
console.log("Age:",age)

//string interpolation / template literals
console.log("My name is ${name} and my age is ${age}" );

let str= String("javascript");
str = "Javascript";
console.log(str.length);
console.log(str[0]);
console.log(str[1]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[10]);

str = "  I love javascript ";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.startsWith("I Love"));
console.log(str.endsWith("e javascript"));
console.log(str.includes("ve"));

console.log(str);
console.log(str.trim().length);

console.log(str.trim());
console.log(str.length);
console.log(str.trimEnd().length);
console.log(str.trimStart().length);

str = "i love javascript";
console.log(str.indexof("a"));
console.log(str.charAt(4));
console.log(str.split(""));

//substring , slice
// str="javascript"

console.log(str.substring(0, 4));
console.log(str.substring(-8, 4));
console.log(str);

console.log(str.slice(0, 4));
console.log(str.slice(-8, 4));
console.log(str);

let url =
  "https://www.google.com/search?q=nodejs+download&oq=nodej&gs_lcrp=EgZjaHJvbWUqCggCEAAYsQMYgAQyBggAEEUYOTIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCTU0MzFqMGoxNagCCLACAfEFztkaJRgVdJo&sourceid=chrome&source=chrome.rb&ie=UTF-8";

console.log(url.split("A"))
console.log(url.replace("+","^"))
console.log(url.replaceAll("+","^"))

let srt1="java"
let str2="script"

console.log(str1 + str2)
console.log(str1.concat(str2))