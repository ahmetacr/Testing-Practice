const calculator = {
  add: (a = null,b = null) => {
    if (a === null && b === null) return undefined
    return a + b
  },
  divide: (a = null,b = null) => {
    if (a === null && b === null) return undefined
    if (b === 0) return undefined
    return a / b
  },
  multiply: (a = null,b = null) => {
    if (a === null && b === null) return undefined
    return a * b
  },
  subtract: (a = null,b = null) => {
    if (a === null && b === null) return undefined
    return a - b
  }
};

module.exports = calculator