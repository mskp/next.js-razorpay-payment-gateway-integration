import mongoose from "mongoose";

// Database Connection
(async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message)
    }
})();

// Define the schema for payment history
const paymentsSchema = new mongoose.Schema({
    orderID: { type: String, required: true },
    paymentID: { type: String, required: true },
    signature: { type: String, required: true }
});

// Create a model based on the schema
export const Payments = mongoose.models.payment ?? mongoose.model("payment", paymentsSchema);