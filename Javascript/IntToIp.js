/*
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

    1st octet 128 has the binary representation: 10000000
    2nd octet 32 has the binary representation: 00100000
    3rd octet 10 has the binary representation: 00001010
    4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.
*/

let num = 2154959208;
console.log(int32ToIp(num));

function int32ToIp(int32){
    let binary = int32.toString(2);
    while(binary.length < 32) {
        binary = '0' + binary;
    }
    let first = parseInt(binary.slice(0, 8), 2).toString();
    let second = parseInt(binary.slice(8, 16), 2).toString();
    let third = parseInt(binary.slice(16, 24), 2).toString();
    let fourth = parseInt(binary.slice(24, 32), 2).toString();
    return first + '.' + second + '.' + third + '.' + fourth;
}
