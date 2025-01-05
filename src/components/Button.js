import React from 'react'
function Button({handleclick,text}){
    console.log(text)
    return (
        <div>
            <button onClick={handleclick}>clickme</button>
        </div>
    )
}
export default React.memo(Button)