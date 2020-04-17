import isPalindrome from '../isPalindrome'

test('finds whether a string is palindrome or not', () => {
    expect(isPalindrome('saippuakauppias')).toBeTruthy() // soap seller in finnish :)
    expect(isPalindrome('antti')).toBeFalsy()
});