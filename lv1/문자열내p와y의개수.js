function solution(s){
    s = s.toLowerCase()
    let countp = 0;
    let county = 0;
    for ( let i = 0 ; i < s.length; i++ ) {
        if (s[i]==='y') {
            county++
        } else if (s[i]==='p') {
            countp++
        }
    }
    return countp === county ? true : false
    
}