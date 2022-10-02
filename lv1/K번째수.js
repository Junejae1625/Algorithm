function solution(array, commands) {
    const result = []
    for ( let i = 0 ; i < commands.length; i++ ) {
        let temp = array.slice(commands[i][0]-1, commands[i][1])
        temp.sort((a,b) => a > b ? 1 : -1)
        result.push(temp[commands[i][2]-1])
        temp = []
    }
    return result
}