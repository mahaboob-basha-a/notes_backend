const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://telugutech62:Basha9515@practiceone.xetfdo7.mongodb.net/?retryWrites=true&w=majority&appName=PracticeOne');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
