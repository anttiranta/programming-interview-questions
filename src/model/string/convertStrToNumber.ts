/**
 * How to convert numeric String to int?
 */
export default (str: string): number => {
    const num = parseInt(str)

    if(!isNaN(num)) {
        return num
    }
    throw new Error('String is not a number.')
}    