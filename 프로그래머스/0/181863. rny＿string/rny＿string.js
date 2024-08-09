function solution(rny_string) {
   return [...rny_string].map(item => item === "m" ? item = "rn" : item).join('')
}