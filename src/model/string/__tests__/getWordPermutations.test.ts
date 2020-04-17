import getWordPermutations from '../getWordPermutations'

test('finds all permutation of string', () => {
    const testStr = 'abc'
    const permutations: string[] = []
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

    getWordPermutations(permutations, testStr)

    expect(permutations.length).toBe(expected.length)
    expected.forEach(i =>
        expect(permutations).toContain(i)
    )
});