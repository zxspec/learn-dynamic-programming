const assert = require('assert').strict;

function bestSum(target, numbers) {
    const table = Array(target + 1).fill(null)
    table[0] = []

    for (let i = 0; i <= target; i++) {
        const current = table[i];
        if (current) {
            for (let j = 0; j < numbers.length; j++) {
                const nextIndex = i + numbers[j]
                if (nextIndex <= target) {
                    const nextValue = [...current, numbers[j]]
                    if (!table[nextIndex] || nextValue.length < table[nextIndex].length) {
                        table[nextIndex] = nextValue
                    }
                }
            }
        }
    }

    return table[target]
}

// n - target
// m - number of values in input array

// time = O(n * m^2)
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
assert.deepEqual([2, 2, 3], result)

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
assert.deepEqual([3, 5], result)

result = bestSum(300, [7, 14])
console.log('### bestSum(300, [7, 14]): ', result)
assert.deepEqual(null, result)

