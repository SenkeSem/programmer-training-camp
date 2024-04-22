var decodeMessage = function (key, message) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let keyStr = [...new Set(key)].join('').split(' ').join('');
  let str = '';

  for (let i = 0; i < message.length; i++) {
    let index = keyStr.indexOf(message[i]);

    if (index === -1) {
      str += ' ';
    } else {
      str += alphabet[index];
    }
  }

  return str;
};

console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'));
