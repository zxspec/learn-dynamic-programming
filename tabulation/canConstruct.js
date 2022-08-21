const assert = require('assert').strict;

function canConstruct(target, wordBank) {
    const tableLength = target.length + 1
    const table = Array(tableLength).fill(false)
    table[0] = true

    for (let i = 0; i < tableLength; i++) {
        const current = table[i]
        const reminder = target.substring(i)
        if (current) {
            for (let word of wordBank) {
                if (reminder.startsWith(word)) {
                    const nextIndex = i + word.length
                    if (nextIndex < tableLength) { // not necessary but i want to keep table length
                        table[nextIndex] = true
                    }
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

result = canConstruct('', ['cat', 'dog', 'mouse'])
console.log("### canConstruct('', ['cat', 'dog', 'mouse']): ", result)
assert.equal(true, result)

result = canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])
console.log("### canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']): ", result)
assert.equal(true, result)

result = canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
console.log("### canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']): ", result)
assert.equal(false, result)

result = canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
console.log("### canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']): ", result)
assert.equal(true, result)

result = canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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
console.log(`### canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [ 
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
assert.equal(false, result)
