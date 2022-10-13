function solution(participant, completion) {
    const p = participant.sort((a,b) => a > b ? 1 : -1)
    const c = completion.sort((a,b) => a > b ? 1 : -1)    
    for ( let i = 0 ; i < p.length; i++ ) {
        if(p[i] !== c[i]) {
            return p[i]
        }
    }

}