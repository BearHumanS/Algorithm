const toMinutes = (time) => {
  const [h, m] = time.split(":")
  return Number(h) * 60 + Number(m)
}


function solution(video_len, pos, op_start, op_end, commands) {
    video_len = toMinutes(video_len)
    pos = toMinutes(pos)
    op_start = toMinutes(op_start)
    op_end = toMinutes(op_end)
    
    if (op_start <= pos && pos <= op_end) pos = op_end
    
    commands.forEach((c) => {
        pos += c === 'next' ? 10: -10
        
        if (pos < 0) pos = 0
        if (pos > video_len) pos = video_len
         if (op_start <= pos && pos <= op_end) pos = op_end
    })

     const h = Math.floor(pos / 60) + ""
     const m = (pos % 60) + ""

  return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`
}

// 10초 전 이동
// 10초 후 이동
// 오프닝 건너뛰기
// 동영상의 길이를 나타내는 문자열 video_len
// 기능이 수행되기 직전의 재생 위치 pos
// 오프닝 시작 op_start
// 오프닝이 끝나는 시각 op_end
// 사용자의 입력을 나타내는 1차원 문자열 배열 commands
// 사용자의 입력이 모두 끝난 후 동영상의 위치 "mm:ss"