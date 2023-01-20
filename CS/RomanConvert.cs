/*
Create a function taking a positive integer between 1 and 3999 (both included) as 
its parameter and returning a string containing the Roman Numeral representation of that integer.
*/
using System;
using System.Collections.Generic;
using System.Linq;

Console.WriteLine(Solution(1954));

static string Solution(int n)
{
    string roman = "";

    Dictionary<int, string> numerals = new Dictionary<int, string> 
    {
        [1] = "I",
        [4] = "IV",
        [5] = "V",
        [9] = "IX",
        [10] = "X",
        [40] = "XL",
        [50] = "L",
        [90] = "XC",
        [100] = "C",
        [400] = "CD",
        [500] = "D",
        [900] = "CM",
        [1000] = "M"
    };
    
    int[] keysDesc = numerals.Keys.ToArray();
    Array.Sort(keysDesc);
    Array.Reverse(keysDesc);

    foreach (int key in keysDesc) {
        int div = n / key;
        for (int i = 0; i < div; i++) {
            roman += numerals[key];
        }
        n -= key * div;
    }

    return roman;
}

