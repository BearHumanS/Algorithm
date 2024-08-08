function solution(names) {
   const ret = [];

  while (names.length !== 0) { 
    ret.push(names.splice(0, 5)[0]);
  }
    
    return ret
}