import * as api from '../../api/index'
export const ACTIONS = {
    GET_USERS: 'GET_USERS'
}
export const getUsers = () => async (dispatch) => {
    try {
        const res = await api.getUsers();
        if (res.status === 200) {
            console.log(res)
            const data = res.data;
            console.log(data)
            dispatch({ type: ACTIONS.GET_USERS, payload: { data } })
        }
    } catch (error) {
        console.error(error)
    }
}