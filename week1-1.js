const fs = require('fs')

fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) throw new Error('Error reading file')
  
  
  /**
   * @typedef {Object} Config
   * @property {number} sum
   * @property {number} fibonacci
   * @property {number} leftPattern
   * @property {number} centerPattern
   * @property {number} hollowSquare
   * 
   */
  /** @type {Config} */
  const config = JSON.parse(data)
  
  // console.log(sumTillNumber(config.sum))
  // console.log(getFibonacci(config.fibonacci))
  // console.log(leftPattern(config.leftPattern))
  // console.log(centerPattern(config.centerPattern))
  console.log(hollowSquare(config.hollowSquare))
  
});


function sumTillNumber(n) {
  if (n == 1) return 1
  return n + sumTillNumber(--n)
}

// console.log(sumTillNumber(5)) // 15
// console.log(sumTillNumber(3)) // 16
// console.log(sumTillNumber(2)) // 3

/**
 * 
 * @param {number} n 
 * @param {number[]} series 
 */
function addToSeries(n, series = []) {
  
  if (series.length == n) return series
  
  if (series.length == 0) return addToSeries(n,[...series, 0])
  if (series.length == 1) return addToSeries(n,[...series, 1])
  
  let secondLastElement = series[series.length-2]
  let lastElement = series[series.length-1]
  return addToSeries(n, [...series, (secondLastElement+lastElement)])
}

function getFibonacci(n) {
  return addToSeries(n)
}

// console.log(getFibonacci(1)) // [0]
// console.log(getFibonacci(2)) // [0, 1]
// console.log(getFibonacci(3)) // [0, 1, 1]
// console.log(getFibonacci(4)) // [0, 1, 1, 2]
// console.log(getFibonacci(5)) // [0, 1, 1, 2, 3]

function starRow(i) {
  let row = ''
    for (let j = 0; j <= i; j++) {
      row += "*"
    }
    console.log(row)
}

function leftPattern(n) {
  for (let i = 0; i < n; i++) {
    starRow(i)
  }
}

// leftPattern(5)

// *
// **
// ***
// ****
// *****

function paddedRow(i,mid) {
  let numberOfStars = (2*i)-1;
  let row = ''.padStart(numberOfStars,'*');
  let spaceFromLeft = mid - 1;
  let totalLength = spaceFromLeft + i;
  row = row.padStart(totalLength,' ');
  console.log(row);
}

function centerPattern(n) {
  
  let biggestRow = (2*n)-1
  let mid = Math.ceil(biggestRow/2)
  
  for (let i = 1; i <= n; i++) {
    paddedRow(i, mid)
  }
}

// centerPattern(5)

//     *
//    ***
//   *****
//  *******
// *********
// 1,3,5,7,9


function printFullLine(n) {
  let row = ''
  for (let i = 0; i < n; i++) row+='*'
  console.log(row)
}

function printHollowLine(n) {
  let row = '*'
  for (let i = 0; i < n-2; i++) row+=' '
  row+='*'
  console.log(row)
}

function hollowSquare(n) {
  printFullLine(n)
  for (let i = 0; i < n-2; i++) printHollowLine(n)
  printFullLine(n)
}

// *****
// *   *
// *   *
// *   *
// *****
