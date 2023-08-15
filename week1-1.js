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


function leftPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j <= i; j++) {
      row += "*"
    }
    console.log(row)
  }
}

// pattern(5)

// *
// **
// ***
// ****
// *****


function centerPattern(n) {
  
  let biggestRow = (2*n)-1
  let mid = Math.ceil(biggestRow/2)
  
  for (let i = 1; i <= n; i++) {
    let numberOfStars = (2*i)-1;
    let row = ''.padStart(numberOfStars,'*');
    let spaceFromLeft = mid - 1;
    let totalLength = spaceFromLeft + i;
    row = row.padStart(totalLength,' ');
    console.log(row);
  }
}

centerPattern(5)

//     *
//    ***
//   *****
//  *******
// *********
// 1,3,5,7,9
