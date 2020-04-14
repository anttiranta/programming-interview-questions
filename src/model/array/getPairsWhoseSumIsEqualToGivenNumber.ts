/**
 * How to find all pairs in an array of integers whose sum is equal to the given number?
 */
export default (arr: number[], number: number[]): {[key: string]: number} => {
    let pairs: {[key: string]: number} = {}

    for(let i = 0; i < arr.length; i++) {
        for(let j = arr.length;j > 0; j--) {
            // TODO!
            /*if (isset(arr[i]) && isset(arr[j]) && arr[i] + arr[j] === number) {
                let value = [arr[i], arr[j]]
                //sort(value)
                
                let key = value.join(',')
                pairs[key] = value
            }*/
        }
    }

    return pairs
}