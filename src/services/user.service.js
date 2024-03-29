import storageService from "./storage.service";

export default {
  getLoggedInUser,
  signUp,
  addMove,
};

const USER_KEY = "user";
const LOGGED_IN_USER_KEY = "loggedInUser";

var gUsers = storageService.load(USER_KEY) || [];
var gLoggedInUser = _loadLoggedInUser()

function getLoggedInUser() {
  return gLoggedInUser;
}

function signUp(userName = 'Person') {
  var user = gUsers.find((user) => user.name === userName);
  if (!user) {
    user = {
      _id: _makeId(),
      name: userName,
      coins: 100,
      moves: [],
    };
    gUsers.push(user);
    storageService.save(USER_KEY, gUsers);
  }
  gLoggedInUser = user;
  storageService.save(LOGGED_IN_USER_KEY, gLoggedInUser);
  return gLoggedInUser
}

function addMove(contact, amount) {
  const move = {
    toId: contact._id,
    at: Date.now(),
    amount,
    type: 'BTC'
  };
  gLoggedInUser.coins -= amount;
  gLoggedInUser.moves.unshift(move);

  const idx = gUsers.findIndex((u) => u.name === gLoggedInUser.name);
  gUsers[idx] = gLoggedInUser;

  storageService.save(USER_KEY, gUsers);
  storageService.save(LOGGED_IN_USER_KEY, gLoggedInUser);

  return gLoggedInUser
}

function _loadLoggedInUser() {
  let loggedInUser = storageService.load(LOGGED_IN_USER_KEY) || 'no user'
  return loggedInUser
}

function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
