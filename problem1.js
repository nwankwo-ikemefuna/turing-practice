/**
 * Problem 1
 * @param {string[]} ops - List of operations
 * @return {number} - Sum of scores after performing all operations 
 */
const calPoints = (ops) => {
    let result = [];
    for (const op of ops) {
        const si = result.length - 1;
        let newScore = 0;
        switch (op) {
            case '+': 
                newScore = result[si] + result[si - 1]; //sum of previous 2 scores
                result = [ ...result, newScore ];
                break;
            case 'D':
                newScore = result[si] * 2; //double of previous score
                result = [ ...result, newScore ];
                break;
            case 'C':
                result.pop(); //invalidate and remove previous score
                break;
            default:
                newScore = +op; //number score, parse to int
                result = [ ...result, newScore ];
                break;
        }
    }

    // console.log(result);

    //sum up the scores
    result = result.reduce((a, b) => a + b, 0);
    return result;
}

const ops1 = ['5', '2', 'C', 'D', '+'];
const ops2 = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];
const ops3 = ['1'];

console.log(`Input ${ops1.join(' ')} = ${calPoints(ops1)}`);
console.log(`Input ${ops2.join(' ')} = ${calPoints(ops2)}`);
console.log(`Input ${ops3.join(' ')} = ${calPoints(ops3)}`);