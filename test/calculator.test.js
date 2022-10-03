const calculator = require('../src/calculator')

test('Can add two numbers', () =>
  expect(calculator.add(10,20)).toBe(30)
)

test('Returns the other number if one is missing',() => 
  expect(calculator.add(10)).toBe(10)
)

test('Returns 0 if no input given', () =>
  expect(calculator.add()).toBe(undefined),
  expect(calculator.multiply()).toBe(undefined),
  expect(calculator.divide()).toBe(undefined),
  expect(calculator.subtract()).toBe(undefined)
)

test('Can subtract two numbers',() => 
  expect(calculator.subtract(50,10)).toBe(40)
)

test('Can divide two numbers', () => 
  expect(calculator.divide(12,10)).toBe(12 / 10)
)

test('Returns zero if zero is divided by anything',() => 
  expect(calculator.divide(0,10)).toBe(0)
)

test('Returns undefined if something is divided to 0',() => 
  expect(calculator.divide(150,0)).toBe(undefined)
)

test('Can multiply two numbers', () =>
  expect(calculator.multiply(150, 12)).toBe(150 * 12)
)

test('Returns 0 if something is multiplied by 0', () => 
  expect(calculator.multiply(120,0)).toBe(0)
)