const reverseString = require('../src/reverseString')

test('Reverses a one word string', () => 
  expect(reverseString('reverse')).toBe('esrever')
)

test('Reverse a multiple word string', () => 
  expect(reverseString('reverse this sentence')).toBe('ecnetnes siht esrever')
)

