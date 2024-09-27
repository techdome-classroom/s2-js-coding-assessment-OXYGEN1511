/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // const Mystack = [];
    // const pairOF = {
    //     ')': '(',
    //     '}': '{',
    //     ']': '['
    // };

    // for (let ch of s) {
        
    //     if (ch in pairOF) {
          
    //         if (Mystack.pop() !== pairOF[ch]) {
    //             return false;
    //         }
    //     }
    //     else if (ch === '(' || ch === '{' || ch === '[') {
    //         Mystack.push(ch);
    //     }
    // }
    // return Mystack.length === 0;
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


