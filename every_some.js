function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(sub => goodUsers.some(good => good.id === sub.id))
  }
}

module.exports = checkUsersValid
