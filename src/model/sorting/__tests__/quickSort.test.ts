import quickSort from '../quickSort'

test('can sort numbers in place using quick sort', () => {
    const myArray = [3, 0, 2, 5, -1, 4, 1]
    const sortedArr = quickSort(myArray)
    const expected = [-1, 0, 1, 2, 3, 4, 5]

    expect(sortedArr.length).toBe(7)
    expect(sortedArr).toEqual(expected)
});