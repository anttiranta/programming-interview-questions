/**
 * Get all permutation of string in recursive way
 */
const getWordPermutations = (
    permutations: string[], 
    str: string, 
    l: number = 0, 
    r: number | null = null, 
): void => {
    if (r === null){
        r = str.length -1;
    }
    
    if (l == r) {
        permutations.push(str)
    } else { 
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i)
            getWordPermutations(permutations, str, l + 1, r)
            str = swap(str, l, i)
        } 
    }
}

const swap = (a: string, i: number, j: number) => {
    let charArray = a.split('')
    let temp = charArray[i]
    charArray[i] = charArray[j];
    charArray[j] = temp; 
    
    return charArray.join("")
} 

export default getWordPermutations