import razorpayInstance from "@/utils/razorpayConfig"

export async function POST(req) {
    try {
        const jsonBody = await req.json();
        const amount = Number(jsonBody?.amount);
        const order = await razorpayInstance.orders.create({ amount: amount * 100, currency: "INR" });
        return Response.json({ message: "Success", order }, { status: 200 })
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 })
    }
}