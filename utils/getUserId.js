require("dotenv").config();
const axios = require("axios");

module.exports = async (account) => {
  const { name, region } = account;
  const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.API_KEY}`;
  const data = await axios.get(url);
  return data.data.id;
};
