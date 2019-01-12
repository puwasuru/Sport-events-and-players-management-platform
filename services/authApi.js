import { post } from "../lib/request";

export const authenticate = async (username, password) => {
  try {
    const res = await post("/admin_token", {
      auth: {
        username,
        password
      }
    });
    return res.data;
  } catch (error) {
    return error.response && error.response.status === 500
      ? "Wrong email/password"
      : "Unknown error. Please try again";
  }
};