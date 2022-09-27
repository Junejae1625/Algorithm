function solution(arr, divisor) {
    arr = arr.sort((a,b) => a-b)
    const result = []
    for ( let i = 0 ; i < arr.length; i++ ) {
        if(arr[i] % divisor === 0 ) {
            result.push(arr[i])
        }
    }
    return result.length ?  result : [-1]
}