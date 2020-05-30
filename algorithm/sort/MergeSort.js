// function mergeSort(arr,func) {
//     let result = new Array(arr.length);
//     for(let i=0;i<arr.length;i++) {
//         result[i] = [arr[i]];
//     }

//     function helper(arr,func) {
//         if(arr.length === 1) return arr;
//         let result = [];
//         for(let i=0;i<arr.length;i+= 2) {
//             if(i === arr.length-1) {
//                 result.push(arr[i]);
//                 break;
//             }
//             result.push(merge(arr[i],arr[i+1],func));
//         }
//         return helper(result,func);
//     }

//     result = helper(result,func);
//     return result[0];
// }

function mergeSort(arr, func) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), func);
    let right = mergeSort(arr.slice(mid), func);
    return merge(left, right, func);
}

// function merge will merge two sorted array in time complexoty of O(n)
function merge(arr1, arr2, func) {
    let idx1 = 0, idx2 = 0;
    let result = [];
    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (func(arr1[idx1], arr2[idx2]) < 0) {
            result.push(arr2[idx2]);
            idx2++;
        } else if (func(arr1[idx1], arr2[idx2]) > 0) {
            result.push(arr1[idx1]);
            idx1++;
        } else {
            result.push(arr2[idx2]);
            idx2++;
            result.push(arr1[idx1]);
            idx1++;
        }
    }

    while (idx1 < arr1.length) {
        result.push(arr1[idx1]);
        idx1++;
    }
    while (idx2 < arr2.length) {
        result.push(arr2[idx2]);
        idx2++;
    }
    return result;
}


function compare(a, b) {
    return b - a;
}

// Time Complexity:
// Best & Average & Worst Case: O(n*log(n));

console.log(mergeSort([1, 9, 3, 4, 5, 8, 2], compare));
console.log(mergeSort([10, 15, 4, 6], compare));
console.log(mergeSort([1, 981, 915, 13, 4812, 6418956, 154614, 01056, 104641, 89, 1456, 0216, 489, 4, 981, 4, 9810, 19, 1], compare));

var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

start = new Date().getTime();
console.log(mergeSort(data, compare));
end = new Date().getTime();

console.log((end - start) / 1000 + "sec");