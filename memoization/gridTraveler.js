const assert = require('assert').strict;

function gridTraveler(x, y) {
    if(x === 0 || y ===0 ) return 0
    if (x === 1 || y === 1) return 1

    return gridTraveler(x - 1, y) + gridTraveler(x, y - 1)
}

// time = (2^n) / 2
// space = n

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

/* Next tests are commented out, since it takes to much time to solve it with not optimized algorithm */
// result = gridTraveler(18, 18)
// console.log('### gridTraveler(18, 18): ', result)
// assert.equal(2333606220, result)
