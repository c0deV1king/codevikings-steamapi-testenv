import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_STEAM_API_KEY;
const URL = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=230410&key=' + API_KEY + '&steamid=76561198119786249'

console.log('testing')

fetch(URL).then((res) => res.json()).then((data) => {
  console.log(data)
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
return (
  <div className='test'></div>
)
  </StrictMode>,
)
