//Build a pyramid-shaped tower, as an array/list of strings, 
//given a positive integer number of floors. A tower block is represented with "*" character.

using System;

class Tower
{
    static public void Main(String[] args)
    {
        // Console.WriteLine(GetRepeatedChar('*', 4));
        string[] tower = TowerBuilder(1);

        foreach(string floor in tower)
        {
            Console.WriteLine(floor);
        }
        

    }
    public static string[] TowerBuilder(int nFloors)
    {

        string[] tower = { };
        int towerWidth = 1 + ((nFloors - 1) * 2); 

        for (int i = 0; i < nFloors; i++)
        {
            
            int blockWidth = 1 + ((i * 2));
            int spaceWidth = (nFloors - i) - 1;

            string spaces = GetRepeatedChar(' ', spaceWidth);
            string blocks = GetRepeatedChar('*', blockWidth);

            string currentFloor = spaces + blocks + spaces;

            tower = pushToStringArray(currentFloor, tower);
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

    public static string[] pushToStringArray(string str, string[] oldArr)
    {
        // Returns a copy of oldArr with str appended to the end. 

        string[] newArr = new string[oldArr.Length + 1];

        for (int i = 0; i < oldArr.Length; i++)
        {
            newArr[i] = oldArr[i];
        }

        newArr[newArr.Length - 1] = str;

        return newArr;

    }

}
