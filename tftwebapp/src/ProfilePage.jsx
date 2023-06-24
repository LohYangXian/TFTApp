import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const { summonerName } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch the player profile data based on the summoner name
    // You can make an API request to your backend server here

    // Example fetch request:
    fetch(`/api/player-profile/${summonerName}`)
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((error) => console.error(error));
  }, [summonerName]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Summoner Name: {summonerName}</h2>
      <p>Profile Data: {JSON.stringify(profileData)}</p>
    </div>
  );
}

export default ProfilePage;