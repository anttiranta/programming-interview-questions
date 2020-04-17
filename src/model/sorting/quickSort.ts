/**
 * Write a program to sort numbers in place using quick sort?
 */
const quickSort = (myArray: number[]): number[] => {
    let loe = []
    let gt = []
    
    if(myArray.length < 2) {
        return myArray
    }
    
    let pivot = myArray.shift() // array_shift
    if (pivot === undefined) {
        return myArray
    }
    
    for(const val of myArray) {
        if(val <= pivot) {
            loe.push(val)
        } else if (val > pivot) {
            gt.push(val)
        }
    }

    return quickSort(loe).concat([pivot]).concat(quickSort(gt)) // array_merge
}

export default quickSort