import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://uzmazafeer483_db_user:uzma1002@cluster0.smtm9hj.mongodb.net/uzmazafeer483_db?retryWrites=true&w=majority';
    await mongoose.connect(mongoURI, { dbName: 'uzmazafeer483_db' });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Do not exit in serverless environments; just log the error.
  }
};

export default connectDB;