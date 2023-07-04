/*
function solution(n) {
	const oddNum = []
    for(let i = 1; i <= n; i++) {
    	if(i % 2 === 1) {
        	oddNum.push(i)
        }
        oddNum.sort((a, b) => a -b)
    }
    return oddNum
}
*/

function solution(n) {
	const oddNum = []
    let i = 0
    while ( i <= n ) {
    	if(i % 2 === 1) {
        	oddNum.push(i)
        }
        i++
    }
    return oddNum
}