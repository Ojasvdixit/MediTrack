import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect("mongodb+srv://Ojasv123:Ojasv123321@cluster0.enjln.mongodb.net/prescripto")

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.
