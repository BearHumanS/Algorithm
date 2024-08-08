function solution(strArr) {
    const ret = []
   for (let i = 0; i < strArr.length; i++) {
       if (i % 2 === 0) {
         ret.push(strArr[i].toLowerCase())
       } else {
         ret.push(strArr[i].toUpperCase())
       }
   }
    return ret
}