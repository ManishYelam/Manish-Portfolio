const mongoose = require('mongoose');
const url = 'mongodb+srv://manish_2002:manish123@manish.l0wpfs1.mongodb.net/?retryWrites=true&w=majority&appName=Manish'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || url);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useCreateIndex: true,
// }