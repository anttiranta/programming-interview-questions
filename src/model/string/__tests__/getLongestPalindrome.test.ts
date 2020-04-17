import getLongestPalindrome from '../getLongestPalindrome'

test('finds out longest palindrome in a given string', () => {
    const result = getLongestPalindrome('dasdasabbadasdasdassaippuakauppiasrehrr')
    expect(result).toBe('saippuakauppias')
});