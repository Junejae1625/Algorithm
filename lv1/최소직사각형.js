function solution(sizes) {
    let x = []
    let y = []
    for ( let i = 0 ; i < sizes.length; i++ ) {
        x.push(Math.max(sizes[i][0], sizes[i][1]))
        y.push(Math.min(sizes[i][0], sizes[i][1]))
    }
    return Math.max(...x) * Math.max(...y)
}