

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

  let result = new Array(max - min + 1);

  for(let i = 0; i < arr.length; i++){
    result[arr[i] - min] = (result[arr[i] - min]|0) +1;
  }
  let ans = []
  for(let i = min; i <= max; i++){
    for(let j = 0; j < result[i-min]; j++){
      ans.push(i)
    }
  }
  return ans
}

const arr1 = [1, 7, 2, 6, 4, 9]
//console.log(bucketSort(arr1, 1, 9))

function sortInPlace(array){
  for(let i = 0; i < array.length; i++){
    let j = Math.floor(Math.random() * array.length);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

const arr2 = [1, 2, 3, 4, 5]
//console.log(sortInPlace(arr2))

function sortingBooks(arr){
  return arr.sort((book1, book2) => book1.author > book2.author)
}

function sortingBooks2(arr){
  return quickSort(arr)
}

const library = ['The REXX Language', 'Teach Yourself C++ In 21 Days', 'The C++ Programming Language',
                'JavaScript: The Good Parts', 'JavaScript: The Definitive Guide', 'Windows Vista for Dummies',
                'NIV Study Bible', 'Starlight and Time', 'Jane\'s Fighting Ships', 'The Official Chuck Norris Fact Book'];

//console.log(sortingBooks2(library))
