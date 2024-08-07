function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5]
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const patterns = [pattern1, pattern2, pattern3]
    
    const scores = [0, 0, 0]
    
    for (const [answerIndex, answer] of answers.entries()) {
        for (const [patternIndex, pattern] of patterns.entries()) {
            if (answer === pattern[answerIndex % pattern.length]) {
                scores[patternIndex] += 1
            }
        }
    }
    
    const maxScore = Math.max(...scores)
    
    const highScores = []
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            highScores.push(i + 1)
        }
    }
    
    return highScores
}