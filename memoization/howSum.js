const assert = require('assert').strict;

function howSum(target, numbers) {
    if (target < 0) return null
    if (target === 0) return [];

    for (let num of numbers) {
        const remainder = target - num
        const result = howSum(remainder, numbers)
        if (result !== null) {
            return [...result, num]
        }
    }

    return null
}

// n - target, in worst case scenario step would be 1 which means tree height would be exactly n 
// m - number of values in input array

// time = (n*m^2)
// space = m^2


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

/* Next tests are commented out, since it takes to much time to solve it with not optimized algorithm */
// result = howSum(300, [7, 14])
// console.log('### howSum(300, [7,14]): ', result)
// assert.deepEqual(null, result)
