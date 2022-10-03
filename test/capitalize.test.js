const capitalize = require('../src/capitalize')

test("Capitalize a single word's first letter", () => 
  expect(capitalize('capitalize')).toBe('Capitalize')
)

test("Capitalize a single word where the letters are randomly capitalized already", () => 
  expect(capitalize("cOngrAtuLatioNs")).toBe('COngrAtuLatioNs')
)

test("Capitalize a two letter word", () => 
  expect(capitalize("hey dude!")).toBe('Hey dude!')
)

test("Capitalize a string with multiple words on it", () => 
  expect(capitalize("what is going on here?")).toBe('What is going on here?')
)

test("Do nothing if the first letter is not a letter", () =>
  expect(capitalize('1.st person to see is him.')).toBe('1.st person to see is him.')
)
