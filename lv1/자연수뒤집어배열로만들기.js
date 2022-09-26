function solution(n) {
    n = String(n)
    const result = []
    for ( let i = n.length-1; i >= 0 ; i-- ) {
        result.push(Number(n[i]))
    }
    return result
}