module.exports = function solveSudoku(matrix) {

  let sudoku = [];
  sudoku = matrix;

  function sudokuvalue() {
   for (let i = 0; i < 9; i++) {
   for (let j = 0; j < 9; j++) {
        let row = [];
        let col = [];
        let box = [];  
        var iszero = sudoku[i][j];
        if (iszero !== 0) {
          continue;
        } else {
            
            for (var z = 0; z < 9; z++) {
              row.push(sudoku[i][z]);
            }         
               for (var x = 0; x < 9; x++) {
                 col.push(sudoku[x][j]);         
               }
          if (i < 3 && j >= 0 && j < 3) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m][k])
              }
            }
          }
          if (i < 3 && j >= 3 && j < 6) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m][k+3])
              }
            }
          }
          if (i < 3 && j >= 6 && j < 8) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m][k+6])
              }
            }
          }
          if (i >= 3 && i < 6 && j < 3) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m+3][k])
              }
            }
          }
          if (i >= 3 && i < 6 && j >= 3 && j < 6) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m+3][k+3])     
                }
              }
            }
          if (i >= 3 && i < 6 && j >= 6 && j < 8) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m+3][k+6])
               } 
              }
            }
          if (i >= 6 && i < 9 && j < 3) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m+6][k])
                } 
              }
            }
          if (i >= 6 && i < 9 && j >= 3 && j < 6) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m+6][k+3])
                } 
              }
            }
          if (i >= 6 && i < 9 && j >= 6 && j < 8) {
            for (var m = 0; m < 3; m++) {
              for (var k = 0; k < 3; k++) {
                box.push(sudoku[m+6][k+6])
                } 
              }
            }   
  let possible = [];        
  row.forEach(function(item) {
    possible.push(item)
  });
  col.forEach(function(item) {
    possible.push(item)
  });
  box.forEach(function(item) {
    possible.push(item)
  });            
  let possiblevalue = possible.filter(function(number) {
    return number > 0;
  });        
  let uniqueItems = Array.from(new Set(possiblevalue))
  let allnum = [1,2,3,4,5,6,7,8,9];  
  let possibletozeroins = [];       
  allnum.forEach(function(item) {
    if (!uniqueItems.includes(item)) {
        possibletozeroins.push(item)  
        }
   });     
      sudoku[i][j] = possibletozeroins;               
        }
      }
    }
  }
  sudokuvalue()  
  return sudoku
}