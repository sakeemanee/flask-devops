//1. Basic Array Assignments

//# 1.Create an array of numbers from 1 to 10. Print all numbers using:
//for loop
//for...of loop
//forEach()

1.for loop
 let arr=[1,2,3,4,5,6,7,8,9,10];
 for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
 }

2. for of loop
let arr=[1,2,3,4,5,6,7,8,9,10];
 for(let x of arr){
  console.log(x);

 }

3.forEach()
 let arr=[1,2,3,4,5,6,7,8,9,10];
 arr.forEach(function(value){
  console.log(value);

 })

#2.Create an array of fruits and print each fruit in uppercase.
let fruits=["apple","orange","banana","pine-apple"];
for(let items of fruits ){
  console.log(items.toUpperCase());
}

#3.Find the sum of all numbers in an array using forEach().
let numbers=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
 numbers.forEach(function(number){
  sum += number;
});
console.log(sum);







2. Assignments using map()

//1.Given an array [2, 4, 6, 8], create a new array where each number is doubled
let numbers = [2, 4, 6, 8];
let doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); 
//2.Convert an array of names ["suhail", "khan", "rahul"]
 into an array of capitalized names (["Suhail", "Khan", "Rahul"]).
let names = ["suhail", "khan", "rahul"];
let capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

console.log(capitalizedNames);

//3.Given an array of numbers, 
return a new array with the square of each number.
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(number => number ** 2);

console.log(squaredNumbers);  


3.Assignments using filter()
1.Given an array of numbers [5, 12, 8, 130, 44],
 filter out numbers less than 10.

let numbers = [5, 12, 8, 130, 44];
let filteredNumbers = numbers.filter(number => number >= 10);
console.log(filteredNumbers); 

2.From an array of ages [12, 17, 18, 24, 30],
 filter only the ages eligible to vote (18+).
let ages = [12, 17, 18, 24, 30];
let eligibleVoters = ages.filter(age => age >= 18);
console.log(eligibleVoters); 

3.Given an array of words 
["pen", "notebook", "pencil", "book"],
filter words that have length > 4 
let words = ["pen", "notebook", "pencil", "book"];
let longWords = words.filter(word => word.length > 4);
console.log(longWords);  

4.From an array of numbers [1,2,3,4,5,6,7,8,9,10],
 filter only even numbers.
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(number => number % 2 == 0);

console.log(evenNumbers);


4. Combination of map() and filter()
1.From an array [1,2,3,4,5,6,7,8,9,10] →
First filter only even numbers
Then return their squares.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers.filter(number => number % 2 === 0).map(number => number ** 2);

console.log(result); 

2.Given an array of student objects:
let students = [
  { name: "Suhail", marks: 85 },
  { name: "Rahul", marks: 45 },
  { name: "Aman", marks: 65 }
];

let students = [
  { name: "Suhail", marks: 85 },
  { name: "Rahul", marks: 45 },
  { name: "Aman", marks: 65 }
];

let result = students.filter(student => student.marks > 60).map(student => student.name);

console.log(result); 