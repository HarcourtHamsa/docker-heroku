import React from 'react'
import { BeatLoader } from 'react-spinners'

const CustomLoader = (props) => {
    return (
        <div>
            <div className="center">
               Fetching Data <BeatLoader loading={props.isLoading}/>
            </div>
        </div>
    )
}

export default CustomLoader
