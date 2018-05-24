

let qCounter = 0;
let sCounter = 0;
let pCounter = 0;
let mergeCounter = 0;
let mergeSortCounter = 0;

function quickSort(array, start=0, end=array.length){
  qCounter++
  start = start;
  end = end;
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array
}

function swap(array, i, j) {
    sCounter++
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function partition(array, start, end) {
  pCounter++
  const pivot = array[end - 1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
};

function mergeSort(array) {
  mergeSortCounter++
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  mergeCounter++
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i=leftIndex; i<left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i=rightIndex; i<right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};

const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48,
            32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98,
            73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9,
            70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31 ]

//console.log(arr)

// console.log(quickSort(arr))
// console.log(qCounter, "quickSort counter")
// console.log(sCounter, "swap counter")
// console.log(pCounter, "partition counter")
// let totalCount = qCounter + sCounter + pCounter;
// console.log(totalCount, "Total count of operations")
// console.log(mergeSort(arr))
// console.log(mergeSortCounter, "mergeSortCounter")
// console.log(mergeCounter, "mergeCounter")
// let totalMergeCounter = mergeSortCounter + mergeCounter
// console.log(totalMergeCounter, "totalMergeCounter")

function bucketSort(arr, min, max) {

  let bucketCount = Math.floor((max - min) + 1);
  let result = new Array(bucketCount);

  for(let i = 0; i < arr.length; i++){
    result[arr[i] - min] = arr[i];
  }

  let ans = []
  result.forEach(item => {
    ans.push(item)
  });
  return ans
}

const arr1 = [1, 7, 2, 6, 4, 9]
console.log(bucketSort(arr1, 1, 9))
