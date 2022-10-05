//Build a pyramid-shaped tower, as an array/list of strings, 
//given a positive integer number of floors. A tower block is represented with "*" character.

using System;

class Tower
{
    static public void Main(String[] args)
    {
        Console.WriteLine(GetRepeatedChar('*', 4));
    }
    public static string[] TowerBuilder(int nFloors)
    {
        string[] tower = { };
        int towerWidth = 1 + ((nFloors - 1) * 2); 

        for (int i = 0; i < nFloors; i++)
        {
            int blockWidth = 1 + ((i - 1) * 2);
            int spaceWidth = nFloors - i;


        }

        return tower;
    }

    public static string GetRepeatedChar(char c, int num)
    {
        // Returns a string num amount of c
        string new_str = "";
        
        for (int i = 0; i < num; i++)
        {
            new_str += c;
        }
        return new_str;
    }

}
