function Presentational({ name, password, handleNameChange, handlePasswordChange }){
    return (
        <>
            <form>
                <input type="text" value={name} onChange={handleNameChange} placeholder="enter name..."/>
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="enter password..."/>
            </form>
            <div>
                <p>name: {name}</p>
                <p>password: {password}</p>
            </div>
        </>
    )
}

export default Presentational;