function RadixSort(arr) {
    let maxDigitCount = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigitCount = Math.max(maxDigitCount, getLength(arr[i]));
    }
    for (let i = 0; i < maxDigitCount; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            buckets[getDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getLength(num) {
    return Math.log10(num) + 1 | 0;
}

// Time Complexity
// Best & Average & Worst Case: O(n*k) k is the largest digit count in the array

console.log(RadixSort([10, 15, 4, 6]));
console.log(RadixSort([1, 9, 3, 4, 5, 8, 2]));
console.log(RadixSort([1, 981, 915, 13, 4812, 6418956, 154614, 01056, 104641, 89, 1456, 0216, 489, 4, 981, 4, 9810, 19, 1]));
function getRandom() {
    return Math.floor(Math.random() * 1000000);
}
var data = Array.apply(null, { length: 100000 }).map(Function.call, getRandom);

start = new Date().getTime();
console.log(RadixSort(data));
end = new Date().getTime();

console.log((end - start) / 1000 + "sec");