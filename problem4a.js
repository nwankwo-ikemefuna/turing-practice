const { numberRange } = require("./helpers/utils");


const executeFunc = (arr, k) => {
	let maxPossibleValue = -1
  
	const sortedArr = arr.sort((a,b)=>a-b)
  
	let currMaxValInArr = Math.max(...sortedArr.filter((num)=>num < k))
  
	let idxOfCurrMaxVal = sortedArr.indexOf(currMaxValInArr)
  
	while (idxOfCurrMaxVal != 0){
		for (let i = 0; i < idxOfCurrMaxVal; i++) {
	
			const sumTwo = sortedArr[i] + currMaxValInArr;
		
			if (sumTwo < k && maxPossibleValue < sumTwo) maxPossibleValue = sumTwo
		
			if(sumTwo > k) break;
		}
	
		currMaxValInArr = sortedArr[idxOfCurrMaxVal-1]
		idxOfCurrMaxVal = idxOfCurrMaxVal-1
	}
  
	return maxPossibleValue;
}

console.log(executeFunc([34, 23, 1, 24, 75, 33, 54, 8, 35], 35));
console.log(executeFunc([10, 20, 30], 15));


console.time('test3');
const arr3 = numberRange(1000, 1, 6);
const benchmark3 = 7600;
//expected output: 7596
console.log(`Input [${arr3.join(', ')}] @ ${benchmark3} = ${executeFunc(arr3, benchmark3)}`);
console.timeEnd('test3');