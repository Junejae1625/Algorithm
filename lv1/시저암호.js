function solution(s, n) {
    let result = ""

    for ( let i = 0 ; i < s.length; i++ ) {
        if(s.charCodeAt(i) === 32 ) {
            result += " "
        }
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 ) {
            if(s.charCodeAt(i) + n >= 91 ) {
                result += String.fromCharCode(s.charCodeAt(i) + n - 26)
                continue
            }
            result += String.fromCharCode(s.charCodeAt(i) + n )
        } if ( s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122 ) {
            if(s.charCodeAt(i) + n >= 123 ) {
                result += String.fromCharCode(s.charCodeAt(i) + n - 26)
                continue
            }
            result += String.fromCharCode(s.charCodeAt(i) + n )
        }
        
    }
    return result
}