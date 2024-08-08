function solution(a, b) {
   const sequence1 = Number(String(a) + String(b))
   const sequence2 = Number(String(b) + String(a))
   
   return Math.max(sequence1, sequence2)
}