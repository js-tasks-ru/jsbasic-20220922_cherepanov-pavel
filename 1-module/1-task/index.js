function factorial(n) {
  let res = 1;

  if (n === 0 || n === 1) {
    return res;
  }

  for (let i = 1; i <= n; i++) {
    res = res * i;
  } 

  return res;
}

