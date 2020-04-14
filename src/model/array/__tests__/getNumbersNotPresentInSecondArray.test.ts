import getNumbersNotPresentInSecondArray from '../getNumbersNotPresentInSecondArray'

test('finds which number is not present in the second array', () => {
    const arr1 = [1,2,3,4,5]
    const arr2 = [2,3,1,0,5]

    const result = getNumbersNotPresentInSecondArray(arr1, arr2)

    expect(result.length).toBe(1)
    expect(result.includes(4)).toBe(true);
});