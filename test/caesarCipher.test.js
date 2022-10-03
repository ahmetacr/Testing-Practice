const ceaser = require('../src/ceaserCipher')

test('Ceaser Cipher works for one word', () => 
  expect(ceaser('defend')).toBe('efgfoe')
)

test('Ceaser Cipher works for multiple words', () => 
  expect(ceaser('efgfoe uil fbtu xbmm pg uil dbtumf')).toBe('fghgpf vjm gcuv ycnn qh vjm ecuvng')
)

test('Ceaser Cipher works for multiple words along with numbers', () => 
  expect(ceaser('This is the first day of 2022')).toBe('Uijt jt uif gjstu ebz pg 2022')
)

test('Ceaser Cipher works for multiple words along with punctuation', () => 
  expect(ceaser("They're the ones who's responsible for the project")).toBe("Uifz'sf uif poft xip't sftqpotjcmf gps uif qspkfdu")
)

