function isAlpha(x) {
	return (x >= 'A' && x <= 'Z') || (x >= 'a' && x <= 'z');
}

function swapChar(str, a, b) {
	let c = '';
	const strLen = str.length;
	for (let i = 0; i < strLen; i++) {
		if (i == a) c = c + str[b];
		else if (i == b) c = c + str[a];
		else c = c + str[i];
	}
	return c;
}

function reverseOnlyLetters(str) {
	// Initialize left and right pointers
	let right = str.length - 1, left = 0;

	// Traverse string from both ends
	while (left < right) {
		// Ignore special characters
		if (!isAlpha(str[left])) left++;
		else if (!isAlpha(str[right])) right--;
		else {
			str = swapChar(str, left, right);
			left++;
			right--;
		}
	}

	return str;
}


const str1 = 'ab-cd';
//expected output: 'dc-ba'
console.log(`Input ${str1} = ${reverseOnlyLetters(str1)}`);

const str2 = 'a-bC-dEf=ghIj!!';
//expected output: 'j-Ih-gfE=dCba!!'
console.log(`Input ${str2} = ${reverseOnlyLetters(str2)}`);