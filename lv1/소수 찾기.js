function solution(n) {
    const arr = new Array(n+1).fill(true,2)
    let answer = 0
    for ( let i = 2 ; i < arr.length ; i++) {
        if(arr[i]) {
            answer++
            for ( let j = i * 2 ; j < arr.length; j+=i) {
                arr[j] = false
            }
        } else {
            continue
        }   
    }
    return answer
}