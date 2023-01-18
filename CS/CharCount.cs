/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
using System;
using System.Collections.Generic;

static Dictionary<char, int> Count(string str)
{
    Dictionary<char, int> charMap = new Dictionary<char, int>();

    foreach (char c in str) {
        if(charMap.ContainsKey(c)) {
            charMap[c]++;
        } else {
            charMap.Add(c, 1);
        }
    }
    return charMap;
}
