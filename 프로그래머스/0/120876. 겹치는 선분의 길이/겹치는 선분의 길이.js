function solution(lines) {
    let A = [];
    let B = [];
    let C = [];

    if (lines[0]) {
        for (let i = lines[0][0]; i < lines[0][1]; i++) {
            A.push(i);
        }
    }

    if (lines[1]) {
        for (let i = lines[1][0]; i < lines[1][1]; i++) {
            B.push(i);
        }
    }

    if (lines[2]) {
        for (let i = lines[2][0]; i < lines[2][1]; i++) {
            C.push(i);
        }
    }

    const CA = C.filter(index => A.includes(index));
    const CB = C.filter(index => B.includes(index));
    const AB = A.filter(index => B.includes(index));

  
    const result = [...new Set([...CA, ...CB, ...AB])]

    return result.length
}


