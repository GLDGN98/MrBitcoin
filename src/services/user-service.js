import { asyncStorageService } from "../services/async-storage.service"

const STORAGE_KEY = "userDB"
const STORAGE_KEY_LOGGEDIN = "loggedinUser"

const user = {
  name: "Puki Ben David",
  balance: 100,
  transactions: [],
}

export const userService = {
  getUser,
  login,
  signup,
  getLoggedinUser,
  getEmptyCredentials,
  logout,
  getById,
  updateBalance,
}

function getUser() {
  if (user) return user
  else return null
}

function login(username) {
  return asyncStorageService.query(STORAGE_KEY).then((users) => {
    const user = users.find((user) => user.username === username)
    if (user) return _setLoggedinUser(user)
    else signup(username)
  })
}

function signup(username) {
  const user = { username, balance: 100, transactions: [] }
  return asyncStorageService.post(STORAGE_KEY, user).then(_setLoggedinUser)
}

function getLoggedinUser() {
  console.log(JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN)))
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser(user) {
  const userToSave = {
    username: user.username,
    balance: user.balance,
    _id: user._id,
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))

  return userToSave
}

function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
  return Promise.resolve()
}

function getById(userId) {
  console.log(userId)
  return asyncStorageService.get(STORAGE_KEY, userId)
}

function updateBalance(amount, contact) {
  console.log("amount", amount)
  console.log("contact", contact)
  const transaction = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  }
  console.log({ transaction })
  return getById(getLoggedinUser()._id).then((user) => {
    if (user.balance + amount < 0) return Promise.reject("No balance")
    user.balance -= amount
    user.transactions.push(transaction)
    return asyncStorageService.put(STORAGE_KEY, user).then((user) => {
      _setLoggedinUser(user)
      return user.balance
    })
  })
}

function getEmptyCredentials(balance = 100, username = "", transactions = []) {
  return { balance, username, transactions }
}
