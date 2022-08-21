const assert = require('assert').strict;

function howSum(target, numbers) {
    const table = Array(target + 1).fill(null)
    table[0] = []

    for (let i = 0; i <= target; i++) {
        const current = table[i]
        if (current) {
            for (let j = 0; j < numbers.length; j++) {
                const nextIndex = i + numbers[j]
                if (nextIndex <= target) {
                    const nextValue = [...table[i], numbers[j]]
                    table[nextIndex] = nextValue
                }
            }
        }
    }

    return table[target]
}

// n - target
// m - number of values in input array

// time =      O(n*m^2)
// space =   O(m^2)

let result

result = howSum(0, [])
console.log('### howSum(0, []): ', result)
assert.deepEqual([], result)

result = howSum(0, [0])
console.log('### howSum(0, [0]): ', result)
assert.deepEqual([0], result)

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