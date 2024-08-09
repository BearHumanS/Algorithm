function solution(phone_number) {
    /*
     const arr = [...phone_number]
    const lastNumber = arr.slice(-4)
    
    const filtered = arr.filter((_, i) => i < arr.length - 4)
    const masking = filtered.map(item => item = "*")
    
    return masking.concat(lastNumber).join('')
    */
    
    return [...phone_number].map((item, i) => i < [...phone_number].length - 4 ? "*" : item).join('')
}