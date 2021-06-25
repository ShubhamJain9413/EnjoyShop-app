import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner 
         animations="border"
          role = 'status'
           styles={{
                width:'100px',
                height:'100px',
                margin: 'auto' ,
                display: 'block'

        }}>
            <span className = 'sr-only'>Loding...</span>
        </Spinner>
    )
}

export default Loader
