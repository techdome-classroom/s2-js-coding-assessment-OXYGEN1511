/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanCon = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let totalNum = 0;

    // Loop through the Roman string
    for (let i = 0; i < romanCon.length; i++) {
        const currentValue = romanCon[roman[i]];
        const nextValue = romanCon[roman[i + 1]];

        // If the next value is greater, subtract the current value (e.g., IV -> 5 - 1)
        if (nextValue > currentValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }

    return total;
    
};


module.exports={romanToInt}