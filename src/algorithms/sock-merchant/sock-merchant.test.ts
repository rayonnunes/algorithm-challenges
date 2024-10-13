import { expect, test } from "bun:test";
import sockMerchant from './sock-merchant'

test("\n----Sock Merchant Problem----\nThere is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.", () => {
    const testInputs = [
        {
            value: [10, 20, 20, 10, 10, 30, 50, 10, 20],
            size: 9,
            output: 3
        },
        {
            value: [1, 1, 3, 1, 2, 1, 3, 3, 3, 3],
            size: 10,
            output: 4
        },
    ]

    testInputs.forEach(({value, size, output}) => {
        console.log("\x1b[35m%s\x1b[0m", "Input: ", value)
        console.log("\x1b[36m%s\x1b[0m", `Output: ${output}\n\n`)
        expect(sockMerchant(size, value)).toBe(output)
    })
})