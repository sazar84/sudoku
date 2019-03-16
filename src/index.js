module.exports = function solveSudoku(matrix) {

  let sudoku = [];
  sudoku = matrix;

 let bool;
 let boolarr = [];
 for (let i = 0; i < 9; i++) {
   for (let j = 0; j < 9; j++) {
     if (sudoku[i][j] === 0) {
       bool = false;
       boolarr.push(bool);
     } else {
     bool = true;
     boolarr.push(bool);
     }
  }
}
// console.log(boolarr)  

 for (let i = 0; i < 9; i++) {
   count: for (let j = 0; j < 9; j++) {
      let row = [];
      let col = [];
      let box = [];  
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
        
        if (i < 3 && j >= 0 && j < 3) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m][k])
            }
          }
        }
        // console.log(box)

        if (i < 3 && j >= 3 && j < 6) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m][k+3])
            }
          }
        }
        // console.log(box)

        if (i < 3 && j >= 6 && j < 8) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m][k+6])
            }
          }
        }
        // console.log(box)
        
        if (i >= 3 && i < 6 && j < 3) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m+3][k])
            }
          }
        }
        // console.log(box)

        if (i >= 3 && i < 6 && j >= 3 && j < 6) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m+3][k+3])     
              }
            }
          }
       // console.log(box)
        
        if (i >= 3 && i < 6 && j >= 6 && j < 8) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m+3][k+6])
             } 
            }
          }
       // console.log(box)

        if (i >= 6 && i < 9 && j < 3) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m+6][k])
              } 
            }
          }
        // console.log(box)

        if (i >= 6 && i < 9 && j >= 3 && j < 6) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m+6][k+3])
              } 
            }
          }
        // console.log(box)

        if (i >= 6 && i < 9 && j >= 6 && j < 8) {
          for (var m = 0; m < 3; m++) {
            for (var k = 0; k < 3; k++) {
              box.push(sudoku[m+6][k+6])
              } 
            }
          }
        // console.log(box)
        
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
// console.log(possible)
        
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
 // console.log(possibletozeroins);
 
 // if (possibletozeroins.length == 1) {
 //   sudoku[i][j] = possibletozeroins[0];
 // } 
        
 let newsudoku = [];
   newsudoku = sudoku;  
   newsudoku[i][j] = possibletozeroins;   
  // console.log(sudoku);      
          
        

        
// if (possibletozeroins.length !== 1) {
//   continue
// } else {
  
// }      
          
    for (var c = 1; c <= 9; c++) {
 if (!row.includes(c) && !col.includes(c) && !box.includes(c)) {
 sudoku[i][j] = c;
 continue count;
 }    
}
      }
    }
  }
  return sudoku
}