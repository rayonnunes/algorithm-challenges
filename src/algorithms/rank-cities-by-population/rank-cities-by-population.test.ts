import { expect, test } from "bun:test";
import rankCitiesByPopulation from './rank-cities-by-population';

test('Rank cities by population', () => {
    const cities = [
        {name: 'Los Angeles', population: 3792621},
        {name: 'New York', population: 8175133},
        {name: 'Chicago', population: 2695598},
        {name: 'Houston', population: 2099451},
        {name: 'Philadelphia', population: 1526006}
    ];

    const output = [
        {name: 'New York', population: 8175133, position: 1},
        {name: 'Los Angeles', population: 3792621, position: 2},
        {name: 'Chicago', population: 2695598, position: 3},
        {name: 'Houston', population: 2099451, position: 4},
        {name: 'Philadelphia', population: 1526006, position: 5}
    ]

    console.log("\x1b[35m%s\x1b[0m", "Input: ", JSON.stringify(cities))
    console.log("\x1b[36m%s\x1b[0m", `Output: ${ JSON.stringify(output)}\n\n`)
    expect(rankCitiesByPopulation(cities)).toEqual(output);
})
