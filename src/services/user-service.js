const user = {
  name: "Puki Ben David",
  balance: 100,
  transactions: [],
}

export const userService = {
  getUser,
}

function getUser() {
  if (user) return user
  else return null
}
