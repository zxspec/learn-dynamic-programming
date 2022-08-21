const assert = require('assert').strict;

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    
    return memo[n]
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