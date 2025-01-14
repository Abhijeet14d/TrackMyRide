const express = require('express');
const app = express();
const dotenv = require('dotenv');  
dotenv.config(); // Load the .env file
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to the database
const connectDB = require('./db/db');
connectDB();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
