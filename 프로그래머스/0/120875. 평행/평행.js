function solution(dots) {
    var answer = 0;
    const cal = (a,b,c,d) => {
        let A;
        let B;
        
        A = (a[1] - b[1]) / (a[0] - b[0])
        B = (c[1] - d[1]) / (c[0] - d[0])
        
        if (A === B) {
            answer = 1
        }
    }
    cal(dots[0], dots[1], dots[2], dots[3]);
    cal(dots[0], dots[2], dots[1], dots[3]);
    cal(dots[0], dots[3], dots[1], dots[2]);
    return answer;
}