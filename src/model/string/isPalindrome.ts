/**
 * Write code to check a String is palindrome or not?
 */
export default (str: string): boolean => {
    // reverse string
    return str === str.split("").reverse().join("") 
}