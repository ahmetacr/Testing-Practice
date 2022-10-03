function reverseString(str) {
  let rvs = ''
  for (let i = str.length -1; i > -1; i--) {
    rvs += str[i];
  }
  return rvs
}

module.exports = reverseString