function maximumWealth(accounts: number[][]): number {
  return accounts.reduce<number>((maxWorth: number, account: number[]) => {
    return Math.max(sumArr(account), maxWorth);
  }, 0);
}

function sumArr(arr: number[]): number {
  return arr.reduce<number>((sum: number, current: number): number => {
    return (sum += current);
  }, 0);
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
