function solution(my_string) {
    const sta = [...my_string] // 문자열을 배열로 전개연산자 이용
    const rev = sta.reverse() // 배열을 뒤집고
    const ats = rev.join('') // 배열을 문자로 하는데 '' 안쓰면 문자 단위 분리가 된다. ex jaron >> j,a,r,o,n
    return ats;
}