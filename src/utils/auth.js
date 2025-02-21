export const loginUser = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token", email, password });
  });
};

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

export const createUser = ({ email, password, username }) => {
  return new Promise((resolve, reject) => {
    resolve({ username, email, _id: "fake-id", password });
  });
};

const auth = {
  loginUser,
  checkToken,
  createUser,
};

export default auth;
