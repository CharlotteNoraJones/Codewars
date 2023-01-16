/*
The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in the 
original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
*/
using System;

Console.WriteLine(DuplicateEncode("recede"));

static string DuplicateEncode(string word)
{
    string newWord = "";
    foreach (char c in word) {
        newWord += word.ToLower().Split(Char.ToLower(c)).Length > 2 ? ")" : "(";
    }
    return newWord;
}