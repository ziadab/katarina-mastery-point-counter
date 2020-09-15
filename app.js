const express = require("express");
const CORS = require("cors");
const app = express();

//utils
const getUserId = require("./utils/getUserId");
const getChampionMastery = require("./utils/getChampionMastery");

// my accounts
const accounts = [
  {
    region: "euw1",
    name: "zaino02",
  },
  {
    region: "euw1",
    name: "pizzamamamia",
  },
  {
    region: "euw1",
    name: "scruffpuppie",
  },
  {
    region: "eun1",
    name: "blackburger03",
  },
];

app.use(CORS());

app.get("/", async (req, res) => {
  const f = accounts.map(async (account) => {
    // get user id
    const id = await getUserId(account);

    //get account champion mastery
    const champions = await getChampionMastery(id, account.region);

    // filter the champion by they id
    // kata id: 55 base on the official riot champ ids
    // http://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/champion.json
    const kata = champions.filter((champ) => champ.championId === 55);

    // and we return the value mastery
    return kata[0].championPoints;
  });
  Promise.all(f)
    .catch((err) => console.log(err))
    .then((result) => {
      // after returning all the mastery poitn from each account
      // now we add them to each other
      const mastery = result.reduce((a, b) => {
        return a + b;
      }, 0);

      // bingo the total katarina point xD
      res.status(200).json({ mastery });
    });
});

// everkers accounts
const everkers_account = [
  {
    region: "euw1",
    name: "salikhwladlqhab",
  },
  {
    region: "euw1",
    name: "renekmoon",
  },
];

app.get("/everkers", async (req, res) => {
  const f = everkers_account.map(async (account) => {
    // get user id
    const id = await getUserId(account);

    //get account champion mastery
    const champions = await getChampionMastery(id, account.region);

    // filter the champion by they id
    // kata id: 55 base on the official riot champ ids
    // http://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/champion.json
    const kata = champions.filter((champ) => champ.championId === 58);

    // and we return the value mastery
    return kata[0].championPoints;
  });
  Promise.all(f)
    .catch((err) => console.log(err))
    .then((result) => {
      // after returning all the mastery poitn from each account
      // now we add them to each other
      const mastery = result.reduce((a, b) => {
        return a + b;
      }, 0);

      // bingo the total katarina point xD
      res.status(200).json({ mastery });
    });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("omg we are in 5000");
});
