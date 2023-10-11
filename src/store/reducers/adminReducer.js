import { ACTIONS } from '../actions/adminActions';

const initialState = {
    users: []
};


export default function adminReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.GET_USERS:
            return { ...state, users: payload.data }

        default:
            return state;
    }
}