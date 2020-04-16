/**
 * How to find the top two maximum number in an array?
 */
const getTopTwoHighestValuesInArray = (numbers: number[]): number[] => {
    numbers.sort()
    return numbers.splice(numbers.length-2, 2) // array_splice
}

export default getTopTwoHighestValuesInArray