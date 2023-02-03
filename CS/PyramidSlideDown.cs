/*
Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Your function should return `23`.

*/

using System;

var smallPyramid = new[]
          {
              new[] {3},
              new[] {7, 4},
              new[] {2, 4, 6},
              new[] {8, 5, 9, 3}
          };

Console.WriteLine(PyramidSlideDown.LongestSlideDown(smallPyramid));


public class PyramidSlideDown
{
    public static int LongestSlideDown(int[][] pyramid)
    {
        if (pyramid.Length == 2) {
            return pyramid[0][0] + Math.Max(pyramid[1][0], pyramid[1][1]);
        } else {
            return pyramid[0][0] + Math.Max(LongestSlideDown(LeftSlice(pyramid)), LongestSlideDown(RightSlice(pyramid)));
        }
    }

    public static int[][] LeftSlice(int[][] pyramid) {
        // Returns a new pyramid of all the values beneath the value to the bottom left of the pyramid's top. 

        int[][] newPyramid = new int[pyramid.Length - 1][];

        for (int i = 0; i < newPyramid.Length; i++) {
            newPyramid[i] = new int[i + 1];
            Array.Copy(pyramid[i + 1], newPyramid[i], i + 1);
        }

        return newPyramid;

    }

    public static int[][] RightSlice(int[][] pyramid) {
        int[][] newPyramid = new int[pyramid.Length - 1][];

        for (int i = 0; i < newPyramid.Length; i++) {
            newPyramid[i] = new int[i + 1];
            Array.Copy(pyramid[i + 1], 1, newPyramid[i], 0, i + 1);
        }

        return newPyramid;
    }

}
