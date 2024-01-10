import { Payments } from "@/utils/PaymentsHistoryModel";

export async function GET() {
    try {
        // Retrieve payment history from the database
        const data = await Payments.find().select({ __v: 0, _id: 0 });

        // Check if there are no payments found
        if (!data)
            return Response.json({ message: "No payments found" }, { status: 400 });

        return Response.json(data);

    } catch (error) {
        // Respond with an error message if there's an issue
        return Response.json({ message: error.message }, { status: 500 });
    }
}