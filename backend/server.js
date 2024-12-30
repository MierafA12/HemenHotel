import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

dotenv.config();


// Middleware setup
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000; 
const MONGO_URL = process.env.MONGODB_URI;

if (!MONGO_URL) {
  console.error('Error: MONGODB_URI is not set in environment variables');
  process.exit(1); // Exit the application if no MongoDB URI is provided
}

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
    process.exit(1); // Exit the application if the database connection fails
  });

// Routes


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


