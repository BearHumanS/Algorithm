function solution(a, b, g, s, w, t) {

 let maxTime = 0;
    for (let i = 0; i < t.length; i++) {
        const goldDelivery = Math.ceil(g[i] / w[i]);
        const silverDelivery = Math.ceil(s[i] / w[i]);
        const time = Math.max(goldDelivery, silverDelivery) * t[i] * 2;
        maxTime = Math.max(maxTime, time);
    }
    
    let left = 0;
    let right = maxTime * 2;
    
    
       while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let totalG = 0;
        let totalS = 0;
        let totalW = 0;

        for (let i = 0; i < t.length; i++) {
            let roundTrip = Math.floor(mid / (t[i] * 2));
            let remainingTime = mid % (t[i] * 2);

            if (remainingTime >= t[i]) roundTrip++;

            let maxG = Math.min(g[i], roundTrip * w[i]);
            let maxS = Math.min(s[i], roundTrip * w[i]);

            totalG += maxG;
            totalS += maxS;
            totalW += Math.min(g[i] + s[i], roundTrip * w[i]);
        }

        if (totalG >= a && totalS >= b && totalW >= a + b) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
