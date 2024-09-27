/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const Mystack = [];

    for (let ch of s) {
        
        if (ch === '(' || ch === '{' || ch === '[') {
            Mystack.push(char);
        }
        
        else if (ch === ')' || ch === '}' || ch === ']') {
            if (Mystack.length === 0) {
                return false;  
            }

            const last = Mystack.pop();

        
            if (
                (ch === ')' && last !== '(') ||
                (ch === '}' && last!== '{') ||
                (ch === ']' && last!== '[')
            ) {
                return false;
            }
        }
    }

    
    return Mystack.length === 0;
    
};

module.exports = { isValid };


