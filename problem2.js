/**
 * Problem 2
 * @param {number[]} arr - List of integers
 * @return {number} - Number of elements in arr satisfying the condition
 */
const countElements = (arr) => {
    const arrLen = arr.length;

    //step 1: create an object to map the numbers to their frequencies
    let freqMap = {};
    for (const num of arr) {
        if (num in freqMap) {
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }
    }
        
    //setp 2: loop through 
    let result = 0;
    for (const [k, freq] of Object.entries(freqMap)) {
        const num = +k; //parse to int
        if (arr.includes(num + 1)) {
            result += freq;
        }
    }

   return result;

}

const nums1 = [1, 2, 3];
console.log(`Input ${nums1.join(' ')} = ${countElements(nums1)}`);
//expected output: 2

const nums2 = [1, 1, 3, 3, 5, 5, 7, 7];
console.log(`Input ${nums2.join(' ')} = ${countElements(nums2)}`);
//expected output: 0

const nums3 = [1, 3, 2, 3, 5, 0];
console.log(`Input ${nums3.join(' ')} = ${countElements(nums3)}`);
//expected output: 3

const nums4 = [1, 1, 2, 2];
console.log(`Input ${nums4.join(' ')} = ${countElements(nums4)}`);
//expected output: 2

const nums5 = [1, 1, 2];
console.log(`Input ${nums5.join(' ')} = ${countElements(nums5)}`);
//expected output: 2