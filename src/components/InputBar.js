import React from 'react'

const InputBar = ( {changeHandler} ) => {

    return (
        <form>
            <input type="text" onChange={changeHandler}/>
        </form>
    )
}

export default InputBar