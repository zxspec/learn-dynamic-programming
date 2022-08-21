const assert = require('assert').strict;

function gridTraveler(x, y, memo = {}) {
    if (x === 0 || y ===0 ) return 0
    if (x === 1 || y === 1) return 1

    const key = [x,y].sort().join(' ')
    if (key in memo) return memo[key]

    memo[key] = gridTraveler(x - 1, y, memo) + gridTraveler(x, y - 1, memo)

    return memo[key]
}

// time = O(m * n)
// space = O(n + m)

let result

result = gridTraveler(1, 1)
console.log('### gridTraveler(1, 1): ', result)
assert.equal(1, result)

result = gridTraveler(2, 3)
console.log('### gridTraveler(2, 3): ', result)
assert.equal(3, result)

result = gridTraveler(3, 2)
console.log('### gridTraveler(3, 2): ', result)
assert.equal(3, result)

result = gridTraveler(3, 3)
console.log('### gridTraveler(3, 3): ', result)
assert.equal(6, result)

result = gridTraveler(18, 18)
console.log('### gridTraveler(18, 18): ', result)
assert.equal(2333606220, result)