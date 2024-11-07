const express = require("express");

const app =express();
const dbConfig= require("./config/dbConfig");
const cors = require("cors");
    
const Data=require("./routes/AllRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", Data);

require("dotenv").config();

const port = process.env.PORT  || 8081;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})