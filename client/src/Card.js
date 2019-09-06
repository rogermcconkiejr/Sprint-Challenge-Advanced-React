import React from 'react';

const Card = (props) => {
return (
    <div>
        <h1>Player Name: {props.playerName}</h1>
        <h3>Country: {props.playerCountry}</h3>
    </div>
)
}

export default Card