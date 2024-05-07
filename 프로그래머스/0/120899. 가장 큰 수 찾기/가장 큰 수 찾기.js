function solution(array) {
    let higher = [...array].sort((a,b) => b-a)
    let location;
    
    for (let i = 0; i < array.length; i++) {
        if (higher[0] % array[i] === 0) {
            location = i
        }
    }
    
    return [higher[0], location]
}