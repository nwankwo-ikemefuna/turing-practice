
const numberRange = (length, start = 1, step = 1) => {
    return Array.from({ length }, (_x, i) => (i + start) * step);
}

const isAlpha = (x) => {	
  	return (/[a-zA-Z]/).test(x);
	// return (x >= 'A' && x <= 'Z') || (x >= 'a' && x <= 'z');
}


module.exports = {
    numberRange,
    isAlpha
};