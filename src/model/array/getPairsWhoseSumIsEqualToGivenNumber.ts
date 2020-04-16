/**
 * How to find all pairs in an array of integers whose sum is equal to the given number?
 */
export default (arr: number[], num: number): {[key: string]: number[]} => {
    let pairs: {[key: string]: number[]} = {}

    for(let i = 0; i < arr.length; i++) {
        for(let j = arr.length; j > 0; j--) {
            if (arr[i] && arr[j] && arr[i] + arr[j] === num) {
                let value = [arr[i], arr[j]]
                value.sort()
                
                let key = value.join(',') // implode
                pairs[key] = value
            }
        }
    }

    return pairs
}