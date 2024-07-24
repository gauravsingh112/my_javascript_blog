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

