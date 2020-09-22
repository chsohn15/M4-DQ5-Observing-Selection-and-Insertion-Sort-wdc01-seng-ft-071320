function insertionSort(inputArr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1, 2, 6] => )

    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
}
