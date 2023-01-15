/*
Complete the method/function so that it converts dash/underscore delimited 
words into camel casing. The first word within the output should be 
capitalized only if the original word was capitalized (known as Upper Camel Case, 
also often referred to as Pascal case). The next words should be always capitalized.
*/
using System;

Console.WriteLine(ToCamelCase("the-stealth_warrior-"));

public static string ToCamelCase(string str)
{
    string newStr = "";

    for (int i = 0; i <= str.Length - 1; i++){
        char c = str[i];
        if (c.Equals('-') || c.Equals('_')){
            i++;
            if (i < str.Length  ) {
                newStr += Char.ToUpper(str[i]);
            }
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}
