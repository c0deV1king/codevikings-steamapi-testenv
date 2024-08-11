import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const API_KEY = import.meta.env.VITE_STEAM_API_KEY;
const gameImagesURL = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${API_KEY}&appid=76561198119786249`

function GameImagesGrab (){
 //   const [achievementImg, setAchievementImg] = useState([]);
   // useEffect(() => {
    //    const fetchAchImg = async () => {
     //       try {
     //           const res = await fetch(gameImagesURL);
      //          const data = await res.json();
      //          console.log(data)
                
      //          const achImg = data.achimg;
                
                
      //      } catch (error) {
      //          console.error('Error finding images')
       //     }
      //  }
      //  fetchAchImg();
      //  console.log(data)
//    })
fetch(gameImagesURL).then(res => res.json()).then(data => console.log(data))
}

export default GameImagesGrab();