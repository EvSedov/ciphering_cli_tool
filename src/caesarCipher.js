const caesarCipher = (str, offset = 1) => {
  return str.split('').map((_, idx) => str.charCodeAt(idx))
    .map((charOfCode) => charOfCode + offset)
    .map((charOfCode) => String.fromCharCode(charOfCode))
    .join('');
};

module.exports = caesarCipher;
