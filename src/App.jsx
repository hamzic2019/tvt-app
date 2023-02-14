import React, { memo, useState } from 'react'
import OriginalText from './components/OriginalText/OriginalText';
import OtherText from './components/OtherText/OtherText';
import useCompare from './hooks/useCompare';

// importing styles
import './App.css'

function App() {

  const [{data, error, isFetching}, runCompare] = useCompare()

  // I am going to pass state trough props but normally I would use createContext
  const [originalInput, setOriginalInput] = useState('');
  const [otherInput, setOtherInput] = useState('');
  
  if(data != null) {
    console.log('Data: ', data);
  }


  return (
    <div className='appWrapper'>
      <div className='appWrapper4Areas'>
        <OriginalText originalInput={originalInput} setOriginalInput={setOriginalInput} />
        <OtherText otherInput={otherInput} setOtherInput={setOtherInput}  />
      </div>
      <button onClick={() => runCompare(originalInput, otherInput)}>
        {isFetching === false ? 'COMPARE TEXT': 'analyzing...'}
      
      </button>
    </div>
  )
}

export default memo(App)

