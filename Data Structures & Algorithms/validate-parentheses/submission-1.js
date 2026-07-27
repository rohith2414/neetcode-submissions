class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isOpenBracket(c) {
        return c == "[" || c == "{" || c == "(";
    }

    getCorresponded

    isValid(s) {
        let stack = [];

        for(let i = 0; i < s.length; i++) {
            if(this.isOpenBracket(s[i])) {
                stack.push(s[i]);
            } else {
                switch(s[i]) {
                    case "]": {
                        if(stack[stack.length - 1] != "[") {
                            return false;
                        }
                    }
                    break;
                    case "}": {
                        if(stack[stack.length - 1] != "{") {
                            return false;
                        }
                    }
                    break;
                    case ")": {
                        if(stack[stack.length - 1] != "(") {
                            return false;
                        }
                    }
                    break;
                }
                stack.pop();
            }
        }
        return stack.length == 0;
    }
}
