import React, { useEffect } from 'react';

const ColorAuthor = (props) => {

    useEffect(() => {
        console.log(props.message);

    }, []);


    return(
        <div>
            {/* <p style={{"color:blue"}} style={{"background-color:red"}}>The word is {props.message} </p> */}
            <p class="Color-Change"> The word is {props.message} </p>
        </div>
    )
}

export default ColorAuthor;