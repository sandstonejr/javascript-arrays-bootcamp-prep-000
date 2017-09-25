var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

//DOES NOT ALTER Original array
function addElementToBeginningOfArray(arr, item) {
  return [item,...arr]
}

//DOES alter original array
function destructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item)
  return arr
}

//DOES NOT ALTER Original array
function addElementToEndOfArray(arr, item) {
  return [arr,...item]
}

//DOES alter original array
function destructivelyAddElementToEndOfArray(arr, item) {
  arr.push(item)
  return arr
}