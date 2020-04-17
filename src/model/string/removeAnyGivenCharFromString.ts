/**
 * Write a method which will remove any given character from a String
 */
export default (str: string, charToRemove: string): string => {
    const charArray = str.split("")

    charArray.forEach(function (char, i) { // foreach with index
        if (char === charToRemove) {
            delete charArray[i]
        }
    })

    return charArray.join("") // implode
}