const sum = require('../sum')

test('add two number together', () => {
    expect(sum(1, 2)).toBe(3)
})