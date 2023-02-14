import React, { memo } from 'react'
import './OriginalText.css'


function OriginalText({setOriginalInput, originalInput}) {
    return (
        <textarea value={originalInput}  onChange={(event) => setOriginalInput(event.target.value)} className='originalTextWrapper' placeholder='Write original text'>
         
        </textarea>
    )
}

export default memo(OriginalText)
