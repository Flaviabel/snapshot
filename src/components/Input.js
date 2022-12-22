import React from "react";

function Input({inputValue}) {
    const handleKeyDown = e => {
        if (e.key == 'Enter') {
            inputValue(e.target.value)
        }
    }
    return (
        <input className='input' placeholder='  Search...' onKeyDown={handleKeyDown}></input>
    )
}


export default Input;