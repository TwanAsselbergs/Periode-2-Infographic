function sortArrayOfObjects(array, propertyName, order = "ascending") {
  const sortedArray = array.sort((a, b) => {
    if (a[propertyName] < b[propertyName]) {
      return -1;
    }
    if (a[propertyName] > b[propertyName]) {
      return 1;
    }
    return 0;
  });

  if (order === "descending") {
    return sortedArray.reverse();
  }

  return sortedArray;
}
