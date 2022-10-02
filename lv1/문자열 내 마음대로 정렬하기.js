function solution(strings, n) {    
    return strings.sort((a,b) => a > b ? 1 : -1).sort((c,d) => c[n] >= d[n] ? 1 : -1 )
}