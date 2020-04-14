import getDuplicateNumbers from '../getDuplicateNumbers'
import range from '../../../util/range'

test('finds duplicate numbers', () => {
    let numRange = range(1, 100)
    numRange[10] = 7

    let duplicates = getDuplicateNumbers(numRange)

    expect(duplicates.length).toBe(1);
    expect(duplicates.includes(7)).toBe(true);

    numRange = range(1, 100)
    numRange[10] = 7
    numRange[9] = 20

    duplicates = getDuplicateNumbers(numRange)
    expect(duplicates.length).toBe(2)

    let expectedDuplicates = [7, 20]
    expectedDuplicates.forEach(i =>
        expect(duplicates).toContain(i)
    )
});