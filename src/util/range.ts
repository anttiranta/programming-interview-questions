export default (start: number, end: number): number[] => {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}