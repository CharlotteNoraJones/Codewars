/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
*/

using System;
using System.Text.RegularExpressions;

Console.WriteLine(is_valid_IP("123.45.67.89"));

static bool is_valid_IP(string ipAddres)
{
    string pattern = @"^(?:(?:25[0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|[2][0-4][0-9]|[1][0-9][0-9]|[1-9][0-9]|[0-9])$";

    return Regex.IsMatch(ipAddres, pattern);
}
