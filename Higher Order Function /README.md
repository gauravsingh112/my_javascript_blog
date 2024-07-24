# Higher-Order Functions in JavaScript

This repository demonstrates the use of higher-order functions in JavaScript to simplify and improve code by adhering to the DRY (Don't Repeat Yourself) principle. The example involves calculating the area, circumference, and diameter of circles based on a list of radii.

## Example Code

### Initial Approach

The initial code uses separate functions for each calculation, resulting in repetitive code:

```javascript
const radius = [3, 4, 5, 6];

function calculateArea(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

function calculateCircumference(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

function calculateDiameter(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius)); // [28.27, 50.27, 78.54, 113.1]
console.log(calculateCircumference(radius)); // [18.85, 25.13, 31.42, 37.7]
console.log(calculateDiameter(radius)); // [6, 8, 10, 12]
```

## Problem with Initial Code

### Repetition of Logic

In the initial approach, there are three separate functions: `calculateArea`, `calculateCircumference`, and `calculateDiameter`. Each function calculates a different property of circles (area, circumference, diameter) using a list of radii. However, each function contains very similar code for iterating over the array of radii and performing a calculation:

- **`calculateArea`** iterates over the radii and computes the area of circles.
- **`calculateCircumference`** iterates over the radii and computes the circumference of circles.
- **`calculateDiameter`** iterates over the radii and computes the diameter of circles.

Here's the repetitive pattern:

```javascript
const output = [];
for (let i = 0; i < radius.length; i++) {
    output.push(/* calculation */);
}
return output;
```

## Problem with Initial Code

Each function has its own version of this loop, which leads to several issues:

- **Code Duplication**: The loop and the array handling code are duplicated in each function. This repetition makes the code harder to maintain because changes to the loop or array handling must be replicated across all functions.
- **Inconsistent Changes**: If you need to update the logic for how the calculation is done or how the results are collected, you have to make changes in multiple places. This increases the chance of errors or inconsistencies.
- **Increased Complexity**: With more functions performing similar tasks, the codebase becomes more complex and harder to understand. Adding more calculations would require even more functions, leading to even more repetition.

## Why Move to DRY Code?

The DRY (Don't Repeat Yourself) principle is aimed at reducing repetition of code. By moving to a DRY approach, you centralize the repetitive logic into a single function, making the codebase easier to manage and understand. Here's how the DRY approach improves the code:

- **Centralized Logic**: By creating a single higher-order function (e.g., `calculate`) that handles the repetitive task of iterating over the array and applying a calculation, you eliminate redundant code. This makes it easier to update or fix bugs in one place rather than in multiple functions.
- **Improved Maintainability**: When you need to add a new calculation or modify the existing logic, you only need to update the `calculate` function or the specific calculation functions (`area`, `circumference`, `diameter`). This reduces the risk of introducing bugs and makes the code more maintainable.
- **Enhanced Readability**: The code becomes cleaner and more readable when similar tasks are handled in one place. The purpose of each function is clearer, and the code is easier to follow.
- **Flexibility**: The DRY approach allows for more flexibility. You can easily pass different calculation functions to the `calculate` function, making it reusable for various types of calculations beyond just area, circumference, and diameter.


## Improved Approach with Higher-Order Functions

The improved code uses a higher-order function, `calculate`, to eliminate redundancy:

```javascript
const radius = [3, 4, 5, 6];

const area = function(radius) {
    return Math.PI * radius * radius;
};

const circumference = function(radius) {
    return 2 * Math.PI * radius;
};

const diameter = function(radius) {
    return 2 * radius;
};

const calculate = function(radiusArray, logic) {
    const output = [];
    for (let i = 0; i < radiusArray.length; i++) {
        output.push(logic(radiusArray[i]));
    }
    return output;
};

console.log(calculate(radius, area)); // [28.27, 50.27, 78.54, 113.1]
console.log(calculate(radius, circumference)); // [18.85, 25.13, 31.42, 37.7]
console.log(calculate(radius, diameter)); // [6, 8, 10, 12]
```
<!-- Section Closed -->


### In this code:

area, circumference, and diameter are functions that calculate the respective values for a single radius.
calculate is a higher-order function that takes an array of radii and a function (logic) as arguments. It applies the function to each element of the array and returns the results.
This approach makes the code more efficient and maintainable by removing repetitive logic and centralizing the calculation process.


## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/gauravsingh112/higher-order-functions-js.git
   ```


## Navigate to the project directory:
```bash

cd higher-order-functions-js
```

#### Open the project in your favorite code editor to explore and run the example.

## Connect with Me

Feel free to connect with me for discussions, collaborations, or just to say hi!

- **GitHub:** [Your GitHub Profile](https://github.com/gauravsingh112)

## Follow Me

Stay updated with my latest projects and blog posts by following me on:

- **GitHub:** [Follow Me](https://github.com/your-username)
- **Blog:** ([My Blog](https://github.com/gauravsingh112/my_javascript_blog))

Thank you for visiting my repository! If you find this example helpful, please consider giving it a star 🌟 and sharing it with others.








