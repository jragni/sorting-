/**Merge */

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArr = [];
  while (arr1[i] !== undefined && arr2[j] !== undefined) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j++;
    } else {
      mergedArr.push(arr1[i]);
      mergedArr.push(arr2[j]);
      j++;
      i++;
    }
  }

  if (arr1[i] === undefined) {
    return mergedArr.concat(arr2.slice(j));
  } else if (arr2[j] === undefined) {
    return mergedArr.concat(arr1.slice(i));
  } else {
    return mergedArr;
  }
}

function mergeSort(arr) {
  function _splitter(array) {
    // [ 3 1 5 7 4 8]
    // [3 1 5] [7 4 8]
    // [3] [1 5] [7] [4 8]
    // [3] [1] [5] [7] [4] [8]

    if (arr.length > 1) {
      let right = array.slice(0, Math.floor(array.length / 2));
      let left = array.slice(Math.floor(array.length / 2));
      return merge(_splitter(right), _splitter(left));
    }
  }
  return _splitter(arr);
}

module.exports = { merge, mergeSort };

