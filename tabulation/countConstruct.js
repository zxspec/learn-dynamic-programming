const assert = require('assert').strict;

function countConstruct(target, wordBank) {
    const tableLength = target.length + 1
    const table = Array(tableLength).fill(0)
    table[0] = 1

    for (let i = 0; i < tableLength; i++) {
        const current = table[i]
        const reminder = target.substring(i)
        for (let word of wordBank) {
            if (reminder.startsWith(word)) {
                const nextIndex = i + word.length
                if (nextIndex < tableLength) {
                    table[nextIndex] += current
                }
            }
        }
    }

    return table[tableLength - 1]
}

// m - number of characters in a word
// n - number of values

// time = O(n * m^2)
// space = O(m)

let result

result = countConstruct('', ['cat', 'dog', 'mouse'])
console.log("### countConstruct('', ['cat', 'dog', 'mouse']): ", result)
assert.equal(1, result)

result = countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])
console.log("### countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']): ", result)
assert.equal(2, result)

result = countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
console.log("### countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']): ", result)
assert.equal(1, result)

result = countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
console.log("### countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']): ", result)
assert.equal(0, result)

result = countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
console.log("### countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']): ", result)
assert.equal(4, result)

result = countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [ 
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee',
    'eeeeeeee',
    'eeeeeeeee',
])
console.log(`### countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [ 
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee',
    'eeeeeeee',
    'eeeeeeeee',
]): `, result)
assert.equal(0, result)

