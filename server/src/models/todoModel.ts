import Mongoose from 'mongoose';

const TodoSchema = new Mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 128
  },
  completed: {
    type: Boolean,
    default: false
  }
});

export default Mongoose.model('Todo', TodoSchema);
