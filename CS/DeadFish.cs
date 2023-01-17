/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.
*/

using System;
using System.Collections.Generic;

foreach (int i in Parse("iiisdoso")) {
    Console.WriteLine(i);
}


public static int[] Parse(string data)
{
    int val = 0;
    List<int> vals = new List<int>();
    foreach (char c in data) {
        switch (c)
        {
            case 'i':
                val++;
                break;
            case 'd':
                val--;
                break;
            case 's':
                val = val * val;
                break;
            case 'o':
                vals.Add(val);
                break;
        }
    }

    return vals.ToArray();
}
