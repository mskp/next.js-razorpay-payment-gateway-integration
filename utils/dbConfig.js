import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message)
    }
})();