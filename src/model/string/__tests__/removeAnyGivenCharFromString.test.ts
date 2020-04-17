import removeAnyGivenCharFromString from '../removeAnyGivenCharFromString'

test('test removing any given character from a string', () => {
    const result = removeAnyGivenCharFromString('mustankissanpaksutposket', 's')
    expect(result).toBe('mutankianpakutpoket') 
});