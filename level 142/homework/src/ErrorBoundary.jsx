import React from "react";

// ErrorBoundary is a special React component
// that is used to catch errors
// in one of its child components.
// That means if an error happens in a child component,
// ErrorBoundary will not crash the whole application,
// but instead it will "catch" the error
// and display a fallback UI.

class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error){
        return { error }
    }

    render(){
        if(this.state.error){
            return <h2>Something went wrong!</h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
