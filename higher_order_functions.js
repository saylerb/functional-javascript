var repeat = function(operation, num) {
  for (i = 0; i < num; i++) {
    operation()
  }
}

module.exports = repeat
