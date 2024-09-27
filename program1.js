/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        
        if (char in pairs) {
          
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
        else if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
    }

    // Stack should be empty if balanced
    return stack.length === 0;
    
};

module.exports = { isValid };


