import Mongoose from 'mongoose';

const todoSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please add a name field']
    }
  },
  { timestamps: true }
);

export default Mongoose.model('Todo', todoSchema);
