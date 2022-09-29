function solution(s) {
    const arrs = s.split(' ')
    let result = ""
    for ( let i = 0 ; i < arrs.length; i++ ) {
        for ( let j = 0 ; j < arrs[i].length; j++ ) {
            if(j%2 === 0) {
                result += arrs[i][j].toUpperCase()
            } else {
                result += arrs[i][j].toLowerCase()
            }
        }
        result += " "
    }
    return result.slice(0,result.length-1)
}