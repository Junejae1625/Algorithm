function solution(N, stages) {
    stages = stages.sort((a,b) => a - b)
    let temp = new Array(N).fill(0)
    for ( let j = 0 ; j < stages.length; j++ ) {
        if(stages[j] > N ) {
            break
        }
        temp[stages[j]-1]++
    }
    let total = stages.length;
    const result = temp.map((el, i) => {
        return {stage: i+1, count: el, rating: 0}
    })
    for ( let i = 0 ; i < stages.length; i++ ) {
        if(result[stages[i] -1]) {
            if(stages[i] !== stages[i+1]) {
                const fail = result[stages[i] - 1 ].count / total
                total = total - result[stages[i] -1 ].count
                result[stages[i] -1 ].rating = fail
            }
        }
    }
    
    const answer = result.sort((a,b) => b.rating - a.rating)
    return answer.map((el) => el.stage)
}