const solution = (n, k) => {
    if (n < 10) {
        return n * 12000 + k * 2000;
    } else if (10 <= n) {
        return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
    }
};