import isPowOfTwo from '../isPowOfTwo'

test('finds whether a no is a power of two or not', () => {
    expect(isPowOfTwo(256)).toBeTruthy()
    expect(isPowOfTwo(8)).toBeTruthy()
    expect(isPowOfTwo(4)).toBeTruthy()
    expect(isPowOfTwo(6)).toBeFalsy()
});