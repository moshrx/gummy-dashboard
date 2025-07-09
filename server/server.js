const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;
const crewRoute = require('./routes/crewRoute');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/hello', (req, res) => {
    res.json({ message: "HELLooo" });
});

// Crew routes
app.use('/api/crews', crewRoute);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
