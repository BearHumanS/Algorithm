/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let local = 0
    let global = -Infinity

    nums.forEach(num => {
        local = Math.max(num, local + num);
        global = Math.max(global, local);
    })

    return global
};
// 정수 배열 nums
// 배열의 요소 연속되는 요소의 합이 제일 큰 경우의 요소들을 찾아서 합계를 반환