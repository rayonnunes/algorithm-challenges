import { test, expect } from 'bun:test'
import twoSums, { optimizedTwoSum, optimizedAltTwoSum } from './two-sums'

test('\n----Two Sum----\nGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.\nExample:\nInput: nums = [2,7,11,15], target = 9;\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].', () => {
    const testInputs = [
        {
            value: [2,7,11,15],
            target: 9,
            output: [1,0]
        },
        {
            value: [3,2,4],
            target: 6,
            output: [2,1]
        },
        {
            value: [3,3],
            target: 6,
            output: [1,0]
        },
    ]

    testInputs.forEach(({value, target, output}) => {
        console.log("\x1b[35m%s\x1b[0m", "Input: ", value)
        console.log("\x1b[35m%s\x1b[0m", "Target: ", target)
        console.log("\x1b[36m%s\x1b[0m", `Output: ${output}`)

        const t0 = performance.now()
        const result = twoSums(value, target)
        const t1 = performance.now()

        console.log("\x1b[36m%s\x1b[0m", `Time: ${t1 - t0} ms\n\n`)
        
        expect(result).toEqual(output)
    })
})

test.only('Optimized Two Sum', () => {
    const testInputs = [
        {
            value: [2,7,11,15],
            target: 9,
            output: [0,1]
        },
        {
            value: [3,2,4],
            target: 6,
            output: [1,2]
        },
        {
            value: [3,3],
            target: 6,
            output: [0,1]
        },
    ]

    testInputs.forEach(({value, target, output}) => {
        console.log("\x1b[35m%s\x1b[0m", "Input: ", value)
        console.log("\x1b[35m%s\x1b[0m", "Target: ", target)
        console.log("\x1b[36m%s\x1b[0m", `Output: ${output}`)

        const t0 = performance.now()
        const result = optimizedTwoSum(value, target)
        const t1 = performance.now()

        console.log("\x1b[36m%s\x1b[0m", `Time: ${t1 - t0} ms\n\n`)
        expect(result).toEqual(output)
    })
})

test.only('Alternative Optimized Two Sum', () => {
    const testInputs = [
        {
            value: [2,7,11,15],
            target: 9,
            output: [0,1]
        },
        {
            value: [3,2,4],
            target: 6,
            output: [1,2]
        },
        {
            value: [3,3],
            target: 6,
            output: [0,1]
        },
    ]

    testInputs.forEach(({value, target, output}) => {
        console.log("\x1b[35m%s\x1b[0m", "Input: ", value)
        console.log("\x1b[35m%s\x1b[0m", "Target: ", target)
        console.log("\x1b[36m%s\x1b[0m", `Output: ${output}`)

        const t0 = performance.now()
        const result = optimizedAltTwoSum(value, target)
        const t1 = performance.now()

        console.log("\x1b[36m%s\x1b[0m", `Time: ${t1 - t0} ms\n\n`)
        expect(result).toEqual(output)
    })
})