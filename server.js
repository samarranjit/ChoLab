require("dotenv").config();
const express = require("express");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app =express();
const dbConfig= require("./config/dbConfig");
const cors = require("cors");
    
const Data=require("./routes/AllRoutes");
const cookieParser = require("cookie-parser");

app.use(
    cors({
        origin: process.env.REACT_APP_FRONTEND_URL,  // Specify your frontend URL
        credentials: true,                // Allow credentials
        methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow the HTTP methods you need
        allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    })
  );



app.use(express.json());
app.use(cookieParser());
app.use("/api", Data);
app.use("/api/user", require("./routes/user.routes"))


const port = process.env.PORT  || 8081;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})