const express = require('express');
const app = express();
const cors=require('cors')
require('dotenv').config();
const {connectDB} = require('./config/db');
const userRouter = require('./routes/userRoute');
const adminRouter=require('./routes/adminRoute')

connectDB();


const port = process.env.PORT

//middlewares
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000', // Your front-end URL
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions))


//route
app.use('/api/v1', userRouter);
app.use('/api/v1',adminRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});