function solution(my_string, index_list) {
    let answer = []
    
    for (let i = 0; i < index_list.length; i++) {
        answer.push([...my_string][index_list[i]])
    }
    
    return answer.join('')
}

/*
메모리: 34.7 MB, 시간: 5.67 ms
function solution(my_string, index_list) {
    let answer = ''
    
    for (let i = 0; i < index_list.length; i++) {
        answer+= ([...my_string][index_list[i]])
    }
    
    return answer
}
*/