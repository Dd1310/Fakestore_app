const initialState = {
  token: localStorage.getItem("token") || null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN SUCCESS...":
      return { ...state, token: action.payload, error: null };
    case "LOGIN FAIL!!!":
      return { ...state, error: action.payload };
    case "LOGOUT":
      return { ...state, token: null };
    default:
      return state;
  }
};
