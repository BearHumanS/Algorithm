function solution(n, times) {
    const sortTimes = times.sort((a, b) => a - b)
  let lo = 1
  let hi =  sortTimes[sortTimes.length - 1] * n
  
  while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2)
      
      const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0)
      
      if (sum < n) {
          lo = mid + 1
      } else hi = mid - 1
  }
    
    return lo
}