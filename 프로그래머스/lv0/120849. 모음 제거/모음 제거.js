function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"]
    const newArray = [...my_string]
    const result = newArray.filter(item => {
        for (const value of vowels) {
            if(item === value) {
                return false
            }
        }
        return true
    })
    return result.join('')
}