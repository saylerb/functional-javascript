function reduce(arr, fn, initial) {
  
  if (arr.length === 0 ) { 
    return initial 
  } else {
    return reduce(arr.slice(1), fn, fn(initial, arr[0]))
  }

}

module.exports = reduce
