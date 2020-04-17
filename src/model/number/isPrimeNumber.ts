import range from '../../util/range'

/**
 * Write a program to find all prime number up to a given number?
 */
export default (number: number): boolean => {
    if (number > 100){
        throw new Error("Number too big!");
    }
    
    for(const currentNum of range(2, number -1)){
        if (number % currentNum == 0) {
            return false;
        }
    }
    return number % 1 == 0 && number % number == 0;
}