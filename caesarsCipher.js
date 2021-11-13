function caesarCipher(str, num) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        var index = alphabet.indexOf(str[i]);
        if (index === -1) {
            newStr += str[i];
        } else {
            var newIndex = (index + num) % 26;
            newStr += alphabet[newIndex];
        }
    }
    return newStr;
}

module.exports = caesarCipher;