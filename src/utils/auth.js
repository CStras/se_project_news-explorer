export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      username: "fake user",
      email: "fake@example,com",
      _id: "fake-id",
    });
  });
};

export const loginUser = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token", email, password });
  });
};

export const createUser = ({ email, password, username }) => {
  return new Promise((resolve, reject) => {
    resolve({ username, email, _id: "fake-id", password });
  });
};

export const saveArticle = (id, token) => {
  if (token) {
    console.log("Article saved with token", token);
  } else {
    console.log("Article saved without token");
  }
  return new Promise((resolve, reject) => {
    resolve({ id, saved: true });
  });
};

export const unsaveArticle = (id, token) => {
  if (token) {
    console.log("Article unsaved with token", token);
  } else {
    console.log("Article unsaved without token");
  }
  return new Promise((resolve, reject) => {
    resolve({ id, saved: false });
  });
};

const auth = {
  loginUser,
  checkToken,
  createUser,
  saveArticle,
  unsaveArticle,
};

export default auth;
