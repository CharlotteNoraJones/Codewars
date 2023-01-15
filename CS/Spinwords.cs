/*
Write a function that takes in a string of one or more words, and returns the same string, but with all 
five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters 
and spaces. Spaces will be included only when more than one word is present.
*/

Console.WriteLine(SpinWords("Hey fellow warriors"));

public static string SpinWords(string sentence)
{
    string newSen = "";
    foreach (string word in sentence.Split(' ')){
        Char[] reversedWord = word.ToCharArray();
        Array.Reverse(reversedWord);
        newSen += " ";
        newSen += word.Length >= 5 ? String.Join("", reversedWord) : word;

    }
    return newSen.Trim();
}
