/**
 * Write a program to check whether a number is a palindrome or not?
 */
export default (num: number): boolean => {
    let str = num.toString();

    // reverse string
    return str === str.split("").reverse().join("") 
}