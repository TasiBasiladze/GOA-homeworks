import { useState } from "react";

function useColor(){
    const [color, setColor] = useState("");
    function handleColorChange(clr){
        setColor(clr);
    }

    return [color, handleColorChange];
}

export { useColor }