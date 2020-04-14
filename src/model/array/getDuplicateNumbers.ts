/**
 * In an array 1-100 one or more number(s) are duplicate how do you find those?
 */
export default (inputArr: number[]): number[] => {
    const valueOccurances = countValues(inputArr);
    let duplicates: number[] = [];
    
    for (const [key, occuranceCount] of Object.entries(valueOccurances)) { // foreach for associative array
        if (occuranceCount > 1) {
            duplicates.push(parseInt(key));
        }   
    }
    return duplicates
}

const countValues = (inputArr: number[]): {[key: number]: number} =>  {
    let counts: {[key: number]: number} = {}

    for(let i = 0; i < inputArr.length; i++) {
        let key = inputArr[i];
        counts[key] = (counts[key]) ? counts[key] + 1 : 1
    }
    return counts
}