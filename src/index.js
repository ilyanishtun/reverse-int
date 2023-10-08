module.exports = function reverse(n) {
  let string = n.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  resultNumber = parseInt(result)
  return resultNumber;
}



