module.exports = function solveSudoku(matrix) {

  let sudoku = [];
  sudoku = matrix;

  let row = [];
  let col = [];
  let box = [];

  for (let i = 0; i < 9; i++) {
    count: for (let j = 0; j < 9; j++) {
      var iszero = sudoku[i][j];
      if (iszero != 0) {
        continue;
      } else {

        for (var z = 0; z < 9; z++) {
          row.push(sudoku[i][z]);
        }
        // console.log(row);

        for (var x = 0; x < 9; x++) {
          col.push(sudoku[x][j]);
        }
        // console.log(col)

        if (i < 3 && j < 3) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([m][k], [m][k+1])
            }
          }
        }
        // console.log(box)

        if (6 > i && i >= 3 && j < 3) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([m][k+3],[m][k+4])
            }
          }
        }
        // console.log(box)

        if (i >= 6 && i < 9 && j < 3) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([m][k+6],[m][k+7] )
            }
          }
        }
        // console.log(box)
        if (i < 3 && j >= 3 && j < 6) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([m][3 + k], 1)
            }
          }
        }

        if (6 > i && i >= 3 && j >= 3 && j < 6) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([3 + m][3 + k], 1)
            }
          }
        }

        if (i >= 6 && i < 9 && j >= 3 && j < 6) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([6 + m][3 + k], 1)
            }
          }
        }

        if (i < 3 && j >= 6 && j < 9) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([m][6 + k], 1)
            }
          }
        }

        if (6 > i && i >= 3 && j >= 6 && j < 9) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([3 + m][6 + k], 1)
            }
          }
        }

        if (i >= 6 && i < 9 && j >= 6 && j < 9) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box = sudoku.slice([6 + m][6 + k], 1)
            }
          }
        }

        for (var c = 1; c <= 9; c++) {
          if (!row.includes(c) && !col.includes(c) && !box.includes(c)) {
            sudoku[i][j] = c;
            // console.log(c)
            row = [];
            col = [];
            box = [];
            continue count;
          }
        }
      }
    }
  }
  return sudoku
}
