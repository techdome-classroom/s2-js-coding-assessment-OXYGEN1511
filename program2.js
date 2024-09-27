/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNum = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    
    for (let i = 0; i < s.length; i++) {
        const curr = romanNum[s[i]];
        const  = romanNum[s[i + 1]];

        if ( > curr) {
            total -= curr;
        } else {
            total += curr;
        }
    }

    return total;
    
};


module.exports={romanToInt}