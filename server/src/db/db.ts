import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const mongo = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected ${mongo.connection.host}`);
  } catch (error) {
    console.log(error);

    // halt the process
    process.exit(1);
  }
};

export default connectDb;
