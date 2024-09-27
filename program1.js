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

    for (let ch of s) {
        // If it's an opening bracket, push it to the stack
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
        // If it's a closing bracket
        else if (ch === ')' || ch === '}' || ch === ']') {
            if (stack.length === 0 || stack.pop() !== pairs[ch]) {
                return false;
            }
        }
    }

   
    return stack.length === 0;

    
};

module.exports = { isValid };


