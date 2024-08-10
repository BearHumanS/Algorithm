function solution(array, commands) {
    let answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        const arr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)
       answer.push(arr[commands[i][2] - 1]) 
    }
    return answer;
}

/*
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째의 수를 구한다.


*/