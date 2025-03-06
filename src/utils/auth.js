export const checkToken = () => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve) => {
    resolve({
      username: "fake user",
      email: "fake@example,com",
      _id: "fake-id",
    });
  });
};

export const loginUser = ({ email, password }) => {
  return new Promise((resolve) => {
    resolve({ token: "a fake token", email, password });
  });
};

export const createUser = ({ email, password, username }) => {
  return new Promise((resolve) => {
    resolve({ username, email, _id: "fake-id", password });
  });
};

export const saveArticle = (id, token) => {
  if (token) {
    console.log("Article saved with token", token);
  } else {
    console.log("Article saved without token");
  }
  return new Promise((resolve) => {
    resolve({ id, saved: true });
  });
};

export const unsaveArticle = (id, token) => {
  if (token) {
    console.log("Article unsaved with token", token);
  } else {
    console.log("Article unsaved without token");
  }
  return new Promise((resolve) => {
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
