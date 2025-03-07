import axios from "axios";

export const fetchCategories = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products/categories');
        dispatch({type: 'FATCH_CATEGORIES_SUCCESS', payload: data });
    } catch (error) {
        console.error(error);
    }
};