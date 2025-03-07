import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });

    localStorage.setItem("token", data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: data.token });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.message });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: "LOGOUT" };
};
