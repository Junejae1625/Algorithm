function solution(num) {
    let count = 0;
    
    while(count < 500) {
        if( num === 1 ) {
            break
        }
        count++
        if(num%2 === 0) {
            num = num/2
        } else if (num%2 === 1 ) {
            num = num*3 + 1
        }
    }
    return count === 500 ? -1 : count
}