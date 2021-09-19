/**
 * Problem 2
 * @param {number[]} arr - List of integers
 * @return {number} - Number of elements in arr satisfying the condition
 */
const countElements = (arr) => {
    const arrLen = arr.length;

    //step 1: create an object to map the numbers to their frequencies
    let freqMap = {};
    for (let i = 0; i < arrLen; ++i) {
        if (!freqMap[arr[i]]) {
            freqMap[arr[i]] = 0;
        }
        ++freqMap[arr[i]];
    }
        
    //setp 2: loop through 
    let result = 0;
    for (const k in freqMap) {
        const num = +k; //parse to int
        if (arr.includes(num + 1)) {
            const freq = freqMap[num];
            result += freq;
        }
    }

   return result;

}

const nums1 = [1, 2, 3];
const nums2 = [1, 1, 3, 3, 5, 5, 7, 7];
const nums3 = [1, 3, 2, 3, 5, 0];
const nums4 = [1, 1, 2, 2];
const nums5 = [1, 1, 2];

console.log(`Input ${nums1.join(' ')} = ${countElements(nums1)}`);
console.log(`Input ${nums2.join(' ')} = ${countElements(nums2)}`);
console.log(`Input ${nums3.join(' ')} = ${countElements(nums3)}`);
console.log(`Input ${nums4.join(' ')} = ${countElements(nums4)}`);
console.log(`Input ${nums5.join(' ')} = ${countElements(nums5)}`);