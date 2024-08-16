/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
    const map = new Map()

    nums.forEach((num, i) => {
        let x = target - num
        if (map.has(x)) {
            arr = [map.get(x), i]
        }
        map.set(num, i)
    })
       return arr
};

// nums배열이 주어지고
// target이 주어지는데
// nums배열에서 두 요소의 합이 target이 되는 값