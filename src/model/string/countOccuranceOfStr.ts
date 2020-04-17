/**
 * How to count the occurrence of a given character in a string?
 */
export default (needle: string, haystack: string): number => {
    // preg_match_all
    const re = new RegExp(needle,'gi')
    const found = [...haystack.matchAll(re)]

    return found !== null ? found.length : 0
}