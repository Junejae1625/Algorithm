const bonus = ['S','D','T']

function solution(dartResult) {
    let temp = ""
    const result = []
    let answer = 0
    for ( let i = 0 ; i < dartResult.length; i++ ) {
        if(!isNaN(dartResult[i])) {
            temp += dartResult[i]
        } else {
            temp = Number(temp)
            if(bonus.includes(dartResult[i])) {
                if (dartResult[i] === 'S') {
                    temp = Math.pow(temp, 1)
                } else if ( dartResult[i] === 'D' ) {
                    temp = Math.pow(temp, 2)
                } else if (dartResult[i] === 'T') {
                    temp = Math.pow(temp, 3)
                }
                result.push(temp)
                temp = ""
            } else {
                if( dartResult[i] === "#") {
                    result[result.length - 1] *= -1
                } else {
                    result[result.length - 1] *= 2
                    if( result.length > 1) {
                        result[result.length-2] *= 2
                    }
                }
            }
        }
    }
    for ( let i = 0 ; i < result.length; i++ ) {
        answer += result[i]
    }
    return answer
}