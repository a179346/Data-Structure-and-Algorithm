function insertionSort(arr, func) {
    var result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (compare(result[j], arr[i]) <= 0) {
                result.splice(j, 0, arr[i]);
                break;
            }
            if (j === result.length - 1) {
                result.splice(j + 1, 0, arr[i]);
                break;
            }
        }
    }
    return result;
}
// Time Complexity
// average case: O(n^2)

function compare(a, b) {
    return b - a;
}

console.log(insertionSort([1, 9, 3, 4, 5, 8, 2], compare));
console.log(insertionSort([10, 15, 4, 6], compare));
console.log(insertionSort([1, 981, 915, 13, 4812, 6418956, 154614, 01056, 104641, 89, 1456, 0216, 489, 4, 981, 4, 9810, 19, 1], compare));