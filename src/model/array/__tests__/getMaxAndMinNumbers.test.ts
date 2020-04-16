import getMaxAndMinNumbers from '../getMaxAndMinNumbers'
import range from '../../../util/range'

test('finds the largest and smallest number in an array', () => {
    const [maxNum, minNum] = getMaxAndMinNumbers(range(20, 50))

    expect(maxNum).toBe(50);
    expect(minNum).toBe(20);
});