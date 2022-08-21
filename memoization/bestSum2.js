const assert = require('assert').strict;

function bestSum(target, numbers = [], memo = {}) {
    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null

    let shortestResult = null

    for (let num of numbers) {
        const remainder = target - num
        const result = bestSum(remainder, numbers, memo)

        if (result !== null) {
            if (shortestResult === null || shortestResult.length > (result.length + 1)) {
                shortestResult = [...result, num]
            }
        }
    }

    memo[target] =  shortestResult
    return memo[target]
}

// n - target
// m - number of values in input array

// time = O(m^2 * n)
// space = O(m^2)

let result

result = bestSum(0, [])
console.log('### bestSum(0, []): ', result)
assert.deepEqual([], result)

result = bestSum(7, [])
console.log('### bestSum(7, []): ', result)
assert.deepEqual(null, result)

result = bestSum(7, [7])
console.log('### bestSum(7, [7]): ', result)
assert.deepEqual([7], result)

result = bestSum(7, [2, 3])
console.log('### bestSum(7, [2, 3]): ', result)
assert.deepEqual([3, 2, 2], result)

result = bestSum(7, [7, 2, 3])
console.log('### bestSum(7, [7, 2, 3]): ', result)
assert.deepEqual([7], result)

result = bestSum(7, [5, 3, 4, 7])
console.log('### bestSum(7, [5, 3, 4, 7]): ', result)
assert.deepEqual([7], result)

result = bestSum(7, [2, 4])
console.log('### bestSum(7, [2, 4]): ', result)
assert.deepEqual(null, result)

result = bestSum(8, [2, 3, 5])
console.log('### bestSum(8, [2, 3, 5]): ', result)
assert.deepEqual([5, 3], result)

result = bestSum(300, [7, 14])
console.log('### bestSum(300, [7, 14]): ', result)
assert.deepEqual(null, result)