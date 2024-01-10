"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Success() {
    const searchParams = useSearchParams();
    const payment_id = searchParams.get("payment_id");
    if (!payment_id)
        return <h1 style={{ color: "black" }}>Invalid payment id</h1>;

    return (
        <main style={{ color: "black" }}>
            <h1>Transaction successful, your payment id is: {payment_id}</h1>
            Wanna donate more?<Link href="/"> Go back to home</Link>
        </main>
    );
}

export default Success;
