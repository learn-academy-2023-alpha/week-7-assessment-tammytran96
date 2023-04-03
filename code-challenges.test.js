// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("descriptiveSentence", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
      const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
      ]
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(descriptiveSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// ReferenceError: descriptiveSentence is not defined

// b) Create the function that makes the test pass.
// pseudocode
// create a function called descriptiveSentence
// input is an array of objects
// output is an array with a sentence about each person with their name capitalized
// iterate over the array of objects with .map() to be able to access each object
// while in the .map() function, use dot notation to access the values of the names and occupations inside the object
// we won't need to modify the occupation but we need to capitalize the name
    // split the array with a space in between so that it doesn't split by letters, but by words - so that we have an array of arrays of name's values (a nested array) - make this into a variable so that it's not confusing
    // declare another variable and map over that previous array of the split names 
    // at the 0 index of each name, we will make that letter uppercase
    // add the rest of the string back so that it becomes one word
    // declare another variable to join the arrays back together so that we only have one array
// return a sentence using string interpolation for the name and occupation 

const descriptiveSentence = (arrayOfObjects) => {
  return arrayOfObjects.map(value => {
      let nameSplit = value.name.split(" ")
      let nameUppercase = nameSplit.map(value => value[0].toUpperCase() + value.substring(1))
      let nameJoin = nameUppercase.join(" ")
      return `${nameJoin} is ${value.occupation}.`
  })
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("threeRemainder", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
    expect(threeRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]
    expect(threeRemainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// ReferenceError: threeRemainder is not defined

// b) Create the function that makes the test pass.
// pseudocode
// create a function called threeRemainder
// input is an array of mixed data
// output is an array of only the remainder of the numbers divided by 3
// take the array of mixed data and iterate over it filtering out only the data types that are numbers - set that to a variable
// map over the filter array and get the modulo of each value (value % 3)
// return that array to receive an array of only the remainder of those numbers divided by 3 
const threeRemainder = (arrayMixedData) => {
  numArray = arrayMixedData.filter(value => typeof value == "number")
  return numArray.map(value => value % 3)
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubedSum", () => {
  it("returns the sum of all the numbers cubed", () => {
      const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
    expect(cubedSum(cubeAndSum1)).toEqual(99)
     const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})
// ReferenceError: cubedSum is not defined

// b) Create the function that makes the test pass.
// pseudocode
// create a function called cubedSum
// input is an array of numbers
// output is the sum of all the numbers cubed
// iterate over the array using .map() and cube each number - set that to a variable
// declare another variable that starts at 0 - this will be the start of the running sum
// iterate over the mapped cubed array using a for loop and add each value of the array to the 0 variable so we can keep a running count
// return the total of the cubed numbers

const cubedSum = (array) => {
  cubedArray = array.map(value => value **3)
  let runningSum = 0
  for(let i = 0; i < cubedArray.length; i++){
      runningSum += cubedArray[i]
  }
  return runningSum
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
