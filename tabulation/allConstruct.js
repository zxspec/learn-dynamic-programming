const assert = require('assert').strict;

function allConstruct(target, wordBank) {
    const tableLength = target.length + 1
    const table = Array(tableLength).fill().map(() => [])
    table[0] = [[]]

    for (let i = 0; i < tableLength; i++) {
        const reminder = target.substring(i)
        const current = table[i]
        for (let word of wordBank) {
            if (reminder.startsWith(word)) {
                const nextIndex = i + word.length
                if (nextIndex < tableLength) {
                    const newCombinations = table[i].map(subArray => [...subArray, word])
                    table[nextIndex].push(...newCombinations)
                }
            }
        }
    }

    return table[tableLength - 1]
}


// m - number of characters in a word
// n - number of values

// time = O(n^m)
// space = O(n^m)

let result

result = allConstruct('', ['cat', 'dog', 'mouse'])
console.log("### allConstruct('', ['cat', 'dog', 'mouse']): ", result)
assert.deepEqual([[]], result)

result = allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])
console.log("### allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']): ", result)
assert.deepEqual([['purp', 'le'], ['p', 'ur', 'p', 'le']], result)

result = allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
console.log("### allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']): ", result)
assert.deepEqual([
    ['abc', 'def'],
    ['ab', 'c', 'def'],
    ['abcd', 'ef'],
    ['ab', 'cd', 'ef']
], result)

result = allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
console.log("### allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']): ", result)
assert.deepEqual([], result)

// RangeError: Maximum call stack size exceeded
// result = allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a','aa','aaa', 'aaaa','aaaaa'])
// console.log("### allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a','aa','aaa', 'aaaa','aaaaa']): ", result)
// assert.deepEqual([], result)

