function solution(myString, pat) {
  const regex = new RegExp(pat, 'gi');
  
  if (regex.test(myString)) {
    return 1;
  } else {
    return 0;
  }
}
