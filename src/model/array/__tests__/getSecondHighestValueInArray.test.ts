import getSecondHighestValueInArray from '../getSecondHighestValueInArray'

test('finds the second highest number in an integer array', () => {
    const arr = [4,5,1,2,3]

    const expected = 4
    const actual = getSecondHighestValueInArray(arr)

    expect(actual).toBe(expected)
});