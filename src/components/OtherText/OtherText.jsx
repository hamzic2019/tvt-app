import React, { memo } from 'react'
import './OtherText.css'

function OtherText({setOtherInput, otherInput}) {
    return (
        <textarea value={otherInput} onChange={(event) => setOtherInput(event.target.value)} className='otherTextWrapper' placeholder='Here is future text version'>
            
        </textarea>
    )
}

export default memo(OtherText)
