
function solution(my_string, n) {
    const sta = [...my_string]
    const staMap = sta.map(item => item.repeat(n))
    return staMap.join('')
    
}
/*

function solution(my_string, n) {
    let result = ''
    for (let i = 0; i < my_string.length; i++) {
        result += my_string[i].repeat(n)
    }
    return result
}*/