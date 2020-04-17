import isPrimeNumber from '../isPrimeNumber'

test('finds all prime number up to a given number', () => {
    expect(isPrimeNumber(11)).toBeTruthy()
    expect(isPrimeNumber(23)).toBeTruthy()
    expect(isPrimeNumber(24)).toBeFalsy()
    expect(isPrimeNumber(47)).toBeTruthy()
});