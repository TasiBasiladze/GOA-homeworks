import { useState } from "react";

const Child = ({ num }) => {
    const [isError, setIsError] = useState(false);

    if(isError) {
        throw new Error();
    }
    
    return (
        <div style={{width: 150, backgroundColor: "green"}}>
            <p>Child {num}</p>
            <button onClick={() => console.log("Button is clicked")}>Normal Button</button>
            <button onClick={() => setIsError(true)}>Error Button</button>
        </div>
    );
}

export default Child;