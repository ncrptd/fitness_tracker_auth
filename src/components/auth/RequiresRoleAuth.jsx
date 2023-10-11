
function RequiresRoleAuth({ children }) {
    const user = localStorage.getItem('profile');
    let role;
    if (user) {
        role = JSON.parse(user).result.role;
    }

    return (
        role === 'admin' ? (children) : <h2 className="mt-6 text-center text-red-500 font-bold text-4xl">Unauthorized</h2>

    )
}

export default RequiresRoleAuth