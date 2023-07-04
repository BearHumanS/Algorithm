function solution(hp) {
    const G = 5;
    const S = 3;
    const W = 1;
    let gCount = Math.floor(hp / G); // G로 나눈 횟수
    let sCount = Math.floor((hp % G) / S); // S로 나눈 횟수
    let wCount = Math.floor(((hp % G) % S) / W); // W로 나눈 횟수

    return gCount + sCount + wCount; // 사용한 횟수 합산
}
