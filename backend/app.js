const express = require("express")
const app = express();
require("dotenv").config();
require("./db/connection");

const userRouter = require("./router/userRouter");

const cors = require("cors")

app.use(cors());
app.use(express.json());

app.use(userRouter);

app.get("/getkey",(req,res)=>{
    res.status(200).json({key:process.env.key_id})
});

app.listen(process.env.PORT,() =>{
    console.log(`server is running port ${process.env.PORT}`);
}) 