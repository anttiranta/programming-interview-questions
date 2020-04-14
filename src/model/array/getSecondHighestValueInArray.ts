/**
 * How do you find the second highest number in an integer array?
 */
export default (arr: number[]): number => {
    arr.sort()
    return arr[arr.length - 2];
}