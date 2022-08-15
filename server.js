require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json());
const baseURL = "https://draft.premierleague.com/api/league/99028/details";
const jobURL = baseURL + "/job";
app.get("/", async (req, res) => {
  const response = await axios.get(baseURL);
  console.log("test");
  res.status(200).json(response.data);
});

app.get("/job", async (req, res) => {
  await getData();
  res.status(200).json("all good");
});

const getData = async () => {
  console.log("test");
};

app.listen("5000", (req, res) => {
  console.log("listening");
});

module.exports = app;
