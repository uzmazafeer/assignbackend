import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://uzmazafeer483_db_user:uzma1002@cluster0.smtm9hj.mongodb.net');
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;