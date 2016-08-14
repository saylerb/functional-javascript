function duckCount(thing) {
  count = 0
  
  for (arg in arguments) {
    console.log(arguments[arg])
    if (Object.prototype.hasOwnProperty.call(arguments[arg],'quack')) {
      count += 1
    }
  }
  return count
}

module.exports = duckCount
