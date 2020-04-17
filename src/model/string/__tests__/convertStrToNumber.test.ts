import convertStrToNumber from '../convertStrToNumber'

test('test converts numeric string to int', () => {
    let actual = convertStrToNumber('100')
    let expected = 100
    expect(actual).toBe(expected)

    actual = convertStrToNumber('656565')
    expected = 656565
    expect(actual).toBe(expected)
})

test('test converts numeric string to int with invalid string', () => {
    expect(() => {
        convertStrToNumber('gfdgdfgdfgdf4343')
    }).toThrow()
})