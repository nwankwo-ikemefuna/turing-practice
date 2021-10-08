const { numberRange } = require("./helpers/utils");

const twoSumLessThanK = (arr, benchmark) => {

    //step 1: filter out duplicate numbers (since i < j) and numbers >= benchmark (arr1), and get a copy of it (arr2)
    let arr1 = arr.filter((num, index) => (num < benchmark) && (arr.indexOf(num) === index));
    let arr2 = [...arr1];

    //step 2: sort array 1 in ascending order and array 2 in descending order. This will help reduce number of comparisons to be made
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => b - a);

    //step 3: create a new array where each entry is arr1[i] + arr2[i] < benchmark
    let maxSum = -1;
    for (num1 of arr1) {
        for (num2 of arr2) {
            const sum = num1 + num2;
            //skip sum >= benchmark sum < maxSum
            if (sum >= benchmark || sum < maxSum) continue;
            maxSum = sum;
        }
    }

    return maxSum;
}


// console.time('test1');
const arr1 = [34, 23, 1, 24, 75, 33, 54, 8, 35];
const benchmark1 = 35;
//expected output: 58
console.log(twoSumLessThanK(arr1, benchmark1));
// console.timeEnd('test1');

/* 
console.time('test2');
const arr2 = [10, 20, 30];
const benchmark2 = 15;
//expected output: -1
console.log(`Input [${arr2.join(', ')}] @ ${benchmark2} = ${twoSumLessThanK(arr2, benchmark2)}`);
console.timeEnd('test2');


console.time('test3');
const arr3 = numberRange(1000, 1, 6);
const benchmark3 = 7600;
//expected output: 7596
console.log(`Input [${arr3.join(', ')}] @ ${benchmark3} = ${twoSumLessThanK(arr3, benchmark3)}`);
console.timeEnd('test3'); */