function sumTillNumber(n) {
  if (n == 1) return 1
  return n + sumTillNumber(--n)
}

console.log(sumTillNumber(5)) // 15
console.log(sumTillNumber(3)) // 16
console.log(sumTillNumber(2)) // 3