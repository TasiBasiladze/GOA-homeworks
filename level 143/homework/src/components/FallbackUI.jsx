const FallbackUI = ({ error, resetErrorBoundary }) => {
    console.log(error)
    return(
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={resetErrorBoundary}>reset</button>
        </div>
    )
}

export default FallbackUI;