function solution(age) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const AGE = [...String(age)]
    let result = ''
    let i = 0
    while (i < AGE.length) {
        if (alphabet[AGE[i]]) {
            result += alphabet[AGE[i]]
        }
        i++
    }
    return result
}


// 아스키코드로 풀어보기
/*
function solution(age) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const AGE = [...String(age)].map(Number);
    let result = ''
    
    for (let i = 0; i < AGE.length; i++) {
        if (alphabet[AGE[i]]) {
            result += alphabet[AGE[i]]
        }
    }
    return result
}

*/

/*
function solution(age) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const AGE = [...String(age)].map(Number);

  if (alphabet[AGE[0]] && alphabet[AGE[1]] && alphabet[AGE[2]] && alphabet[AGE[3]]) {
    return alphabet[AGE[0]] + alphabet[AGE[1]] + alphabet[AGE[2]] + alphabet[AGE[3]];
  } else if (alphabet[AGE[0]] && alphabet[AGE[1]] && alphabet[AGE[2]]) {
    return alphabet[AGE[0]] + alphabet[AGE[1]] + alphabet[AGE[2]];
  } else if (alphabet[AGE[0]] && alphabet[AGE[1]]) {
    return alphabet[AGE[0]] + alphabet[AGE[1]];
  } else {
    return alphabet[AGE[0]];
  }
}
*/

