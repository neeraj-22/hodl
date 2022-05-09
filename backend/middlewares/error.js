//Handling errors other than promises

const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Solving Wrong Mongodb ID error -- Also k/as Cast Error
  if(err.name === "CastError"){
    const message = `Resource not found. ${err.path}`;
    err = new ErrorHandler(message, 400)
  }

  //Mongoose duplicate key error
  if(err.code === 11000){
   
    const message = `${Object.keys(err.keyValue)} already exists.`
    err = new ErrorHandler(message, 400)

  }

};

