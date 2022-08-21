const assert = require('assert').strict;

function canConstruct(word, values) {
    if (word === '') return true

    for (let value of values) {
        if (word.startsWith(value)) {
            const reminder = word.substring(value.length)
            if (canConstruct(reminder, values)) {
                return true
            }
        }
    }

    
    return false
}

// m - number of characters in a word
// n - number of values

// time = O(n^m * m)
// space = O(m^2)

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


/* Next tests are commented out, since it takes to much time to solve it with not optimized algorithm */
// result = canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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
// console.log(`### canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [ 
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
// assert.equal(false, result)
