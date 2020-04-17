import isAmstrongNumber from '../isAmstrongNumber'

test('finds whether an integer is Armstrong number or not', () => {
    expect(isAmstrongNumber(153)).toBeTruthy()
    expect(isAmstrongNumber(370)).toBeTruthy()
    expect(isAmstrongNumber(371)).toBeTruthy()
});