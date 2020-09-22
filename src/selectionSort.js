function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1, 2, 6]) => [1, 5, 3, 2, 6] => [1, 2, 3, 5, 6]

  // Loop through each element
  // find the min value from i to length - 1
  // if the min is equal to the element then loop is over
  // otherwise switch with min

  for(i = 0; i < arr.length; i++){
    min = i
    for (j = i + 1; j < arr.length; j++){
      if (arr[min] > arr[j]){
        min = j
      }
    }
    if (min !== i){
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] =temp
     }
  }
  return arr;
}
