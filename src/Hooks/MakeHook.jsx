import { useState } from "react";


const MakeHook = (defaultValue) => {
    const [fieldValue, setFiledValue] = useState(defaultValue)
    const handleFiledOnchange = (e) => {
        setFiledValue(e.target.value)
    }
    return [fieldValue, handleFiledOnchange]
};

export default MakeHook