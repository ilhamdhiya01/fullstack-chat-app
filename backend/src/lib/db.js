import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // const connect = await mongoose.connect(process.env.MONGODB_URI);
    const connect = await mongoose.connect('mongodb+srv://ulhaqilhamdhiya:jc9DK3D4IoetBjQY@cluster0.cu1ui.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
