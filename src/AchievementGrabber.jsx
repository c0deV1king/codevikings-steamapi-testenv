import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const API_KEY = import.meta.env.VITE_STEAM_API_KEY;
// Template Literal, a nicer way to write strings and concatenation
const warframeAchURL = `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=230410&key=${API_KEY}&steamid=76561198119786249`

function AchievementsGrab (){


const [achievedAchievements, setAchievedAchievements] = useState([]);
  useEffect(() => {
    const fetchWarframe = async () => {
      try {

          // getting a response and data from the API && converting it into
          // a json
        const res = await fetch(warframeAchURL);
        const data = await res.json();

        // grabbing the playerstats object from the data and accessing
        // its array (which is the achievements)
        const playerStats = data.playerstats;
        const achievements = playerStats.achievements;

        // Using the "filter()" method to filter out a specific 
        // value from the array
        const achievedAchievements = achievements.filter(
          achievement => achievement.achieved === 1
        );
        setAchievedAchievements(achievedAchievements);
        } catch (error) {
          console.error('Error fetching achievements:', error);
        }
  };
  console.log(achievedAchievements)
  fetchWarframe();
}, []);

return (
    <>
      <p>Earned Achievements:</p>
      <ul className='achievementList'>
        {achievedAchievements.map((achievement, index) => (
          <li key={index}>{achievement.apiname}</li>
        ))}
      </ul>
    </>
  )
}

export default AchievementsGrab;