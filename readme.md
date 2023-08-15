### warmup
- sumTillNumber
```JavaScript
function sumTillNumber(n) {
  if (n == 1) return 1
  return n + sumTillNumber(--n)
}

console.log(sumTillNumber(5)) // 15
console.log(sumTillNumber(3)) // 16
console.log(sumTillNumber(2)) // 3
```
- getFibonacci
```JavaScript
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

console.log(getFibonacci(1)) // [0]
console.log(getFibonacci(2)) // [0, 1]
console.log(getFibonacci(3)) // [0, 1, 1]
console.log(getFibonacci(4)) // [0, 1, 1, 2]
console.log(getFibonacci(5)) // [0, 1, 1, 2, 3]
```