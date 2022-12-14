/*
Complete the function that accepts a string parameter, 
and reverses each word in the string. 
All spaces in the string should be retained.
*/

console.log(reverseWord("asdf asdf asdf"));

function reverseWords(str) {
    let strSeperated = str.split(" ");
    let reversed = "";

    strSeperated.forEach(element => {
        reversed += reverseWord(element) + " ";
    });
    return reversed.trim();
}

function reverseWord(str) {
    let reversedWord = "";
    for (i = str.length - 1; i >=0; i--) {
        reversedWord += str.charAt(i);
    }
    return reversedWord;
}