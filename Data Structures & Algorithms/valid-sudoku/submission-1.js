class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                let rowSet = new Set();
                for(let row = 0; row < board.length; row++) {
                    if(rowSet.has(board[row][j])) {
                        return false;
                    } else if(board[row][j] == ".") {
                        continue;
                    }
                    rowSet.add(board[row][j]);
                }

                let colSet = new Set();
                for(let col = 0; col < board.length; col++) {
                    if(colSet.has(board[i][col])) {
                        return false;
                    } else if(board[i][col] == ".") {
                        continue;
                    }
                    colSet.add(board[i][col])
                }

                let squareSet = new Set();
                let startI = Math.floor(i / 3) * 3;
                let startJ = Math.floor(j / 3) * 3;
                for(let pass = 0; pass < 9; pass++) {
                    let row = startI + Math.floor(pass / 3);
                    let col = startJ + pass % 3;
                    if(squareSet.has(board[row][col])) {
                        return false;
                    } else if(board[row][col] == ".") {
                        continue;
                    }
                    squareSet.add(board[row][col]);
                }
            }
        }
        return true;
    }
}
