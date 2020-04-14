/**
 * Given two arrays, 1,2,3,4,5 and 2,3,1,0,5 find which number is not present in the second array.
 */
export default (arr1: number[], arr2: number[]): number[] => {
    const commonNumbers = arr1.filter(value => arr2.includes(value)) // array intersection
    return arr1.filter(value => commonNumbers.includes(value) === false)
}