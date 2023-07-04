function solution(array) {
   if (array.length === 1) {
       return array[0]
   } 
    let mostNum // 제일 많이 중복된 요소
    let maxNum = 0 // 제일 많이 중복된 요소의 중복된 횟수
    
    array.forEach((item) => {
        // number 변수에 array의 요소 item의 중복 횟수를 할당
        // filter 메서드를 이용해서 새로운 배열로 반환
        const number = array.filter(value =>
        // value와 item 값이 같으면 true가 되어 해당 요소가 배열에 포함
            value === item).length // array가 [1, 2, 3, 3, 3, 4] 이면 요소1은 길이가 1
                                   // 요소3은 길이가 3
        // forEach반복문을 통해서 if조건문을 업데이트한다. 최종적으로 가장 많이 반복되는 요소가 출력.
        if(number > maxNum) {
            maxNum = number
            mostNum = item
        } 
        // number변수와 제일 많이 중복된 요소의 중복 횟수가 같고, array의 요소와 제일 많이 중복된 요소가 다르면 
        // mostNum의 변수에 -1을 할당
        else if (number === maxNum && item !== mostNum) {
      mostNum = -1;
    }

    })
    return mostNum
}