function selectionSort(arr, func) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (func(arr[minIdx], arr[j]) < 0) {
                minIdx = j;
            }
        }
        if (i !== minIdx) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

// Time Complexity
// average case: O(n^2)

function compare(a, b) {
    return b - a;
}

console.log(selectionSort([1, 9, 3, 4, 5, 8, 2], compare));
console.log(selectionSort([10, 15, 4, 6], compare));
console.log(selectionSort([1, 981, 915, 13, 4812, 6418956, 154614, 01056, 104641, 89, 1456, 0216, 489, 4, 981, 4, 9810, 19, 1], compare));