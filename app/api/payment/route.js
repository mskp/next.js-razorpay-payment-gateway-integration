import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { Payments } from "@/utils/PaymentsHistoryModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.formData();
        // Extract necessary information from the request body

        const razorpay_order_id = data.get("razorpay_order_id");
        const razorpay_payment_id = data.get("razorpay_payment_id");
        const razorpay_signature = data.get("razorpay_signature");

        // Create options object for payment verification
        const options = { "order_id": razorpay_order_id, "payment_id": razorpay_payment_id };

        // Validate the payment using Razorpay utility function
        const isValidPayment = validatePaymentVerification(
            options, razorpay_signature, process.env.RAZORPAY_KEY_SECRET
        );

        // If the payment is valid, save it to the database and redirect to success page
        if (isValidPayment) {
            const newPayment = new Payments({
                orderID: razorpay_order_id,
                paymentID: razorpay_payment_id,
                signature: razorpay_signature
            });
            await newPayment.save();
            return NextResponse.redirect(new URL(`/success?payment_id=${newPayment.paymentID}`, req.nextUrl));
        }

        // If the payment is not valid, respond with a failure message
        return Response.json({ message: "Failed" }, { status: 400 })
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}