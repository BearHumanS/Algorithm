function solution(phone_number) {
    
    const arr = [...phone_number]
    const lastNumber = arr.slice(-4)
    
    const filtered = arr.filter((_, i) => i < arr.length - 4)
    const masking = filtered.map(item => item = "*")
    
    return masking.concat(lastNumber).join('')
}