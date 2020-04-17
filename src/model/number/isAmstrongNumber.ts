/**
 * Write code to check whether an integer is Armstrong number or not?
 */
export default (num: number): boolean => {
    let charArray = num.toString().split("");
    let sum = 0;
    
    charArray.forEach(char => sum += Math.pow(parseInt(char), 3))

    return sum === num
}