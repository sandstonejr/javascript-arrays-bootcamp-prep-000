var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(arr, element) {
  var cArray = arr
  cArray.unshift(element)
  return cArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(arr, element) {
  var cArray = arr
  cArray.push(element)
  return cArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function removeElementFromBeginningOfArray(array) {
  var cArray = array.slice(1)
  return cArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function removeElementFromEndOfArray(array) {
  var cArray = array.slice(0, array.length - 1)
  return cArray
