function solution(order) {
   return  [...String(order)].filter(x => x % 3 === 0 && x !== "0").length
}