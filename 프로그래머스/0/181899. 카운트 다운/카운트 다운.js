function solution(start_num, end_num) {
    let ret = []
    
    while (start_num >= end_num) {
        ret.push(start_num)
        start_num--
    }
    
    return ret
}