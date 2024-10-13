export default function sockMerchant(n: number, ar: number[]): number {
    const pairs = ar.reduce((acc, current, _index, array) => {
        if (!acc?.[current]){
            let pair: number[] = []
            let x = array.indexOf(current)
            
            while (x !== -1) {
                pair.push(x)
                x = array.indexOf(current, x + 1)
            }
            
            const numberOfPairs = Math.floor(pair.length / 2)
            
            const total = acc?.total + numberOfPairs
        
            return {
                ...acc,
                [current]: numberOfPairs,
                total
            }
        }
        return acc
    }, {total: 0} as any)
    
    return pairs.total
}