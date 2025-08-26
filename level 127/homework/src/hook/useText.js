import { useState } from "react";

function useText(){
    const [text, setText] = useState("")

    function handleText(e){
        setText(e.target.value);
    }

    return [text, handleText]
}

export { useText }