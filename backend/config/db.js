import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sujalaggar_wal:Rishitaindia1@cluster0.8wyprc1.mongodb.net/tomato-delivery').then(()=>console.log("DataBase Connected"));
}