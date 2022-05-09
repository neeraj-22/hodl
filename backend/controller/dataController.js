//Importing Fetch module for node-js
const fetch = require("node-fetch");

//DB and Module imports
const CoinData = require("../model/dataModel.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");

//Fetches Coin from WazirX api and stores in DB
exports.fetchCoinDataFromAPIAndStoreInDB = catchAsyncErrors(async (req, res, next) => {
  
  const response = await fetch("https://api.wazirx.com/api/v2/tickers");
  const data = await response.json();

  //Converts fetched JSON object to Array -- So that slice and map function can be used
  var FetchedCoinDataObjectToArray = Object.values(data);

  //Gives out only first 10 coins out of all of the fetched object
  var FetchedCoinDataToStoreInDB = FetchedCoinDataObjectToArray.slice(0,10)

  //Mapping through Array to Store it in DB
  FetchedCoinDataToStoreInDB.map((i) => 
  {

    let name  = i.name
    let last  = i.last
    let buy  = i.buy
    let sell  = i.sell
    let volume  = i.volume
    let base_unit  = i.base_unit
       
    CoinData.create(
    {
        name,
        last,
        buy,
        sell,
        volume,
        base_unit
    });  

  })  

  res.status(200).json({
      success:true,
      message:"Coins Successfully Stored in DB",      
    })

});

//Fetches all the coins available in DB
exports.fetchCoinDataFromDB = catchAsyncErrors(async (req, res, next) => {

    const coinData = await CoinData.find();
    const coinDataCount = await CoinData.countDocuments();

    res.status(200).json({
        success:true,
        coinData,
        coinDataCount
    })
    
})
