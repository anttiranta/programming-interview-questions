/**
 * Write code to check whether a no is a power of two or not?
 */
export default (number: number): boolean => {
    let temp = 0;
    
    for (let i = 1; i < number; i++) {
        if (temp > number) {
            break;
        }
        
        temp = Math.pow(2, i);
        if (temp === number) {
            return true;
        }
    }
    
    return false;
}