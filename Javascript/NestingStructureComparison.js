/*
Complete the function/method (depending on the language) to return true/True when its argument is an array that 
has the same nesting structures and same corresponding length of nested arrays as the first array.
*/

Array.prototype.sameStructureAs = function (other) {

    if (this.length != other.length) {
        return false;
    }

    for (let i = 0; i < this.length; i++) {
        // I wish Javascript had XOR
        if ((Array.isArray(this[i]) && !Array.isArray(other[i])) ||
            (!Array.isArray(this[i]) && Array.isArray(other[i]))) {
            return false;
        }

        if (Array.isArray(this[i]) && Array.isArray(other[i])) {
            if (!(this[i].sameStructureAs(other[i]))) {
                return false;
            }
        }
    }

    return true;
};

console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));
