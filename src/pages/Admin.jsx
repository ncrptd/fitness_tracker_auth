import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../store/actions/adminActions";

function Admin() {
    const users = useSelector((state) => state.adminReducer.users);
    const dispatch = useDispatch();
    console.log(users)
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <div>
            <h2 className="mt-6 text-center text-green-500 font-bold text-4xl">Admin Page</h2>


            <ul className="text-2xl font-bold pl-4 text-center mt-6 capitalize">
                <h3 className="text-red-500 mb-4">Users</h3>
                {users?.map((user) => <li key={user?._id}>{user?.name}</li>)}

            </ul>
        </div>

    )
}

export default Admin