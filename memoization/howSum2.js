const assert = require('assert').strict;

function howSum(target, numbers, memo = {}) {
    if(target in memo) return memo[target]
    if (target < 0) return null
    if (target === 0) return [];

    for (let num of numbers) {
        const remainder = target - num
        const result = howSum(remainder, numbers, memo)
        if (result !== null) {
            memo[target] = [...result, num]
            return memo[target]
        }
    }


    memo[target] = null
    return null
}

// time = O(n * m^2)
// space = O(m^2)

let result

result = howSum(0, [])
console.log('### howSum(0, []): ', result)
assert.deepEqual([], result)

// TODO it works differentely from tabulation in this scenario
// result = howSum(0, [0])
// console.log('### howSum(0, [0]): ', result)
// assert.deepEqual([0], result)

result = howSum(7, [])
console.log('### howSum(7, []): ', result)
assert.deepEqual(null, result)

result = howSum(7, [2, 3])
console.log('### howSum(7, [2, 3]): ', result)
assert.deepEqual([3, 2, 2], result)

result = howSum(7, [5, 3, 4, 7])
console.log('### howSum(7, [5, 3, 4, 7]): ', result)
assert.deepEqual([4, 3], result)

result = howSum(7, [2, 4])
console.log('### howSum(7, [2, 4]): ', result)
assert.deepEqual(null, result)

result = howSum(8, [2, 3, 5])
console.log('### howSum(8, [2, 3, 5]): ', result)
assert.deepEqual([2, 2, 2, 2], result)

result = howSum(300, [7, 14])
console.log('### howSum(300, [7,14]): ', result)
assert.deepEqual(null, result)