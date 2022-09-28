function solution(left, right) {
    let result = 0
    let tempCount = 0
    for ( let i = left; i <= right; i++ ) {
        
        for ( let j = 1 ; j <= i; j++ ){
            if(i % j === 0 ) {
                tempCount++
            }
        }
        tempCount % 2 ? result -= i : result += i
        tempCount = 0
    }
    return result
}