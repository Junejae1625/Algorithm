function solution(n, arr1, arr2) {
    const result = []
    for ( let i = 0 ; i < n; i++ ) {
        arr1[i] = arr1[i].toString(2).padStart(n, "0")
        arr2[i] = arr2[i].toString(2).padStart(n, "0")
    }
    for ( let j = 0 ; j < arr1.length; j++ ) {
        let temp = ""
        for ( let k = 0 ; k < arr1[j].length; k++ ) {   
            if(arr1[j][k] === '1' || arr2[j][k] === '1' ) {
                temp += '#'
            } else if ( arr1[j][k] === '0' && arr2[j][k] === '0') {
                temp += ' '
            }
        }
        result.push(temp)
    }
    return result
}