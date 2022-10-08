//expected input : String
//return to console sorted vowel and characters of the string
function sortCharacter(word) {
    let sanitizeWord = word.toLowerCase().trim().replace(/\s+/g, "").split("");
    let vowelChars = [];
    let consonantChars = [];
    for (let i = 0; i < sanitizeWord.length; i++) {
        if (isVowel(sanitizeWord[i])) {
            let lastIndexChar = vowelChars.lastIndexOf(sanitizeWord[i]);
            if (lastIndexChar < 0) {
                vowelChars.push(sanitizeWord[i]);
            } else {
                vowelChars.splice(lastIndexChar + 1, 0, sanitizeWord[i]);
            }
        } else {
            let lastIndexChar = consonantChars.lastIndexOf(sanitizeWord[i]);
            if (lastIndexChar < 0) {
                consonantChars.push(sanitizeWord[i]);
            } else {
                consonantChars.splice(lastIndexChar + 1, 0, sanitizeWord[i]);
            }
        }
    }
    return `Vowel Characters : ${vowelChars.join("")}\nConsonant Characters : ${consonantChars.join("")}\n`;
}

//check is the character is vowel or not
//return true if character is vowel 
//return false if character is not vowel
//support only lower case
function isVowel(x) {
    let result;
    result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
    return result;
}

console.log(sortCharacter("Sample Case"));
console.log(sortCharacter("Next Case"));