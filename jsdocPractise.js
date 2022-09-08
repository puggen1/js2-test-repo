/**
 * adds two numbers together and returns them
 * @param {number} a first number to add
 * @param {number} b second number to add
 * @returns {number} the two numbers now added together to one
 * @example
 * ```js
 * //give it two numbers
 * let finalNumber = addNumbers(10, 5)
 * console.log(finalNumber)
 * //logs to console: 15 
 * ```
 */


function addNumbers(a, b) {
    const result = a + b;
    return result;
  }




  const person = {
    name :"Kylar",
    age:21,
    job:"stipp",
    city:"Lofthus"
  };
  console.log(typeof(person));
  console.log(person);

  let stringyfiedPerson = JSON.stringify(person);
  console.log(typeof(stringyfiedPerson));
  console.log(stringyfiedPerson);

  let returenedPerson =JSON.parse(stringyfiedPerson);
  console.log(typeof(returenedPerson));
  console.log(returenedPerson);

/*
  const firstName = localStorage.getItem("firstName");
  console.log(firstName);
  localStorage.removeItem("firstName");
  console.log(localStorage.getItem("firstName"));*/

  

  const pet = {
    type: 'Dog',
    name: 'Lilje',
  };

  const retrivedPet = localStorage.getItem("pet");
  console.log(retrivedPet);
  let formatedPet = JSON.parse(retrivedPet);
  console.log(formatedPet)



  const names = ['Ola', 'Kari', 'Joakim', 'Ole'];


// 'name0' is index 0 in the array
// 'name1' is index 1 in the array
const [nameOne, nameTwo, ...allTheOthers] = names;

console.log(nameOne, nameTwo);
// Logs:
// Ola Kari

console.log(allTheOthers);
// Logs:
// ['Joakim', 'Ole']