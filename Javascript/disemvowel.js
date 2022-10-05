/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// In retrospect, str.replace would have been much more sensible. 

function disemvowel(str) {
    const re = new RegExp('[^aeiou]', "gi");
    let no_vowels_arr = str.match(re);
    let no_vowels = "";
    
    no_vowels_arr.forEach( (letter) => {
      no_vowels += letter;
    });;
    
    return no_vowels;
  }