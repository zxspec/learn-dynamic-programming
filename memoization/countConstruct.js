const assert = require('assert').strict;

function countConstruct(word, values) {
    if (word === '') return 1
    
    let result = 0

    for (let value of values) {
        if (word.startsWith(value)) {
            const reminder = word.substring(value.length)
            const count = countConstruct(reminder, values)
            result += count
        }
    }

    return result
}

// m - number of characters in a word
// n - number of values

// time = O(n^m * m) ??
// space = O(m^2) ??

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

/* Next tests are commented out, since it takes to much time to solve it with not optimized algorithm */
// result = countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [ 
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//     'eeeeeee',
//     'eeeeeeee',
//     'eeeeeeeee',
// ])
// console.log(`### countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [ 
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//     'eeeeeee',
//     'eeeeeeee',
//     'eeeeeeeee',
// ]): `, result)
// assert.equal(0, result)

