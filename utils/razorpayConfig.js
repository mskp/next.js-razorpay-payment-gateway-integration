import Razorpay from "razorpay";

export const option = {
    key_id: "rzp_test_MNfxDdRMxTs9JR",
    key_secret: "r5EPY0HRHK575xygdB5OIjEJ"
}
const razorpayInstance = new Razorpay(option)

export default razorpayInstance;