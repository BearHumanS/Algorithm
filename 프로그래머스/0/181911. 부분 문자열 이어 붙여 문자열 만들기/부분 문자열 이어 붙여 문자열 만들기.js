function solution(my_strings, parts) {
    let ret = ''
    
    for (let i = 0; i < my_strings.length; i++) {
        ret += my_strings[i].substring(parts[i][0], parts[i][1] + 1)
        
    }
    
    return ret
}