var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

//add to front
//DOES NOT ALTER Original array
function addElementToBeginningOfArray(arr, item) {
  return [item,...arr]
}

//add to front
//DOES alter original array
function destructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item)
  return arr
}

//add to back
//DOES NOT ALTER Original array
function addElementToEndOfArray(arr, item) {
  return [arr,...item]
}

//add to back
//DOES alter original array
function destructivelyAddElementToEndOfArray(arr, item) {
  arr.push(item)
  return arr
}
