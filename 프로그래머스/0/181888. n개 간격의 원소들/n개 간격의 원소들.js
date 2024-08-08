function solution(num_list, n) {
    let ret = []
    
    for (let i = 0; i < num_list.length; i+=n) {
        ret.push(num_list[i])
    }
    
    return ret
}