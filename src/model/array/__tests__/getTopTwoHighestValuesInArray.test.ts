import getTopTwoHighestValuesInArray from '../getTopTwoHighestValuesInArray'

test('finds the top two maximum number in an array', () => {
    const arr = [4,5,1,2,3]
    const [num1, num2] = getTopTwoHighestValuesInArray(arr)

    expect(num2).toBe(5)
    expect(num1).toBe(4)

    const arr2 = [33, 44, 20, 78, 66, 55]
    const [num3, num4] = getTopTwoHighestValuesInArray(arr2)

    expect(num4).toBe(78);
    expect(num3).toBe(66);
});