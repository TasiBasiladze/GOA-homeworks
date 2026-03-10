import { useState, useEffect } from "react";

const Home = ({ curUser, handleLogOut }) => {
    const [allUsers, setAllUsers] = useState([]);

    const isAdmin = curUser.id === 0; 

    useEffect(() => {
        if (isAdmin) {
            fetch(`http://localhost:3000/admin?id=${curUser.id}`)
                .then(res => res.json())
                .then(data => setAllUsers(data))
                .catch(err => console.error(err));
        }
    }, [curUser]);

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/main/${id}?userId=${curUser.id}`, {
                method: "DELETE"
            });

            if (response.status === 204) {
                if (id === curUser.id) {
                    handleLogOut();
                } else {
                    setAllUsers(prev => prev.filter(user => user.id !== id)); 
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main>
            <h1>Home Page</h1>
            <button onClick={handleLogOut}>Log out</button>

            <h2>Current User Info</h2>
            <div style={{ width: 250, border: "1px solid black", borderRadius: 7, padding: 10, marginBottom: 20 }}>
                <p><b>Username:</b> {curUser.username}</p>
                <p><b>Email:</b> {curUser.email}</p>
                <p><b>Password:</b> {curUser.password}</p>
                {!isAdmin && <button onClick={() => deleteUser(curUser.id)}>Delete My Account</button>}
            </div>

            {isAdmin && (
                <>
                    <h2>All Users</h2>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {allUsers.map(user => (
                            <li key={user.id} style={{ border: "1px solid black", borderRadius: 7, padding: 10, marginBottom: 10, width: 250 }}>
                                <p><b>Username:</b> {user.username}</p>
                                <p><b>Email:</b> {user.email}</p>
                                <p><b>Password:</b> {user.password}</p>
                                {user.id !== 0 && (
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </main>
    );
};

export default Home;