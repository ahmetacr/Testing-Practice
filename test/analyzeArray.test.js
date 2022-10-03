const analyze = require('../src/analyzeArray');

test('Returns the average', () => 
  expect(analyze([1,8,3,4,2,6]).average).toBe(4)
)

test('Returns the min', () => 
  expect(analyze([1,8,3,4,2,6]).min).toBe(1)
)


test('Returns the max', () => 
  expect(analyze([1,8,3,4,2,6]).max).toBe(8)
)


test('Returns the length', () => 
  expect(analyze([1,8,3,4,2,6]).length).toBe(6)
)