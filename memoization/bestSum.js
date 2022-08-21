const assert = require('assert').strict;

function bestSum(target, numbers = []) {
    if (target === 0) return []
    if (target < 0) return null

    let shortestResult = null

    for (let num of numbers) {
        const remainder = target - num
        const result = bestSum(remainder, numbers)

        if (result !== null) {
            if (shortestResult === null || shortestResult.length > (result.length + 1)) {
                shortestResult = [...result, num]
            }
        }
    }

    return shortestResult
}

// n - target
// m - number of values in input array

// time = O(n^m * m)
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

/* Next tests are commented out, since it takes to much time to solve it with not optimized algorithm */
// result = bestSum(300, [7, 14])
// console.log('### bestSum(300, [7, 14]): ', result)
// assert.deepEqual(null, result)


