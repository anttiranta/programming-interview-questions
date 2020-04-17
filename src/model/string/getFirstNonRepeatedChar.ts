/**
 * How to find the first non repeated character of a given string?
 */
export default (str: string): string => {
    const charArray = str.split('')
    let charOccurances: {[key: string]: number} = {}

    for (const char of charArray) {
        if (!charOccurances[char]) {
            charOccurances[char] = 1
        } else {
            charOccurances[char] += 1
        }
    }

    const values = Object.values<number>(charOccurances)
    const keys = Object.keys(charOccurances)

    return keys[values.indexOf(1)] // array_search
}