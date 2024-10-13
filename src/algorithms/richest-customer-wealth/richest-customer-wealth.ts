
export default function richestCustomerWealth(accounts: number[][]): number {
    let richestWealth = 0

    for (let i = 0; i < accounts.length; i++) {
        let accountSum = 0
        for (let j = 0; j < accounts[i].length; j++) {
            accountSum += accounts[i][j]
        }
        if (accountSum > richestWealth) {
            richestWealth = accountSum
        }
    }
    return richestWealth
}