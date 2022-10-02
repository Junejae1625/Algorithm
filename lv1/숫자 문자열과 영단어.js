const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function solution(s) {
    
	for ( let i = 0 ; i < word.length; i++ ) {
    if (s.includes(word[i])) {
      s = s.split(word[i]).join(i)
    }
  }
    return Number(s)
}