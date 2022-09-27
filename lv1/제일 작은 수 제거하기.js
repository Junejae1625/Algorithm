function solution(arr) {
    const min = Math.min(...arr)
    const result = arr.filter((el) => min !== el)
    return result.length ? result : [-1]
    
}