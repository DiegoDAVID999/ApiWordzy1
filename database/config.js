import mongoose from "mongoose";

export default async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connect to database Wordzy')
    } catch (error) {
        console.log(error)        
    }
}