function Parent({ onHover, children }){
    return (
        <>
            <button onMouseEnter={onHover}>touch me</button>
            {children}
        </>
    )
}

export default Parent