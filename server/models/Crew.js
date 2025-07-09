const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['A', 'B', 'C', 'D'],  // Only these values allowed
    required: true,
    unique: true,
  },
  supervisor: {
    type: String,
    required: true,
  },
  totalEmployees: {
    type: Number,
    required: true,
    min: 0,  // No negative numbers
  },
}, { timestamps: true });

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;
