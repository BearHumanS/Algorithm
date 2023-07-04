function solution(letter) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const toArr = letter.split(' ')
    
    const toAscii = toArr.map(code => morse.indexOf(code) + 97)
    
    return String.fromCharCode(...toAscii)
}

/*
function solution(letter) {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    const codes = letter.split(' ')
    let result = ''
    for (let i = 0; i < codes.length; i++) {
        const code = codes[i]
        if (code in morse) {
            result += morse[code]
        }
    }
    return result
}
*/