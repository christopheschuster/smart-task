/*
Filename: AdvancedCalculator.js
Description: Advanced calculator with various mathematical functions and error handling.
Author: [Your Name]
Date: [Date]

*/

// Creating a Calculator class
class Calculator {
  constructor() {
    this.result = 0;
  }

  // Addition method
  add(...numbers) {
    this.result = numbers.reduce((acc, val) => acc + val, this.result);
    return this.result;
  }

  // Subtraction method
  subtract(...numbers) {
    this.result = numbers.reduce((acc, val) => acc - val, this.result);
    return this.result;
  }

  // Multiplication method
  multiply(...numbers) {
    this.result = numbers.reduce((acc, val) => acc * val, this.result);
    return this.result;
  }

  // Division method
  divide(...numbers) {
    if (numbers.includes(0)) {
      throw new Error("Cannot divide by zero!");
    }
    this.result = numbers.reduce((acc, val) => acc / val, this.result);
    return this.result;
  }

  // Power method
  power(base, exponent) {
    this.result = Math.pow(base, exponent);
    return this.result;
  }

  // Square root method
  sqrt(number) {
    if (number < 0) {
      throw new Error("Cannot calculate square root of a negative number!");
    }
    this.result = Math.sqrt(number);
    return this.result;
  }

  // Factorial method
  factorial(number) {
    if (number < 0) {
      throw new Error("Cannot calculate factorial of a negative number!");
    }
    this.result = this.calculateFactorial(number);
    return this.result;
  }

  // Helper function to calculate factorial recursively
  calculateFactorial(number) {
    if (number === 0) {
      return 1;
    }
    return number * this.calculateFactorial(number - 1);
  }
}

// Example usage of the Calculator class

try {
  const calc = new Calculator();

  console.log("Addition: " + calc.add(5, 10, 15)); // Output: 30

  console.log("Subtraction: " + calc.subtract(10, 5)); // Output: 25

  console.log("Multiplication: " + calc.multiply(2, 3, 4)); // Output: 200

  console.log("Division: " + calc.divide(100, 5)); // Output: 40

  console.log("Power: " + calc.power(2, 3)); // Output: 8

  console.log("Square Root: " + calc.sqrt(16)); // Output: 4

  console.log("Factorial: " + calc.factorial(5)); // Output: 120

  console.log("Final Result: " + calc.result); // Output: 120
} catch (error) {
  console.error(error.message);
}