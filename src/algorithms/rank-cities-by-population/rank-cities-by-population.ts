export type City = {
    name: string,
    population: number
}

export default function rankCitiesByPopulation(cities: City[]) {
    return cities.sort((a, b) => a.population < b.population ? 1 : -1).map((city, index) => ({...city, position: index + 1}))
}
