import React from "react";

function Buttons({ inputValue }) {

    const handleKey = e => {
        inputValue(e.target.value)
    }
    return (
        <div className='buttons'>
            <button className='button' value={'Mountain'} onClick={handleKey}>Mountain</button>
            <button className='button' value={'Beaches'} onClick={handleKey}>Beaches</button>
            <button className='button' value={'Bird'} onClick={handleKey}>Bird</button>
            <button className='button' value={'Food'} onClick={handleKey}>Food</button>
        </div>
    )
}

export default Buttons;