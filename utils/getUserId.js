require("dotenv").config();
const axios = require("axios");

module.exports = async (account) => {
  const { name, region } = account;
  const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.API_KEY}`;
  const data = await axios.get(url);
  return data.data.id;
};

// {
//     "id": "F8W2xvw812eUcL_Ri2J9lZMwcz9WIWtTnYJmIGuH8gEeOjvk",
//     "accountId": "Zgo6cW4iVbw4s7t1QgRaKZDntFmf1bWhe5aF2jwUGGlLPFkdD5EEfg78",
//     "puuid": "YebE61kOnFkqvKT0urW99ehG98MDRrJaMEvHT67y5WDuXsPQqwiEXbcF_rkmmhd_2sIwvxTd3Yw09Q",
//     "name": "zaino02",
//     "profileIconId": 4248,
//     "revisionDate": 1599858926000,
//     "summonerLevel": 202
// }
