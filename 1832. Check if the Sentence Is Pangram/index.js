var checkIfPangram = function (sentence) {
  let set = new Set(sentence);

  return set.size === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
