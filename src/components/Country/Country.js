import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, region, population, flag } = props.country
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h1>Name: {name}</h1>
            <h4>Capital: {capital}</h4>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;