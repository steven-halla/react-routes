import React, { useEffect } from 'react';

const CreateAuthor = (props) => {

    useEffect(() => {
        console.log(props.message);

    }, []);

    return(
        <div>
            <p> THe word is {props.message} </p>
        </div>
    )
}

export default CreateAuthor;