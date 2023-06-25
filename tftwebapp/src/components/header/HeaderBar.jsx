import React, {useState} from 'react';
import '../../styles/header/HeaderBar.css';
import tftLogo from '../../assets/images/icons/tftlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function HeaderBar() {
    const[summonerName, setSummonerName] = useState('');
    const[region, setRegion] = useState('');

    //Edit this to call the flask backend to call Riot API to search for Summoner Profile
    function handleSearchClick() {
        //Access the input and select values from the state variables
        console.log('Summoner Name:', summonerName);
        console.log('Region', region);
    }

    return (
        <header className="header">
            <div className='logo-and-name'>
                <img className='tftApplogo' src={tftLogo} alt='Logo of Tft App' />
                <span className='appName inter-bold-h2-white'> TFTracker </span> 
            </div>
            <div className='searchbar'>
                <div className='searchbar-form'>
                    {/* Hardcoded Options, to change later for region options */}
                    <select className='region-select-dropdown inter-bold-h3-white' 
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}>
                        <option value='NA'>NA</option>
                        <option value='EUW'>EUW</option>
                        <option value='EUNE'>EUNE</option>
                        {/* Add more options as needed */}
                    </select>
                    <div className='summoner-search-form'>
                        <input
                            type="text"
                            value={summonerName}
                            onChange={(e) => setSummonerName(e.target.value)}
                            className='summoner-search-input inter-bold-h3-white'
                            placeholder='Search Summoner Name...'
                        />
                        <button onClick={handleSearchClick} className='search-icon'>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
            <a className='contactUs inter-bold-h2-white' href='https://www.linkedin.com/in/loh-yang-xian-b173481b3/' target='blank'>Contact Us</a>
        </header>
    )
}

export default HeaderBar;