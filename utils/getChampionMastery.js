require("dotenv").config();
const axios = require("axios");

module.exports = async (id, region) => {
  const url = `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${process.env.API_KEY}`;
  const data = await axios.get(url);
  return data.data;
};
