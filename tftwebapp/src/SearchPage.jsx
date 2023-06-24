import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
    const [summonerName, setSummonerName] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //eslint-disable-next-line
        history.push('/profile/${summonerName}');
    };

    return (
        <div> 
            <h1>Search Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={summonerName}
                    onChange={(e) => setSummonerName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form> 
        </div>
    );
}


export default SearchPage;