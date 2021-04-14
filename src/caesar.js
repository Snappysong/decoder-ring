// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const startMessage = (input.toLowerCase()).split("");
    const newMessage = [];
    for (let i = 0; i < startMessage.length; i++){
      if (alphabet.includes(startMessage[i])){
        let alphaIndex = alphabet.indexOf(startMessage[i]);
        let newAlphaIndex;
        (encode === false) ? newAlphaIndex = alphaIndex - shift : newAlphaIndex = alphaIndex + shift;
        if (newAlphaIndex > 25){newAlphaIndex = newAlphaIndex - 26};
        if (newAlphaIndex < 0){newAlphaIndex = newAlphaIndex + 26};
        const newLetter = alphabet[newAlphaIndex];
        newMessage.push(newLetter);
      }
      else {newMessage.push(startMessage[i])};
    }
    return newMessage.join("");

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
