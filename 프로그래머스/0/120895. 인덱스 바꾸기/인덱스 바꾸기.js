function solution(my_string, num1, num2) {
    const arr = [...my_string];

    const swap = (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }

    swap(arr, num1, num2);

    return arr.join('');
}
