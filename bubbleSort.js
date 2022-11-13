// max to min //
const array = [13, 45, 86, 50, -15, -1, 1, 5, 8, -111, 4, 27];
function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length + 1; i++) {
      if (array[i] < array[i + 1]) {
        const result = array[i];
        array[i] = array[i + 1];
        array[i + 1] = result;
      }
    }
  }
  console.log(array);
}

bubbleSort(array);


// min to max //
const array = [13, 45, 86, 50, -15, -1, 1, 5, 8, -111, 4, 27];
function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const result = array[i];
        array[i] = array[i + 1];
        array[i + 1] = result;
      }
    }
  }
  console.log(array);
}

bubbleSort(array);
