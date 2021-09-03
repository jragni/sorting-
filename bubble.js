function bubbleSort(array) {
  let isSorted = false;
  let lastIdx = array.length;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastIdx; i++) {
      let curr = array[i];
      let next = array[i + 1];
      if (curr > next) {
        isSorted = false;
        [array[i + 1], array[i]] = [array[i], array[i + 1]];
      }
    }
  }
  return array;
}

module.exports = bubbleSort;

