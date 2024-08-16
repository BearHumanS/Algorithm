/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const result = new Set(nums)
    if (result.size !== nums.length) {
        return true
    }
    return false
};

// 정수 배열 numbs
// 중복되는 값이 있으면 ture를 반환
// 없으면 false를 반환
