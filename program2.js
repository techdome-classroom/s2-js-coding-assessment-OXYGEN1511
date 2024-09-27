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

    let totalNum = 0;

    
    for (let i = 0; i < s.length; i++) {
        const curr = romanNum[s[i]];
        const next = romanNum[s[i + 1]];

        if (next > curr) {
            totalNum -= curr;
        } else {
            totalNum += curr;
        }
    }

    return totalNum;
    
};


module.exports={romanToInt}