import { useState } from "react";

function useInput(initValue = "") {
    const [input, setInput] = useState(initValue);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return [input, handleChange];
}

export default useInput;