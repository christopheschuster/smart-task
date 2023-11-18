// Filename: ComplexCodeExample.js
// Content: A complex code example showcasing various JavaScript concepts and techniques

// Object to store user information
const User = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
};

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Class representing a car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getFullDescription() {
    return `${this.year} ${capitalizeFirstLetter(this.make)} ${capitalizeFirstLetter(this.model)}`;
  }
}

// Array of cars
const cars = [
  new Car('toyota', 'camry', 2019),
  new Car('honda', 'accord', 2020),
  new Car('ford', 'mustang', 2021)
];

// Higher-order function to filter cars by year
function filterCarsByYear(carsArray, year) {
  return carsArray.filter(car => car.year === year);
}

// Calculate the sum of numbers in an array
function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

// Function to find the maximum number in an array
function findMaxNumber(numbers) {
  return Math.max(...numbers);
}

// Event listener for a button click
document.getElementById('myButton').addEventListener('click', function(event) {
  console.log('Button clicked!');
  // Perform some complex logic here...
});

// Asynchronous function using Promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Usage of async/await to fetch data asynchronously
async function fetchUserData() {
  try {
    const userData = await fetchData('https://api.example.com/user');
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

// Complex regular expression to validate email addresses
const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,}$/;

// Complex code with loops and conditionals
let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  } else {
    sum -= i;
  }
}

// Complex recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// ... (Add more complex code here as needed)

// Execute some complex code when the page loads
window.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded!');
  // Perform some complex operations here...
});