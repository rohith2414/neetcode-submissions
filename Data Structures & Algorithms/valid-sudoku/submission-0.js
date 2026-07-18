class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: board.length}, () => 0);
        let cols = Array.from({length: board.length}, () => 0);
        let squares = Array.from({length: board.length}, () => 0);

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if (board[i][j] === '.') continue;
                let ele = board[i][j] - '1';

                if((rows[i] & (1 << ele)) || (cols[j] & (1 << ele)) || (squares[Math.floor(i/3) * 3 + Math.floor(j/3)] & (1 << ele)))
                {
                    return false;
                }
                rows[i] |= 1 << ele;
                cols[j] |= 1 << ele;
                squares[Math.floor(i/3) * 3 + Math.floor(j/3)] |= 1 << ele;
            }
        }
        return true;
    }
}
