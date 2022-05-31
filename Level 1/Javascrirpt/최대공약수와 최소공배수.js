function solution(n, m) {
    const answer = [];
    const gcd = (n, m) => n % m === 0 ? m : gcd(m, n % m);
    const lcm = (n, m) => n * m / gcd(n, m);

    answer.push(gcd(n, m), lcm(n, m));

    return answer;
}