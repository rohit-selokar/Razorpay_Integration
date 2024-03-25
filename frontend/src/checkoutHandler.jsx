import axios from "axios";

const checkoutHandler = async (amount) => {
  const {
    data: { key },
  } = await axios.get("http://localhost:4000/getkey");

  const {
    data: { data },
  } = await axios.post("http://localhost:4000/order", {
    amount,
  });

  const options = {
    key,
    amount: data.amount,
    currency: "INR",
    name: "Fit Meals",
    description: "Nutritious Culinary Delights",
    image:
      "https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png",
    order_id: data.id,
    callback_url: "http://localhost:4000/verify",
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9000090000",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#7ad03a",
    },
  };

  const razor = new window.Razorpay(options);
  razor.open();
};

export default checkoutHandler;
