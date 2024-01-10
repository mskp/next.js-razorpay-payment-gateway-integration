const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    currency: "INR",
    name: "Sushant Pandey",
    description: "Test Transaction",
    callback_url: `api/payment`,
    prefill: {
        name: "Robert Will",
        email: "robertwill@gmail.com",
        contact: "8766576999",
    },
    notes: {
        address: "Razorpay Corporate Office",
    },
    theme: {
        color: "#3399cc",
    },
};

export default options;