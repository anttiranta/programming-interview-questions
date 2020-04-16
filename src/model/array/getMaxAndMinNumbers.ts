/**
 * How to find the largest and smallest number in an array?
 */
const getMaxAndMinNumbers = (numbers: number[]): number[] => {
    const maxNum = Math.max(...numbers)
    const minNum = Math.min(...numbers)

    return [maxNum, minNum]
}

export default getMaxAndMinNumbers