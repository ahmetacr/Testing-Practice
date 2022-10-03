function capitalize(str) {
  let newStr = ''
  for (let i in str) {
    if (i == 0) newStr += str[i].toUpperCase()
    else newStr += str[i]
  }
  return newStr
}

console.log(capitalize('what'))

capitalize('ahMed')

module.exports = capitalize