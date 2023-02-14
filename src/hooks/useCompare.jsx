import { useState, useEffect} from "react";

export default function useCompare(){

    const [status, setStatus] = useState({
        isFetching: false,
        data: null,
        error: null
    })

    function runCompare(value1, value2) {
        
        setStatus(prev => {
            return {
                data: null,
                isFetching: true,
                error: null
            }
        })


            if(value1 === undefined || value2 === undefined){
                setStatus(prev => {
                    return {
                        data: null,
                        isFetching: false,
                        error: 'You have to enter text in order to start the process'
                    }
                })
                return () => {}
            }
            
            function compareText(text1, text2) {
               
        
                const text1Array = text1.split(' ');
                const text2Array = text2.split(' ');
              
                // Initialize an array to store the differences
                const differences = [];
              
                // Check if the first text is shorter than the second text
                if (text1Array.length < text2Array.length) {
                  // Compare each word in the arrays
                  for (let i = 0; i < text2Array.length; i++) {
                    if (text1Array[i] !== text2Array[i]) {
                      differences.push({
                        index: i,
                        original: text1Array[i] || 'none',
                        other: text2Array[i]
                      });
                    }
                  }
                } else {
                  // Compare each word in the arrays
                  for (let i = 0; i < text1Array.length; i++) {
                    if (text1Array[i] !== text2Array[i]) {
                      differences.push({
                        index: i,
                        original: text1Array[i],
                        other: text2Array[i] || 'none'
                      });
                    }
                  }
                }
              
                // Return the differences array
                
                //return differences;
                
                setTimeout(() => {
                    setStatus(prev => {
                        return {
                            isFetching: false,
                            data: differences,
                            error: null
                        }
                    })
                }, 1000)
        
               
              }
        
              compareText(value1, value2)
    }

    

    return [{...status}, runCompare]
}