function solution(n) {
    let changeThree = n.toString(3)
    let arrReverse = [...changeThree].reverse().join('')
    return parseInt(arrReverse, 3)
}

/*
자연수 n이 매개변수로 주어짐.

n을 3진법 상에서 앞뒤로 뒤집고, 다시 10진법으로 표현한 수를 return
*/