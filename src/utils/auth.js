export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", _id: "fake-id" },
    });
  });
};

export const createUser = ({ email, password, username }) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { username, email, _id: "fake-id", password },
    });
  });
};

const auth = {
  loginUser,
  checkToken,
  createUser,
};

export default auth;
