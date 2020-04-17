import getFirstNonRepeatedChar from '../getFirstNonRepeatedChar'

test('finds the first non repeated character of a given string', () => {
    const result = getFirstNonRepeatedChar('aabbbcccdeeefg')
    expect(result).toBe('d')
});