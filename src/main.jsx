import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const API_KEY = import.meta.env.VITE_STEAM_API_KEY;
// Template Literal, a nicer way to write strings and concatenation
const URL = `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=230410&key=${API_KEY}&steamid=76561198119786249`

console.log('testing')

  // getting a response and data from the API && converting it into
  // a json
  const fetchWarframe = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    console.log("await, async is working")

    // grabbing the playerstats object from the data and accessing
    // its array (which is the achievements)
    const playerStats = data.playerstats;
    const achievements = playerStats.achievements;
    console.log(achievements)

    // Using the "filter()"" method to filter out a specific 
    // value from the array and logging the objects that fit
    // that criteria
    const achievedAchievements = achievements.filter(
      achievement => achievement.achieved === 1
    );
    console.log('Earned Achievements: ', achievedAchievements);
  };
  fetchWarframe();

createRoot(document.getElementById('root')).render(
  <StrictMode>
return (
  <div className='test'></div>
)
  </StrictMode>,
)
