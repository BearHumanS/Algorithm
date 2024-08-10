function solution(price, money, count) {
    let total = 0
    
    for (let i = 1; i <= count; i++) {
        total += price * i
    }
    
    const result = total - money

    return result < 0 ? 0 : total - money
}

/*
놀이기구 기존 이용료 = price이지만 놀이기구를 count번 째 이용하면 price * count배 청구

소지금액 money일 때 놀이기구를 count 번 타면 얼마가 모자라는지 return 해야함

단, 금액이 부족하지 않으면 0
*/