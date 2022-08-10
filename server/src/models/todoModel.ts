import Mongoose from 'mongoose';

const TodoSchema = new Mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'name is required'],
    maxLength: [128, "name can't be more than 128 characters"]
  },
  completed: {
    type: Boolean,
    default: false
  }
});

export default Mongoose.model('Todo', TodoSchema);
