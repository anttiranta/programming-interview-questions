import countOccuranceOfStr from '../countOccuranceOfStr'

test('test counts the occurrence of a given character in a string', () => {
    const needle = "kissa"
    const haystack = "ssaakissaakissaakissaakis"

    const expected = 3;
    const actual = countOccuranceOfStr(needle, haystack)

    expect(actual).toBe(expected)
});