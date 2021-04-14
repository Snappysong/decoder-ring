// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = 0, encode = true) {
    const abcs = ["a", "b", "c", "d", "e", "f", "g", "h" , "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    if (alphabet.length !== 26){
      return false;
    }
    const alpha = alphabet.split("");
    const unique = new Set(alpha).size !== alpha.length;
    if (unique === true){
      return false;
    }
    if (encode === true){
      const newMessage = [];
      const words = input.toLowerCase().split(" ");
      for (let i = 0; i < words.length; i++){
        const word = words[i].split("")
        const newWord = [];
        for (let j = 0; j < word.length; j++){
          const index = abcs.indexOf(word[j]);
          newWord.push(alphabet[index]);
        }
      newMessage.push(newWord.join(""));
      }
    return newMessage.join(" ");
    }
    if(encode === false){
      const newMessage = [];
      const words = input.toLowerCase().split(" ");
      for (let i = 0; i < words.length; i++){
        const word = words[i].split("");
        const newWord = [];
        for (let j = 0; j < word.length; j++){
          const index = alpha.indexOf(word[j]);
          newWord.push(abcs[index]);
        }
      newMessage.push(newWord.join(""));
      }
    return newMessage.join(" ");
    }

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
