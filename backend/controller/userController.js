const Razorpay = require('razorpay');
require("../models/paymentSchema")
const getAllElement = async (req, res) => {
  try {
    res.send("Get All Element");
  } catch (err) {
    console.log("err");
  }
};

const checkout = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.key_id,
      key_secret: process.env.key_secret,
    });

    const options = {
      amount: Number(req.body.amount*100),
      currency: "INR",
    };
    instance.orders.create(options, (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      console.log(data);
      res.status(200).json({ data });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

const verify = async (req,res)=>{
  res.status(200).json({
    success: true,
  });
}
module.exports = { getAllElement, checkout,verify };
