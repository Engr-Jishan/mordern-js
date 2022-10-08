// findIndex
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.findIndex((currentValue, index, arr) => {
    return currentValue > 20;
});

// console.log(result);

// Array Slice
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = num.filter((currentValue, index, arr) => {
    return currentValue > 5;
})

console.log(num);
console.log(result);