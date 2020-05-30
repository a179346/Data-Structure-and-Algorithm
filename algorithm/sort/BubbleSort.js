function bubbleSort(arr, func) {
    var noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (j = 0; j < i; j++) {
            if (func(arr[j], arr[j + 1]) < 0) {
                noSwaps = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  //swap
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

// Time Complexity
// Worst or average case: O(n^2)
// Best case: O(n) ( when input array is almost sorted and after implement noSwaps)

function compare(a, b) {
    return b - a;
}

console.log(bubbleSort([1, 9, 3, 4, 5, 8, 2], compare));
console.log(bubbleSort([10, 15, 4, 6], compare));
console.log(bubbleSort([1, 981, 915, 13, 4812, 6418956, 154614, 01056, 104641, 89, 1456, 0216, 489, 4, 981, 4, 9810, 19, 1], compare));

var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

start = new Date().getTime();
console.log(bubbleSort(data, compare));
end = new Date().getTime();

console.log((end - start) / 1000 + "sec");