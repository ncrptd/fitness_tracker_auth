import axios from "axios";

const apiUrl = 'https://assignment-seventeen-backend.rockeybiswas.repl.co/api/food';

export const ACTIONS = {
    ADD_FOOD: 'ADD_FOOD',
    REMOVE_FOOD: 'REMOVE_FOOD',
    FETCH_FOOD_SUCCESS: 'FETCH_FOOD_SUCCESS',
    FETCH_FOOD_FAILURE: 'FETCH_FOOD_FAILURE',
    FETCH_FOOD_LOADING: 'FETCH_FOOD_LOADING'
};

export const fetchFood = () => async (dispatch) => {
    try {
        dispatch({ type: ACTIONS.FETCH_FOOD_LOADING });
        const res = await axios.get(apiUrl);

        if (res.status === 200) {
            const data = res.data;
            if (data) {
                return dispatch({ type: ACTIONS.FETCH_FOOD_SUCCESS, payload: { foodItems: data } });
            }

        }
    } catch (error) {
        console.error('Error fetching food data: ', error);
        dispatch({ type: ACTIONS.FETCH_FOOD_FAILURE });
    }
}

export const addFood = (foodDetails) => async (dispatch) => {
    try {
        const res = await axios.post(apiUrl, foodDetails);
        if (res.status === 201) {
            const data = res.data;
            return dispatch({ type: ACTIONS.ADD_FOOD, payload: { foodItem: data } })
        }
    } catch (error) {
        console.error(error);
        dispatch({ type: ACTIONS.FETCH_FOOD_FAILURE });
    }
}

export const removeFood = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${apiUrl}/${id}`);
        if (res.status === 204) {
            return dispatch({ type: ACTIONS.REMOVE_FOOD, payload: { id } });
        }
    } catch (error) {
        console.error('Error while removing food', error);
    }
}
