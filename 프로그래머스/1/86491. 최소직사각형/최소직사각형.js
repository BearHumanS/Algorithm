function solution(sizes) { 
    let heigh = []
    let width = []
    
    sizes.forEach(e => {
        let max = Math.max(e[0], e[1])
        let min = Math.min(e[0], e[1])
        
        width.push(max)
        heigh.push(min)
    })
    
    
    const maxWidth = Math.max(...width)
    const maxHeigh = Math.max(...heigh)
    
    
  return maxWidth * maxHeigh
}

