const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
import taskRoutes from './routes/task.routes';
app.use(express.json());
app.use(cors());
app.use("/api/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err:string) => {
    console.error('MongoDB connection error:', err);
});
 var server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`); 
});

