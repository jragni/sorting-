function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let currentSmallestIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[currentSmallestIdx] > array[j]) {
        currentSmallestIdx = j;
      }
    }
    [array[currentSmallestIdx], array[i]] = [
      array[i],
      array[currentSmallestIdx],
    ];
  }
  return array;
}

module.exports = selectionSort;

