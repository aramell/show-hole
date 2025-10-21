
const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
        return null;
    }
       

    return (
        <>
        <h1>dashboard</h1>


        <button onClick={handleLogout}>
        Logout
        </button>
        </>
    )
}

export default Dashboard;