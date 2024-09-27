/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const Mystack = [];
    const pair = {
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
    return stack.length === 0;
    
};

module.exports = { isValid };


