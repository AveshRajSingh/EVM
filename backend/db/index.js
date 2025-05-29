import mongoose from "mongoose"


const connectDb = async () => {
    try {
         const connection =await  mongoose.connect(process.env.MONGODB_URI);
         console.log("DB connected successfully")
    } catch (error) {
        console.error("ERR while connecting db",error)
        throw error;
    }
}


export default connectDb;

