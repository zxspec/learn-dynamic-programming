const assert = require('assert').strict;

function fib(n) {
    const table = new Array(n + 1).fill(0)
    table[1] = 1;

    for (let i = 2; i < n + 1; i++) {
        table[i] = table[i - 1] + table[i - 2]
    }
    // for (let i = 0; i <= n; i++) {
    //     table[i+1] += table[i]
    //     table[i+2] += table[i]
    // }

    return table[n]
}

let result

result = fib(1)
assert.equal(1, result)
console.log('### fib(1): ', result)

result = fib(6)
assert.equal(8, result)
console.log('### fib(6): ', result)

result = fib(7)
assert.equal(13, result)
console.log('### fib(7): ', result)

result = fib(8)
assert.equal(21, result)
console.log('### fib(8): ', result)

result = fib(10)
assert.equal(55, result)
console.log('### fib(10): ', result)

result = fib(50)
assert.equal(12586269025, result)
console.log('### fib(50): ', result)

result = fib(200)
assert.equal(2.8057117299251016e+41, result)
console.log('### fib(200): ', result)