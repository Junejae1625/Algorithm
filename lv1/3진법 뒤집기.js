function solution(n) {
    let temp = n.toString(3)
    let reverse = ''
    for ( let i = temp.length-1 ; i >= 0; i-- ) {
        reverse += temp[i]
    }
    
    return Number.parseInt(reverse, 3)
}