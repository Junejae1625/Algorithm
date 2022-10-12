const rating =[6,6,5,4,3,2,1]
function solution(lottos, win_nums) {
    
    let same = 0
    let zero = 0
    for ( let i = 0 ; i < lottos.length; i++ ) {
        if(lottos[i]===0) {
            zero++
            continue
        }
        if(win_nums.includes(lottos[i])) {
            same++
        }
    }
    return [rating[zero+same], rating[same]]
}