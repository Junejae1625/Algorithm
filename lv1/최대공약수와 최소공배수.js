function solution(n, m) {
    const big = Math.max(n,m)
    let min = 1
    for ( let i = 1 ; i <= big ; i++ ) {
      if (n % i === 0 && m % i === 0) {
        min = i
      }
    }
    
    let max = n/min * m/min * min
    return [min, max]
  }