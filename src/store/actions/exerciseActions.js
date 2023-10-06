import axios from "axios";

const apiUrl = 'https://assignment-seventeen-backend.rockeybiswas.repl.co/api/exercises';

export const ACTIONS = {
    ADD_EXERCISE: 'ADD_EXERCISE',
    REMOVE_EXERCISE: 'REMOVE_EXERCISE',
    FETCH_EXERCISE_SUCCESS: 'FETCH_EXERCISE_SUCCESS',
    FETCH_EXERCISE_FAILURE: 'FETCH_EXERCISE_FAILURE',
    FETCH_EXERCISE_LOADING: 'FETCH_EXERCISE_LOADING'

};
export const fetchExercise = () => async (dispatch) => {
    try {
        dispatch({ type: ACTIONS.FETCH_EXERCISE_LOADING });
        const res = await axios.get(apiUrl);

        if (res.status === 200) {
            const data = res.data;
            if (data) {
                return dispatch({ type: ACTIONS.FETCH_EXERCISE_SUCCESS, payload: { exercises: data } });
            }
        }
    } catch (error) {
        console.error('Error fetching exercise data: ', error);
        dispatch({ type: ACTIONS.FETCH_EXERCISE_FAILURE })
    }
}


export const addExercise = (exerciseDetails) => async (dispatch) => {
    try {
        const res = await axios.post(apiUrl, exerciseDetails);
        if (res.status === 201) {
            const data = res.data;
            if (data) {
                return dispatch({ type: ACTIONS.ADD_EXERCISE, payload: { exercise: data } });
            }
        }
    } catch (error) {
        console.error(error);
    }
}

export const removeExercise = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${apiUrl}/${id}`);
        if (res.status === 204) {
            return dispatch({ type: ACTIONS.REMOVE_EXERCISE, payload: { id } })
        }
    } catch (error) {
        console.error('Error while removing exercise', error)
    }
}