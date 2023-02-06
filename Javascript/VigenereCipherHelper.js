function VigenèreCipher(key, abc) {

    this.encode = function (str) {
        let encodeKey = key.repeat(Math.ceil(str.length / key.length)).slice(0, str.length);
        let encoded = "";

        for (let i = 0; i < str.length; i++) {
            encoded += abc.includes(str[i]) 
            ? abc[(abc.indexOf(str[i]) + abc.indexOf(encodeKey[i])) % abc.length]
            : str[i];
        }
        return encoded;
    }

    this.decode = function (str) {
        let decodeKey = key.repeat(Math.ceil(str.length / key.length)).slice(0, str.length);
        let decoded = "";
        
        for (let i = 0; i < str.length; i++) {
            decoded += abc.includes(str[i]) 
            ? abc[(abc.indexOf(str[i]) - abc.indexOf(decodeKey[i]) + abc.length) % abc.length]
            : str[i];
        }
        return decoded;
    };
}
