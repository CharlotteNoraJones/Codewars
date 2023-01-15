/*
In this kata you will create a function that takes a list of non-negative integers 
and strings and returns a new list with the strings filtered out.
*/

using System;
using System.Collections.Generic;

foreach (int i in GetIntegersFromList(new List<object>(){1,2,"a","b"})) {
    Console.WriteLine(i);
}

static IEnumerable<int> GetIntegersFromList(List<object> listOfItems)
{
    List<int> nums = new List<int>();
    foreach (object o in listOfItems) {
        if (o is int) {
            nums.Add((int) o);
        }
    }
    return nums;
}