function solution(num_list) {
    const oddSum = num_list.filter((n) => n % 2 !== 0).join('');
    const evenSum = num_list.filter((n) => n % 2 === 0).join('');
    return Number(oddSum) + Number(evenSum);
}