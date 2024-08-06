/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated.
*/

// 72 ms

function isValidSudoku(board: string[][]): boolean {
    let sets : Set<string>[] = Array.from({ length: 27 }, () => new Set<string>());
    let grid : number = -1;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != ".") {
                grid = mapRowColToGrid(i, j);
                if (sets[i].has(board[i][j]) || sets[9 + j].has(board[i][j]) || sets[18 + grid].has(board[i][j])) return false;
                sets[i].add(board[i][j]);
                sets[9 + j].add(board[i][j]);
                sets[18 + grid].add(board[i][j]);
            }
        }
    }
    return true;
};

function mapRowColToGrid(i: number, j:number):number {
    if (j < 3) {
        if (i < 3) return 0;
        if (i >= 6) return 2;
        return 1;
    }
    if (j >= 6) {
        if (i < 3) return 6;
        if (i >= 6) return 8;
        return 7;
    }
    if (i < 3) return 3;
    if (i >= 6) return 5;
    return 4;
}