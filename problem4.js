
function twoSumLessThanK(arr, benchmark) {

    //step 1: filter out duplicate numbers (since i < j) and numbers >= benchmark (arr1), and get a copy of it (arr2)
    let arr1 = arr.filter((num, index) => (num < benchmark) && (arr.indexOf(num) === index));
    let arr2 = [...arr1];

    //step 2: sort array 1 in ascending order and array 2 in descending order. This will help reduce number of comparisons to be made
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => b - a);

    //step 3: create a new array where each entry is arr1[i] + arr2[i] < benchmark
    let sumArr = [];
    for (num1 of arr1) {
        for (num2 of arr2) {
            const sum = num1 + num2;
            const maxSumArr = Math.max(...sumArr);
            //skip sum >= benchmark sum < max of sumArr
            if (sum >= benchmark || sum < maxSumArr) continue;
            sumArr.push(sum);
        }
    }

    //step 4: get the max of sumArr or return -1 if sumArr is empty
    let result = -1;
    if (sumArr.length > 0) {
        result = Math.max(...sumArr);
    }

    return result;
}

const arr1 = [34, 23, 1, 24, 75, 33, 54, 8];
const benchmark1 = 60;
//expected output: 58
console.log(`Input [${arr1.join(', ')}] @ ${benchmark1} = ${twoSumLessThanK(arr1, benchmark1)}`);

const arr2 = [10, 20, 30];
const benchmark2 = 15;
//expected output: -1
console.log(`Input [${arr2.join(', ')}] @ ${benchmark2} = ${twoSumLessThanK(arr2, benchmark2)}`);