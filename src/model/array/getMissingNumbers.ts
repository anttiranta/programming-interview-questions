export const MAX_NUMERIC_VALUE = 100
const MIN_NUMERIC_VALUE = 0

/**
 * In an array 1-100 numbers are stored, one number is missing how do you find it?
 */
export default (inputArr: number[]): number[] => {
    let missing: number[] = []
    let i: number

    for (i = MIN_NUMERIC_VALUE; i < MAX_NUMERIC_VALUE; i++) {
        if (inputArr.includes(i + 1) === false) { // js's in array
            missing.push(i + 1)
        }
    }
    return missing;
}