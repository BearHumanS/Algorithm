function solution(nums) {
    const uniqueNums = new Set(nums)
    const select = nums.length / 2
    
    
    return Math.min(uniqueNums.size, select); 
}