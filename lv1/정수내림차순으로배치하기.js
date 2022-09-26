function solution(n) {
    n = String(n).split('').sort((a,b) => a < b ? 1 : -1).join('')
    return Number(n)
}