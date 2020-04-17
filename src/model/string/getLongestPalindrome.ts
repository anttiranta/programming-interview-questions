import strrev from '../../util/strrev'

/**
 * Write a function to find out longest palindrome in a given string
 */
export default (str: string): string => {
    let palindromes: {[key: string]: number} = {}
    
    for (let i = 0; i < str.length; i++) {
        let palindrome = true
        let offset = 1

        while (palindrome) {
            let word = str.substr(i - offset, (offset * 2) + 1)
            if (word == strrev(word)) {
                palindromes[word] = word.length
            } else {
                palindrome = false
            }
            offset++
        }
    }

    const keys = Object.keys(palindromes)
    const values = Object.values<number>(palindromes)

    const longest = Math.max(...values)

    return keys[values.indexOf(longest)] // array_search
}