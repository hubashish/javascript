const name = "Nagesh"
const repoCount = 50

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String("Nagesh") 
// console.log(gameName[0]);

console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5 , 4)
console.log(anotherString);

 const url = "https://nagesh.com/nagesh%20giri"
 console.log(url.replace('%20','-'))