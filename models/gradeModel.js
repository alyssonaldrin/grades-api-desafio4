import mongoose from 'mongoose';

const gradeSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  }
});

const Grade = mongoose.model('grade', gradeSchema);

export default Grade;