function solution(array, height) {
    const add = array.splice(1,0, height)
    const arraySort = array.sort((a, b) => b - a)
    return arraySort.indexOf(height)
}