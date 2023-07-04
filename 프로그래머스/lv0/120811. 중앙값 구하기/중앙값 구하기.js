/*
function solution(array) {
    const center = Math.floor(array.length / 2)
    const list = array.sort((a,b) => a-b)
    return list[center]
}
*/

const solution = array => array.sort((a, b) => a - b)[Math.floor(array.length / 2)]