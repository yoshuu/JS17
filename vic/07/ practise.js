// 練習取二維陣列的值

// const apple1 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// console.log(apple1[2][1]);

// 練習印出來

// const apple2 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// for (var i = 0; i < apple2.length; i++) {
//   for (var j = 0; j < apple2[i].length; j++) {
//     console.log(apple2[i][j]);
//   }
// }

/*

一開始的

const matrix = [
  [1, 2],
  [4, 5],
  [7, 8],
];

我想要達到的

const afterMatrix = [
        [7, 4, 1],
        [8, 5, 2],
      ];


matrix[0].length = 2
matrix.length = 3
let array = [7,4,1];
  
[0][0]=>[0][2] 1
[1][0]=>[0][1] 4
[2][0]=>[0][0] 7


let array = []

[0][1]=>[1][0] 2
[1][1]=>[1][1] 5
[2][1]=>[1][2] 8      
*/

const matrix = [
  [1, 2],
  [4, 5],
  [7, 8],
];

matrix.reverse();
const afterMatrix = [];

for (let j = 0; j < matrix[0].length; j++) {
  afterMatrix[j] = Array(matrix);
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    afterMatrix[j][i] = matrix[i][j];
  }
}

// console.log(afterMatrix);

// var matrix = [
//   [1, 2],
//   [4, 5],
//   [7, 8],
// ];
// const afterMatrix = [];
// matrix.reverse();
// afterMatrix[0] = Array(matrix);
// afterMatrix[1] = Array(matrix);
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[0].length; j++) {
//     afterMatrix[j][i] = matrix[i][j];
//   }
// }
// console.log(afterMatrix);
