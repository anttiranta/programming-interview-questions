import getPairsWhoseSumIsEqualToGivenNumber from '../getPairsWhoseSumIsEqualToGivenNumber'
import range from '../../../util/range'

test('finds pairs in an array of integers whose sum is equal to the given number', () => {
    const testArr = range(1, 20)
    let pairs = getPairsWhoseSumIsEqualToGivenNumber(testArr, 5)

    let expectedPairs = ['1,4', '2,3']
    expect(Object.values(pairs).length).toBe(2)
    expectedPairs.forEach(i =>
        expect(Object.keys(pairs)).toContain(i)
    )

    pairs = getPairsWhoseSumIsEqualToGivenNumber(testArr, 4)

    expectedPairs = ['1,3', '2,2']
    expect(Object.values(pairs).length).toBe(2)
    expectedPairs.forEach(i =>
        expect(Object.keys(pairs)).toContain(i)
    )

    pairs = getPairsWhoseSumIsEqualToGivenNumber(testArr, 6)

    expectedPairs = ['1,5', '2,4', '3,3']
    expect(Object.values(pairs).length).toBe(3)
    expectedPairs.forEach(i =>
        expect(Object.keys(pairs)).toContain(i)
    )
});