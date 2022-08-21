const assert = require('assert').strict;

function allConstruct(word, values, memo = {}) {
    if (word in memo) return memo[word]
    if (word === '') return [[]]

    const result = []

    for (let value of values) {
        if (word.startsWith(value)) {
            const wordReminder = word.substring(value.length)
            const allCombinationsToConstructRemainder = allConstruct(wordReminder, values, memo)
            const allCombinationsToConstructWord = allCombinationsToConstructRemainder.map(list => [value, ...list])
            result.push(...allCombinationsToConstructWord)
        }
    }

    memo[word] = result
    return result
}

// m - number of characters in a word
// n - number of values

// time = O(??)
// space = O(??)


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
    ['ab', 'cd', 'ef'],
    ['ab', 'c', 'def'],
    ['abc', 'def'],
    ['abcd', 'ef']
], result)

result = allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
console.log("### allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']): ", result)
assert.deepEqual([], result)

result = allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a','aa','aaa', 'aaaa','aaaaa'])
console.log("### allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a','aa','aaa', 'aaaa','aaaaa']): ", result)
assert.deepEqual([], result)