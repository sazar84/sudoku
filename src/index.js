module.exports = function solveSudoku(matrix) {
  let sudoku = [];
  sudoku = matrix;

  let row = []; 
  let col = [];

  for (var i = 0; i < 9; i++) {
   count: for (var j = 0; j < 9; j++) {
      var zero = sudoku[i][j];
      if (zero != 0) {
        continue;
      } else {

          for (var z = 0; z < 9; z++) {
                row.push(sudoku[i][z]);
                // console.log(row)
          }
             for (var x = 0; x < 9; x++) {
               col.push(sudoku[x][j]);
               // console.log(col)
             }
                for (var c = 1; c <= 9; c++) {
                  if (!row.includes(c) && !col.includes(c)) {
                    sudoku[i][j] = c;
                    // console.log(c)
                    row = [];
                    col = [];
                    continue count;
                  }
               // return sudoku
                }
                 return sudoku
      }
      return sudoku
    }
    return sudoku
  }
 return sudoku
}
