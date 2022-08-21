const assert = require('assert').strict;

function canSum(target, numbers) {
    const table = Array(target + 1).fill(false)
    table[0] = true;

    for (let i = 0; i <= target; i++) {
        const current = table[i]
        if (current) {
            for (let j = 0; j < numbers.length; j++) {
                const nextIndex = i + numbers[j]
                if (nextIndex <= target) {
                    table[nextIndex] = true
                }
            }
        }
    }

    return table[target]
}

// n - target
// m - number of values in input array

// time = O(n*m)
// space = O(n)

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
