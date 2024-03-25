const express = require("express")
const app = express();
const cors = require("cors")
require("dotenv").config();
require("./db/connection");

app.use(cors());
app.use(express.json());

const userRouter = require("./router/userRouter");
app.use(userRouter);

app.get("/getkey",(req,res)=>{
    res.status(200).json({key:process.env.key_id})
});

app.listen(process.env.PORT,() =>{
    console.log(`server is running port ${process.env.PORT}`);
}) 