using System;
using System.Linq;
using System.Text.RegularExpressions;

Console.WriteLine(Kata.PigIt("This is a test !"));

public class Kata
{
  public static string PigIt(string str)
  {
    return String.Join(" ", str.Split(' ').Select(
        word => Regex.IsMatch(word, @"\w") ? 
        (word.Substring(1) + word[0] + "ay") : word).ToArray());
  }
}
