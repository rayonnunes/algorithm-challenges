import { expect, test } from "bun:test";
import richestCustomerWealth from './richest-customer-wealth'

test("\n----Richest customer wealth Problem----\nYou are given an M x N integer grid accounts where accounts[i][j] is the amout of money the 'i'th customer has in the 'j'th bank.\nReturn the wealth that the richest customer has.\n* The customer's wealth is the amount of money that they have in all their bank accounts. The richest customer is the customer that has the maximun wealth.", () => {
    const testInputs = [
        {
            value: [[7, 1, 3], [2, 8, 7], [1, 9, 5]],
            output: 17
        },
        {
            value: [[1, 2, 3], [3, 2, 1]],
            output: 6
        },
        {
            value: [[2, 8, 7], [7, 1, 3], [1, 9, 5]],
            output: 17
        },
        {
            value: [[1, 5], [7, 3], [3, 5]],
            output: 10
        },
        {
            value: [[1, 2, 3], [3, 2, 1], [1, 9, 5]],
            output: 15
        }
    ]

    testInputs.forEach(({value, output}) => {
        console.log("\x1b[35m%s\x1b[0m", "Input: ", value)
        console.log("\x1b[36m%s\x1b[0m", `Output: ${output}\n\n`)
        expect(richestCustomerWealth(value)).toBe(output)
    })
})