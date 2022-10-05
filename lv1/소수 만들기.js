function solution(nums) {
    const sum = []
    let answer = 0
    for ( let i = 0 ; i < nums.length-2; i++ ) {
        for ( let j = i + 1 ; j < nums.length-1; j++ ) {
            for ( let k = j + 1 ; k < nums.length; k++ ) {
                const add = nums[i] + nums[j] + nums[k]
                let count = 0 
                for ( let a = 3 ; a < add ; a++ ) {
                    if(add % a === 0) count++
                }
                if(count === 0) answer++
            }
        }
    }
    return answer
}