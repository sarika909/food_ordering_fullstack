import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://saru:saru@saru.4v6s9.mongodb.net/?retryWrites=true&w=majority&appName=saru');
        console.log("DB connected");     
            
    } catch (error) {
        console.error("DB connection failed", error.message);
    }
};
