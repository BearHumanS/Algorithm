/**
 * @param {number[]} nums
 * @return {number}
 */
/* var maxSubArray = function(nums) {
    let local = 0
    let global = -Infinity

    nums.forEach(num => {
        local = Math.max(num, local + num);
        global = Math.max(global, local);
    })

    return global
}; */
// 정수 배열 nums
// 배열의 요소 연속되는 요소의 합이 제일 큰 경우의 요소들을 찾아서 합계를 반환

var maxSubArray = function(nums) {
    let curr_sum = nums[0]
    let max_sum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        curr_sum = Math.max(nums[i], curr_sum + nums[i])
        max_sum = Math.max(max_sum, curr_sum)
    }

    return max_sum
};