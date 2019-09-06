import React from 'react';

const Card = (props) => {
    console.log(props);
return (
    <div>
        <h1>Player Name: {props.name}</h1>
        <h3>Country: {props.country}</h3>
    </div>
)
}

export default Card