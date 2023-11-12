const name = "Ahmed Rafi"
const repoCount = 50
const  year = 2023

console.log(name + repoCount + "% Project Complete"); // This code is not suitable for mordern day's But It is still works.
// TO write stings we should use backtick ref: ``

console.log(`This is ${name} I have Complete Over ${repoCount} Projects in ${year}`); // This syntex is more readable and reliable for work nowadayas.
const testing = new String('desperateHub')
console.log(testing[2]); // to find which carrecter on this position
console.log(testing.__proto__);
console.log(testing.length); // to know how much the word or sentence charrecter count is
console.log(testing.toUpperCase()); // to make all the charrecter in capital letter
console.log(name.charAt(7)); // to find what is on this 7 position charrecter
console.log(name.indexOf('i')); // to find what is the charrecter cound on this charrecter


const newString = testing.substring(6, 11)
console.log(newString);

const anotherString = testing.slice(-11, 4)
console.log(anotherString);

const gameName = "   DespO   "
console.log(gameName);
console.log(gameName.trim()); // to remove unnecessery spaces

const url = "https://www.desperatehub.com"

console.log(url.replace ('https://www.desperatehub.com', 'https://www.google.com')); // in this way we can replace the url and redirect in other website


