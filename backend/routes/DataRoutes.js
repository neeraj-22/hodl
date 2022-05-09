//User routes -- through which frontend will interact with backend
const express = require("express");
const router = express.Router();

const { fetchCoinDataFromAPIAndStoreInDB, fetchCoinDataFromDB} = require("../controller/dataController")

//Route to Fetch Data from WazirX api and save it to the DB
router.get('/fetch-coins-from-api', fetchCoinDataFromAPIAndStoreInDB)

//Route to access data from DB
router.get('/fetch-coins-from-db', fetchCoinDataFromDB)

module.exports = router