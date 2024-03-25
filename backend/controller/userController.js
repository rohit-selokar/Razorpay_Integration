const Razorpay = require('razorpay');
const crypto = require('crypto');
const Payment = require('../models/paymentSchema');


const getAllElement = async (req, res) => {
  try {
    res.send("Get All Element");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const checkout = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.key_id,
      key_secret: process.env.key_secret,
    });

    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };

    instance.orders.create(options, (error, data) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Something went wrong while creating order" });
      }
      console.log(data);
      res.status(200).json({ data });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const verify = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto.createHmac('sha256', process.env.key_secret).update(body).digest('hex');
    const isAuth = expectedSignature === razorpay_signature;
    
    if (isAuth) {
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
      });
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllElement, checkout, verify };
