function solution(n, lost, reserve) {
    const losted = [...lost]
    lost = lost.filter( student => reserve.includes(student) === false).sort((a,b) => a-b)
    reserve = reserve.filter( student => losted.includes(student) === false).sort((a,b) => a-b)
    
    let answer = n - lost.length
    lost.forEach( student => {
        const prev = reserve.indexOf(student - 1)
        const next = reserve.indexOf(student + 1)
        if( prev !== -1 ) {
            answer++
            reserve.splice(prev , 1)
        } else if ( next !== -1 ) {
            answer++
            reserve.splice(next , 1)
        }
        
    })
    return answer
}