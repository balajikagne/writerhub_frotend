import React from 'react'
function Count({text,value})
{
    console.log("this is count",text)
    return (
        <div>
            <h2>{text}:{value}</h2>
        </div>
    )
}
export default React.memo(Count);