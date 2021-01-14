import React, { useEffect } from 'react';

const ShowOneAuthor = (props) => {

    //runs when component is loaded 
    useEffect(() => {
        console.log(props.id);

    }, []);

    return(
        <div>
            <p>Hi my ID number is: {props.id} </p>
        </div>
    )
}

export default ShowOneAuthor;