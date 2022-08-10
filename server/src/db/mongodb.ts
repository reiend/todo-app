import mongoose from 'mongoose';

const mongodb = (url: string) => mongoose.connect(url);

export default mongodb;
