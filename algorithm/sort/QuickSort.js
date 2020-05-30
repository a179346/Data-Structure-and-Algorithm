function quickSort(arr, func) {

    function helper(leftEdge, rightEdge, func) {
        if (rightEdge <= leftEdge) return;
        let pivot = pivotEdge(arr, leftEdge, rightEdge, func);
        let leftleft = leftEdge, leftright = pivot - 1;
        helper(leftleft, leftright, func);
        let rightleft = pivot + 1, rightright = rightEdge;
        helper(rightleft, rightright, func);
    }

    helper(0, arr.length, func);
    return arr;
}

function pivotEdge(arr, leftEdge, rightEdge, func) {
    let pivot = arr[leftEdge], idx = leftEdge;
    for (let i = leftEdge + 1; i <= rightEdge; i++) {
        if (func(pivot, arr[i]) < 0) {
            idx++;
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }
    [arr[leftEdge], arr[idx]] = [arr[idx], arr[leftEdge]];
    return idx;
}


function compare(a, b) {
    return b - a;
}

// Time Complexity
// Best & Average Case: O(n*log(n))
// Worst Case: O(n^2)

console.log(quickSort([10, 15, 4, 6], compare));
console.log(quickSort([1, 9, 3, 4, 5, 8, 2], compare));
console.log(quickSort([1, 981, 915, 13, 4812, 6418956, 154614, 01056, 104641, 89, 1456, 0216, 489, 4, 981, 4, 9810, 19, 1], compare));

var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

start = new Date().getTime();
console.log(quickSort(data, compare));
end = new Date().getTime();

console.log((end - start) / 1000 + "sec");