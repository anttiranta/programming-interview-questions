import getMissingNumbers from '../getMissingNumbers'
import range from '../../../util/range'
import { MAX_NUMERIC_VALUE } from '../getMissingNumbers'

test('finds missing numbers', () => {
    let numRange = range(1, MAX_NUMERIC_VALUE).filter(number => number !== 9)
    let missingNumbers = getMissingNumbers(numRange)

    expect(missingNumbers.length).toBe(1);
    expect(missingNumbers.includes(9)).toBe(true);
    
    let expectedMissing = [23, 56]
    numRange = range(1, MAX_NUMERIC_VALUE).filter(number => number !== 23 && number !== 56) 
    missingNumbers = getMissingNumbers(numRange)

    expect(missingNumbers.length).toBe(2)    
    expectedMissing.forEach(i =>
        expect(missingNumbers).toContain(i)
    )

    numRange = range(1, MAX_NUMERIC_VALUE).filter(number => number !== 1 && number !== 100)
    missingNumbers = getMissingNumbers(numRange)
    expectedMissing = [1, 100]

    expect(missingNumbers.length).toBe(2)    
    expectedMissing.forEach(i =>
        expect(missingNumbers).toContain(i)
    )
});