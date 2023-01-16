/*
Complete the method/function so that it converts dash/underscore delimited 
words into camel casing. The first word within the output should be 
capitalized only if the original word was capitalized (known as Upper Camel Case, 
also often referred to as Pascal case). The next words should be always capitalized.
*/
using System;
using System.Text.RegularExpressions;

Console.WriteLine(ToCamelCase("the-stealth_warrior-sdfgsdfg_aaa-AAA_bbb----"));

static string ToCamelCase(string str) {
    foreach (Match match in Regex.Matches(str, @"[-_]\w")) {
        str = str.Replace(match.Value, Char.ToString(Char.ToUpper(match.Value[1])));
    }
    return Regex.Replace(str, @"[_-]", "");
}
