const user = {
  name: 'Manoel',
  lastName: 'Almeida'
}

function getUserWithFullName() {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);