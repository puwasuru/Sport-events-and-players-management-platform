import { post, get } from "../lib/request";

export const createUser = async (
  name,
  username,
  password
) => {
  try {
    const response = await post("/admin_register", {
      user: {
        name,
        username,
        password
      }
    });
    return response.data;
  } catch (error) {
    return error.response && error.response.status === 422
      ? "username is already taken."
      : "Unknown error. Please try again";
  }
};

export const getUsers = () => {
  return getData("/users", null);
};

export const getUser = (jwt, id) => {
  return getData(`/users/${id}`, jwt);
};

export const getCurrentUser = jwt => {
  return getData("/users/current", jwt);
};

const getData = (endpoint, jwt) => {
  try {
    return get(endpoint, jwt);
  } catch (error) {
    return error;
  }
};