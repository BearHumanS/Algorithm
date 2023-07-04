function solution(slice, n) {
   return (slice > n) ? 1 : (n % slice === 0) ? Math.floor(n / slice) : Math.floor(n / slice) + 1;
}
