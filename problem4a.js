const numberRange = (length, start = 1, step = 1) => {
    return Array.from({ length }, (_x, i) => (i + start) * step);
}

const executeFunc = (arr, k) => {
  let maxPossibleValue = -1
  
  const sortedArr = arr.sort((a,b)=>a-b)
  
  let currMaxValInArr = Math.max(...sortedArr.filter((num)=>num < k))
  
  let idxOfCurrMaxVal = sortedArr.indexOf(currMaxValInArr)
  
  for (let i = 0; i < (sortedArr.length - (sortedArr.length - idxOfCurrMaxVal - 1)); i++){
    const sumTwo = sortedArr[i] + currMaxValInArr;
    
    if (sumTwo < k && maxPossibleValue < sumTwo) maxPossibleValue = sumTwo
    
    if(idxOfCurrMaxVal-1 > 1) currMaxValInArr = sortedArr[idxOfCurrMaxVal-1]
  }
  
  return maxPossibleValue;
}

console.log(executeFunc([34, 23, 1, 24, 75, 33, 54, 8], 60));
console.log(executeFunc([10, 20, 30], 15));


console.time('test3');
const arr3 = numberRange(1000, 1, 6);
const benchmark3 = 7600;
//expected output: -1
console.log(`Input [${arr3.join(', ')}] @ ${benchmark3} = ${executeFunc(arr3, benchmark3)}`);
console.timeEnd('test3');