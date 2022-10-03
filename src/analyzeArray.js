function analyze(arr) {
  return {
    average: arr.reduce((a,b) => a + b) / arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length
  }
}

const arr = [1,2,3]

console.log(analyze(arr).average)

module.exports = analyze