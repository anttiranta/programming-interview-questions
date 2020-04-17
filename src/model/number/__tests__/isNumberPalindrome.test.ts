import isNumberPalindrome from '../isNumberPalindrome'

test('finds whether a number is a palindrome or not', () => {
    expect(isNumberPalindrome(123321)).toBeTruthy()
    expect(isNumberPalindrome(5436)).toBeFalsy()
    expect(isNumberPalindrome(454765)).toBeFalsy()
});