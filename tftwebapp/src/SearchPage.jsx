import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBar from './components/header/HeaderBar';
import Navbar from './components/header/Navbar';
import './styles/SearchPage.css';

function SearchPage() {
    const [summonerName, setSummonerName] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //eslint-disable-next-line
        history.push('/profile/${summonerName}');
    };

    return (
        <div className='searchPage'>
            <HeaderBar></HeaderBar> 
            <Navbar></Navbar>
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