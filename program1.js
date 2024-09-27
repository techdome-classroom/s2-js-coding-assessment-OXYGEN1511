/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const Mystack = [];
    const pairOF = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        
        if (char in pairOF) {
          
            if (stack.pop() !== pairOF[char]) {
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


