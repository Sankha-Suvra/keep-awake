import axios from 'axios';

// export default async function handler(req, res) {
//   const url = 'https://sociobot-o2kc.onrender.com/'; // Replace with your Render web service URL

//   try {
//     await axios.get(url);
//     res.status(200).send('Pinged successfully');
//   } catch (error) {
//     console.error(`Error pinging ${url}:`, error.message);
//     res.status(500).send('Ping failed');
//   }
// }

// const url = 'https://sociobot-o2kc.onrender.com/'

(async()=>{
  console.log("startong ping...");
  try {
    const response = await axios.get("https://sociobot-o2kc.onrender.com/")
    console.log("ping successful", response.statusText);
  } catch (error) {
    console.error("error pinging", error.message);
  }
})();