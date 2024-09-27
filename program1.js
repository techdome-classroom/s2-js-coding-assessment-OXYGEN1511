/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let char of s) {
        
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0) {
                return false;  
            }

            const lastOpen = stack.pop();

        
            if (
                (char === ')' && lastOpen !== '(') ||
                (char === '}' && lastOpen !== '{') ||
                (char === ']' && lastOpen !== '[')
            ) {
                return false;
            }
        }
    }

    
    return stack.length === 0;
    
};

module.exports = { isValid };


