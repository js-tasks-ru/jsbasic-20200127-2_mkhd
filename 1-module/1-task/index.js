/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n == 0 || n == 1){  // проверяем n, чтобы не было равно 0 или 1
    return 1;
  }

  let result = 1;

  while (n > 1){ 
    result *= n;  
    n--;
  }
  return result; 
}
