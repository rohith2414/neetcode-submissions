class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        function dfs() {
            let token = tokens.pop();

            if(!'/*-+'.includes(token)) {
                return Number(token);
            }


            let right = dfs();
            let left = dfs();

            if(token == '+') {
                return left + right;
            } else if(token == '-') {
                return left - right;
            } else if(token == '/') {
                return Math.trunc(left/right);
            } else {
                return left*right;
            }
        }

        return dfs();
    }
}
