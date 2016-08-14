function duckCount() {
  argumentsArray = [].slice.apply(arguments) // convert arguments to an array

  return argumentsArray.reduce((total, arg) => {
    Object.prototype.hasOwnProperty.call(arg,'quack') ? total += 1 : total
    return total
  },0)
}

module.exports = duckCount
