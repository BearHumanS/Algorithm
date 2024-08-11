function solution(number) {
    let answer = 0
    
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < i; j++) {
            for (let k = 0; k < j; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    answer++
                }
            }
        }
    }
    return answer
}

/*
학생들은 고유의 정수 번호를 지님

학생 3명의 정수 번호의 합이 0일 때 삼총사라고 불림

삼총사를 만들 수 있는 방법의 수를 return
*/