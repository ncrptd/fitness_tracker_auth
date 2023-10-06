import axios from "axios";

const apiUrl = 'https://assignment-seventeen-backend.rockeybiswas.repl.co/api/goals';

export const ACTIONS = {
    ADD_GOAL: 'ADD_GOAL',
    REMOVE_GOAL: 'REMOVE_GOAL',
    FETCH_GOAL_SUCCESS: 'FETCH_GOAL_SUCCESS',
    FETCH_GOAL_FAILURE: 'FETCH_GOAL_FAILURE',
    FETCH_GOAL_LOADING: 'FETCH_GOAL_LOADING'
};

export const fetchGoals = () => async (dispatch) => {
    try {
        dispatch({ type: ACTIONS.FETCH_GOAL_LOADING });
        const res = await axios.get(apiUrl);
        if (res.status === 200) {
            const data = res.data;
            if (data) {
                return dispatch({ type: ACTIONS.FETCH_GOAL_SUCCESS, payload: { goals: data } });
            }
        }
    } catch (error) {
        console.error('Error fetching goals data: ', error);
        return dispatch({ type: ACTIONS.FETCH_GOAL_FAILURE });
    }
}

export const addGoal = (goalDetails) => async (dispatch) => {
    try {
        const res = await axios.post(apiUrl, goalDetails);
        if (res.status === 201) {
            const data = res.data;
            return dispatch({ type: ACTIONS.ADD_GOAL, payload: { goal: data } });
        }
    } catch (error) {
        console.error(error);
        return dispatch({ type: ACTIONS.FETCH_GOAL_FAILURE });
    }
}

export const removeGoal = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${apiUrl}/${id}`);
        if (res.status === 204) {
            dispatch({ type: ACTIONS.REMOVE_GOAL, payload: { id } });
        }
    } catch (error) {
        console.error('Error while removing goal', error);
    }
}
