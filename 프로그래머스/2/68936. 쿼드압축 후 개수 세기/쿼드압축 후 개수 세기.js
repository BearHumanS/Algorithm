function solution(arr) {
    const result = [0, 0]; // 결과 배열 [0의 개수, 1의 개수]

    const compress = (x, y, size) => {
        if (size === 1) {
            result[arr[x][y]]++; // 해당 위치의 값(0 또는 1)을 결과 배열에 추가
            return;
        }

        const firstValue = arr[x][y]; // 현재 영역의 첫 번째 값
        let isCompressed = true; // 현재 영역이 압축될 수 있는지 여부

        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== firstValue) {
                    isCompressed = false;
                    break;
                }
            }
            if (!isCompressed) {
                break;
            }
        }

        if (isCompressed) {
            result[firstValue]++;
        } else {
            const newSize = size / 2;
            compress(x, y, newSize);
            compress(x, y + newSize, newSize);
            compress(x + newSize, y, newSize);
            compress(x + newSize, y + newSize, newSize);
        }
    };

    compress(0, 0, arr.length); // 처음에는 전체 배열을 압축합니다.

    return result;
}

// 예시 입력
const arr1 = [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1]
];

const arr2 = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1]
];

console.log(solution(arr1)); // [4, 9] 출력
console.log(solution(arr2)); // [10, 15] 출력
