/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let max = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            max = Math.max(max, prices[i] - min)
        }
    }
    return max
};

// price 배열
// i날에 price[i]가격으로 매수
// 다른 날에 팜, 거래에서 얻을 수 있는 최대 이익 반환, 이익이 없으면 0 반환
// 배열에서 제일 낮은 수를 구하고 그 수의 인덱스 보다 큰 인덱스에서 제일 큰 수를 구해야할듯