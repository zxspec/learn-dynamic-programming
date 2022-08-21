const assert = require('assert').strict;

function canSum(target, numbers, memo = {}) {
    if (target in memo) return memo[target];
    
    if (target < 0) return false;

    if (target === 0) return true;


    for (let val of numbers) {
        const remainder = target - val
        
        if ( canSum(remainder, numbers, memo) === true) {
            memo[target] = true
            return true
        }
    }
    memo[target] = false
    return false
}

// n - target
// m - number of values in input array

// time = (n*m)
// space = m

let result

result = canSum(0, [])
console.log('### canSum(0, []): ', result)
assert.equal(true, result)

result = canSum(0, [0])
console.log('### canSum(0, [0]): ', result)
assert.equal(true, result)

result = canSum(7, [])
console.log('### canSum(7, []): ', result)
assert.equal(false, result)

result = canSum(7, [2, 3])
console.log('### canSum(7, [2, 3]): ', result)
assert.equal(true, result)

result = canSum(7, [5, 3, 4, 7])
console.log('### canSum(7, [5, 3, 4, 7]): ', result)
assert.equal(true, result)

result = canSum(7, [2, 4])
console.log('### canSum(7, [2, 4]): ', result)
assert.equal(false, result)

result = canSum(8, [2, 3, 5])
console.log('### canSum(8, [2, 3, 5]): ', result)
assert.equal(true, result)

result = canSum(300, [7, 14])
console.log('### canSum(300, [7, 14]): ', result)
assert.equal(false, result)