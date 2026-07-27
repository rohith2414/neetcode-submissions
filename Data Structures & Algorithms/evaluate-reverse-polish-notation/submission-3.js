class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens) {
        let st = [], i = 0;
        const operators = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b)
        };

        while(i < tokens.length) {
            if(!isNaN(tokens[i])) {
                st.push(Number(tokens[i]));
            } else {
                let b = st.pop();
                let a = st.pop();

                let c = operators[tokens[i]](a, b);

                st.push(c);
            }
            i++;
        }
        return st.pop();
    }
}
