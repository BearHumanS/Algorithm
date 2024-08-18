/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let curr = nums[0]
    let min = nums[0]
    let  max = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        let min_curr = curr
        curr = Math.max(nums[i], curr * nums[i], min * nums[i])
        min = Math.min(nums[i], min_curr * nums[i], min * nums[i])
        max = Math.max(max, curr)
    }
    return max
};

// 정수 배열이 주어짐
// 연속될 배열의 곱 중 가장 큰 거 반환?