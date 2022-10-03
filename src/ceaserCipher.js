const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const ceaser = (str) => {
  let transformed = ''
  if (str == undefined || str == null) return ''
  for (let i in str) {
    if (!alphabet.includes(str[i].toLowerCase())) {  
      transformed += str[i].toString()
    } else {
      transformed += nextLetter(str[i])
    }
  }
  return transformed
}

const nextLetter = (letter) => {
  for (let i in alphabet) {
    i = parseInt(i)
    if (letter.toLowerCase() == alphabet[i].toLowerCase()) {
      if (!(letter === 'z' || letter === 'Z')) {
        if (letter.toLowerCase() == letter) {
          return alphabet[i + 1]
        } else {
          return alphabet[i + 1].toUpperCase()
        }
      } else {
        if (letter === 'Z') {
          return 'A'
        } else if (letter === 'z'){
          return 'a'
        }
      } 
    }
  }
}


module.exports = ceaser