const one = [1,2,3,4,5]
const two = [2,1,2,3,2,4,2,5]
const three = [3,3,1,1,2,2,4,4,5,5]

function solution(answers) {
    let sone = 0;
    let stwo = 0;
    let sthr = 0;
    const answer = []
    for ( let i = 0 ; i < answers.length; i++ ) {
        if( answers[i] === one[i%one.length]) {
            sone ++
        }
        if( answers[i] === two[i%two.length]) {
            stwo ++
        }
        if( answers[i] === three[i%three.length]) {
            sthr ++
        }
    }
    const result =[sone, stwo, sthr]
    const winner = Math.max(sone, stwo, sthr)
    for ( let i = 0 ; i < result.length; i++) {
        if(result[i] === winner) {
            answer.push(i+1)
        }
    }
    return answer
}