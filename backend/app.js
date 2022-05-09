//Importing Server & DB Files
const express = require("express");
const app = express()
const connectDatabase = require("./config/dbConnect.js")

//Importing dotenv to read .env files
const dotenv = require("dotenv")

//Importing CORS
const cors = require("cors");

//Importing Error Handler - middleware
const errorMiddleware = require("./middlewares/error.js");

//Importing Routes
const DataRoutes = require("./routes/DataRoutes.js")

app.use(express.json());
app.use(cors());

//Function run to read .env properties
dotenv.config();

// Connecting to DB
connectDatabase();

//Accessing Routes
app.use('/api', DataRoutes);

//Using Error MiddleWare
app.use(errorMiddleware)

//Initialising Server
const initServer = app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})

// Shutting server when UnHandled Promise 
process.on("unhandledRejection", err => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting server bc of unhandled rejection`);

    initServer.close(() => {
        process.exit(1);
    })
})

process.on("uncaughtException", err => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting server bc of uncaught exception`);
        process.exit(1);
})