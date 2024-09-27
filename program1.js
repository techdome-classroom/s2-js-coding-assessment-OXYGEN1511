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

    for (let ch of s) {
        
        if (ch in pairOF) {
          
            if (Mystack.pop() !== pairOF[ch]) {
                return false;
            }
        }
        else if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
    }
    return stack.length === 0;
    
};

module.exports = { isValid };


