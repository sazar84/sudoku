module.exports = function solveSudoku() {

   for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var a = sudoku[i][j];
        if (a != 0) {
          continue;
        } else {
          outer:  for (var k = 1; k <= 9; k++) {
            sudoku[i][j] = k;
            for (var m = 0; m < 9; m++) {
              for (var c = m + 1; c < 9; c++) {
                var z = sudoku[i][m];
                var b = sudoku[i][c];
                if (z == b) {
                  sudoku[i][j] = k-1;
                  break outer;
                }
              }
            }
          }
        }
      }
    }
  return sudoku;
}