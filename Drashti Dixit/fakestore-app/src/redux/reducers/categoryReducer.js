const initialState = { categories: [] };

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FATCH_CATEGORIES_SUCCESS..":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
