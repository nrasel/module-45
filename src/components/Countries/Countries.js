import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(countries => setCountries(countries))
    }, [])
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <div className="country-column">
                {
                    countries.map(country => <Country
                        key={country.capital}
                        country={country}
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;