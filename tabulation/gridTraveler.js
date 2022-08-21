const assert = require('assert').strict;

function gridTraveler(m, n) {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    table[1][1] = 1

    for (let i = 0; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            const value = table[i][j]
            const hasRightNeighbour = j < n
            if (hasRightNeighbour) {
                table[i][j + 1] = table[i][j + 1] + value
            }
            const hasBottomNeighbour = i < m
            if (hasBottomNeighbour) {
                table[i + 1][j] = table[i + 1][j] + value
            }
        }
    }
    return table[m][n]
}

// time = O(m*n)
// space = O(m*n)


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
