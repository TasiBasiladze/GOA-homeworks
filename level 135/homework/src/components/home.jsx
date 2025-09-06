function Home({ curUser, users, handleLogOut }){

    return (
        <>
            <h1>user info:</h1>
            <div style={{height: 160, width: 260, border: "solid black 1px", borderRadius: 5, padding: 20}}>
                <p>name: {curUser.name}</p>
                <p>email: {curUser.email}</p>
                <p>password: {curUser.password}</p>
                <p>role: {curUser.checkbox}</p>
            </div>
            {curUser.checkbox === "admin" && (
                <div>
                    {Object.keys(users).length > 1 && <h1>other users' info:</h1>}
                    {users
                    .filter(user => user.email !== curUser.email)
                    .map(user => {
                        return (
                        <div key={user.email} style={{height: 160, width: 260, border: "solid black 1px", borderRadius: 5, padding: 20, marginBottom: 10}}>
                            <p>name: {user.name}</p>
                            <p>email: {user.email}</p>
                            <p>password: {user.password}</p>
                            <p>role: {user.checkbox}</p>
                        </div>
                        )
                    })}
                </div>
            )
            } <br />
            <button onClick={handleLogOut}>log out</button>
        </>
    )
}

export default Home