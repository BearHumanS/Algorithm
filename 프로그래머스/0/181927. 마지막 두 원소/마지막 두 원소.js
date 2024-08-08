function solution(num_list) {
    const lastIndex = num_list[num_list.length - 1]
    const prevLastIndex = num_list[num_list.length - 2]
    
    lastIndex > prevLastIndex ? num_list.push(lastIndex - prevLastIndex) : num_list.push(lastIndex * 2)
    
    return num_list
} 